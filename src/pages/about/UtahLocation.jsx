import React from 'react';
import { Link } from 'react-router-dom';

const UtahLocation = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Now I Can - Utah</h1>
        <p className="text-lg mb-8">
          Our Utah location offers state-of-the-art therapy services in a beautiful setting at the base of the Wasatch Mountains.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              Utah Facility Image
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">About Our Facility</h2>
              <p className="text-gray-700 mb-4">
                Now I Can Foundation is located at the base of the Wasatch Mountains. Our valley location offers many outdoor activities such as skiing, hiking, biking, climbing, and swimming. We are 15 minutes from Sundance Resort, and 40 minutes from Park City.
              </p>
              <p className="text-gray-700 mb-4">
                Now I Can is close to two major Universities and many family-friendly entertainment choices including museums, waterparks, theatre productions, arcades, an aquarium, and sporting events.
              </p>
              <p className="text-gray-700">
                Our clinic is exactly on the border of Provo and Orem, which each have incredible recreation centers where you can swim, work out or take a class as a guest for $5 a day.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 p-4">
              <h2 className="text-xl font-bold text-white">Contact Information</h2>
            </div>
            <div className="p-6">
              <address className="not-italic text-gray-700 mb-6">
                <p className="mb-1 font-medium">Now I Can - Utah</p>
                <p className="mb-1">1950 S 375 E</p>
                <p className="mb-3">Orem, UT 84058</p>
                <p className="mb-1">
                  <a href="tel:+18012281935" className="text-blue-600 hover:text-blue-800">
                    (801) 228-1935
                  </a>
                </p>
                <p>
                  <a href="mailto:info@nowican.org" className="text-blue-600 hover:text-blue-800">
                    info@nowican.org
                  </a>
                </p>
              </address>
              
              <div className="space-y-3">
                <Link 
                  to="/for-families/getting-started/free-consultation" 
                  className="btn w-full bg-blue-600 text-white hover:bg-blue-700 text-center"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  to="/therapy-services/therapy-schedule" 
                  className="btn w-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-center"
                >
                  View Therapy Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Now I Can Utah Suites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                  On-site Suites Image
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Need an inexpensive and comfortable place to stay?</h3>
                <p className="text-gray-700 mb-4">
                  We have family suites on-site! Enjoy beautifully decorated suites right on our property. We have three available, and they go quickly.
                </p>
                <p className="text-gray-700 mb-4">
                  Thanks to our generous donors, you can schedule yours today for only $35 a night! Some have a bathtub, others do not. Some have only kitchenettes.
                </p>
                <p className="text-gray-700 mb-4">
                  Call or email today to reserve a suite!
                </p>
                <Link 
                  to="/for-families/accommodations/where-to-stay" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700"
                >
                  Learn More About Accommodations
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Things to Do in the Area</h2>
          <p className="text-gray-700 mb-6">
            Families enjoy time spent here doing fun activities outside of the physical therapy hours. If you have questions about accommodations or need suggestions for some entertainment or great food, we are here to help!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Outdoor Activities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Hiking in the Wasatch Mountains</li>
                <li>Skiing at Sundance Resort</li>
                <li>Swimming at local recreation centers</li>
                <li>Biking on local trails</li>
                <li>Fishing at local lakes and rivers</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Family Entertainment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Thanksgiving Point Museums</li>
                <li>Bean Life Science Museum</li>
                <li>Seven Peaks Waterpark</li>
                <li>Nickelcade Arcade</li>
                <li>The Living Planet Aquarium</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Shopping & Dining</h3>
              <ul className="space-y-2 text-gray-700">
                <li>University Place Mall</li>
                <li>The Shops at Riverwoods</li>
                <li>Downtown Provo restaurants</li>
                <li>BYU Creamery</li>
                <li>Local farmers markets</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link 
              to="/for-families/accommodations/local-activities" 
              className="btn bg-blue-600 text-white hover:bg-blue-700"
            >
              View All Local Activities
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
          <p className="text-lg mb-6">
            We look forward to welcoming you to our Utah location. Contact us today to schedule a consultation or learn more about our therapy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/for-families/getting-started/free-consultation" 
              className="btn bg-white text-blue-600 hover:bg-blue-50"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/contact-us" 
              className="btn bg-transparent border border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtahLocation;