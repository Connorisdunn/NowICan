import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  
  const handleDonationClick = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setDonationAmount('custom');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    alert(`Thank you for your ${donationType} donation of $${amount}! This is a demonstration website. In a real application, you would be directed to a secure payment processor.`);
  };
  
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
            <p className="text-lg">
              Your contribution directly supports our mission to help children with disabilities reach their full 
              potential and greatest independence through innovative physical therapy.
            </p>
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
                    <span className="font-medium">Online</span>: Make a secure donation through our website using the form below
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
                    <span className="font-medium">By Mail</span>: Send checks payable to "Now I Can Foundation" to:
                    <div className="ml-4 mt-1">
                      <p>Now I Can Foundation</p>
                      <p>1950 S 375 E</p>
                      <p>Orem, UT 84058</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                  <div>
                    <span className="font-medium">Corporate Matching</span>: Many employers match charitable contributions. Check with your HR department to see if your donation can be doubled!
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                  Donation Type
                </label>
                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    className={`px-6 py-2 rounded-lg ${donationType === 'one-time' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setDonationType('one-time')}
                  >
                    One-Time Donation
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-2 rounded-lg ${donationType === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly Donation
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-bold mb-3">
                  Donation Amount
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  {['25', '50', '100', '250', '500', '1000'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-2 px-4 rounded-lg border ${donationAmount === amount ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                      onClick={() => handleDonationClick(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`py-2 px-4 rounded-lg border ${donationAmount === 'custom' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                    onClick={() => setDonationAmount('custom')}
                  >
                    Custom
                  </button>
                </div>
                
                {donationAmount === 'custom' && (
                  <div className="mt-4">
                    <label htmlFor="custom-amount" className="sr-only">Custom Amount</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="text"
                        name="custom-amount"
                        id="custom-amount"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        autoFocus
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3 rounded-lg"
                  disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                >
                  {donationType === 'monthly' ? 'Donate Monthly' : 'Donate Now'}
                </button>
              </div>
              
              <p className="text-sm text-center mt-4 text-gray-600">
                Note: This is a demonstration website. In a real application, this would be connected to a secure payment processor.
              </p>
            </form>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Our Commitment to Transparency</h2>
            <p className="text-lg mb-6 text-center">
              Now I Can Foundation is a 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Tax ID Information</h3>
                <p>
                  Our Federal Tax ID number is available upon request. We provide tax receipts for all donations.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Annual Reports</h3>
                <p>
                  We publish annual reports detailing how funds are used to further our mission. Contact us for more information.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-2">Financial Oversight</h3>
                <p>
                  Our Board of Directors provides careful oversight to ensure all funds are used responsibly and effectively.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Other Ways to Support Now I Can</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Volunteer Your Time</h3>
                <p className="mb-4">
                  We're always looking for dedicated volunteers to help with our therapy programs, events, and administrative tasks.
                </p>
                <Link 
                  to="/get-involved/volunteer-opportunities" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn About Volunteering →
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Become a Corporate Sponsor</h3>
                <p className="mb-4">
                  Corporate sponsorships help fund our therapy programs while providing visibility for your business.
                </p>
                <Link 
                  to="/contact-us" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Contact Us About Sponsorships →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate;