import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import AnimatedSticker from '../components/animatedSticker';
import ScrollReveal from '../components/scrollReveal';
import ScrollProgress from '../components/scrollProgress';

// Import sticker images
import wheelchairImage from '../assets/images/wheelchair.png';
import jumpropeImage from '../assets/images/jumprope.png';
import rainbowImage from '../assets/images/rainbow.png';
import balloonImage from '../assets/images/balloon.png';
import runningImage from '../assets/images/running.png';

import EbersoleFamilyImg from '../assets/images/EbersoleFamily1.jpg';
import InnovativeImg from '../assets/images/innovative.jpg';
import intensiveImg from '../assets/images/Intensive.jpg';
import teamImg from '../assets/images/NacoleandAvery.jpg';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Hero Section with Video Background */}
      <HeroSection />
      
      
      {/* What Makes Us Different Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Wheelchair sticker to the left */}
        <AnimatedSticker 
          src={wheelchairImage}
          alt="Wheelchair drawing" 
          className="absolute top-12 left-2 md:left-8 lg:left-16 w-28 md:w-40 lg:w-60 transform -rotate-3 z-10"
          animationDelay={100}
        />

        {/* Jumprope sticker positioned at the same height as wheelchair sticker */}
        <AnimatedSticker 
          src={jumpropeImage} 
          alt="Jump rope drawing" 
          className="absolute top-12 right-2 md:right-8 lg:right-16 w-28 md:w-40 lg:w-60 transform -rotate-3 z-10"
          animationDelay={200}
        />
        
        <div className="container-custom mx-auto px-4 md:pl-24 lg:pl-32">
          <ScrollReveal className="text-center mb-12" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines intensive therapy with innovative techniques to help children achieve milestones that traditional therapy alone might not reach.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={intensiveImg}
                    alt="Intensive Therapy Model" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Intensive Therapy Model</h3>
                    <p className="text-gray-600 mb-4">
                      Our intensive model provides 4 hours of therapy per day, 5 days a week, resulting in gains that might take months or years in traditional therapy.
                    </p>
                  </div>
                  <Link to="/therapy-services/intensive-physical-therapy" className="text-primary-blue-600 font-medium hover:text-primary-blue-700 flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Card 2 - Innovative Treatment Methods with fixed styling */}
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={InnovativeImg} 
                    alt="Innovative Treatment Methods" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovative Treatment Methods</h3>
                    <p className="text-gray-600 mb-4">
                      We utilize cutting-edge techniques including Orthotic Suit Therapy, Universal Exercise Unit, and specialized manual therapy approaches.
                    </p>
                  </div>
                  <Link to="/therapy-services/treatment-methods" className="text-primary-orange-500 font-medium hover:text-primary-orange-600 flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Card 3 */}
            <ScrollReveal delay={400}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={teamImg}
                    alt="Expert Therapy Team" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Therapy Team</h3>
                    <p className="text-gray-600 mb-4">
                      Our therapists have specialized training in pediatric therapy and are experts in treating children with a wide range of disabilities.
                    </p>
                  </div>
                  <Link to="/about-us/our-team" className="text-primary-blue-600 font-medium hover:text-primary-blue-700 flex items-center">
                    Meet Our Team
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16 bg-white relative">
        {/* Rainbow sticker up and to the right */}
        <AnimatedSticker 
          src={rainbowImage} 
          alt="Rainbow drawing" 
          className="absolute top-28 right-8 md:right-16 lg:right-20 w-28 md:w-36 lg:w-48 transform rotate-12 z-10"
          animationDelay={300}
        />
        
        <div className="container-custom mx-auto px-4">
          <ScrollReveal className="text-center mb-12" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read about the incredible achievements of children who have participated in our therapy programs.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <ScrollReveal delay={200} direction="left">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/685d3859-6826-45eb-88ad-6f6bad55abae/Colby.jpg" 
                    alt="Colby's Journey" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Colby's Journey</h3>
                  <p className="text-gray-700 mb-4">
                    From requiring constant assistance to becoming an active teenager and college student, Colby's story showcases the transformative power of intensive therapy.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link to="/about-us/our-story-mission" className="text-primary-blue-600 font-medium hover:text-primary-blue-700 flex items-center">
                      Read Colby's Story
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Story 2 */}
            <ScrollReveal delay={300} direction="right">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={EbersoleFamilyImg}
                    alt="Success Stories" 
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">More Success Stories</h3>
                  <p className="text-gray-700 mb-4">
                    Discover how intensive therapy has helped children take their first steps, gain independence, and achieve milestones their families never thought possible.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link to="/for-families/family-resources" className="text-primary-orange-500 font-medium hover:text-primary-orange-600 flex items-center">
                      Read More Stories
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="py-16 bg-gray-50 relative">
        {/* Running sticker moved to Lititz, Pennsylvania section's bottom left */}
        <AnimatedSticker 
          src={runningImage} 
          alt="Running child drawing" 
          className="absolute top-24 left-4 md:left-10 lg:left-10 w-24 md:w-32 lg:w-80 transform -rotate-8 z-10"
          animationDelay={500}
        />
        {/* Balloon sticker to the right */}
        <AnimatedSticker 
          src={balloonImage} 
          alt="Balloon drawing" 
          className="absolute top-96 md:top-96 lg:top-96 right-0 md:right-0 lg:right-0 w-24 md:w-32 lg:w-80 transform -rotate-8 z-10"
          animationDelay={400}
        />

        
        <div className="container-custom mx-auto px-4 md:pl-16 lg:pl-24">
          <ScrollReveal className="text-center mb-12" delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Now I Can Foundation has two state-of-the-art therapy centers serving families across the country.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Utah Location */}
            <ScrollReveal delay={200} direction="left">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/ec1b1f37-f43a-4de4-9896-bfe25e818846/HP-Orem-Utah-Location.jpg" 
                    alt="Orem, Utah Location" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Orem, Utah</h3>
                  <address className="text-gray-600 mb-4 not-italic">
                    <p>1950 S 375 E</p>
                    <p>Orem, UT 84058</p>
                    <p className="mt-2">(801) 228-1935</p>
                  </address>
                </div>
              </div>
            </ScrollReveal>
            
            {/* Pennsylvania Location */}
            <ScrollReveal delay={300} direction="right">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/9dbc12c5-d60c-4d84-b414-b06039299c7f/HP-Lititz-Listrak.jpg" 
                    alt="Lititz, Pennsylvania Location" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lititz, Pennsylvania</h3>
                  <address className="text-gray-600 mb-4 not-italic">
                    <p>100 West Millport Road</p>
                    <p>Lititz, PA 17543</p>
                    <p className="mt-2">(717) 269-5829</p>
                  </address>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Single button for both locations */}
          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <Link to="/about-us/locations" className="btn inline-block text-primary-blue-600 font-medium hover:text-primary-blue-700 border border-primary-blue-600 hover:border-primary-blue-700 bg-white hover:bg-gray-50 rounded-lg px-6 py-3 shadow-sm transition-all duration-300">
                View All Locations
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-blue-500 to-primary-orange-500 text-white relative">
        <div className="container-custom mx-auto px-4 text-center">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Take the Next Step?</h2>
            <p className="text-lg text-primary-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to learn how Now I Can can help your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/for-families/getting-started/free-consultation" className="btn border border-white text-white hover:bg-white/10 shadow-lg shadow-primary-blue-500/20 transform transition duration-300 hover:-translate-y-1">
                Free Consultation
              </Link>
              <Link to="/therapy-services/therapy-schedule" className="btn border border-white text-white hover:bg-white/10 shadow-lg shadow-primary-blue-500/20 transform transition duration-300 hover:-translate-y-1">
                View Therapy Schedule
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;