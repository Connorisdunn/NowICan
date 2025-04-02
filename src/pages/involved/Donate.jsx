import React, { useState } from 'react';

const Donate = () => {
  const [selectedLocation, setSelectedLocation] = useState('utah');
  
  // Donation form URL
  const donationFormUrl = "https://secure.lglforms.com/form_engine/s/rtom0pzwiFdEx2HhoGFcBw";
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Donate to Now I Can</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Help Transform Children's Lives</h2>
            <p className="text-lg mb-6">
              Because of generous donations from people like you, Now I Can is able to provide intensive therapy to 
              children who really need it. These incredible children couldn't do it without your help!
            </p>
            <div className="flex justify-center my-6">
              <blockquote className="text-xl italic text-gray-700">
                "We make a living by what we get, but we make a life by what we give."
                <span className="block text-right mt-2 text-sm">— Winston Churchill</span>
              </blockquote>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Your Donation Makes a Difference</h2>
              <p className="mb-4">
                When you donate to Now I Can Foundation, your contribution goes directly toward:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>Providing therapy grants to families in need through our Ability Fund</li>
                <li>Maintaining and upgrading specialized equipment for optimal therapy</li>
                <li>Supporting our expert therapists in delivering life-changing care</li>
                <li>Helping us expand our services to reach more children</li>
                <li>Subsidizing our on-site family accommodations</li>
              </ul>
              <p className="text-blue-700 font-medium">
                100% of your donation goes toward our mission of helping children with disabilities reach their full potential.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Ways to Donate</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                  <div>
                    <span className="font-medium">Online</span>: Make a secure donation through our website using the buttons below
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                  <div>
                    <span className="font-medium">Venmo</span>: Send donations to @nowican
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                  <div>
                    <span className="font-medium">By Phone</span>: Give us a call to discuss your donation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                  <div>
                    <span className="font-medium">By Mail</span>: Send checks payable to "Now I Can Foundation" to:
                    <div className="ml-4 mt-1">
                      <p>Now I Can Foundation<br></br>1950 S 375 E Orem, UT 84058</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-lg mb-8">
                Ready to make a donation to Now I Can?<br />First, select which Now I Can location you're donating to:
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
                      selectedLocation === 'utah' ? 'left-1 bg-blue-600' : 'left-40 bg-purple-600'
                    }`}
                  ></span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href={donationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`btn text-white text-lg px-8 py-3 ${
                    selectedLocation === 'utah' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  Proceed to Donation Page
                </a>
              </div>
              
              <p className="text-gray-500 text-sm italic text-center mt-6">
                You will be redirected to our secure donation processor to complete your transaction.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate; 