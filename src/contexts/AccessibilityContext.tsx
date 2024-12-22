import React, { createContext, useContext, useState, useEffect } from 'react';

interface AccessibilitySettings {
  fontSize: number;
  fontFamily: 'default' | 'dyslexic' | 'sans-serif' | 'serif';
  contrast: 'default' | 'high' | 'dark' | 'light';
  readAloudSpeed: number;
  readAloudVoice: string;
  readAloudEnabled: boolean;
  keyboardNavigation: boolean;
  voiceNavigation: boolean;
  animations: 'all' | 'reduced' | 'none';
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
}

interface AccessibilityContextType {
  settings: AccessibilitySettings;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  isReading: boolean;
  startReading: (text: string) => void;
  stopReading: () => void;
  pauseReading: () => void;
  availableVoices: SpeechSynthesisVoice[];
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 16,
  fontFamily: 'default',
  contrast: 'default',
  readAloudSpeed: 1,
  readAloudVoice: '',
  readAloudEnabled: false,
  keyboardNavigation: true,
  voiceNavigation: false,
  animations: 'all',
  lineHeight: 1.5,
  letterSpacing: 0,
  wordSpacing: 0,
};

export const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [isReading, setIsReading] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      setAvailableVoices(voices);
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    // Save settings to localStorage whenever they change
    localStorage.setItem('accessibilitySettings', JSON.stringify(settings));

    // Apply global styles based on settings
    document.documentElement.style.setProperty('--font-size-base', `${settings.fontSize}px`);
    document.documentElement.style.setProperty('--line-height', `${settings.lineHeight}`);
    document.documentElement.style.setProperty('--letter-spacing', `${settings.letterSpacing}px`);
    document.documentElement.style.setProperty('--word-spacing', `${settings.wordSpacing}px`);

    // Apply font family
    const fontFamilyMap = {
      default: 'system-ui, -apple-system, sans-serif',
      dyslexic: 'OpenDyslexic, Comic Sans MS, cursive',
      'sans-serif': 'Arial, Helvetica, sans-serif',
      serif: 'Georgia, Times New Roman, serif',
    };
    document.documentElement.style.setProperty('--font-family', fontFamilyMap[settings.fontFamily]);

    // Apply contrast theme
    document.body.className = `theme-${settings.contrast}`;
  }, [settings]);

  const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const startReading = (text: string) => {
    if (!settings.readAloudEnabled) return;

    window.speechSynthesis.cancel();
    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.rate = settings.readAloudSpeed;
    
    if (settings.readAloudVoice) {
      const selectedVoice = availableVoices.find(voice => voice.name === settings.readAloudVoice);
      if (selectedVoice) {
        newUtterance.voice = selectedVoice;
      }
    }

    newUtterance.onend = () => setIsReading(false);
    newUtterance.onpause = () => setIsReading(false);
    newUtterance.onresume = () => setIsReading(true);

    setUtterance(newUtterance);
    setIsReading(true);
    window.speechSynthesis.speak(newUtterance);
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
  };

  const pauseReading = () => {
    if (isReading) {
      window.speechSynthesis.pause();
    } else {
      window.speechSynthesis.resume();
    }
    setIsReading(!isReading);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        updateSettings,
        isReading,
        startReading,
        stopReading,
        pauseReading,
        availableVoices,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
