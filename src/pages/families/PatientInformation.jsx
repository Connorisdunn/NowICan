import React from 'react';
import { Link } from 'react-router-dom';

const PatientInformation = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-center">Patient Information</h1>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Please complete the patient information form below to help us prepare for your child's therapy.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-6">Patient Information Form</h2>
            
            <form className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Patient Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="patientFirstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="patientFirstName"
                      name="patientFirstName"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="patientLastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="patientLastName"
                      name="patientLastName"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="form-select rounded-md shadow-sm w-full"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Diagnosis *
                    </label>
                    <input
                      type="text"
                      id="diagnosis"
                      name="diagnosis"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="additionalDiagnosis" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Diagnoses
                  </label>
                  <input
                    type="text"
                    id="additionalDiagnosis"
                    name="additionalDiagnosis"
                    className="form-input rounded-md shadow-sm w-full"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Parent/Guardian Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="parentFirstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="parentFirstName"
                      name="parentFirstName"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="parentLastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="parentLastName"
                      name="parentLastName"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="form-input rounded-md shadow-sm w-full"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-input rounded-md shadow-sm w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="form-input rounded-md shadow-sm w-full"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        Zip Code *
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        className="form-input rounded-md shadow-sm w-full"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Medical Information</h3>
                
                <div className="mb-4">
                  <label htmlFor="currentTherapies" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Therapies
                  </label>
                  <textarea
                    id="currentTherapies"
                    name="currentTherapies"
                    rows="3"
                    className="form-textarea rounded-md shadow-sm w-full"
                    placeholder="Please list any current physical, occupational, or speech therapy services."
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Medications
                  </label>
                  <textarea
                    id="medications"
                    name="medications"
                    rows="3"
                    className="form-textarea rounded-md shadow-sm w-full"
                    placeholder="Please list any current medications, including dosage and frequency."
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
                    Allergies
                  </label>
                  <textarea
                    id="allergies"
                    name="allergies"
                    rows="2"
                    className="form-textarea rounded-md shadow-sm w-full"
                    placeholder="Please list any allergies, including medications, foods, and environmental allergens."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                    Therapy Goals *
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows="4"
                    className="form-textarea rounded-md shadow-sm w-full"
                    placeholder="Please describe what you hope to achieve through therapy at Now I Can."
                    required
                  ></textarea>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4 pb-2 border-b border-gray-200">Insurance Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-1">
                      Insurance Provider
                    </label>
                    <input
                      type="text"
                      id="insuranceProvider"
                      name="insuranceProvider"
                      className="form-input rounded-md shadow-sm w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Policy Number
                    </label>
                    <input
                      type="text"
                      id="policyNumber"
                      name="policyNumber"
                      className="form-input rounded-md shadow-sm w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="groupNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Group Number
                    </label>
                    <input
                      type="text"
                      id="groupNumber"
                      name="groupNumber"
                      className="form-input rounded-md shadow-sm w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="policyHolder" className="block text-sm font-medium text-gray-700 mb-1">
                      Policy Holder Name
                    </label>
                    <input
                      type="text"
                      id="policyHolder"
                      name="policyHolder"
                      className="form-input rounded-md shadow-sm w-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="font-medium text-gray-700">
                      I consent to Now I Can Foundation collecting and storing the information provided in this form for the purpose of providing therapy services. *
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Patient Information
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-medium text-blue-800 mb-3">Need Assistance?</h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about the patient information form or need help completing it, please contact us:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Utah: (801) 228-1935 | Pennsylvania: (717) 269-5829</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email: info@nowican.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;