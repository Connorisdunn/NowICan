import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">Thank You for Your Interest in Volunteering!</h2>
            <p className="text-lg text-center mb-6">
              We've received your volunteer application and will contact you soon about opportunities at Now I Can.
            </p>
            <p className="text-center">
              <button
                onClick={() => setFormSubmitted(false)}
                className="btn bg-blue-600 text-white hover:bg-blue-700 mt-4"
              >
                Return to Volunteer Information
              </button>
            </p>
          </div>
        ) : (
          <>
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
              <h2 className="text-3xl font-bold mb-6">Volunteer Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Therapy Assistants</h3>
                  <p className="text-gray-700 mb-4">
                    Help our therapists during therapy sessions by assisting with equipment setup, engaging with children 
                    during activities, and providing encouragement and motivation.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>No prior therapy experience required</li>
                    <li>Training provided</li>
                    <li>Regular weekly schedules preferred</li>
                    <li>Great for students interested in healthcare</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Administrative Support</h3>
                  <p className="text-gray-700 mb-4">
                    Assist with office tasks such as answering phones, filing, data entry, and preparing materials 
                    for therapy sessions and events.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Flexible scheduling available</li>
                    <li>Basic computer skills helpful</li>
                    <li>Perfect for detail-oriented volunteers</li>
                    <li>Help with organizational tasks</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Special Events</h3>
                  <p className="text-gray-700 mb-4">
                    Help plan and execute fundraising events, awareness campaigns, and community outreach activities 
                    to support Now I Can's mission.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Event-specific commitments</li>
                    <li>Great for those with limited availability</li>
                    <li>Utilize creative and organizational skills</li>
                    <li>Help with setup, execution, and cleanup</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Facility Maintenance</h3>
                  <p className="text-gray-700 mb-4">
                    Help maintain our therapy facilities by assisting with cleaning, organization, minor repairs, 
                    and equipment maintenance.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Ideal for those with practical skills</li>
                    <li>Flexible scheduling possible</li>
                    <li>Help create a safe, clean environment</li>
                    <li>Projects can be scheduled around your availability</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Family Support</h3>
                  <p className="text-gray-700 mb-4">
                    Provide assistance to families during their stay, such as helping with transportation, running errands, 
                    or providing meals for families during intensive therapy sessions.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Perfect for compassionate individuals</li>
                    <li>Make a direct impact on families' experiences</li>
                    <li>Flexible commitment options</li>
                    <li>Welcome families to the area</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Professional Services</h3>
                  <p className="text-gray-700 mb-4">
                    Share your professional expertise in areas such as marketing, graphic design, photography, 
                    legal services, accounting, or technology support.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Project-based volunteering</li>
                    <li>Use your professional skills for good</li>
                    <li>Help with organizational needs</li>
                    <li>Make a lasting impact</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Volunteer Requirements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-3">General Requirements:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Must be at least 16 years old (or 14-15 with parental supervision)</li>
                      <li>Complete a background check (for volunteers 18 and older)</li>
                      <li>Attend a volunteer orientation session</li>
                      <li>Maintain confidentiality regarding patient information</li>
                      <li>Reliable and punctual for scheduled volunteer times</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">For Therapy Assistants:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Comfort working with children with various disabilities</li>
                      <li>Ability to follow therapist instructions precisely</li>
                      <li>Physically able to assist with therapy activities</li>
                      <li>Patience and positive attitude</li>
                      <li>Commitment to a regular schedule</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Volunteer at Your Preferred Location</h2>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center mb-8">
                <button 
                  className={`px-6 py-3 rounded-lg text-lg ${location === 'utah' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setLocation('utah')}
                >
                  Utah
                </button>
                <button 
                  className={`px-6 py-3 rounded-lg text-lg ${location === 'pennsylvania' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setLocation('pennsylvania')}
                >
                  Pennsylvania
                </button>
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Areas of Interest (Select all that apply) *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div className="flex items-start">
                        <input
                          id="therapy-assistant"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="therapy-assistant" className="ml-2 block text-sm text-gray-700">
                          Therapy Assistant
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="administrative"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="administrative" className="ml-2 block text-sm text-gray-700">
                          Administrative Support
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="events"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="events" className="ml-2 block text-sm text-gray-700">
                          Special Events
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="maintenance"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="maintenance" className="ml-2 block text-sm text-gray-700">
                          Facility Maintenance
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="family-support"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="family-support" className="ml-2 block text-sm text-gray-700">
                          Family Support
                        </label>
                      </div>
                      <div className="flex items-start">
                        <input
                          id="professional"
                          name="interests"
                          type="checkbox"
                          className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="professional" className="ml-2 block text-sm text-gray-700">
                          Professional Services
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                      Relevant Experience or Skills
                    </label>
                    <textarea
                      id="experience"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please share any relevant experience, skills, or qualifications you have."
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                      Why are you interested in volunteering with Now I Can? *
                    </label>
                    <textarea
                      id="motivation"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please share your motivation for volunteering with us."
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      className={`btn text-white text-lg px-8 py-3 rounded-lg ${
                        location === 'utah' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'
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
                <h2 className="text-2xl font-bold mb-4 text-center">Volunteer Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={`${location === 'utah' ? 'bg-blue-50 border-blue-100' : 'bg-purple-50 border-purple-100'} rounded-lg p-6 border`}>
                    <h3 className={`text-lg font-bold mb-2 ${location === 'utah' ? 'text-blue-800' : 'text-purple-800'}`}>Make a Difference</h3>
                    <p>
                      Directly contribute to improving the lives of children with disabilities and their families. 
                      See firsthand the progress and joy that intensive therapy brings.
                    </p>
                  </div>
                  <div className={`${location === 'utah' ? 'bg-blue-50 border-blue-100' : 'bg-purple-50 border-purple-100'} rounded-lg p-6 border`}>
                    <h3 className={`text-lg font-bold mb-2 ${location === 'utah' ? 'text-blue-800' : 'text-purple-800'}`}>Gain Experience</h3>
                    <p>
                      Develop valuable skills and experience in healthcare, nonprofit operations, or your area of 
                      expertise. Perfect for students in related fields.
                    </p>
                  </div>
                  <div className={`${location === 'utah' ? 'bg-blue-50 border-blue-100' : 'bg-purple-50 border-purple-100'} rounded-lg p-6 border`}>
                    <h3 className={`text-lg font-bold mb-2 ${location === 'utah' ? 'text-blue-800' : 'text-purple-800'}`}>Join Our Community</h3>
                    <p>
                      Become part of the Now I Can family—a community of dedicated professionals, volunteers, 
                      and families working together to change lives.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-center mt-8">
                  Have questions about volunteering? Contact us at{' '}
                  <a href={`mailto:${location === 'utah' ? 'info@nowican.org' : 'allison@nowican.org'}`} className={`${location === 'utah' ? 'text-blue-600 hover:text-blue-800' : 'text-purple-600 hover:text-purple-800'}`}>
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