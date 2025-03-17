import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Get Involved</h1>
        <p className="text-lg mb-8">This is a placeholder for the Get Involved page.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-600 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Donate</h3>
              <p className="text-gray-600 mb-4">
                Your financial support helps provide intensive therapy to children who need it. Every donation makes a difference in a child's life.
              </p>
              <Link to="/get-involved/donate" className="btn bg-blue-600 hover:bg-blue-700 text-white w-full">
                Make a Donation
              </Link>
            </div>
          </div>
          
          <div className="card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-600 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Volunteer Opportunities</h3>
              <p className="text-gray-600 mb-4">
                Share your time and talents to help children with disabilities reach their full potential. There are many ways to get involved.
              </p>
              <Link to="/get-involved/volunteer-opportunities" className="btn bg-purple-600 hover:bg-purple-700 text-white w-full">
                Become a Volunteer
              </Link>
            </div>
          </div>
          
          <div className="card overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-600 h-24 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Our Donors</h3>
              <p className="text-gray-600 mb-4">
                Meet the generous individuals and organizations that make our work possible through their financial support.
              </p>
              <Link to="/get-involved/our-donors" className="btn bg-green-600 hover:bg-green-700 text-white w-full">
                View Our Donors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;