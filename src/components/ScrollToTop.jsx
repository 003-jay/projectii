import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only reset scroll for new navigations (PUSH or REPLACE).
    // When navigationType is 'POP' (back/forward), let the browser restore
    // the previous scroll position so users return to where they were.
    if (navigationType === 'POP') return;
    window.scrollTo(0, 0);
  }, [pathname, navigationType]);

  return null;
}