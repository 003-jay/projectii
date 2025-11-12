import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLoadingNavigation = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const navigateWithLoading = (path, delay = 800) => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate(path);
    }, delay);
  };

  return { navigateWithLoading, isNavigating };
};