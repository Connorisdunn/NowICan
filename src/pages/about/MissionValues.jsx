import React from 'react';
import { Link } from 'react-router-dom';

const MissionValues = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-heading mb-6">Mission & Values</h1>
          
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-4 text-center italic">
              "Our mission at Now I Can is to help children with disabilities reach their full potential and greatest independence through innovative physical therapy."
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Now I Can's vision is to become our patients' first choice in physical therapy by providing the highest quality of therapy that brings change, hope, and confidence to children with disabilities!
              </p>
              <p className="text-lg text-gray-700 font-medium">
                We see a world with fewer crutches, wheelchairs, and surgeries and more dreams realized!
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">PROFESSIONAL</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We are punctual
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We work as a team
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We focus on the patient
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-purple-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">EXCEPTIONAL</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We improve lives
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We use the best techniques
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We interact well with patients and parents
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">BELIEVERS IN CHANGE</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We utilize time wisely
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We emphasize the positive
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We set goals and work passionately towards them
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Commitment</h2>
            <p className="text-lg mb-6 text-center">
              We are committed to help each child do more and reach higher!
            </p>
            <div className="flex justify-center">
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-white text-blue-600 hover:bg-blue-50"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionValues;