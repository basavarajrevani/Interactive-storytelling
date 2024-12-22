import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMap, FaQuestionCircle, FaLightbulb, FaStar, FaMedal, FaMapMarkerAlt, FaCompass, FaCheck, FaTimes } from 'react-icons/fa';
import { Story } from '../types/story';

interface StoryInteractiveProps {
  story: Story;
}

interface Location {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  isDiscovered: boolean;
}

const StoryInteractive: React.FC<StoryInteractiveProps> = ({ story }) => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'map' | 'learn'>('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapExplored, setMapExplored] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Generate quiz questions based on story content
  const generateQuestions = () => {
    const content = story.translations.en.content;
    const moral = story.translations.en.moralOfStory;
    
    return [
      {
        id: '1',
        question: `What is the main theme of "${story.translations.en.title}"?`,
        options: [
          "Adventure and Discovery",
          "Friendship and Loyalty",
          "Courage and Perseverance",
          "Magic and Wonder"
        ],
        correct: 1,
        explanation: moral || "This story teaches us important lessons about life and values."
      },
      {
        id: '2',
        question: "What challenge does the main character face?",
        options: [
          "Making new friends",
          "Overcoming fears",
          "Solving a mystery",
          "Learning a lesson"
        ],
        correct: 1,
        explanation: "The character's journey is about personal growth and overcoming challenges."
      },
      {
        id: '3',
        question: "What is the most important lesson from this story?",
        options: [
          "Never give up",
          "Be kind to others",
          "Follow your dreams",
          "Work together"
        ],
        correct: 1,
        explanation: "The story emphasizes important values and life lessons."
      }
    ];
  };

  // Generate locations based on story content
  useEffect(() => {
    const generateLocations = () => {
      const storyLocations: Location[] = [
        {
          id: '1',
          name: 'Story Beginning',
          description: 'Where our journey begins...',
          x: 20,
          y: 20,
          isDiscovered: true
        },
        {
          id: '2',
          name: 'First Challenge',
          description: story.translations.en.content.substring(0, 50) + '...',
          x: 40,
          y: 35,
          isDiscovered: false
        },
        {
          id: '3',
          name: 'Key Moment',
          description: 'A crucial point in our story...',
          x: 60,
          y: 50,
          isDiscovered: false
        },
        {
          id: '4',
          name: 'Final Challenge',
          description: 'The ultimate test awaits...',
          x: 80,
          y: 65,
          isDiscovered: false
        },
        {
          id: '5',
          name: 'Story Conclusion',
          description: story.translations.en.moralOfStory || 'The end of our journey...',
          x: 90,
          y: 80,
          isDiscovered: false
        }
      ];
      setLocations(storyLocations);
    };

    generateLocations();
  }, [story]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === generateQuestions()[currentQuestionIndex].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowExplanation(false);
      if (currentQuestionIndex < generateQuestions().length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const handleLocationClick = (location: Location) => {
    if (!location.isDiscovered) {
      const updatedLocations = locations.map(loc => 
        loc.id === location.id ? { ...loc, isDiscovered: true } : loc
      );
      setLocations(updatedLocations);
      setMapExplored(prev => prev + 1);
    }
    setSelectedLocation(location);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const renderQuiz = () => {
    const questions = generateQuestions();
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {!showResult ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <div className="flex items-center space-x-2">
                <FaStar className="text-yellow-500" />
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Score: {score}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {questions[currentQuestionIndex].question}
              </h3>
              <div className="space-y-3">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 text-left rounded-lg transition-all ${
                      selectedAnswer === null
                        ? 'hover:bg-indigo-50 dark:hover:bg-gray-700'
                        : selectedAnswer === index
                        ? index === questions[currentQuestionIndex].correct
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                        : 'opacity-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedAnswer === index && (
                        <span>
                          {index === questions[currentQuestionIndex].correct ? (
                            <FaCheck className="text-green-500" />
                          ) : (
                            <FaTimes className="text-red-500" />
                          )}
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg"
              >
                <p className="text-indigo-700 dark:text-indigo-300">
                  {questions[currentQuestionIndex].explanation}
                </p>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <FaMedal className="w-16 h-16 mx-auto text-yellow-500" />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                Quiz Complete!
              </h3>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                You scored {score} out of {questions.length}
              </p>
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Try Again
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('map')}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Explore Map
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  const renderMap = () => (
    <div className="relative h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
      
      <div className="relative p-6 h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Story Map
          </h3>
          <div className="flex items-center space-x-2">
            <FaCompass className="text-indigo-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Math.round((mapExplored / locations.length) * 100)}% Explored
            </span>
          </div>
        </div>

        <div className="relative h-[400px] bg-indigo-50 dark:bg-gray-700 rounded-lg">
          {locations.map((location) => (
            <motion.div
              key={location.id}
              style={{
                position: 'absolute',
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
              onClick={() => handleLocationClick(location)}
            >
              <div className={`p-2 rounded-full ${
                location.isDiscovered
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                <FaMapMarkerAlt />
              </div>
            </motion.div>
          ))}

          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {selectedLocation.name}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {selectedLocation.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        {(['quiz', 'map', 'learn'] as const).map((tab) => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
              activeTab === tab
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {tab === 'quiz' && <FaQuestionCircle />}
            {tab === 'map' && <FaMap />}
            {tab === 'learn' && <FaLightbulb />}
            <span className="capitalize">{tab}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'quiz' && renderQuiz()}
          {activeTab === 'map' && renderMap()}
          {activeTab === 'learn' && (
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Key Lessons
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaLightbulb className="text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Main Theme</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {story.translations.en.moralOfStory || "Understanding the story's message"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaLightbulb className="text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Character Growth</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Learning about personal development and overcoming challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaLightbulb className="text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Life Lessons</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Understanding values and applying them to our lives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StoryInteractive;
