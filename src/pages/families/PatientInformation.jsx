import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientInformation = () => {
  const [location, setLocation] = useState('UT');
  
  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-lg">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/39fc64f9-31df-4b8a-87e3-5898cdb8a92d/H-Testimonials.jpg" 
              alt="Patient Information at Now I Can" 
              className="w-full h-64 object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-center">Patient Information</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Please select your location to proceed with the patient information form.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-primary-blue-800 mb-6">Select Location</h2>
            
            <div className="mb-8 flex justify-center">
              <div className="relative inline-flex items-center bg-gray-200 rounded-full h-12 w-80">
                {/* Utah Button */}
                <button
                  className={`absolute left-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                    location === 'UT' 
                    ? 'text-white' 
                    : 'text-gray-700'
                  }`}
                  onClick={() => handleLocationChange('UT')}
                >
                  Utah
                </button>
                
                {/* Pennsylvania Button */}
                <button
                  className={`absolute right-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                    location === 'PA' 
                    ? 'text-white' 
                    : 'text-gray-700'
                  }`}
                  onClick={() => handleLocationChange('PA')}
                >
                  Pennsylvania
                </button>
                
                {/* Sliding Background */}
                <span 
                  className={`absolute h-10 w-1/2 rounded-full transition-all duration-300 ease-in-out ${
                    location === 'UT' ? 'left-1 bg-primary-blue-600' : 'left-40 bg-primary-orange-600'
                  }`}
                ></span>
              </div>
            </div>
            
            {location === 'UT' && (
              <div className="bg-primary-blue-50 p-6 rounded-lg border border-primary-blue-100">
                <h3 className="text-lg font-medium text-primary-blue-800 mb-3">Utah Patient Information</h3>
                <p className="text-gray-700 mb-4">
                  Prior to the start of the session, please click on the link below to download the Patient Intake Information form. 
                  Fill out the requested information and email the completed form to info@nowican.org.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1SpHPrlizMgi1ypda1g7G_nm4L1w7Asta/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-primary-blue-600 text-white rounded-md hover:bg-primary-blue-700 focus:outline-none focus:ring-2 focus:ring-primary-blue-500 focus:ring-offset-2 mb-4"
                >
                  Download Patient Intake Information Form
                </a>
                <p className="text-sm text-gray-600 italic">
                  After completing the form, please email it to info@nowican.org
                </p>
              </div>
            )}
            
            {location === 'PA' && (
              <div className="bg-primary-orange-50 p-6 rounded-lg border border-primary-orange-100">
                <h3 className="text-lg font-medium text-primary-orange-800 mb-3">Pennsylvania Patient Information</h3>
                <p className="text-gray-700">
                  Thank you for selecting our Pennsylvania location. Our team will email the patient information form to you directly.
                  Please ensure we have your current email address on file, or contact our Pennsylvania office at (717) 269-5829.
                </p>
              </div>
            )}
          </div>
          
          <div className={`bg-${location === 'UT' ? 'blue' : 'purple'}-50 rounded-lg p-6 border border-${location === 'UT' ? 'blue' : 'purple'}-100`}>
            <h3 className={`text-lg font-medium text-${location === 'UT' ? 'blue' : 'purple'}-800 mb-3`}>Need Assistance?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about the patient information form or need help completing it, please contact us:
            </p>
            
            {location === 'UT' ? (
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Utah: (801) 228-1935</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: allison@nowican.org</span>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Pennsylvania: (717) 269-5829</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: allison@nowican.org</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;