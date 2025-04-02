import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientInformation = () => {
  const [location, setLocation] = useState('');
  
  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-center">Patient Information</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Please select your location to proceed with the patient information form.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-6">Select Location</h2>
            
            <div className="flex flex-col items-center mb-8">
              <div className="relative flex items-center justify-center">
                <div className="mr-3 text-lg font-medium text-gray-700">Utah (UT)</div>
                
                <div 
                  onClick={() => handleLocationChange(location === 'UT' ? 'PA' : 'UT')}
                  className={`relative h-8 w-16 rounded-full cursor-pointer transition-colors ${
                    location === 'PA' ? 'bg-purple-600' : 'bg-blue-600'
                  }`}
                >
                  <span 
                    className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform transform ${
                      location === 'PA' ? 'translate-x-8' : ''
                    }`}
                  />
                </div>
                
                <div className="ml-3 text-lg font-medium text-gray-700">Pennsylvania (PA)</div>
              </div>
              
              <div className="text-center mt-2">
                <span className="text-sm text-gray-500">
                  Selected: {location === 'PA' ? 'Pennsylvania' : location === 'UT' ? 'Utah' : 'Please select a location'}
                </span>
              </div>
            </div>
            
            {location === 'UT' && (
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-medium text-blue-800 mb-3">Utah Patient Information</h3>
                <p className="text-gray-700 mb-4">
                  Prior to the start of the session, please click on the link below to download the Patient Intake Information form. 
                  Fill out the requested information and email the completed form to info@nowican.org.
                </p>
                <a 
                  href="https://drive.google.com/file/d/1SpHPrlizMgi1ypda1g7G_nm4L1w7Asta/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
                >
                  Download Patient Intake Information Form
                </a>
                <p className="text-sm text-gray-600 italic">
                  After completing the form, please email it to info@nowican.org
                </p>
              </div>
            )}
            
            {location === 'PA' && (
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="text-lg font-medium text-purple-800 mb-3">Pennsylvania Patient Information</h3>
                <p className="text-gray-700">
                  Thank you for selecting our Pennsylvania location. Our team will email the patient information form to you directly.
                  Please ensure we have your current email address on file, or contact our Pennsylvania office at (717) 269-5829.
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-medium text-blue-800 mb-3">Need Assistance?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about the patient information form or need help completing it, please contact us:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Utah: (801) 228-1935 | Pennsylvania: (717) 269-5829</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email: info@nowican.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;