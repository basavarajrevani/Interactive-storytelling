import { useState, useCallback, useEffect } from 'react';

export const useSpeech = (text: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSpeechSynthesis(window.speechSynthesis);
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.rate = 0.9; // Slightly slower than default for better clarity
      newUtterance.pitch = 1.1; // Slightly higher pitch for more engaging tone
      setUtterance(newUtterance);

      return () => {
        if (speechSynthesis) {
          speechSynthesis.cancel();
        }
      };
    }
  }, [text]);

  const toggleSpeech = useCallback(() => {
    if (!speechSynthesis || !utterance) return;

    if (isPlaying) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      speechSynthesis.speak(utterance);
      setIsPlaying(true);

      utterance.onend = () => {
        setIsPlaying(false);
      };
    }
  }, [isPlaying, speechSynthesis, utterance]);

  return {
    isPlaying,
    toggleSpeech,
  };
};
