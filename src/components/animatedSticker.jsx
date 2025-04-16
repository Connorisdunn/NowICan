import React, { useEffect, useRef, useState } from 'react';

const AnimatedSticker = ({ 
  src, 
  alt, 
  className, 
  animationDelay = 0
}) => {
  const stickerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = stickerRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sticker comes into view
        if (entry.isIntersecting) {
          // Add a small delay for each sticker to create a cascade effect
          setTimeout(() => {
            setIsVisible(true);
          }, animationDelay);
          
          // Once we've seen this element, no need to observe it anymore
          observer.unobserve(currentRef);
        }
      },
      {
        // Start animation when element is 10% visible
        threshold: 0.1,
        // Start observing when element is 100px from entering the viewport
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Clean up observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationDelay]);

  return (
    <div 
      ref={stickerRef} 
      className={`${className} transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-12'
      }`}
    >
      <img 
        src={src}
        alt={alt} 
        className={`w-full h-auto drop-shadow-md ${
          isVisible ? 'animate-float' : ''
        }`}
      />
    </div>
  );
};

export default AnimatedSticker;