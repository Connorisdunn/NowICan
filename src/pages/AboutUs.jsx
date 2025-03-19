import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">About Us</h1>
        <p className="text-lg mb-8">This is a placeholder for the About Us page.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/about-us/our-story-mission" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Our Story</h3>
            <p className="text-gray-600">Learn about the founding and values of Now I Can Foundation.</p>
          </Link>
                    
          <Link to="/about-us/our-team" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Our Team</h3>
            <p className="text-gray-600">Meet our dedicated team of therapists.</p>
          </Link>
                    
          <Link to="/about-us/locations" className="card p-6 hover:bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Locations</h3>
            <p className="text-gray-600">Find information about our therapy centers in Utah and Pennsylvania.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;