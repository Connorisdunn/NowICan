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
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/925c9c27-3b4a-4b66-a4ee-8acf79695199/HP-Therapy-Schedule.jpg" 
                  alt="Intensive Therapy Model" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
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
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/1647216189569-8OCPNKIVC8MYZL30181M/Suit-Therapy-Page-Spot1.jpg" 
                  alt="Innovative Treatment Methods" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
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
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/8b9b155b-8374-41c9-b6be-b6a3418f09c4/H-Therapy-Team.jpg" 
                  alt="Expert Therapy Team" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Expert Therapy Team</h3>
                <p className="text-gray-600 mb-4">
                  Our therapists have specialized training in pediatric therapy and are experts in treating children with a wide range of disabilities.
                </p>
                <Link to="/about-us/our-team" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
                  Meet Our Team
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
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
                  <Link to="/about-us/our-story-mission" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                    Read Colby's Story
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Story 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/39fc64f9-31df-4b8a-87e3-5898cdb8a92d/H-Testimonials.jpg" 
                  alt="Success Stories" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">More Success Stories</h3>
                <p className="text-gray-700 mb-4">
                  Discover how intensive therapy has helped children take their first steps, gain independence, and achieve milestones their families never thought possible.
                </p>
                <div className="flex justify-between items-center">
                  <Link to="/for-families" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
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
                <Link to="/about-us/locations" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Pennsylvania Location */}
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
                <Link to="/about-us/locations" className="text-purple-600 font-medium hover:text-purple-800 flex items-center">
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
            <Link to="/for-families/getting-started/free-consultation" className="btn border border-white text-white hover:bg-white/10 shadow-lg shadow-blue-500/20 transform transition duration-300 hover:-translate-y-1">
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