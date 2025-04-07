import React, { useState } from 'react';

const FreeConsultation = () => {
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    parentNames: '',
    email: '',
    phone: '',
    address: '',
    medicalConditions: '',
    pastTherapies: '',
    equipment: '',
    shoeSize: '',
    shoeSizeBraces: '',
    hearAboutUs: '',
    socialMediaSource: '',
    therapistReferral: '',
    location: 'utah', // default selection
    submitted: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLocationChange = (location) => {
    setFormData(prevData => ({
      ...prevData,
      location
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, we would send this data to a server
    console.log('Form submitted:', formData);
    setFormData(prevData => ({
      ...prevData,
      submitted: true
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Step 1: Patient Information</h3>
            <p className="text-gray-600 mb-6">
              Please provide information about the patient requiring therapy services.
            </p>
            
            <div>
              <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                Child's Name: *
              </label>
              <input
                type="text"
                id="childName"
                name="childName"
                value={formData.childName}
                onChange={handleInputChange}
                className="form-input rounded-md shadow-sm w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                DOB: *
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="form-input rounded-md shadow-sm w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1">
                Current Medical Conditions/Surgeries: *
              </label>
              <textarea
                id="medicalConditions"
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleInputChange}
                rows={3}
                className="form-textarea rounded-md shadow-sm w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="pastTherapies" className="block text-sm font-medium text-gray-700 mb-1">
                Past/Current Therapies:
              </label>
              <textarea
                id="pastTherapies"
                name="pastTherapies"
                value={formData.pastTherapies}
                onChange={handleInputChange}
                rows={3}
                className="form-textarea rounded-md shadow-sm w-full"
              />
            </div>
            
            <div>
              <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1">
                Equipment Used:
              </label>
              <textarea
                id="equipment"
                name="equipment"
                value={formData.equipment}
                onChange={handleInputChange}
                rows={2}
                className="form-textarea rounded-md shadow-sm w-full"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="shoeSize" className="block text-sm font-medium text-gray-700 mb-1">
                  Shoe size:
                </label>
                <input
                  type="text"
                  id="shoeSize"
                  name="shoeSize"
                  value={formData.shoeSize}
                  onChange={handleInputChange}
                  className="form-input rounded-md shadow-sm w-full"
                />
              </div>
              
              <div>
                <label htmlFor="shoeSizeBraces" className="block text-sm font-medium text-gray-700 mb-1">
                  Shoe size with braces:
                </label>
                <input
                  type="text"
                  id="shoeSizeBraces"
                  name="shoeSizeBraces"
                  value={formData.shoeSizeBraces}
                  onChange={handleInputChange}
                  className="form-input rounded-md shadow-sm w-full"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Step 2: Parent/Guardian Information</h3>
            <p className="text-gray-600 mb-6">
              Please provide contact information for the child's parent or guardian.
            </p>
            
            <div>
              <label htmlFor="parentNames" className="block text-sm font-medium text-gray-700 mb-1">
                Parent Names: *
              </label>
              <input
                type="text"
                id="parentNames"
                name="parentNames"
                value={formData.parentNames}
                onChange={handleInputChange}
                className="form-input rounded-md shadow-sm w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address: *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input rounded-md shadow-sm w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number: *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input rounded-md shadow-sm w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="form-textarea rounded-md shadow-sm w-full"
              />
            </div>
            
            <div>
              <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us? *
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                className="form-select rounded-md shadow-sm w-full"
                required
              >
                <option value="">Please select</option>
                <option value="Search Engine">Search Engine (Google, Bing, etc.)</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend or Family">Friend or Family Referral</option>
                <option value="Medical Professional">Medical Professional</option>
                <option value="Therapist">Therapist</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            {formData.hearAboutUs === 'Social Media' && (
              <div>
                <label htmlFor="socialMediaSource" className="block text-sm font-medium text-gray-700 mb-1">
                  If Social Media – Please let us know where:
                </label>
                <input
                  type="text"
                  id="socialMediaSource"
                  name="socialMediaSource"
                  value={formData.socialMediaSource}
                  onChange={handleInputChange}
                  placeholder="Facebook, Instagram, TikTok, etc."
                  className="form-input rounded-md shadow-sm w-full"
                />
              </div>
            )}
            
            {formData.hearAboutUs === 'Therapist' && (
              <div>
                <label htmlFor="therapistReferral" className="block text-sm font-medium text-gray-700 mb-1">
                  If a therapist recommended us to you, please list the therapist and the agency:
                </label>
                <input
                  type="text"
                  id="therapistReferral"
                  name="therapistReferral"
                  value={formData.therapistReferral}
                  onChange={handleInputChange}
                  className="form-input rounded-md shadow-sm w-full"
                />
              </div>
            )}
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Step 3: Select Location</h3>
            <p className="text-gray-600 mb-6">
              Please select the Now I Can location where you would like to receive therapy services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className={`border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                  formData.location === 'utah' 
                    ? 'border-blue-500 bg-blue-50 shadow-md' 
                    : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/30'
                }`}
                onClick={() => handleLocationChange('utah')}
              >
                <div className="flex items-start">
                  <input
                    type="radio"
                    id="locationUtah"
                    name="location"
                    value="utah"
                    checked={formData.location === 'utah'}
                    onChange={() => handleLocationChange('utah')}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="locationUtah" className="block text-lg font-medium text-gray-800 mb-2">
                      Now I Can - Utah
                    </label>
                    <address className="text-gray-600 not-italic">
                      <p>1950 S 375 E</p>
                      <p>Orem, UT 84058</p>
                      <p className="mt-2">
                        <a href="tel:+18012281935" className="text-blue-600 hover:text-blue-800">(801) 228-1935</a>
                      </p>
                      <p>
                        <a href="mailto:info@nowican.org" className="text-blue-600 hover:text-blue-800">info@nowican.org</a>
                      </p>
                    </address>
                  </div>
                </div>
              </div>
              
              <div 
                className={`border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                  formData.location === 'pennsylvania' 
                    ? 'border-purple-500 bg-purple-50 shadow-md' 
                    : 'border-gray-200 hover:border-purple-200 hover:bg-purple-50/30'
                }`}
                onClick={() => handleLocationChange('pennsylvania')}
              >
                <div className="flex items-start">
                  <input
                    type="radio"
                    id="locationPennsylvania"
                    name="location"
                    value="pennsylvania"
                    checked={formData.location === 'pennsylvania'}
                    onChange={() => handleLocationChange('pennsylvania')}
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="locationPennsylvania" className="block text-lg font-medium text-gray-800 mb-2">
                      Now I Can - Pennsylvania
                    </label>
                    <address className="text-gray-600 not-italic">
                      <p>100 West Millport Road</p>
                      <p>Lititz, PA 17543</p>
                      <p className="mt-2">
                        <a href="tel:+17172695829" className="text-purple-600 hover:text-purple-800">(717) 269-5829</a>
                      </p>
                      <p>
                        <a href="mailto:allison@nowican.org" className="text-purple-600 hover:text-purple-800">allison@nowican.org</a>
                      </p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-800">Step 4: Review & Submit</h3>
            <p className="text-gray-600 mb-6">
              Please review your information below and submit your consultation request.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Child Information</h4>
                  <p className="text-gray-600">
                    <span className="font-medium">Name:</span> {formData.childName}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Date of Birth:</span> {formData.dob}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Medical Conditions:</span> {formData.medicalConditions}
                  </p>
                  {formData.pastTherapies && (
                    <p className="text-gray-600">
                      <span className="font-medium">Past/Current Therapies:</span> {formData.pastTherapies}
                    </p>
                  )}
                  {formData.equipment && (
                    <p className="text-gray-600">
                      <span className="font-medium">Equipment Used:</span> {formData.equipment}
                    </p>
                  )}
                  {formData.shoeSize && (
                    <p className="text-gray-600">
                      <span className="font-medium">Shoe Size:</span> {formData.shoeSize}
                    </p>
                  )}
                  {formData.shoeSizeBraces && (
                    <p className="text-gray-600">
                      <span className="font-medium">Shoe Size with Braces:</span> {formData.shoeSizeBraces}
                    </p>
                  )}
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Parent/Guardian Information</h4>
                  <p className="text-gray-600">
                    <span className="font-medium">Name:</span> {formData.parentNames}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> {formData.email}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> {formData.phone}
                  </p>
                  {formData.address && (
                    <p className="text-gray-600">
                      <span className="font-medium">Address:</span> {formData.address}
                    </p>
                  )}
                  <p className="text-gray-600">
                    <span className="font-medium">How you heard about us:</span> {formData.hearAboutUs}
                  </p>
                  {formData.socialMediaSource && (
                    <p className="text-gray-600">
                      <span className="font-medium">Social Media Source:</span> {formData.socialMediaSource}
                    </p>
                  )}
                  {formData.therapistReferral && (
                    <p className="text-gray-600">
                      <span className="font-medium">Therapist Referral:</span> {formData.therapistReferral}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Selected Location</h4>
                <p className="text-gray-600">
                  Now I Can - {formData.location === 'utah' ? 'Utah (Orem)' : 'Pennsylvania (Lititz)'}
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I consent to Now I Can Foundation contacting me using the information provided above.
                </label>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const renderProcessFlow = () => {
    return (
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`
                  relative flex h-8 w-8 items-center justify-center rounded-full 
                  ${step < currentStep ? 'bg-blue-600' : step === currentStep ? 'bg-blue-500 ring-2 ring-blue-200' : 'bg-gray-200'}
                  ${step <= 4 ? '' : 'bg-green-500'}
                `}>
                  {step < currentStep ? (
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className={`text-sm font-medium ${step === currentStep ? 'text-white' : 'text-gray-500'}`}>
                      {step <= 4 ? step : '✓'}
                    </span>
                  )}
                </div>
                <span className="mt-2 text-xs text-gray-500">
                  {step === 1 && 'Child Info'}
                  {step === 2 && 'Parent Info'}
                  {step === 3 && 'Location'}
                  {step === 4 && 'Review'}
                  {step === 5 && 'Complete'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (formData.submitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your consultation request has been successfully submitted.<br></br> A member of our team from Now I Can - {formData.location === 'utah' ? 'Utah' : 'Pennsylvania'} will contact you within <br></br> 24-48 business hours to schedule your free consultation.
              </p>
              
              <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">What happens next?</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-600 text-sm font-medium mr-3 mt-0.5">1</span>
                    <span>Our intake coordinator will review your information and call you within 1-2 business days.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-600 text-sm font-medium mr-3 mt-0.5">2</span>
                    <span>During the call, we'll answer your questions and schedule your free in-person or virtual consultation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-600 text-sm font-medium mr-3 mt-0.5">3</span>
                    <span>During your consultation, our physical therapy team will evaluate your child's needs and recommend a therapy plan.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-200 text-blue-600 text-sm font-medium mr-3 mt-0.5">4</span>
                    <span>If you decide to proceed, we'll help you schedule therapy sessions and discuss payment options and financial assistance.</span>
                  </li>
                </ol>
              </div>
              
              <div className="mt-8">
                <a href="/" className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-sm">
                  Return to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-lg">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/ea7fade6-2887-41a3-a09b-ebd0cb3f523a/C-FAQ2.jpg" 
              alt="Free Consultation with Now I Can Therapists" 
              className="w-full h-64 object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4 text-center">Schedule a Free Consultation</h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Complete this form to request a free consultation with our therapy team.
          </p>
          
          {/* Process Flow */}
          {renderProcessFlow()}
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {renderStep()}
              
              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Back
                  </button>
                ) : (
                  <div></div> // Empty div to maintain spacing
                )}
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit Consultation Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;