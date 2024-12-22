import React, { useState } from 'react';
import { Story } from '../types/story';
import { StoryCard } from './StoryCard';

interface StoryGridProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const StoryGrid: React.FC<StoryGridProps> = ({ stories, onSelectStory }) => {
  const [selectedGenre, setSelectedGenre] = useState<Story['genre'] | 'all'>('all');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<Story['ageGroup'] | 'all'>('all');

  const genres: (Story['genre'] | 'all')[] = ['all', 'fantasy', 'adventure', 'mystery', 'fairytale', 'educational'];
  const ageGroups: (Story['ageGroup'] | 'all')[] = ['all', 'children', 'young', 'all'];

  const filteredStories = stories.filter((story) => {
    const genreMatch = selectedGenre === 'all' || story.genre === selectedGenre;
    const ageMatch = selectedAgeGroup === 'all' || story.ageGroup === selectedAgeGroup;
    return genreMatch && ageMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Genre</label>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                    ${selectedGenre === genre
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                >
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Age Group</label>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAgeGroup(age)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
                    ${selectedAgeGroup === age
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                >
                  {age === 'all' ? 'All Ages' : age.charAt(0).toUpperCase() + age.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStories.map((story) => (
          <StoryCard
            key={story.title}
            story={story}
            onClick={() => onSelectStory(story)}
          />
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No stories found for the selected filters. Try changing your selection.
          </p>
        </div>
      )}
    </div>
  );
};

export { StoryGrid };
