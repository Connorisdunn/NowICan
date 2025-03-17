import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <HeroSection />
      
      {/* What Makes Us Different Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique approach combines intensive therapy with innovative techniques to help children achieve milestones that traditional therapy alone might not reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Intensive Therapy Model</h3>
              <p className="text-gray-600 mb-4">
                Our intensive model provides 4 hours of therapy per day, 5 days a week, resulting in gains that might take months or years in traditional therapy.
              </p>
              <Link to="/therapy-services/intensive-physical-therapy" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovative Treatment Methods</h3>
              <p className="text-gray-600 mb-4">
                We utilize cutting-edge techniques including Orthotic Suit Therapy, Universal Exercise Unit, and specialized manual therapy approaches.
              </p>
              <Link to="/therapy-services/treatment-methods" className="text-green-600 font-medium hover:text-green-800 flex items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Therapy Team</h3>
              <p className="text-gray-600 mb-4">
                Our therapists have specialized training in pediatric therapy and are experts in treating children with a wide range of disabilities.
              </p>
              <Link to="/about-us/therapy-team" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
                Meet Our Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read about the incredible achievements of children who have participated in our therapy programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Colby's Journey</h3>
                <p className="text-gray-700 mb-4">
                  From requiring constant assistance to becoming an active teenager and college student, Colby's story showcases the transformative power of intensive therapy.
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/about-us/our-story" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                    Read Colby's Story
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Story 2 */}
            <div className="bg-purple-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">More Success Stories</h3>
                <p className="text-gray-700 mb-4">
                  Discover how intensive therapy has helped children take their first steps, gain independence, and achieve milestones their families never thought possible.
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/for-families/testimonials" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
                    Read More Stories
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Now I Can Foundation has two state-of-the-art therapy centers serving families across the country.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Utah Location */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-300">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
                  <span className="text-lg font-medium">Utah Location Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Orem, Utah</h3>
                <address className="text-gray-600 mb-4 not-italic">
                  <p>1950 S 375 E</p>
                  <p>Orem, UT 84058</p>
                  <p className="mt-2">(801) 228-1935</p>
                </address>
                <Link to="/about-us/locations/utah" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Pennsylvania Location */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-300">
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-purple-100 text-purple-500">
                  <span className="text-lg font-medium">Pennsylvania Location Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Lititz, Pennsylvania</h3>
                <address className="text-gray-600 mb-4 not-italic">
                  <p>100 West Millport Road</p>
                  <p>Lititz, PA 17543</p>
                  <p className="mt-2">(717) 269-5829</p>
                </address>
                <Link to="/about-us/locations/pennsylvania" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Take the Next Step?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to learn how Now I Can can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/for-families/getting-started/free-consultation" className="btn bg-white text-blue-600 hover:bg-blue-50 shadow-lg shadow-blue-500/30 transform transition duration-300 hover:-translate-y-1">
              Free Consultation
            </Link>
            <Link to="/therapy-services/therapy-schedule" className="btn border border-white text-white hover:bg-white/10 shadow-lg shadow-blue-500/20 transform transition duration-300 hover:-translate-y-1">
              View Therapy Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;