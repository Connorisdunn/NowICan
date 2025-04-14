import React from 'react';
import { Link } from 'react-router-dom';

const TherapyServices = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Therapy Services</h1>
        <p className="text-lg mb-8">This is a placeholder for the Therapy Services page.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/therapy-services/intensive-physical-therapy" className="card p-6 hover:bg-primary-blue-50">
            <h3 className="text-xl font-bold mb-2">Intensive Physical Therapy</h3>
            <p className="text-gray-600">Learn about our intensive therapy model that provides 4 hours of therapy per day, 5 days a week.</p>
          </Link>
          
          <Link to="/therapy-services/traditional-physical-therapy" className="card p-6 hover:bg-primary-blue-50">
            <h3 className="text-xl font-bold mb-2">Traditional Physical Therapy</h3>
            <p className="text-gray-600">Discover our traditional therapy options for ongoing care.</p>
          </Link>
          
          <Link to="/therapy-services/who-we-serve" className="card p-6 hover:bg-primary-blue-50">
            <h3 className="text-xl font-bold mb-2">Who We Serve</h3>
            <p className="text-gray-600">Learn about the children and conditions we specialize in treating.</p>
          </Link>
          
          <Link to="/therapy-services/treatment-methods" className="card p-6 hover:bg-primary-blue-50">
            <h3 className="text-xl font-bold mb-2">Treatment Methods</h3>
            <p className="text-gray-600">Explore the innovative therapy techniques we use to help children achieve their goals.</p>
          </Link>
          
          <Link to="/therapy-services/therapy-schedule" className="card p-6 hover:bg-primary-blue-50">
            <h3 className="text-xl font-bold mb-2">Therapy Schedule</h3>
            <p className="text-gray-600">View our current therapy schedule and session availability.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TherapyServices;