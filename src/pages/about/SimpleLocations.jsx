import React from 'react';
import { Link } from 'react-router-dom';
import AccommodationImage from '../../assets/images/suite2bed.jpg'; // Import the image

const SimpleLocations = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Our Locations</h1>
        <p className="text-lg mb-8">
          Now I Can Foundation has two state-of-the-art therapy centers serving families across the country.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Utah Location */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/b4c8215b-7666-466f-9cbb-681d523f871c/H-Utah-location.jpg" 
                alt="Now I Can Utah Location" 
                className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Now I Can - Utah</h2>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2 text-primary-blue-600">Location</h3>
                <address className="not-italic text-gray-700">
                  <p className="mb-1">1950 S 375 E</p>
                  <p className="mb-3">Orem, UT 84058</p>
                  <p className="mb-1">
                    <a href="tel:+18012281935" className="text-primary-blue-600 hover:text-primary-blue-800">
                      (801) 228-1935
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@nowican.org" className="text-primary-blue-600 hover:text-primary-blue-800">
                      info@nowican.org
                    </a>
                  </p>
                </address>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2 text-primary-blue-600">About Our Facility</h3>
                <p className="text-gray-700 mb-4">
                  Our Utah location offers state-of-the-art therapy services in a beautiful setting at the base of the Wasatch Mountains.
                </p>
                <p className="text-gray-700">
                  Our on-site family suites are available for only $35 a night, making your stay both comfortable and affordable.
                </p>
              </div>
            </div>
          </div>
          
          {/* Pennsylvania Location */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/116b61c2-7b17-4b9e-9e45-53d3fd71f4b1/H-Lititz.jpg" 
                alt="Now I Can Pennsylvania Location" 
                className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Now I Can - Pennsylvania</h2>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2 text-primary-orange-600">Location</h3>
                <address className="not-italic text-gray-700">
                  <p className="mb-1">100 West Millport Road</p>
                  <p className="mb-3">Lititz, PA 17543</p>
                  <p className="mb-1">
                    <a href="tel:+17172695829" className="text-primary-orange-600 hover:text-primary-orange-800">
                      (717) 269-5829
                    </a>
                  </p>
                  <p>
                    <a href="mailto:allison@nowican.org" className="text-primary-orange-600 hover:text-primary-orange-800">
                      allison@nowican.org
                    </a>
                  </p>
                </address>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2 text-primary-orange-600">About Our Facility</h3>
                <p className="text-gray-700 mb-4">
                  Our Pennsylvania location is in Lititz, voted "America's Coolest Small Town," with picturesque streets, shops, and unique eateries.
                </p>
                <p className="text-gray-700">
                  The area offers many family-friendly activities and attractions to enjoy during your therapy stay.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centralized consultation button */}
        <div className="text-center mb-12">
          <Link 
            to="/for-families/getting-started/free-consultation" 
            className="btn bg-gradient-to-r from-primary-blue-600 to-primary-orange-600 text-white hover:from-primary-blue-700 hover:to-primary-orange-700 px-8 py-3 rounded-lg inline-block font-medium shadow-md"
          >
            Schedule a Free Consultation
          </Link>
        </div>
        <div className="bg-primary-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-left">Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <img 
                src={AccommodationImage} 
                alt="Accommodation" 
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="md:col-span-2 flex flex-col justify-center h-full">
              <p className="text-gray-700 max-w-2xl mb-6">
                We understand that traveling for therapy can be challenging.
                <br></br>That's why we offer comprehensive accommodation solutions to make your stay comfortable and stress-free.
              </p>
              <div className="text-left">
                <Link 
                  to="/for-families/accommodations" 
                  className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 px-6 py-2 rounded-lg inline-block font-medium shadow-md"
                >
                  Explore Our Accommodations
                  <svg className="h-4 w-4 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary-blue-600 to-primary-orange-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey with Now I Can?</h2>
          <p className="text-lg mb-6">
            Contact us today to learn more about our therapy services or to schedule a consultation at either of our locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/for-families/getting-started/free-consultation" 
              className="btn bg-primary-blue-500 text-primary-blue-600 hover:bg-primary-blue-600"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/contact-us" 
              className="btn bg-transparent border border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleLocations;