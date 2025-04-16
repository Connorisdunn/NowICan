import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  className = "", 
  threshold = 0.1,
  delay = 0,
  direction = "up" // "up", "down", "left", "right"
}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set initial transform based on direction
  let initialTransform = "translate-y-12";
  if (direction === "down") initialTransform = "-translate-y-12";
  if (direction === "left") initialTransform = "translate-x-12";
  if (direction === "right") initialTransform = "-translate-x-12";

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Once we've revealed the section, no need to observe it anymore
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div 
      ref={sectionRef} 
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 transform translate-x-0 translate-y-0' 
          : `opacity-0 transform ${initialTransform}`
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;