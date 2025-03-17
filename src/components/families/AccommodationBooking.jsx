import React, { useState } from 'react';
import ContentReminder from '../ui/ContentReminder';

const AccommodationBooking = () => {
  const [formData, setFormData] = useState({
    location: 'utah',
    accommodation: '',
    checkInDate: '',
    checkOutDate: '',
    adults: 2,
    children: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    patientName: '',
    therapyDates: '',
    specialRequests: '',
    agreeToTerms: false
  });
  
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  // Mock accommodation data - in a real app, this would come from a database
  const accommodations = {
    utah: [
      {
        id: 'cottage1',
        name: 'Cottage #1',
        description: 'One-bedroom cottage with full kitchen, queen bed, pullout sleeper loveseat, and private bathroom.',
        amenities: ['Full Kitchen', 'Queen Bed', 'Sleeper Sofa', 'Private Bathroom', 'Washer/Dryer Access', 'WiFi'],
        maxOccupancy: 4,
        pricePerNight: 35,
        image: 'cottage1.jpg'
      },
      {
        id: 'cottage2',
        name: 'Cottage #2',
        description: 'One-bedroom cottage with kitchenette, queen bed, and private bathroom.',
        amenities: ['Kitchenette', 'Queen Bed', 'Private Bathroom', 'Washer/Dryer Access', 'WiFi'],
        maxOccupancy: 3,
        pricePerNight: 35,
        image: 'cottage2.jpg'
      },
      {
        id: 'suite3',
        name: 'Suite #3',
        description: 'Two-bedroom suite with full kitchen, queen bed in master, twin bed in second bedroom, and private bathroom.',
        amenities: ['Full Kitchen', 'Queen Bed', 'Twin Bed', 'Private Bathroom', 'Washer/Dryer', 'WiFi'],
        maxOccupancy: 5,
        pricePerNight: 35,
        image: 'suite3.jpg'
      }
    ],
    pennsylvania: [
      {
        id: 'hotelpartner1',
        name: 'Fairfield Inn & Suites (Partner Hotel)',
        description: 'Studio suite with kitchenette, king or two queen beds, located 3 miles from our facility.',
        amenities: ['Kitchenette', 'Hotel Amenities', 'Breakfast Included', 'WiFi', 'Pool', 'Fitness Center'],
        maxOccupancy: 4,
        pricePerNight: 109,
        discountedPrice: 89,
        image: 'fairfield.jpg',
        external: true,
        bookingUrl: 'https://www.marriott.com/'
      },
      {
        id: 'hotelpartner2',
        name: 'Homewood Suites (Partner Hotel)',
        description: 'One-bedroom suite with full kitchen, separate living area, and king bed, located 5 miles from our facility.',
        amenities: ['Full Kitchen', 'Separate Living Room', 'King Bed', 'Breakfast Included', 'WiFi', 'Pool'],
        maxOccupancy: 4,
        pricePerNight: 129,
        discountedPrice: 99,
        image: 'homewood.jpg',
        external: true,
        bookingUrl: 'https://www.hilton.com/'
      }
    ]
  };
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleLocationChange = (location) => {
    setFormData(prev => ({
      ...prev,
      location,
      accommodation: '' // Reset accommodation when location changes
    }));
  };
  
  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would process the booking
    console.log('Processing booking:', formData);
    setSubmitted(true);
  };
  
  const getSelectedAccommodation = () => {
    return accommodations[formData.location].find(a => a.id === formData.accommodation);
  };
  
  const getDuration = () => {
    if (!formData.checkInDate || !formData.checkOutDate) return 0;
    
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const difference = checkOut - checkIn;
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };
  
  if (submitted) {
    const accommodation = getSelectedAccommodation();
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your accommodation booking. A confirmation email has been sent to {formData.email}.
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-6 text-left">
          <h3 className="font-semibold text-blue-800 mb-3">Booking Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Accommodation:</span> {accommodation?.name}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Check-in Date:</span> {formData.checkInDate}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Check-out Date:</span> {formData.checkOutDate}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Guests:</span> {formData.adults} adult(s), {formData.children} child(ren)
              </p>
            </div>
            <div>
              <p className="text-gray-700">
                <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Patient Name:</span> {formData.patientName}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Therapy Dates:</span> {formData.therapyDates}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Booking Reference:</span> {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100 mb-6 text-left">
          <h3 className="font-semibold text-yellow-800 mb-3">Next Steps</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>You'll receive a detailed confirmation email with check-in instructions.</li>
            <li>Please arrive between 3:00 PM and 6:00 PM on your check-in date.</li>
            <li>Contact us if your therapy schedule or travel plans change.</li>
            <li>Questions? Contact us at <a href="mailto:info@nowican.org" className="text-blue-600 hover:underline">info@nowican.org</a>.</li>
          </ul>
        </div>
        
        <p className="text-gray-600">
          We look forward to welcoming you to Now I Can!
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setStep(1);
          }} 
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Select Location & Dates</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer ${formData.location === 'utah' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                      onClick={() => handleLocationChange('utah')}
                    >
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="location" 
                          id="locationUtah" 
                          checked={formData.location === 'utah'} 
                          value="utah"
                          onChange={() => handleLocationChange('utah')}
                          className="h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor="locationUtah" className="ml-3 block text-sm font-medium text-gray-700">
                          Now I Can - Utah (Orem)
                        </label>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer ${formData.location === 'pennsylvania' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                      onClick={() => handleLocationChange('pennsylvania')}
                    >
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="location" 
                          id="locationPennsylvania" 
                          checked={formData.location === 'pennsylvania'} 
                          value="pennsylvania"
                          onChange={() => handleLocationChange('pennsylvania')}
                          className="h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label htmlFor="locationPennsylvania" className="ml-3 block text-sm font-medium text-gray-700">
                          Now I Can - Pennsylvania (Lititz)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                    <input 
                      type="date" 
                      id="checkInDate" 
                      name="checkInDate" 
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                    <input 
                      type="date" 
                      id="checkOutDate" 
                      name="checkOutDate" 
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                    <select 
                      id="adults" 
                      name="adults" 
                      value={formData.adults}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                    <select 
                      id="children" 
                      name="children" 
                      value={formData.children}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      {[0, 1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!formData.checkInDate || !formData.checkOutDate}
              >
                Next: Select Accommodation
              </button>
            </div>
          </>
        );
        
      case 2:
        return (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Select Accommodation</h3>
              
              <div className="space-y-6">
                {accommodations[formData.location].map((accommodation) => (
                  <div 
                    key={accommodation.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      formData.accommodation === accommodation.id 
                        ? 'border-blue-500 ring-2 ring-blue-200 shadow-md' 
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, accommodation: accommodation.id }))}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 bg-gray-200 h-48 md:h-auto flex items-center justify-center">
                        <span className="text-gray-500">Accommodation Image</span>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{accommodation.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{accommodation.description}</p>
                          </div>
                          
                          <div className="flex items-center ml-4">
                            <input 
                              type="radio" 
                              name="accommodation" 
                              id={`accommodation-${accommodation.id}`} 
                              checked={formData.accommodation === accommodation.id} 
                              value={accommodation.id}
                              onChange={handleInputChange}
                              className="h-4 w-4 text-blue-600 border-gray-300"
                            />
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {accommodation.amenities.map((amenity, index) => (
                              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Max Occupancy: {accommodation.maxOccupancy} people</p>
                          </div>
                          <div className="text-right">
                            {accommodation.discountedPrice ? (
                              <>
                                <p className="text-sm text-gray-500 line-through">${accommodation.pricePerNight}/night</p>
                                <p className="text-lg font-semibold text-green-600">${accommodation.discountedPrice}/night</p>
                              </>
                            ) : (
                              <p className="text-lg font-semibold text-gray-900">${accommodation.pricePerNight}/night</p>
                            )}
                          </div>
                        </div>
                        
                        {accommodation.external && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm text-purple-700">
                              This is a partner hotel. You'll receive a special discount code after selecting this option.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Back: Dates & Guests
              </button>
              
              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!formData.accommodation}
              >
                Next: Enter Details
              </button>
            </div>
          </>
        );
        
      case 3:
        return (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 3: Enter Your Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                  <input 
                    type="text" 
                    id="patientName" 
                    name="patientName" 
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="therapyDates" className="block text-sm font-medium text-gray-700 mb-1">Therapy Session Dates</label>
                  <input 
                    type="text" 
                    id="therapyDates" 
                    name="therapyDates" 
                    placeholder="e.g., July 8-26, 2024"
                    value={formData.therapyDates}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                  <textarea 
                    id="specialRequests" 
                    name="specialRequests" 
                    rows="3" 
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Any special requests or accessibility needs"
                  ></textarea>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeToTerms" className="font-medium text-blue-800">I agree to the terms and conditions</label>
                    <p className="text-blue-700">
                      I understand that this booking is subject to the accommodation policies, including check-in/check-out times and cancellation policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Back: Select Accommodation
              </button>
              
              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              >
                Next: Review & Confirm
              </button>
            </div>
          </>
        );
        
      case 4:
        const selectedAccommodation = getSelectedAccommodation();
        const duration = getDuration();
        const totalCost = duration * (selectedAccommodation?.discountedPrice || selectedAccommodation?.pricePerNight || 0);
        
        return (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 4: Review & Confirm</h3>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mb-6">
                <h4 className="font-semibold text-lg mb-4">Booking Summary</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Location:</span> Now I Can - {formData.location === 'utah' ? 'Utah (Orem)' : 'Pennsylvania (Lititz)'}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Accommodation:</span> {selectedAccommodation?.name}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Check-in Date:</span> {formData.checkInDate}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Check-out Date:</span> {formData.checkOutDate}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Number of Nights:</span> {duration}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Guests:</span> {formData.adults} adult(s), {formData.children} child(ren)
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Email:</span> {formData.email}
                    </p>
                    <p className="text-gray-700 mb-2">
                      <span className="font-medium">Phone:</span> {formData.phone}
                    </p>
                    {formData.patientName && (
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">Patient Name:</span> {formData.patientName}
                      </p>
                    )}
                    {formData.therapyDates && (
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">Therapy Session Dates:</span> {formData.therapyDates}
                      </p>
                    )}
                    {formData.specialRequests && (
                      <p className="text-gray-700 mb-2">
                        <span className="font-medium">Special Requests:</span> {formData.specialRequests}
                      </p>
                    )}
                  </div>
                </div>
                
                {selectedAccommodation && !selectedAccommodation.external && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Price per night:</span>
                      <span>${selectedAccommodation.pricePerNight}.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Number of nights:</span>
                      <span>{duration}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${totalCost}.00</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Payment will be collected at check-in. We accept credit cards and cash.
                    </p>
                  </div>
                )}
                
                {selectedAccommodation && selectedAccommodation.external && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-2">Partner Hotel Booking</h5>
                      <p className="text-yellow-700 mb-2">
                        This is a partner hotel. After confirming, you'll receive a special discount code to use when booking directly with the hotel.
                      </p>
                      <p className="text-yellow-700">
                        Estimated total: ${totalCost}.00 (${selectedAccommodation.discountedPrice}.00 per night × {duration} nights)
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">Important Information</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                  <li>Check-in time is 3:00 PM and check-out time is 11:00 AM.</li>
                  <li>Please contact us at least 48 hours in advance if your plans change.</li>
                  <li>Pets are not allowed in on-site accommodations.</li>
                  <li>Smoking is not permitted in any of our accommodations.</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevStep}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Back: Enter Details
              </button>
              
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                disabled={!formData.agreeToTerms}
              >
                Confirm Booking
              </button>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };

  const renderProgressBar = () => {
    const steps = [
      { number: 1, title: 'Dates & Guests' },
      { number: 2, title: 'Select Accommodation' },
      { number: 3, title: 'Your Details' },
      { number: 4, title: 'Review & Confirm' }
    ];
    
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Book Accommodation</h2>
          <div className="text-sm text-gray-500">Step {step} of {steps.length}</div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
            <div style={{ width: `${(step / steps.length) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-300"></div>
          </div>
          
          <div className="flex justify-between">
            {steps.map((s) => (
              <div key={s.number} className={`text-center ${step >= s.number ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 flex items-center justify-center rounded-full mx-auto mb-1 ${step >= s.number ? 'bg-blue-100' : 'bg-gray-100'}`}>
                  {step > s.number ? (
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  ) : (
                    <span className={`text-sm font-medium ${step === s.number ? 'text-blue-600' : 'text-gray-400'}`}>{s.number}</span>
                  )}
                </div>
                <span className="text-xs hidden sm:block">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <h2 className="text-2xl font-bold text-white">Accommodations</h2>
        <p className="text-blue-100 mt-2">
          Book your stay for your therapy session at Now I Can.
        </p>
      </div>
      
      <ContentReminder message="This is a demo booking form. In the actual website, this would connect to a reservation system." />
      
      <div className="p-6">
        {renderProgressBar()}
        
        <form onSubmit={handleSubmit}>
          {renderStepContent()}
        </form>
      </div>
    </div>
  );
};

export default AccommodationBooking;