import React from 'react';
import StoryNavigation from './components/StoryNavigation';
import StoryContent from './components/StoryContent';

const App: React.FC = () => {
  // Sample story data
  const storyData = {
    title: "The Enchanted Forest",
    content: `Deep in the heart of the mystical woods, where ancient trees whispered secrets to the wind, 
    there lived a young explorer named Luna. She had always been drawn to the peculiar glow that emanated 
    from the forest's depths, especially during the twilight hours. One particularly misty evening, 
    Luna discovered a hidden pathway marked by luminescent mushrooms...`,
    author: "Alex Rivers",
    readTime: 5,
    locations: [
      {
        id: "forest-entrance",
        name: "Forest Entrance",
        coordinates: [51.505, -0.09] as [number, number],
        description: "The mystical entrance to the enchanted forest",
        isUnlocked: true
      },
      {
        id: "crystal-cave",
        name: "Crystal Cave",
        coordinates: [51.51, -0.1] as [number, number],
        description: "A cave filled with glowing crystals",
        isUnlocked: false
      }
    ],
    arModels: [
      {
        id: "glowing-mushroom",
        url: "/models/mushroom.glb", // This would be your 3D model path
        position: { x: 0, y: 0, z: -1 }
      }
    ]
  };

  const handleBookmark = () => {
    console.log("Story bookmarked!");
  };

  const handleShare = () => {
    console.log("Story shared!");
  };

  const handleLike = () => {
    console.log("Story liked!");
  };

  const handleComment = () => {
    console.log("Comment added!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <StoryNavigation />
      <main className="container mx-auto py-8">
        <StoryContent
          title={storyData.title}
          content={storyData.content}
          author={storyData.author}
          readTime={storyData.readTime}
          locations={storyData.locations}
          arModels={storyData.arModels}
          onBookmark={handleBookmark}
          onShare={handleShare}
          onLike={handleLike}
          onComment={handleComment}
        />
      </main>
    </div>
  );
};

export default App;