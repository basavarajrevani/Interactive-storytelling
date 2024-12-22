import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAccessibility } from '../contexts/AccessibilityContext';
import {
  FaAccessibleIcon,
  FaFont,
  FaVolumeUp,
  FaKeyboard,
  FaMicrophone,
  FaAdjust,
  FaTimes,
  FaPlay,
  FaPause,
  FaStop,
} from 'react-icons/fa';

export const AccessibilityPanel: React.FC = () => {
  const {
    settings,
    updateSettings,
    isReading,
    startReading,
    stopReading,
    pauseReading,
    availableVoices,
  } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);

  const fontFamilyOptions = [
    { value: 'default', label: 'Default' },
    { value: 'dyslexic', label: 'OpenDyslexic' },
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'serif', label: 'Serif' },
  ];

  const contrastOptions = [
    { value: 'default', label: 'Default Theme' },
    { value: 'high-contrast', label: 'High Contrast' },
    { value: 'dark', label: 'Dark Mode' },
    { value: 'yellow-black', label: 'Yellow on Black' },
    { value: 'black-yellow', label: 'Black on Yellow' }
  ];

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <FaAccessibleIcon className="w-6 h-6" />
      </motion.button>

      {/* Panel Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Accessibility Settings
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>

                {/* Font Size */}
                <section className="mb-8">
                  <div className="flex items-center mb-4">
                    <FaFont className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="text-lg font-semibold">Text Size</h3>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="12"
                      max="24"
                      value={settings.fontSize}
                      onChange={(e) => updateSettings({ fontSize: Number(e.target.value) })}
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-sm font-medium w-12">{settings.fontSize}px</span>
                  </div>
                </section>

                {/* Font Family */}
                <section className="mb-8">
                  <div className="flex items-center mb-4">
                    <FaFont className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="text-lg font-semibold">Font Style</h3>
                  </div>
                  <select
                    value={settings.fontFamily}
                    onChange={(e) => updateSettings({ fontFamily: e.target.value as any })}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    {fontFamilyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </section>

                {/* Contrast */}
                <section className="mb-8">
                  <div className="flex items-center mb-4">
                    <FaAdjust className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="text-lg font-semibold">Color Contrast</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {contrastOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => updateSettings({ contrast: option.value as any })}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          settings.contrast === option.value
                            ? 'border-blue-600 bg-blue-50 dark:bg-blue-900'
                            : 'border-gray-200 hover:border-blue-400'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Read Aloud */}
                <section className="mb-8">
                  <div className="flex items-center mb-4">
                    <FaVolumeUp className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="text-lg font-semibold">Read Aloud</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Enable Read Aloud</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.readAloudEnabled}
                          onChange={(e) => updateSettings({ readAloudEnabled: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    {settings.readAloudEnabled && (
                      <>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Reading Speed</label>
                          <div className="flex items-center space-x-4">
                            <input
                              type="range"
                              min="0.5"
                              max="2"
                              step="0.1"
                              value={settings.readAloudSpeed}
                              onChange={(e) =>
                                updateSettings({ readAloudSpeed: Number(e.target.value) })
                              }
                              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-sm font-medium w-12">
                              {settings.readAloudSpeed}x
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Voice</label>
                          <select
                            value={settings.readAloudVoice}
                            onChange={(e) => updateSettings({ readAloudVoice: e.target.value })}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Default Voice</option>
                            {availableVoices.map((voice) => (
                              <option key={voice.name} value={voice.name}>
                                {voice.name} ({voice.lang})
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex space-x-2">
                          <button
                            onClick={() => (isReading ? pauseReading() : startReading('Sample text'))}
                            className="flex-1 flex items-center justify-center space-x-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          >
                            {isReading ? (
                              <>
                                <FaPause className="w-4 h-4" />
                                <span>Pause</span>
                              </>
                            ) : (
                              <>
                                <FaPlay className="w-4 h-4" />
                                <span>Play</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={stopReading}
                            className="flex-1 flex items-center justify-center space-x-2 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            <FaStop className="w-4 h-4" />
                            <span>Stop</span>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </section>

                {/* Navigation */}
                <section className="mb-8">
                  <div className="flex items-center mb-4">
                    <FaKeyboard className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="text-lg font-semibold">Navigation</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Keyboard Navigation</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.keyboardNavigation}
                          onChange={(e) => updateSettings({ keyboardNavigation: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Voice Navigation</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={settings.voiceNavigation}
                          onChange={(e) => updateSettings({ voiceNavigation: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </section>

                {/* Animation Control */}
                <section className="mb-8">
                  <div className="flex items-center mb-4">
                    <FaMicrophone className="w-5 h-5 mr-2 text-blue-600" />
                    <h3 className="text-lg font-semibold">Animations</h3>
                  </div>
                  <select
                    value={settings.animations}
                    onChange={(e) => updateSettings({ animations: e.target.value as any })}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Animations</option>
                    <option value="reduced">Reduced Animations</option>
                    <option value="none">No Animations</option>
                  </select>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
