import React from 'react';
import { Link } from 'react-router-dom';

const OurStoryMission = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-lg">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/e4b949a5-642c-4bcf-974e-183be7a17bf1/H-Foundation.jpg" 
              alt="Now I Can Foundation" 
              className="w-full h-64 object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold font-heading mb-6">Our Story & Mission</h1>
          
          {/* Mission Section */}
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-4 text-center italic">
              "Our mission at Now I Can is to help children with disabilities reach their full potential and greatest independence through innovative physical therapy."
            </p>
          </div>
          
          {/* Vision Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Now I Can's vision is to become our patients' first choice in physical therapy by providing the highest quality of therapy that brings change, hope, and confidence to children with disabilities!
              </p>
              <p className="text-lg text-gray-700 font-medium">
                We see a world with fewer crutches, wheelchairs, and surgeries and more dreams realized!
              </p>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">PROFESSIONAL</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We are punctual
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We work as a team
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We focus on the patient
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-purple-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">EXCEPTIONAL</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We improve lives
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We use the best techniques
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We interact well with patients and parents
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">BELIEVERS IN CHANGE</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We utilize time wisely
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We emphasize the positive
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      We set goals and work passionately towards them
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Story Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-blue-100 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex justify-center">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/c5dd170d-0caf-4531-ac2a-44fa9d5c4379/Tracey+and+Joel-2.jpg" 
                      alt="Tracey and Joel Christensen - Now I Can Founders" 
                      className="w-64 h-64 rounded-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4 text-blue-800">Tracey and Joel Christensen</h2>
                    <h3 className="text-lg font-medium text-blue-600 mb-4">Now I Can Founders</h3>
                    <p className="text-gray-700 mb-4">
                      Tracey and Joel Christensen founded Now I Can Foundation in 2006. Inspired by their daughter, Colby, they wanted to bring the most effective physical therapy to Utah and surrounding states.
                    </p>
                    <p className="text-gray-700">
                      The Christensen's appreciate the meaningful experiences and people that Now I Can has brought to their lives over the years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Tracey is currently the Executive Director of Now I Can and she and Joel serve on the Board of Directors together. In his day job, Joel is the University Budget Director at BYU, but in his spare time he enjoys being active, having fun with family, and being Now I Can's premier handyman!
                </p>
                <p className="text-gray-700 mb-4">
                  Joel's educational background includes majoring in Exercise Science and an MBA from BYU. Tracey's degree is in Broadcast News, and she spent many years working in that field, and teaching scripture to high school students. She mostly loves being a Mom to her now young-adult kids.
                </p>
                <p className="text-gray-700">
                  Joel and Tracey feel blessed to know the children and families of Now I Can!
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3 flex justify-center">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/685d3859-6826-45eb-88ad-6f6bad55abae/Colby.jpg" 
                      alt="Colby Christensen" 
                      className="w-64 h-64 rounded-lg object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Colby's Story</h2>
                    <div className="italic text-gray-600 mb-6">
                      In Colby's own words...
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Hi, my name is Colby Christensen. I want to tell you my story, how it led to "Now I Can", and how their approach to physical therapy changed my life.
                </p>
                <p className="text-gray-700 mb-4">
                  When I was a baby I was diagnosed with Hemiplegic Cerebral Palsy. Doctors told my parents that physical therapy could maybe help me, and I was referred to a local therapy office. In a couple years I was able to make small changes, but my parents couldn't help but wonder if maybe there was MORE? They did their homework and when I was four years old my Mom and Dad took me to Poland to try a "new" treatment. The treatment was called the Intensive Model of Therapy (IMOT for short). At home, in Utah, my traditional physical therapy sessions lasted 45-minutes, once a week. But the IMOT I received in Poland had me in innovative physical therapy sessions that were 3-hours long and occurred 5 days a week! The therapy was physically challenging, but it was also fun. The best part was that I could feel and see myself gaining strength fast. In just a few weeks I had discovered new ways to make my body move. It was so exciting!
                </p>
                <p className="text-gray-700">
                  The results I got using IMOT were too good to ignore. That's why my Mom and Dad started an IMOT clinic in Utah to help me—and other kids like me--reach amazing goals that traditional PT would not have allowed. They named the clinic Now I Can.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Commitment</h2>
            <p className="text-lg mb-6 text-center">
              We are committed to help each child do more and reach higher!
            </p>
            <div className="flex justify-center">
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-white text-blue-600 hover:bg-blue-50"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryMission;