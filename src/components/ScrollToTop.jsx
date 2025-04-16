import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component uses React Router's useLocation hook to detect route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // When pathname changes, scroll to top with a slight delay
    // The delay helps ensure the new page component has loaded
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // Use 'instant' instead of 'smooth' for immediate scrolling
      });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;