import React, { useState, useEffect } from 'react';
//<StoryInteractive story={selectedStory} />import StoryInteractive from './components/StoryInteractive';
import { motion, AnimatePresence } from 'framer-motion';

interface MiniGameProps {
  type: 'puzzle' | 'memory' | 'quiz';
  difficulty?: 'easy' | 'medium' | 'hard';
  onComplete: (score: number) => void;
  onFail?: () => void;
  timeLimit?: number;
}

const MiniGame: React.FC<MiniGameProps> = ({
  type,
  difficulty = 'medium',
  onComplete,
  onFail,
  timeLimit = 60,
}) => {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'complete' | 'failed'>('ready');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLimit > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState('failed');
            onFail?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLimit, onFail]);

  const renderGame = () => {
    switch (type) {
      case 'puzzle':
        return <PuzzleGame difficulty={difficulty} onSolve={handleComplete} />;
      case 'memory':
        return <MemoryGame difficulty={difficulty} onComplete={handleComplete} />;
      case 'quiz':
        return <QuizGame difficulty={difficulty} onComplete={handleComplete} />;
      default:
        return null;
    }
  };

  const handleComplete = (gameScore: number) => {
    setScore(gameScore);
    setGameState('complete');
    onComplete(gameScore);
  };

  const handleStart = () => {
    setGameState('playing');
    setTimeLeft(timeLimit);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mini-game-container p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <div className="game-header flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)} Challenge
        </h3>
        {gameState === 'playing' && (
          <div className="flex items-center gap-4">
            <span className="text-sm">Score: {score}</span>
            <span className="text-sm">Time: {timeLeft}s</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {gameState === 'ready' && (
          <motion.div
            key="ready"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <p className="mb-4">Are you ready to begin the challenge?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-white rounded-md"
              onClick={handleStart}
            >
              Start Game
            </motion.button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {renderGame()}
          </motion.div>
        )}

        {gameState === 'complete' && (
          <motion.div
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <h4 className="text-xl font-bold mb-2">Challenge Complete!</h4>
            <p className="mb-4">Final Score: {score}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-white rounded-md"
              onClick={() => setGameState('ready')}
            >
              Play Again
            </motion.button>
          </motion.div>
        )}

        {gameState === 'failed' && (
          <motion.div
            key="failed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <h4 className="text-xl font-bold mb-2">Time's Up!</h4>
            <p className="mb-4">Better luck next time!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-white rounded-md"
              onClick={() => setGameState('ready')}
            >
              Try Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Placeholder components for different game types
const PuzzleGame: React.FC<{ difficulty: string; onSolve: (score: number) => void }> = () => (
  <div>Puzzle Game Placeholder</div>
);

const MemoryGame: React.FC<{ difficulty: string; onComplete: (score: number) => void }> = () => (
  <div>Memory Game Placeholder</div>
);

const QuizGame: React.FC<{ difficulty: string; onComplete: (score: number) => void }> = () => (
  <div>Quiz Game Placeholder</div>
);

export default MiniGame;
