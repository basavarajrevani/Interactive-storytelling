import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FaBook, FaSun, FaMoon, FaCog, FaTimes, FaVolumeUp } from 'react-icons/fa';
import { Story } from './types/story';
import { stories } from './data/stories';
import { StoryGrid } from './components/StoryGrid';
import StoryInteractive from './components/StoryInteractive';
import { LanguageSelector } from './components/LanguageSelector';
import { AccessibilityPanel } from './components/AccessibilityPanel';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import './styles/accessibility.css';
import './styles/theme.css';

function App() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  const handleStorySelect = (story: Story) => {
    setSelectedStory(story);
  };

  const MainContent = () => (
    <AccessibilityProvider>
      <LanguageProvider>
        <div className={`min-h-screen transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900'
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}>
          {/* Header */}
          <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-gray-800/80 shadow-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    className="text-indigo-600 dark:text-indigo-400"
                  >
                    <FaBook className="text-2xl" />
                  </motion.div>
                  <div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                      Interactive Story Time
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Choose your adventure
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsAccessibilityOpen(true)}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <FaCog className="mr-2" />
                    Accessibility
                  </button>
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8">
            <StoryGrid stories={stories} onSelectStory={handleStorySelect} />
          </main>

          {/* Story Modal */}
          <AnimatePresence>
            {selectedStory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
                >
                  {/* Story Content */}
                  <div className="relative">
                    <img
                      src={selectedStory.image}
                      alt={selectedStory.translations.en.title}
                      className="w-full h-64 object-cover"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedStory(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    >
                      <FaTimes />
                    </motion.button>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedStory.translations.en.title}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                          {selectedStory.genre}
                        </span>
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                          {selectedStory.ageGroup}
                        </span>
                      </div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      {selectedStory.translations.en.content}
                    </div>

                    {selectedStory.translations.en.moralOfStory && (
                      <div className="p-4 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg border border-indigo-100 dark:border-indigo-800">
                        <p className="text-indigo-700 dark:text-indigo-200 font-medium">
                          Moral of the Story: {selectedStory.translations.en.moralOfStory}
                        </p>
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                      >
                        <FaVolumeUp className="mr-2" />
                        Read Aloud
                      </motion.button>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {selectedStory.estimatedReadingTime} min read
                      </span>
                    </div>

                    {/* Interactive Features */}
                    <StoryInteractive story={selectedStory} />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Accessibility Panel */}
          <AccessibilityPanel 
            isOpen={isAccessibilityOpen}
            onClose={() => setIsAccessibilityOpen(false)}
          />
        </div>
      </LanguageProvider>
    </AccessibilityProvider>
  );

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/stories" element={<MainContent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;