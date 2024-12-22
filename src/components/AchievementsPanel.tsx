import React from 'react';
import { Achievement, Story } from '../types/story';
import { FaTrophy, FaStar, FaLock, FaCheck } from 'react-icons/fa';

interface AchievementsPanelProps {
  story: Story;
  userProgress?: {
    achievements: Achievement[];
    collectedItems: string[];
  };
}

export const AchievementsPanel: React.FC<AchievementsPanelProps> = ({ story, userProgress }) => {
  const achievements = story.rewards?.achievements || [];
  const unlockedAchievements = userProgress?.achievements || [];

  const calculateProgress = (achievement: Achievement) => {
    if (!achievement.maxProgress) return 100;
    return ((achievement.progress || 0) / achievement.maxProgress) * 100;
  };

  const renderAchievementIcon = (achievement: Achievement) => {
    const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
    return (
      <div
        className={`relative w-16 h-16 rounded-full flex items-center justify-center ${
          isUnlocked ? 'bg-yellow-100' : 'bg-gray-100'
        }`}
      >
        {isUnlocked ? (
          <>
            <img src={achievement.icon} alt="" className="w-10 h-10" />
            <FaCheck className="absolute -top-1 -right-1 text-green-500 bg-white rounded-full p-1 w-6 h-6" />
          </>
        ) : (
          <FaLock className="w-6 h-6 text-gray-400" />
        )}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <FaTrophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl font-bold">Achievements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
          >
            {renderAchievementIcon(achievement)}
            <div className="flex-1">
              <h3 className="font-semibold mb-1">{achievement.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {achievement.description}
              </p>
              {achievement.maxProgress && (
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 transition-all duration-300"
                    style={{ width: `${calculateProgress(achievement)}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {story.rewards?.unlockables && (
        <div className="mt-8">
          <div className="flex items-center space-x-3 mb-6">
            <FaStar className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-bold">Unlockables</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {story.rewards.unlockables.map((unlockable) => (
              <div
                key={unlockable.id}
                className="relative group cursor-pointer"
              >
                <div className="aspect-square rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <FaLock className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-gray-500 transition-colors duration-200" />
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {unlockable.type.charAt(0).toUpperCase() + unlockable.type.slice(1)}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center p-2">
                    <p className="text-sm font-medium">Complete {unlockable.condition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
