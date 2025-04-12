import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const videoUrl = "https://www.youtube.com/embed/wlOHFTHMHNU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&start=15&modestbranding=0&rel=0";
  const heroImage = "https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/1b927174-e241-4e50-8399-dc5b25146a27/H-Avery-on-bike.jpg";
  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    // Check if iframe content loaded
    const iframe = iframeRef.current;
    if (iframe) {
      const handleLoad = () => setVideoLoaded(true);
      iframe.addEventListener('load', handleLoad);
      
      return () => iframe.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-coral-600/80 z-10"></div>
      <div className="absolute pt-16 inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Video player */}
          <iframe 
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoUrl}
            title="Now I Can Foundation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Fallback image shown only when video fails to load */}
          {!videoLoaded && (
            <img 
              src={heroImage}
              alt="A child receiving therapy at Now I Can"
              className="absolute w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container-custom mx-auto px-4 relative z-20 text-white h-full flex items-center">
        <div className="max-w-2xl pt-32 md:pt-40">
          <div className="animate-fadeIn">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading mb-4 md:mb-6 leading-tight">
              Helping Children <span className="text-gradient bg-gradient-to-r from-blue-300 via-green-300 to-coral-300 pl-4 md:pl-12">Move Mountains</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 max-w-2xl">
              At Now I Can Foundation, we help children with disabilities reach their full potential through innovative physical therapy services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/for-families/getting-started/free-consultation" className="btn bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transform transition duration-300 hover:-translate-y-1 text-center">
                <span className="text-white">Free Consultation</span>
              </Link>
              <Link to="/get-involved" className="btn bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30 transform transition duration-300 hover:-translate-y-1 text-center">
                <span className="text-white">Get Involved</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;