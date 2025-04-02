import React from 'react';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Getting Started</h1>
        <p className="text-lg mb-8">
          We're excited to help your child reach their full potential through our innovative therapy services. 
          Here's how to get started with Now I Can Foundation.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Journey with Now I Can</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Schedule a free consultation with our team to discuss your child's needs and learn how our therapy services can help.
                </p>
                <Link 
                  to="/for-families/getting-started/free-consultation" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 font-bold text-2xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Patient Information</h3>
                <p className="text-gray-600 mb-4">
                  Complete and submit your child's patient information forms to help us prepare for your therapy sessions.
                </p>
                <Link 
                  to="/for-families/getting-started/patient-information" 
                  className="btn bg-purple-600 text-white hover:bg-purple-700"
                >
                  Patient Information
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 font-bold text-2xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Schedule Therapy</h3>
                <p className="text-gray-600 mb-4">
                  Review our therapy schedule and work with our team to find the best time for your child's intensive or traditional therapy sessions.
                </p>
                <Link 
                  to="/therapy-services/therapy-schedule" 
                  className="btn bg-green-600 text-white hover:bg-green-700"
                >
                  View Therapy Schedule
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-coral-100 text-coral-600 font-bold text-2xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Financial Arrangements</h3>
                <p className="text-gray-600 mb-4">
                  Learn about our payment options and financial assistance programs to help make therapy services more affordable.
                </p>
                <Link 
                  to="/for-families/financial-support" 
                  className="btn bg-coral-500 text-white hover:bg-coral-600"
                >
                  Payment & Financial Aid
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Accommodations</h3>
                <p className="text-gray-600 mb-4">
                  If you're traveling from out of town, explore our recommendations for lodging and local activities during your stay.
                </p>
                <Link 
                  to="/for-families/accommodations" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                >
                  Find Accommodations
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Have Questions?</h2>
          <p className="text-gray-700 mb-6">
            Our team is here to help you navigate the process of getting started with Now I Can. If you have any questions or need assistance, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/for-families" 
              className="btn bg-white border border-blue-500 text-blue-600 hover:bg-blue-50"
            >
              View FAQs
            </Link>
            <Link 
              to="/contact-us" 
              className="btn bg-blue-600 text-white hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;