import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import contactusImg from '../assets/images/contactus.jpg';

const ContactUs = () => {
  // Add state for form submission and form data
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    office: 'utah' // Default to Utah office
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    // Since there's no backend, we'll just simulate a successful submission
    
    // Check if all required fields are filled
    if (formData.name && formData.email && formData.subject && formData.message) {
      // Show success message
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          office: 'utah'
        });
      }, 5000);
    }
  };

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
            
            {/* Success Message */}
            {isSubmitted && (
              <div className={`${formData.office === 'utah' ? 'bg-blue-100 border-blue-400 text-blue-700' : 'bg-orange-100 border-orange-400 text-orange-700'} border px-4 py-3 rounded relative mb-6 flex items-center justify-between`} role="alert">
                <div>
                  <span className="font-bold">Thank you!</span>
                  <span className="block sm:inline"> Your message has been sent successfully to our {formData.office === 'utah' ? 'Utah' : 'Pennsylvania'} office. We'll get back to you soon.</span>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className={`${formData.office === 'utah' ? 'text-blue-700 hover:text-blue-900' : 'text-orange-700 hover:text-orange-900'}`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input rounded-md shadow-sm w-full"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="office" className="block text-sm font-medium text-gray-700 mb-1 text-center">
                  Which Office Are You Contacting? *
                </label>
                <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-center">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="utah-office"
                      name="office"
                      value="utah"
                      checked={formData.office === 'utah'}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-blue-600 focus:ring-primary-blue-500"
                      required
                    />
                    <label htmlFor="utah-office" className="ml-2 block text-sm text-gray-700">
                      Utah Office
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pennsylvania-office"
                      name="office"
                      value="pennsylvania"
                      checked={formData.office === 'pennsylvania'}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-orange-600 focus:ring-primary-orange-500"
                    />
                    <label htmlFor="pennsylvania-office" className="ml-2 block text-sm text-gray-700">
                      Pennsylvania Office
                    </label>
                  </div>
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
                  value={formData.subject}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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