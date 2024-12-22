import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBook, FiHome, FiBookmark, FiSettings, FiMenu, FiX, 
  FiCompass, FiGrid, FiInfo, FiVolume2, FiVolumeX 
} from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

interface StoryNavigationProps {
  currentProgress: number;
  onThemeToggle: () => void;
  isDarkMode: boolean;
}

const StoryNavigation: React.FC<StoryNavigationProps> = ({
  currentProgress,
  onThemeToggle,
  isDarkMode,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems = [
    { icon: <FiHome />, label: 'Home', href: '/' },
    { icon: <FiCompass />, label: 'Explore', href: '/explore' },
    { icon: <FiGrid />, label: 'Categories', href: '/categories' },
    { icon: <FiInfo />, label: 'About Us', href: '/about' },
  ];

  const categories = [
    'All', 'Adventure', 'Mystery', 'Fantasy', 'Sci-Fi'
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSound = () => setIsSoundEnabled(!isSoundEnabled);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <motion.a
          href="/"
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiBook className="text-2xl" />
          <span className="font-serif">StoryVerse</span>
        </motion.a>

        <div className="hidden md:flex nav-links">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="nav-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            className="nav-link"
            onClick={toggleSound}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isSoundEnabled ? 'Disable sound' : 'Enable sound'}
          >
            {isSoundEnabled ? <FiVolume2 /> : <FiVolumeX />}
          </motion.button>

          <ThemeToggle onToggle={onThemeToggle} isDark={isDarkMode} />

          <motion.button
            className="md:hidden nav-link"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Categories bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden md:flex justify-center gap-4 py-2 glassmorphism"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-4 py-1 rounded-full transition-all ${
              activeCategory === category.toLowerCase() 
                ? 'bg-primary text-white' 
                : 'hover:bg-primary/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.toLowerCase())}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu} />
            <motion.div className="absolute inset-y-0 left-0 w-64 bg-background shadow-lg">
              <div className="p-4">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold">Menu</span>
                  <button onClick={toggleMenu}>
                    <FiX className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/10"
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-8">
                  <span className="text-sm font-semibold mb-2 block">Categories</span>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`block w-full text-left p-2 rounded-lg ${
                          activeCategory === category.toLowerCase()
                            ? 'bg-primary text-white'
                            : 'hover:bg-primary/10'
                        }`}
                        onClick={() => {
                          setActiveCategory(category.toLowerCase());
                          toggleMenu();
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default StoryNavigation;