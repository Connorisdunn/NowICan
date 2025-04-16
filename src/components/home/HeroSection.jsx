import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';  

const HeroSection = () => {   
  // Video URL configured to start from beginning and loop
  const videoUrl = "https://www.youtube.com/embed/5tTLG0zQXKk?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=0&rel=0&playlist=5tTLG0zQXKk&loop=1";   
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
    <section className="relative w-full min-h-[85vh] overflow-hidden">       
      {/* Added back a subtle gradient overlay with reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-800/80 to-primary-orange-700/30 z-10"></div>
      
      {/* Video container */}
      <div className="absolute inset-0 w-full overflow-hidden">         
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
              Helping Children <span className="text-gradient bg-gradient-to-r from-primary-blue-300 to-primary-orange-300 pl-4 md:pl-12">Move Mountains</span>             
            </h1>             
            <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 max-w-2xl">               
              At Now I Can Foundation, we help children with disabilities reach their full potential through innovative physical therapy services.             
            </p>             
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">               
              <Link to="/for-families/getting-started/free-consultation" className="btn bg-primary-blue-500 hover:bg-primary-blue-600 shadow-lg shadow-primary-blue-500/30 transform transition duration-300 hover:-translate-y-1 text-center">                 
                <span className="text-white">Free Consultation</span>               
              </Link>               
              <Link to="/get-involved" className="btn bg-primary-orange-400 hover:bg-primary-orange-500 shadow-lg shadow-primary-orange-500/30 transform transition duration-300 hover:-translate-y-1 text-center">                 
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