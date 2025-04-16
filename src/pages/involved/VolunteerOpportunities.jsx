import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import volunteerImg from '../../assets/images/volunteer.jpg';

const VolunteerOpportunities = () => {
  const [location, setLocation] = useState('utah');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        {formSubmitted ? (
          <div className="bg-primary-orange-50 border border-primary-orange-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary-orange-800 mb-4 text-center">Thank You for Your Interest in Volunteering!</h2>
            <p className="text-lg text-center mb-6">
              We've received your volunteer application and will contact you soon about opportunities at Now I Can.
            </p>
            <p className="text-center">
              <button
                onClick={() => setFormSubmitted(false)}
                className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 mt-4"
              >
                Return to Volunteer Information
              </button>
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 overflow-hidden rounded-lg">
              <img 
                src={volunteerImg} 
                alt="Volunteer Opportunities at Now I Can" 
                className="w-full h-96 object-cover"
                style={{ objectPosition: '90% 20%' }}
              />
            </div>
            <h1 className="text-4xl font-bold font-heading mb-6">Volunteer Opportunities</h1>
            
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Make a Difference in Children's Lives</h2>
                <p className="text-lg mb-6">
                  Volunteers are an essential part of the Now I Can family. Your time and talents help us provide 
                  life-changing therapy to children with disabilities, while creating a positive and supportive 
                  environment for families during their time with us.
                </p>
                <p className="text-lg">
                  Whether you can volunteer regularly or for a special event, your contribution makes a meaningful 
                  impact on the children and families we serve. We offer a variety of volunteer opportunities to 
                  match your interests, skills, and availability.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Volunteer at Your Preferred Location</h2>
              
              {/* TOGGLE SWITCH */}
              <div className="mb-8 flex justify-center">
                <div className="relative inline-flex items-center bg-gray-200 rounded-full h-12 w-80">
                  {/* Utah Button */}
                  <button
                    className={`absolute left-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                      location === 'utah' 
                      ? 'text-white' 
                      : 'text-gray-700'
                    }`}
                    onClick={() => setLocation('utah')}
                  >
                    Utah
                  </button>
                  
                  {/* Pennsylvania Button */}
                  <button
                    className={`absolute right-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                      location === 'pennsylvania' 
                      ? 'text-white' 
                      : 'text-gray-700'
                    }`}
                    onClick={() => setLocation('pennsylvania')}
                  >
                    Pennsylvania
                  </button>
                  
                  {/* Sliding Background */}
                  <span 
                    className={`absolute h-10 w-1/2 rounded-full transition-all duration-300 ease-in-out ${
                      location === 'utah' ? 'left-1 bg-primary-blue-600' : 'left-40 bg-primary-orange-600'
                    }`}
                  ></span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Volunteer Application - {location === 'utah' ? 'Utah Location' : 'Pennsylvania Location'}
                </h3>
                <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      How would you like to help? (Select all that apply) *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start">
                        <input
                          id="therapy-assistant"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="therapy-assistant" className="ml-2 block text-sm text-gray-700">
                          Help during therapy sessions
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="administrative"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="administrative" className="ml-2 block text-sm text-gray-700">
                          Office and administrative tasks
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="events"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="events" className="ml-2 block text-sm text-gray-700">
                          Fundraising and special events
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="maintenance"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="maintenance" className="ml-2 block text-sm text-gray-700">
                          Facility cleaning and maintenance
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="family-support"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="family-support" className="ml-2 block text-sm text-gray-700">
                          Support for families (meals, transportation)
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="professional"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-primary-blue-600 focus:ring-primary-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="professional" className="ml-2 block text-sm text-gray-700">
                          Professional skills (marketing, design, legal)
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      How often can you volunteer? *
                    </label>
                    <select
                      id="availability"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500"
                      required
                    >
                      <option value="">Please select</option>
                      <option value="weekly">Weekly (Regular Schedule)</option>
                      <option value="monthly">Monthly</option>
                      <option value="events">Special Events Only</option>
                      <option value="flexible">Flexible Schedule</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      What skills or experience can you bring?
                    </label>
                    <textarea
                      id="experience"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500"
                      placeholder="Please share any skills or experience that might be helpful."
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to volunteer with Now I Can? *
                    </label>
                    <textarea
                      id="motivation"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500"
                      placeholder="Please share your reasons for wanting to volunteer with us."
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className={`btn text-white text-lg px-8 py-3 rounded-lg ${
                        location === 'utah' ? 'bg-primary-blue-600 hover:bg-primary-blue-700' : 'bg-primary-orange-600 hover:bg-primary-orange-700'
                      }`}
                    >
                      Submit Volunteer Application
                    </button>
                  </div>
                </form>
              </div>
            </section>
            
            <section>
              <div className="bg-white rounded-lg shadow-md p-8">
                <p className="text-lg text-center">
                  Have questions about volunteering? Contact us at{' '}
                  <a href={`mailto:${location === 'utah' ? 'info@nowican.org' : 'allison@nowican.org'}`} className={`${location === 'utah' ? 'text-primary-blue-600 hover:text-primary-blue-800' : 'text-primary-orange-600 hover:text-primary-orange-800'}`}>
                    {location === 'utah' ? 'info@nowican.org' : 'allison@nowican.org'}
                  </a>{' '}
                  or call {location === 'utah' ? '(801) 228-1935' : '(717) 269-5829'}.
                </p>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default VolunteerOpportunities;