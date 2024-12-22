import React, { useState } from 'react';
import { Story } from '../types/story';
import { useSpeech } from '../hooks/useSpeech';
import { useLanguage } from '../contexts/LanguageContext';
import { FaPlay, FaPause, FaBookOpen, FaGamepad, FaStar } from 'react-icons/fa';

interface StoryCardProps {
  story: Story;
  onClick: () => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onClick }) => {
  const { currentLanguage } = useLanguage();
  const storyContent = story.translations[currentLanguage] || story.translations.en;
  const { isPlaying, toggleSpeech } = useSpeech(storyContent.content);
  const [isHovered, setIsHovered] = useState(false);

  const getGenreColor = (genre: Story['genre']) => {
    const colors = {
      fantasy: 'bg-purple-100 text-purple-800',
      adventure: 'bg-blue-100 text-blue-800',
      mystery: 'bg-yellow-100 text-yellow-800',
      fairytale: 'bg-pink-100 text-pink-800',
      educational: 'bg-green-100 text-green-800',
      mythology: 'bg-amber-100 text-amber-800',
      science: 'bg-cyan-100 text-cyan-800',
    };
    return colors[genre] || 'bg-gray-100 text-gray-800';
  };

  const getMoodIcon = (mood: Story['mood']) => {
    const icons = {
      happy: '😊',
      exciting: '⚡',
      calm: '🌟',
      mysterious: '🔮',
      funny: '😄',
      dramatic: '🎭',
    };
    return icons[mood] || '📖';
  };

  const getReadingLevelBadge = (level: Story['readingLevel']) => {
    const badges = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-yellow-100 text-yellow-800',
      advanced: 'bg-red-100 text-red-800',
    };
    return badges[level];
  };

  return (
    <div
      className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
      style={{ backgroundColor: story.backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={story.image}
          alt={storyContent.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
        
        {story.characters && story.characters.length > 0 && (
          <div className="absolute bottom-2 left-2 flex -space-x-2">
            {story.characters.map((character, index) => (
              <img
                key={character.name}
                src={character.avatar}
                alt={character.name}
                className="w-8 h-8 rounded-full border-2 border-white"
                title={character.name}
                style={{ zIndex: story.characters!.length - index }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGenreColor(story.genre)}`}>
            {story.genre}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-2xl" title={`Mood: ${story.mood}`}>
              {getMoodIcon(story.mood)}
            </span>
            {story.interactiveElements?.minigames && (
              <FaGamepad className="text-indigo-500" title="Contains mini-games!" />
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {storyContent.title}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleSpeech();
            }}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-colors duration-200"
          >
            {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause' : 'Listen'}</span>
          </button>

          <button
            onClick={onClick}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors duration-200"
          >
            <FaBookOpen className="w-4 h-4" />
            <span>Read</span>
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getReadingLevelBadge(story.readingLevel)}`}>
            {story.readingLevel}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
            <FaStar className="w-3 h-3 mr-1 text-yellow-400" />
            {story.estimatedReadingTime} min read
          </span>
        </div>

        {isHovered && story.keywords && (
          <div className="mt-3 flex flex-wrap gap-1">
            {story.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                #{keyword}
              </span>
            ))}
          </div>
        )}
      </div>

      {story.soundEffects?.background && (
        <audio
          src={story.soundEffects.background}
          loop
          preload="none"
          className="hidden"
        />
      )}
    </div>
  );
};
