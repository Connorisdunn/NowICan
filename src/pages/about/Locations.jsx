import React from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {
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
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Now I Can - Utah</h2>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2 text-blue-600">Location</h3>
                <address className="not-italic text-gray-700">
                  <p className="mb-1">1950 S 375 E</p>
                  <p className="mb-3">Orem, UT 84058</p>
                  <p className="mb-1">
                    <a href="tel:+18012281935" className="text-blue-600 hover:text-blue-800">
                      (801) 228-1935
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@nowican.org" className="text-blue-600 hover:text-blue-800">
                      info@nowican.org
                    </a>
                  </p>
                </address>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">
                  Now I Can Foundation is located at the base of the Wasatch Mountains. Our valley location offers many outdoor activities such as skiing, hiking, biking, climbing, and swimming. We are 15 minutes from Sundance Resort, and 40 minutes from Park City.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/about-us/locations/utah" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                >
                  Learn More
                </Link>
                <Link 
                  to="/for-families/getting-started/free-consultation" 
                  className="btn bg-white border border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
          
          {/* Pennsylvania Location */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/116b61c2-7b17-4b9e-9e45-53d3fd71f4b1/H-Lititz.jpg" 
                alt="Now I Can Pennsylvania Location" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Now I Can - Pennsylvania</h2>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2 text-purple-600">Location</h3>
                <address className="not-italic text-gray-700">
                  <p className="mb-1">100 West Millport Road</p>
                  <p className="mb-3">Lititz, PA 17543</p>
                  <p className="mb-1">
                    <a href="tel:+17172695829" className="text-purple-600 hover:text-purple-800">
                      (717) 269-5829
                    </a>
                  </p>
                  <p>
                    <a href="mailto:allison@nowican.org" className="text-purple-600 hover:text-purple-800">
                      allison@nowican.org
                    </a>
                  </p>
                </address>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">
                  Our Pennsylvania location is in Lititz, voted "America's Coolest Small Town." The picturesque, tree-lined streets of downtown Lititz are home to blocks of eclectic retail shops and boutiques, entertainment, historical architecture and tours, plus unique eateries.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/about-us/locations/pennsylvania" 
                  className="btn bg-purple-600 text-white hover:bg-purple-700"
                >
                  Learn More
                </Link>
                <Link 
                  to="/for-families/getting-started/free-consultation" 
                  className="btn bg-white border border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Planning Your Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/968d33ae-3963-42ba-a691-8091fa1adfdb/suite2bed.jpg" 
                  alt="Accommodations" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Accommodations</h3>
                <p className="text-gray-700 mb-4">
                  We offer information about lodging options and accommodations near both of our locations to help make your stay comfortable and convenient.
                </p>
                <Link 
                  to="/for-families/accommodations" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  View Accommodation Options
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/640dd434-8c50-4ddd-92b6-6390019b6355/C-FAQ-UT.jpg" 
                  alt="Local Activities" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Local Activities</h3>
                <p className="text-gray-700 mb-4">
                  Discover fun activities and attractions near our therapy centers to enjoy during your free time.
                </p>
                <Link 
                  to="/for-families/accommodations/local-activities" 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Explore Local Activities
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;