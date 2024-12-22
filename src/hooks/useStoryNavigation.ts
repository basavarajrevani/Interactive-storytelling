import { useState } from 'react';
import { stories } from '../data/stories';

export function useStoryNavigation() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = stories.length;

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const progress = ((currentPage + 1) / totalPages) * 100;

  return {
    currentPage,
    totalPages,
    progress,
    handleNextPage,
    handlePrevPage
  };
}