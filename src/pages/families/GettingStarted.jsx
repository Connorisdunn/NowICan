import React from 'react';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  return (
    <div className="min-h-screen pt-16 pb-12">
      <div className="container-custom mx-auto px-4">
        <div className="mb-6 overflow-hidden rounded-lg">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/0e517959-5a2a-4ce7-95f6-d0c6e2eef69f/H-FAQ-for-families.jpg" 
            alt="Getting Started with Now I Can" 
            className="w-full h-48 object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold font-heading mb-4">Getting Started</h1>
        <p className="text-base mb-6">
          We're excited to help your child reach their full potential through our innovative therapy services.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Your Journey with Now I Can</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-blue-100 text-primary-blue-600 font-bold text-xl">
                1
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Free Consultation</h3>
                  <Link 
                    to="/for-families/getting-started/free-consultation" 
                    className="text-base btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 py-2 px-4"
                  >
                    Schedule
                  </Link>
                </div>
                <p className="text-base text-gray-600 mt-2">
                  Discuss your child's needs and learn how our services can help.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-orange-100 text-primary-orange-600 font-bold text-xl">
                2
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Patient Information</h3>
                  <Link 
                    to="/for-families/getting-started/patient-information" 
                    className="text-base btn bg-primary-orange-600 text-white hover:bg-primary-orange-700 py-2 px-4"
                  >
                    Forms
                  </Link>
                </div>
                <p className="text-base text-gray-600 mt-2">
                  Complete your child's information forms to prepare for therapy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-orange-100 text-primary-orange-600 font-bold text-xl">
                3
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Schedule Therapy</h3>
                  <Link 
                    to="/therapy-services/therapy-schedule" 
                    className="text-base btn bg-primary-orange-600 text-white hover:bg-primary-orange-700 py-2 px-4"
                  >
                    Schedule
                  </Link>
                </div>
                <p className="text-base text-gray-600 mt-2">
                  Find the best time for your child's therapy sessions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-orange-100 text-primary-orange-600 font-bold text-xl">
                4
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Financial Arrangements</h3>
                  <Link 
                    to="/for-families/financial-support" 
                    className="text-base btn bg-primary-orange-500 text-white hover:bg-primary-orange-600 py-2 px-4"
                  >
                    Payment
                  </Link>
                </div>
                <p className="text-base text-gray-600 mt-2">
                  Learn about payment options and financial assistance programs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary-blue-100 text-primary-blue-600 font-bold text-xl">
                5
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Accommodations</h3>
                  <Link 
                    to="/for-families/accommodations" 
                    className="text-base btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 py-2 px-4"
                  >
                    Lodging
                  </Link>
                </div>
                <p className="text-base text-gray-600 mt-2">
                  Explore lodging options if traveling from out of town.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-primary-blue-50 rounded-lg p-6 border border-primary-blue-100">
          <h2 className="text-xl font-bold mb-3 text-primary-blue-800">Have Questions?</h2>
          <p className="text-base text-gray-700 mb-4">
            Our team is here to help you navigate the process. Contact us anytime.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/for-families" 
              className="text-base btn bg-white border border-primary-blue-500 text-primary-blue-600 hover:bg-primary-blue-50 py-2 px-4"
            >
              FAQs
            </Link>
            <Link 
              to="/contact-us" 
              className="text-base btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 py-2 px-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;