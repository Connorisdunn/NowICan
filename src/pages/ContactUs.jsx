import React from 'react';
import { Link } from 'react-router-dom';

import contactusImg from '../assets/images/contactus.jpg';

const ContactUs = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-lg">
            <img 
              src={contactusImg}
              alt="Contact Now I Can" 
              className="w-full h-64 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold font-heading mb-6 text-center">Contact Us</h1>
          <p className="text-lg mb-8 text-center">
            We're here to answer your questions and help your child reach their full potential.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Utah Location */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Now I Can - Utah</h2>
              <address className="not-italic mb-4">
                <p className="mb-1">1950 S 375 E</p>
                <p className="mb-1">Orem, UT 84058</p>
                <p className="mb-3">
                  <a href="tel:+18012281935" className="text-primary-blue-600 hover:text-primary-blue-800">
                    (801) 228-1935
                  </a>
                </p>
                <p>
                  <a href="mailto:info@nowican.org" className="text-primary-blue-600 hover:text-primary-blue-800">
                    info@nowican.org
                  </a>
                </p>
              </address>
            </div>
            
            {/* Pennsylvania Location */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Now I Can - Pennsylvania</h2>
              <address className="not-italic mb-4">
                <p className="mb-1">100 West Millport Road</p>
                <p className="mb-1">Lititz, PA 17543</p>
                <p className="mb-3">
                  <a href="tel:+17172695829" className="text-primary-orange-600 hover:text-primary-orange-800">
                    (717) 269-5829
                  </a>
                </p>
                <p>
                  <a href="mailto:allison@nowican.org" className="text-primary-orange-600 hover:text-primary-orange-800">
                    allison@nowican.org
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          {/* Centralized Free Consultation Button */}
          <div className="flex justify-center mb-12">
            <Link 
              to="/for-families/getting-started/free-consultation" 
              className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 text-center px-8 py-3 text-lg"
            >
              Schedule a Free Consultation
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input rounded-md shadow-sm w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input rounded-md shadow-sm w-full"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input rounded-md shadow-sm w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-textarea rounded-md shadow-sm w-full"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;