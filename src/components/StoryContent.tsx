import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiBookmark, FiShare2, FiThumbsUp, FiMessageCircle, 
  FiStar, FiSmile, FiVolume2, FiChevronRight, FiChevronLeft,
  FiMap, FiCube, FiGamepad
} from 'react-icons/fi';
import ARViewer from './immersive/ARViewer';
import InteractiveMap from './immersive/InteractiveMap';
import MiniGame from './immersive/MiniGame';

interface StoryContentProps {
  title: string;
  content: string;
  author: string;
  readTime: number;
  locations?: Array<{
    id: string;
    name: string;
    coordinates: [number, number];
    description: string;
    isUnlocked: boolean;
  }>;
  arModels?: Array<{
    id: string;
    url: string;
    position: { x: number; y: number; z: number };
  }>;
  onBookmark?: () => void;
  onShare?: () => void;
  onLike?: () => void;
  onComment?: () => void;
}

const StoryContent: React.FC<StoryContentProps> = ({
  title,
  content,
  author,
  readTime,
  locations,
  arModels,
  onBookmark,
  onShare,
  onLike,
  onComment,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [showMap, setShowMap] = useState(false);
  const [showAR, setShowAR] = useState(false);
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [currentARModel, setCurrentARModel] = useState<typeof arModels[0]>();
  const [timeOfDay, setTimeOfDay] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('morning');

  const words = content.split(' ');
  const emojis = ['😊', '😍', '🤔', '😮', '😢', '😡'];

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(timer);
  }, [content]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 50;
      const y = (clientY - innerHeight / 2) / 50;
      setParallaxOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Set time of day based on user's local time
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setTimeOfDay('morning');
    else if (hour >= 12 && hour < 17) setTimeOfDay('afternoon');
    else if (hour >= 17 && hour < 20) setTimeOfDay('evening');
    else setTimeOfDay('night');
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.();
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    onLike?.();
  };

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
    setShowEmojiPicker(false);
  };

  const shareOptions = [
    { label: 'Twitter', action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`) },
    { label: 'Facebook', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`) },
    { label: 'Copy Link', action: () => navigator.clipboard.writeText(window.location.href) },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      <motion.div 
        className={`story-card overflow-hidden ${timeOfDay}`}
        style={{
          transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
        }}
      >
        <header className="mb-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            {title}
          </motion.h1>
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <motion.span 
                className="floating-avatar"
                whileHover={{ scale: 1.1 }}
              >
                {author}
              </motion.span>
              <span>·</span>
              <span>{readTime} min read</span>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="p-2 rounded-full hover:bg-primary/10"
                aria-label="React with emoji"
              >
                <FiSmile />
              </motion.button>

              <AnimatePresence>
                {showEmojiPicker && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute mt-2 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex gap-2"
                  >
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleEmojiSelect(emoji)}
                        className="text-xl hover:scale-125 transition-transform"
                      >
                        {emoji}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBookmark}
                className={`p-2 rounded-full hover:bg-primary/10 ${isBookmarked ? 'text-primary' : ''}`}
                aria-label="Bookmark story"
              >
                <FiBookmark />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="p-2 rounded-full hover:bg-primary/10 relative"
                aria-label="Share story"
              >
                <FiShare2 />
                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2"
                    >
                      {shareOptions.map((option) => (
                        <button
                          key={option.label}
                          onClick={option.action}
                          className="w-full text-left px-4 py-2 hover:bg-primary/10"
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMap(true)}
                className="p-2 rounded-full hover:bg-primary/10"
                aria-label="Show story map"
              >
                <FiMap />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowAR(true)}
                className="p-2 rounded-full hover:bg-primary/10"
                aria-label="View in AR"
              >
                <FiCube />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMiniGame(true)}
                className="p-2 rounded-full hover:bg-primary/10"
                aria-label="Play mini-game"
              >
                <FiGamepad />
              </motion.button>
            </div>
          </div>
        </header>

        <motion.div
          className="prose dark:prose-invert max-w-none mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative">
            {words.slice(0, wordIndex + 1).join(' ')}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: wordIndex / words.length }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>

        <footer className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLike}
                className="button-primary flex items-center gap-2"
                aria-label="Like story"
              >
                <FiThumbsUp />
                <span>{likes}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onComment}
                className="button-primary flex items-center gap-2"
                aria-label="Comment on story"
              >
                <FiMessageCircle />
                <span>Comment</span>
              </motion.button>
            </div>
            {selectedEmoji && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-2xl"
              >
                {selectedEmoji}
              </motion.div>
            )}
          </div>
        </footer>
      </motion.div>
      <AnimatePresence>
        {showMap && locations && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl">
              <div className="p-4">
                <InteractiveMap
                  locations={locations}
                  onLocationSelect={(locationId) => {
                    // Handle location selection
                    setShowMap(false);
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {showAR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <ARViewer
              modelUrl={currentARModel?.url}
              position={currentARModel?.position}
              onARStart={() => {
                // Handle AR session start
              }}
              onAREnd={() => {
                setShowAR(false);
              }}
            />
          </motion.div>
        )}

        {showMiniGame && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl">
              <div className="p-4">
                <MiniGame
                  type="puzzle"
                  difficulty="medium"
                  onComplete={(score) => {
                    // Handle game completion
                    setShowMiniGame(false);
                  }}
                  timeLimit={60}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default StoryContent;