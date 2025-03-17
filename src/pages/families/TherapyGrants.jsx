import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TherapyGrants = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('utah');
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Therapy Grants</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Financial Support for Families</h2>
            <p className="text-lg mb-6">
              Special needs parents yearn to see their child hit the milestones that most reach without any effort at all. 
              These parents watch their children put enormous effort into their physical therapy sessions, hoping to see great results.
            </p>
            <p className="text-lg mb-6">
              The significant cost of intensive therapy proves worthwhile time and time again, but at Now I Can we understand 
              how many other needs your children have that also require funds: wheelchairs, crutches, braces, adaptive shoes & clothing, 
              medical equipment & supplies, occupational therapy, speech therapy, nurses, aides, and more. Choosing intensive 
              physical therapy, as life-changing as it is, competes with other needs for the same family dollars.
            </p>
            <p className="text-lg">
              The good news is, in addition to providing therapy and care unmatched by traditional PT clinics, 
              Now I Can Foundation is pleased to provide grants for many patients through our Ability Fund. 
              While we always ask families to pay <span className="font-bold italic">some</span>, we are happy to 
              lighten the burden and make it possible for more kids to say "now I can"!
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">How Our Grant Program Works</h3>
              <p className="text-lg mb-4">
                A specific committee of board members reviews grant applications, and then carefully allocates 
                the funds raised from events and donors to families based on need. Because we know the financial 
                needs all of our families experience, we try to give some amount to all who ask.
              </p>
              <p className="text-lg">
                We want to make sure that money is never the reason a child cannot come to Now I Can for physical therapy!
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Grant Application Process</h3>
              <ol className="list-decimal pl-6 space-y-2 text-lg">
                <li>Complete the online grant application form</li>
                <li>Submit required documentation</li>
                <li>Application review by our committee (typically 2-3 weeks)</li>
                <li>Notification of grant decision</li>
                <li>If approved, grant funds are applied directly to your therapy costs</li>
              </ol>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Grant Application Requirements</h2>
            <p className="text-lg mb-6">
              To apply for a therapy grant, you'll need to provide the following information and documentation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Required Information:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Patient and parent/guardian personal information</li>
                  <li>Insurance details (if applicable)</li>
                  <li>Household income information</li>
                  <li>Demographic information for statistical purposes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Required Documentation:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A letter introducing your family to the review committee</li>
                  <li>Most recent W-2 statement(s)</li>
                  <li>Unemployment benefit determination letter (if applicable)</li>
                  <li>Documentation of any other income</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Apply for a Therapy Grant</h2>
            <p className="text-lg mb-6">
              Ready to apply for financial assistance for your child's therapy? Select your preferred 
              Now I Can location and complete our grant application form.
            </p>
            
            <div className="mb-8">
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
            
            {!showForm ? (
              <div className="flex justify-center">
                <button 
                  className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
                  onClick={() => setShowForm(true)}
                >
                  Start Grant Application
                </button>
              </div>
            ) : (
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
                      <div className="grid grid-cols-3 gap-2">
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                          <option value="">MM</option>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </select>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                          <option value="">DD</option>
                          {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                            <option key={day} value={day}>{day}</option>
                          ))}
                        </select>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                          <option value="">YYYY</option>
                          {Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 20 + i).map(year => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input 
                        type="text" 
                        placeholder="(555) 555-5555" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Contact Method</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </select>
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
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="button" 
                      className="btn bg-blue-600 text-white hover:bg-blue-700"
                      onClick={() => {
                        alert("This is a demonstration form. In a real application, your information would be submitted for review.");
                        setShowForm(false);
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
            )}
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Other Financial Resources</h2>
            <p className="text-lg mb-6">
              In addition to our Ability Fund grants, we encourage families to explore these other potential sources of funding:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
              <li>Insurance coverage (some plans may cover part of therapy costs)</li>
              <li>State-specific disability support programs</li>
              <li>Local charitable organizations</li>
              <li>Disease-specific foundations that provide grants</li>
              <li>Community fundraising options</li>
            </ul>
            <p className="text-lg">
              Our team is happy to provide guidance on exploring these additional funding sources. Please contact us 
              if you would like more information.
            </p>
            <div className="flex justify-center mt-6">
              <Link 
                to="/contact-us" 
                className="btn bg-gray-600 text-white hover:bg-gray-700 text-lg px-8 py-3"
              >
                Contact Us for Assistance
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TherapyGrants;