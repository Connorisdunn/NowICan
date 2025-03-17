import React from 'react';
import { Link } from 'react-router-dom';

const ForFamilies = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">For Families</h1>
        <p className="text-lg mb-8">This is a placeholder for the For Families page.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/for-families/getting-started" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Getting Started</h3>
            <p className="text-gray-600">Learn how to begin therapy services with Now I Can.</p>
          </Link>
          
          <Link to="/for-families/therapy-schedule" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Therapy Schedule</h3>
            <p className="text-gray-600">View our therapy schedule and session availability.</p>
          </Link>
          
          <Link to="/for-families/payment-financial-aid" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Payment & Financial Aid</h3>
            <p className="text-gray-600">Learn about payment options and financial assistance for therapy services.</p>
          </Link>
          
          <Link to="/for-families/accommodations" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Accommodations</h3>
            <p className="text-gray-600">Find information about lodging and activities during your stay.</p>
          </Link>
          
          <Link to="/for-families/testimonials" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Testimonials</h3>
            <p className="text-gray-600">Read success stories from families who have participated in our therapy programs.</p>
          </Link>
          
          <Link to="/for-families/faqs" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">FAQs</h3>
            <p className="text-gray-600">Find answers to frequently asked questions about our therapy services.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForFamilies;