import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import finaceImage from '../../assets/images/financeheader.jpg';

const FinancialSupport = () => {
  const [activeTab, setActiveTab] = useState('payment-options');
  const [showGrantForm, setShowGrantForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('utah');
  
  // File state management
  const [introLetterFileName, setIntroLetterFileName] = useState('No file chosen');
  const [w2FileName, setW2FileName] = useState('No file chosen');
  const [unemploymentFileName, setUnemploymentFileName] = useState('No file chosen');
  const [additionalIncomeFiles, setAdditionalIncomeFiles] = useState('No files chosen');
  
  // Handle file selection
  const handleFileChange = (e, setFileName) => {
    if (e.target.files.length > 0) {
      if (e.target.multiple) {
        setFileName(`${e.target.files.length} files selected`);
      } else {
        setFileName(e.target.files[0].name);
      }
    } else {
      if (e.target.multiple) {
        setFileName('No files chosen');
      } else {
        setFileName('No file chosen');
      }
    }
  };
  
  // Payment form URL
  const paymentFormUrl = "https://secure.lglforms.com/form_engine/s/bt5gHYdbJSqj7-OB4eA91Q";
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src={finaceImage} 
            alt="Financial Support at Now I Can" 
            className="w-full h-96 object-cover object-position-center-top"
          />
        </div>
        <h1 className="text-4xl font-bold font-heading mb-6">Payment & Financial Aid</h1>
        <p className="text-lg mb-8">
          At Now I Can, we understand that investing in your child's therapy is a significant financial commitment.
          We're committed to making our services accessible to as many families as possible.
        </p>
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            className={`mr-2 py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'payment-options'
                ? 'bg-primary-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('payment-options')}
          >
            Payment Options
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'therapy-grants'
                ? 'bg-primary-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('therapy-grants')}
          >
            Therapy Grants
          </button>
        </div>
        
        {/* Payment Options Content */}
        {activeTab === 'payment-options' && (
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Make a Payment</h2>
              <p className="text-gray-700 mb-8 text-center">
                Ready to make a payment for your child's therapy session? First, select which Now I Can location you're paying for:
              </p>
              
              <div className="mb-8 flex justify-center">
                <div className="relative inline-flex items-center bg-gray-200 rounded-full h-12 w-80">
                  {/* Utah Button */}
                  <button
                    className={`absolute left-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                      selectedLocation === 'utah' 
                      ? 'text-white' 
                      : 'text-gray-700'
                    }`}
                    onClick={() => setSelectedLocation('utah')}
                  >
                    Utah
                  </button>
                  
                  {/* Pennsylvania Button */}
                  <button
                    className={`absolute right-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                      selectedLocation === 'pennsylvania' 
                      ? 'text-white' 
                      : 'text-gray-700'
                    }`}
                    onClick={() => setSelectedLocation('pennsylvania')}
                  >
                    Pennsylvania
                  </button>
                  
                  {/* Sliding Background */}
                  <span 
                    className={`absolute h-10 w-1/2 rounded-full transition-all duration-300 ease-in-out ${
                      selectedLocation === 'utah' ? 'left-1 bg-primary-blue-600' : 'left-40 bg-primary-orange-600'
                    }`}
                  ></span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href={paymentFormUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`btn text-white text-lg px-8 py-3 ${
                    selectedLocation === 'utah' ? 'bg-primary-blue-600 hover:bg-primary-blue-700' : 'bg-primary-orange-600 hover:bg-primary-orange-700'
                  }`}
                >
                  Proceed to Payment Portal
                </a>
              </div>
              
              <p className="text-gray-500 text-sm italic text-center mt-6">
                You will be redirected to our secure payment processor to complete your transaction.
              </p>
            </div>
          </section>
        )}
        
        {/* Therapy Grants Content */}
        {activeTab === 'therapy-grants' && (
          <>
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">The Now I Can Ability Fund</h2>
                <p className="text-gray-700 mb-4">
                  Special needs parents yearn to see their child hit the milestones that most reach without any effort at all. 
                  These parents watch their children put enormous effort into their physical therapy sessions, hoping to see great results.
                </p>
                <p className="text-gray-700">
                  The good news is, in addition to providing therapy and care unmatched by traditional PT clinics, 
                  Now I Can Foundation is pleased to provide grants for many patients through our Ability Fund. 
                  While we always ask families to pay <span className="font-bold italic">some</span>, we are happy to 
                  lighten the burden and make it possible for more kids to say "now I can"!
                </p>
                <p className="text-gray-700">
                A specific committee of board members reviews grant applications, and then carefully allocates the funds raised from events and donors to families based on need. Because we know the financial needs all of our families experience, we try to give some amount to all who ask. We want to make sure that money is never the reason a child cannot come to Now I Can for physical therapy!
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">How Our Grant Program Works</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>A committee of board members reviews all applications</li>
                    <li>Grants are allocated based on demonstrated financial need</li>
                    <li>We try to provide some assistance to all qualifying families</li>
                    <li>Funds come from donations and fundraising events</li>
                    <li>Grant amounts are applied directly to therapy costs</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">What You'll Need to Apply</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>A letter introducing your family to the review committee</li>
                    <li>Most recent W-2 statement(s)</li>
                    <li>Documentation of income and expenses</li>
                    <li>Insurance information (if applicable)</li>
                    <li>Description of your child's therapy needs</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                {!showGrantForm ? (
                  <>
                    <h2 className="text-2xl font-bold mb-4">Apply for a Therapy Grant</h2>
                    <p className="text-gray-700 mb-6">
                      Ready to apply for financial assistance for your child's therapy? Select your preferred 
                      Now I Can location and complete our grant application form.
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3">Select a Location:</h3>
                      <div className="flex justify-center">
                        <div className="relative inline-flex items-center bg-gray-200 rounded-full h-12 w-80">
                          {/* Utah Button */}
                          <button
                            className={`absolute left-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                              selectedLocation === 'utah' 
                              ? 'text-white' 
                              : 'text-gray-700'
                            }`}
                            onClick={() => setSelectedLocation('utah')}
                          >
                            Utah
                          </button>
                          
                          {/* Pennsylvania Button */}
                          <button
                            className={`absolute right-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                              selectedLocation === 'pennsylvania' 
                              ? 'text-white' 
                              : 'text-gray-700'
                            }`}
                            onClick={() => setSelectedLocation('pennsylvania')}
                          >
                            Pennsylvania
                          </button>
                          
                          {/* Sliding Background */}
                          <span 
                            className={`absolute h-10 w-1/2 rounded-full transition-all duration-300 ease-in-out ${
                              selectedLocation === 'utah' ? 'left-1 bg-primary-blue-600' : 'left-40 bg-primary-orange-600'
                            }`}
                          ></span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button 
                        className={`btn text-white text-lg px-8 py-3 ${
                          selectedLocation === 'utah' ? 'bg-primary-blue-600 hover:bg-primary-blue-700' : 'bg-primary-orange-600 hover:bg-primary-orange-700'
                        }`}
                        onClick={() => setShowGrantForm(true)}
                      >
                        Start Grant Application
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <div className="mb-6 flex justify-between items-center">
                      <h2 className="text-2xl font-bold">Grant Application</h2>
                      <button 
                        onClick={() => setShowGrantForm(false)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Grant Information
                      </button>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold mb-4 text-center">
                        Grant Application for Now I Can - {selectedLocation === 'utah' ? 'Utah' : 'Pennsylvania'}
                      </h3>
                      
                      <form className="space-y-6" encType="multipart/form-data">
                        {/* Patient Information Section */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <h4 className="text-lg font-medium mb-4">Patient Information</h4>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Patient Name <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <div>
                                <label className="block text-xs text-gray-500 mb-1">First Name</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-xs text-gray-500 mb-1">Last Name</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Parent/Guardian Name <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              <div>
                                <label className="block text-xs text-gray-500 mb-1">First Name</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-xs text-gray-500 mb-1">Last Name</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Contact Information Section */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <h4 className="text-lg font-medium mb-4">Contact Information</h4>
                          
                          <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Mailing Address <span className="text-red-500">*</span>
                            </label>
                            <div className="mb-2">
                              <label className="block text-xs text-gray-500 mb-1">Country</label>
                              <select className="w-full px-3 py-2 border border-gray-300 rounded-md" required>
                                <option value="">Select a country</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Åland Islands">Åland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="United States">United States</option>
                                {/* More countries would be listed here */}
                              </select>
                            </div>
                            <div className="mb-2">
                              <label className="block text-xs text-gray-500 mb-1">Address Line 1</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                            <div className="mb-2">
                              <label className="block text-xs text-gray-500 mb-1">Address Line 2</label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              <div>
                                <label className="block text-xs text-gray-500 mb-1">City</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-xs text-gray-500 mb-1">State</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-xs text-gray-500 mb-1">ZIP Code</label>
                                <input
                                  type="text"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Insurance Information Section */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <h4 className="text-lg font-medium mb-4">Insurance Information</h4>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Name and Address of Insurance Provider
                            </label>
                            <textarea
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              rows="3"
                            ></textarea>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Group or Plan #
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Policy #
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Subscriber ID# (Social Security #)
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Annual Deductible
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Co-Pay
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              If you have insurance, please indicate the reason for the financial aid application
                            </label>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id="reason-not-covered"
                                  name="insurance-reason"
                                  className="mr-2"
                                />
                                <label htmlFor="reason-not-covered" className="text-sm text-gray-700">
                                  Services and/or diagnosis is not covered
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id="reason-limited"
                                  name="insurance-reason"
                                  className="mr-2"
                                />
                                <label htmlFor="reason-limited" className="text-sm text-gray-700">
                                  Benefits are limited
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  id="reason-deductible"
                                  name="insurance-reason"
                                  className="mr-2"
                                />
                                <label htmlFor="reason-deductible" className="text-sm text-gray-700">
                                  Need assistance with deductible and/or co-pay
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Household Income Section */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <h4 className="text-lg font-medium mb-4">Monthly Household Income</h4>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Primary wage earner's name and occupation
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Monthly gross pay
                            </label>
                            <div className="flex items-center">
                              <span className="mr-2">$</span>
                              <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Secondary wage earner's name and occupation
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Monthly gross pay
                            </label>
                            <div className="flex items-center">
                              <span className="mr-2">$</span>
                              <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Number of adults in household
                              </label>
                              <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Number of children in household
                              </label>
                              <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Patient Statistics Section */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <h4 className="text-lg font-medium mb-4">Patient Statistics (for statistical and grant review purposes only)</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Patient Age
                              </label>
                              <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Gender
                              </label>
                              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Ethnicity
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                              <option value="">Select ethnicity</option>
                              <option value="caucasian">Caucasian</option>
                              <option value="american-indian">American Indian</option>
                              <option value="african-american">African American</option>
                              <option value="asian">Asian</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              City and Country of residence
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        
                        {/* Parent/Guardian Statistics Section */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <h4 className="text-lg font-medium mb-4">Parent/Guardian Statistics (for statistical and grant review purposes only)</h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Parent/Guardian Age
                              </label>
                              <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Gender
                              </label>
                              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Ethnicity
                            </label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                              <option value="">Select ethnicity</option>
                              <option value="caucasian">Caucasian</option>
                              <option value="american-indian">American Indian</option>
                              <option value="african-american">African American</option>
                              <option value="asian">Asian</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              City and Country of residence
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                          </div>
                        </div>
                        
                        {/* File Upload Section */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <h4 className="text-lg font-medium mb-4">Supporting Documents</h4>
                          
                          <p className="text-sm text-gray-700 mb-4">
                            Please attach the following required documents to support your application:
                          </p>
                          
                          {/* Introduction Letter Upload */}
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Introduction Letter <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-600 mb-2">
                              A letter introducing yourselves to the review committee. Please include a brief patient history, 
                              household financial circumstances including significant financial events/situations (loss of employment, 
                              medical bills, etc), and any other factors you would like to have considered.
                            </p>
                            <div className="flex items-center">
                              <input
                                type="file"
                                id="letter-upload"
                                className="hidden"
                                accept=".pdf,.doc,.docx,.txt"
                                required
                                onChange={(e) => handleFileChange(e, setIntroLetterFileName)}
                              />
                              <label
                                htmlFor="letter-upload"
                                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                              >
                                Choose File
                              </label>
                              <span className="ml-3 text-sm text-gray-500">
                                {introLetterFileName}
                              </span>
                            </div>
                          </div>
                          
                          {/* W-2 Statement Upload */}
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Most Recent W-2 Statement(s) <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center">
                              <input
                                type="file"
                                id="w2-upload"
                                className="hidden"
                                accept=".pdf,.jpg,.jpeg,.png"
                                required
                                multiple
                                onChange={(e) => handleFileChange(e, setW2FileName)}
                              />
                              <label
                                htmlFor="w2-upload"
                                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                              >
                                Choose Files
                              </label>
                              <span className="ml-3 text-sm text-gray-500">
                                {w2FileName}
                              </span>
                            </div>
                          </div>
                          
                          {/* Unemployment Documentation Upload */}
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Unemployment Benefit Documentation (if applicable)
                            </label>
                            <p className="text-xs text-gray-600 mb-2">
                              Unemployment benefit determination letter or most recent check stub.
                            </p>
                            <div className="flex items-center">
                              <input
                                type="file"
                                id="unemployment-upload"
                                className="hidden"
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={(e) => handleFileChange(e, setUnemploymentFileName)}
                              />
                              <label
                                htmlFor="unemployment-upload"
                                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                              >
                                Choose File
                              </label>
                              <span className="ml-3 text-sm text-gray-500">
                                {unemploymentFileName}
                              </span>
                            </div>
                          </div>
                          
                          {/* Additional Income Documentation Upload */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Documentation of Other Income (if applicable)
                            </label>
                            <p className="text-xs text-gray-600 mb-2">
                              Documentation of any other income sources such as child support, disability benefits, social security, etc.
                            </p>
                            <div className="flex items-center">
                              <input
                                type="file"
                                id="additional-income-upload"
                                className="hidden"
                                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                                multiple
                                onChange={(e) => handleFileChange(e, setAdditionalIncomeFiles)}
                              />
                              <label
                                htmlFor="additional-income-upload"
                                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                              >
                                Choose Files
                              </label>
                              <span className="ml-3 text-sm text-gray-500">
                                {additionalIncomeFiles}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Agreement */}
                        <div className="border border-gray-200 rounded-md p-4 mb-6">
                          <p className="text-sm text-gray-700 mb-4">
                            By typing my name below, I indicate that the information I have provided is true and 
                            accurate to the best of my knowledge, and I provide permission for this data to be 
                            utilized for evaluation and promotional purposes.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Parent/Guardian Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Date <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="date"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* Submit Buttons */}
                        <div className="flex justify-center space-x-4">
                          <button 
                            type="button" 
                            className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                            onClick={() => setShowGrantForm(false)}
                          >
                            Cancel
                          </button>
                          <button 
                            type="submit" 
                            className={`px-6 py-2 rounded-md text-white ${
                              selectedLocation === 'utah' ? 'bg-primary-blue-600 hover:bg-primary-blue-700' : 'bg-primary-orange-600 hover:bg-primary-orange-700'
                            }`}
                          >
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
        
        {activeTab === 'payment-options' && (
          <div className="bg-gradient-to-r from-primary-blue-600 to-primary-orange-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Learn About Financial Assistance</h2>
            <p className="text-lg mb-6">
              Need help with therapy costs? Our Ability Fund provides grants to eligible families to help cover treatment expenses.
              Click below to explore our grant program and learn how to apply.
            </p>
            <button 
              onClick={() => {
                setActiveTab('therapy-grants');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn bg-white text-primary-blue-600 hover:bg-primary-blue-50"
            >
              Explore Grant Opportunities
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialSupport;