import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentProcessor from '../../components/families/PaymentProcessor';

const FinancialSupport = () => {
  const [activeTab, setActiveTab] = useState('payment-options');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showGrantForm, setShowGrantForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('utah');
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Financial Support</h1>
        <p className="text-lg mb-8">
          At Now I Can, we understand that investing in your child's therapy is a significant financial commitment.
          We're committed to making our services accessible to as many families as possible.
        </p>
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            className={`mr-2 py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'payment-options'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('payment-options')}
          >
            Payment Options
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'therapy-grants'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('therapy-grants')}
          >
            Therapy Grants
          </button>
        </div>
        
        {/* Payment Options Content */}
        {activeTab === 'payment-options' && (
          <>
            {!showPaymentForm ? (
              <>
                <section className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Credit Card</h3>
                      </div>
                      <p className="text-gray-700">
                        We accept all major credit cards including Visa, MasterCard, American Express, and Discover.
                        Payments can be made online, by phone, or in person.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Check / ACH</h3>
                      </div>
                      <p className="text-gray-700">
                        Personal checks are accepted for payment. We also offer electronic ACH transfers directly from your 
                        bank account for convenient, recurring payments.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">HSA / FSA</h3>
                      </div>
                      <p className="text-gray-700">
                        Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can be used for our therapy 
                        services. We can provide all necessary documentation for your records.
                      </p>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-4">Payment Plans</h3>
                      <p className="text-gray-700 mb-4">
                        We offer customized payment plans to help spread the cost of therapy over time. Our payment plans are 
                        designed to be flexible and accommodate various financial situations.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>No interest payment plans</li>
                        <li>Flexible payment schedules</li>
                        <li>Customized to your financial situation</li>
                        <li>Easy automated payments</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-bold mb-4">Insurance Information</h3>
                      <p className="text-gray-700 mb-4">
                        While Now I Can does not directly bill insurance companies, many families have been successful in 
                        obtaining partial reimbursement from their insurance providers.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We provide detailed documentation to help you submit claims:
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
                        <li>Superbills with appropriate CPT codes</li>
                        <li>Detailed treatment notes</li>
                        <li>Therapy progress reports</li>
                        <li>Letters of medical necessity (upon request)</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                <section className="mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center flex-wrap mb-6">
                      <h2 className="text-2xl font-bold">Make a Payment</h2>
                      <button 
                        onClick={() => setShowPaymentForm(true)} 
                        className="btn bg-blue-600 text-white hover:bg-blue-700 text-center"
                      >
                        Access Payment Portal
                      </button>
                    </div>
                    <p className="text-gray-700">
                      Ready to make a payment for your child's therapy session? We've made it simple and secure 
                      to pay online through our payment portal. If you need assistance with your payment, please 
                      contact our financial team.
                    </p>
                  </div>
                </section>
              </>
            ) : (
              <div>
                <div className="mb-6 flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Payment Portal</h2>
                  <button 
                    onClick={() => setShowPaymentForm(false)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Payment Options
                  </button>
                </div>
                <PaymentProcessor />
              </div>
            )}
          </>
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
                      <div className="flex space-x-4">
                        <button 
                          className={`px-4 py-2 rounded-lg border ${selectedLocation === 'utah' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                          onClick={() => setSelectedLocation('utah')}
                        >
                          Utah (Orem)
                        </button>
                        <button 
                          className={`px-4 py-2 rounded-lg border ${selectedLocation === 'pennsylvania' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                          onClick={() => setSelectedLocation('pennsylvania')}
                        >
                          Pennsylvania (Lititz)
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex justify-center">
                      <button 
                        className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
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
                      <p className="text-gray-700 italic mb-6 text-center">
                        Note: This is a demonstration form. In the real application, this would be a fully functional grant application form.
                      </p>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name *</label>
                            <div className="grid grid-cols-2 gap-4">
                              <input 
                                type="text" 
                                placeholder="First Name" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                              <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                            <input 
                              type="date" 
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name *</label>
                            <div className="grid grid-cols-2 gap-4">
                              <input 
                                type="text" 
                                placeholder="First Name" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                              <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information *</label>
                            <div className="grid grid-cols-2 gap-4">
                              <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                              <input 
                                type="tel" 
                                placeholder="Phone" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Briefly describe why you're applying for financial assistance:</label>
                          <textarea 
                            rows={4} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Please share your situation and needs..."
                          />
                        </div>

                        <div className="flex justify-center space-x-4">
                          <button 
                            type="button" 
                            className="btn bg-gray-500 text-white hover:bg-gray-600"
                            onClick={() => setShowGrantForm(false)}
                          >
                            Cancel
                          </button>
                          <button 
                            type="button" 
                            className="btn bg-blue-600 text-white hover:bg-blue-700"
                            onClick={() => {
                              alert("This is a demonstration form. In a real application, your information would be submitted for review.");
                              setShowGrantForm(false);
                            }}
                          >
                            Submit Application
                          </button>
                        </div>
                        
                        <p className="text-sm text-gray-600 italic text-center">
                          * Required fields. Additional documentation will be requested after initial application submission.
                        </p>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </section>
            
            <section className="mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Additional Financial Resources</h2>
                <p className="text-gray-700 mb-6">
                  In addition to our Ability Fund grants, we encourage families to explore these other potential sources of funding:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>State-specific disability support programs</li>
                      <li>Local charitable organizations</li>
                      <li>Disease-specific foundations that provide grants</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Community fundraising options</li>
                      <li>Corporate assistance programs</li>
                      <li>Advocacy organizations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  Our team is happy to provide guidance on exploring these additional funding sources. 
                  Please contact us if you would like more information.
                </p>
              </div>
            </section>
          </>
        )}
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help with Financial Options?</h2>
          <p className="text-lg mb-6">
            Our team is here to help you navigate your financial options and find the best solution for your family.
            Contact us today to discuss your specific needs.
          </p>
          <Link 
            to="/contact-us" 
            className="btn bg-white text-blue-600 hover:bg-blue-50"
          >
            Contact Our Financial Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinancialSupport;