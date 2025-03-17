import React from 'react';
import { Link } from 'react-router-dom';

const FullBodyVibration = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Full Body Vibration</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Enhancing Brain-Body Communication</h2>
            <p className="text-lg mb-6">
              A type of neuro-muscular re-education, vibration therapy ultimately works to increase communication 
              between the body and the brain. When a child stands on, or otherwise engages with, our vibration plates, 
              each motion transfers a quick burst of energy to the child which then engages the involuntary stretch 
              reflex and causes muscles to contract and relax multiple times per second.
            </p>
            <p className="text-lg">
              The high repetition rate (frequency) of the vibrations, plus the alternating tilt of the plates, causes 
              rhythmic muscle contractions between the right and left side of each muscle, mimicking a human gait. 
              (The motion is similar to the way a pelvis moves and tilts when walking.)
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Neuroplasticity and Motor Relearning</h3>
              <p className="text-lg">
                The result? The brain receives thousands of signals which enhances neuroplasticity, which then translates 
                into motor relearning. Tense muscles begin to relax, balance improves, muscles strengthen, bone density 
                increases, spasms decrease, and overall there is a lessening of complications associated with disorders 
                that restrict movement and limit sensory processing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Personalized Treatment</h3>
              <p className="text-lg">
                Your Now I Can Foundation therapists are able to assess your child's range of ability then formulate a 
                vibration plate action plan that produces optimized change. By carefully controlling the frequency, 
                duration, and positioning, we can tailor vibration therapy to address your child's specific needs.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Vibration Plate Therapy Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Reduce spasticity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Gain muscle tone and power</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improve motor function</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enhance gait speed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Create higher bone mass</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">Parent Testimonial</h2>
              <p className="text-lg italic">
                "Now I Can has been an absolute miracle for our family. Never do we have as much 
                <span className="font-bold"> hope </span> for the future or see as much progress as we do after 
                completing one session with Now I Can. Their entire staff is so friendly and they make therapy 
                so much fun that my son loves going!
              </p>
              <p className="text-lg italic mt-2">
                We drive all the way from California every year to do a session because we believe in it so much. 
                Thank you Now I Can for changing lives and making the impossible, possible!"
              </p>
              <p className="text-gray-700 mt-2">-Johnson Family</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg mb-6">
              The team at Now I Can looks forward to speaking with you to discuss how your child can reach their highest potential. 
              Schedule a free consultation now.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullBodyVibration;