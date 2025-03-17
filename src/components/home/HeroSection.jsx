import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // In a real implementation, you would use an actual video URL
  const videoUrl = "https://www.youtube.com/embed/wlOHFTHMHNU?autoplay=1&mute=1&loop=1&controls=0&showinfo=0";

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          {/* In a real implementation, this would be replaced with a proper video player */}
          <iframe 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoUrl}
            title="Now I Can Foundation Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Fallback image for when video cannot load */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-coral-800 opacity-80"></div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container-custom mx-auto px-4 relative z-20 text-white h-full flex items-center">
        <div className="max-w-3xl pt-20">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
              Helping Children <span className="text-gradient bg-gradient-to-r from-blue-300 via-green-300 to-coral-300">Move Mountains</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              At Now I Can Foundation, we help children with disabilities reach their full potential through innovative physical therapy services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/for-families/getting-started/free-consultation" className="btn bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transform transition duration-300 hover:-translate-y-1">
                Free Consultation
              </Link>
              <Link to="/get-involved" className="btn bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30 transform transition duration-300 hover:-translate-y-1">
                Get Involved
              </Link>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce-slow">
              <svg className="w-6 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;