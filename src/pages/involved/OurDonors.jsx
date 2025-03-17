import React from 'react';
import { Link } from 'react-router-dom';

const OurDonors = () => {
  // Mock data for donors - in a real application, this would come from a database
  const donors = {
    foundational: [
      { name: 'The Johnson Family Foundation', level: 'Platinum' },
      { name: 'Smith Industries', level: 'Gold' },
      { name: 'Roberts Healthcare Group', level: 'Gold' },
      { name: 'The Williams Trust', level: 'Silver' },
      { name: 'Bridgestone Community Fund', level: 'Silver' },
    ],
    corporate: [
      { name: 'TechVision Solutions', amount: 'Sustaining Partner' },
      { name: 'Northwest Medical Supplies', amount: 'Annual Sponsor' },
      { name: 'Mountain Valley Bank', amount: 'Annual Sponsor' },
      { name: 'Harmony Health Systems', amount: 'Event Sponsor' },
      { name: 'Bright Futures Consulting', amount: 'Event Sponsor' },
      { name: 'Cedar Ridge Properties', amount: 'Project Sponsor' },
      { name: 'Lakeside Manufacturing', amount: 'Project Sponsor' },
    ],
    individual: [
      { name: 'Dr. Robert & Mary Anderson', tier: 'Benefactor' },
      { name: 'James & Elizabeth Carter', tier: 'Patron' },
      { name: 'The Henderson Family', tier: 'Patron' },
      { name: 'David & Sarah Mitchell', tier: 'Supporter' },
      { name: 'Stephen & Anna Lee', tier: 'Supporter' },
      { name: 'Patricia Wilson', tier: 'Friend' },
      { name: 'Michael & Jennifer Baker', tier: 'Friend' },
      { name: 'John & Emily Thomas', tier: 'Friend' },
    ],
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">Our Generous Donors</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The life-changing work at Now I Can Foundation is made possible through the generous support
            of individuals, corporations, and foundations who believe in our mission.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12 text-center border border-blue-100">
          <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Join Our Mission</h2>
          <p className="text-lg text-blue-700 mb-6 max-w-2xl mx-auto">
            Every donation helps children with disabilities reach their full potential and gain independence.
            Your support makes transformative therapy possible.
          </p>
          <Link to="/get-involved/donate" className="btn bg-blue-600 hover:bg-blue-700 text-white">
            Become a Donor
          </Link>
        </div>

        {/* Reminder box for created content */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-12">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-yellow-700">
              <span className="font-medium">Note:</span> This page contains placeholder donor information that should be replaced with actual donor data.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Foundational Donors */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-4 px-6">
              <h2 className="text-white text-xl font-bold">Foundational Donors</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {donors.foundational.map((donor, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{donor.name}</span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        donor.level === 'Platinum' ? 'bg-blue-100 text-blue-800' :
                        donor.level === 'Gold' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {donor.level}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Corporate Donors */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 py-4 px-6">
              <h2 className="text-white text-xl font-bold">Corporate Partners</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {donors.corporate.map((donor, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{donor.name}</span>
                      <span className="text-sm text-gray-600">{donor.amount}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Individual Donors */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-coral-500 to-purple-600 py-4 px-6">
              <h2 className="text-white text-xl font-bold">Individual Supporters</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {donors.individual.map((donor, index) => (
                  <li key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{donor.name}</span>
                      <span className="text-sm text-gray-600">{donor.tier}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Donor Recognition Levels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Annual Giving Levels</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <span className="font-medium">Benefactor</span>
                    <p className="text-sm text-gray-600">$10,000+</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <span className="font-medium">Patron</span>
                    <p className="text-sm text-gray-600">$5,000-$9,999</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <span className="font-medium">Supporter</span>
                    <p className="text-sm text-gray-600">$1,000-$4,999</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-xs font-bold">4</span>
                  </div>
                  <div>
                    <span className="font-medium">Friend</span>
                    <p className="text-sm text-gray-600">$100-$999</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Corporate Partnership Levels</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <span className="font-medium">Sustaining Partner</span>
                    <p className="text-sm text-gray-600">$25,000+ annual commitment</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <span className="font-medium">Annual Sponsor</span>
                    <p className="text-sm text-gray-600">$10,000-$24,999</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <span className="font-medium">Event Sponsor</span>
                    <p className="text-sm text-gray-600">$5,000-$9,999</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <span className="text-purple-600 text-xs font-bold">4</span>
                  </div>
                  <div>
                    <span className="font-medium">Project Sponsor</span>
                    <p className="text-sm text-gray-600">$1,000-$4,999</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Become Part of Our Story</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our community of supporters who are making a difference in the lives of children with disabilities.
            Your donation, no matter the size, helps children reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/get-involved/donate" className="btn bg-white text-blue-600 hover:bg-blue-50">
              Make a Donation
            </Link>
            <Link to="/contact-us" className="btn border border-white text-white hover:bg-white/10">
              Contact Us to Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDonors;