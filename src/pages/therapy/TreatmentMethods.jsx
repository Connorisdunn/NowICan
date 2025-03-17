import React from 'react';
import { Link } from 'react-router-dom';

const TreatmentMethods = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Treatment Methods</h1>
        <p className="text-lg mb-8">
          Now I Can therapists have extensive training in cutting edge methods, models and techniques 
          to use with each child to help them reach towards each developmental milestone.
        </p>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Orthotic Suit Therapy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Orthotic Suit Therapy</h2>
                <p className="text-gray-700 mb-4">
                  Made of soft canvas, our suit is a breathable, dynamic orthotic that improves and changes proprioception 
                  (the brain's awareness of the position and movement of the body).
                </p>
                <Link 
                  to="/therapy-services/treatment-methods/orthotic-suit-therapy" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Universal Exercise Unit */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Universal Exercise Unit</h2>
                <p className="text-gray-700 mb-4">
                  We want to see your child reach milestones. Improvements in crawling, sitting, walking, even jumping - 
                  are all within reach with the help of the Universal Exercise Unit.
                </p>
                <Link 
                  to="/therapy-services/treatment-methods/universal-exercise-unit" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Manual Therapy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Manual Therapy</h2>
                <p className="text-gray-700 mb-4">
                  Applying the newest innovations, our physical therapists use manual therapy to prepare the body to embrace 
                  fuller range of motion.
                </p>
                <Link 
                  to="/therapy-services/treatment-methods/manual-therapy" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Functional E-Stim */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Functional E-Stim</h2>
                <p className="text-gray-700 mb-4">
                  Functional Electrical Stimulation more commonly called E Stim, is a dynamic technique that brings muscles 
                  back to life. The goal of E Stim is to restore or improve function and strength of muscles.
                </p>
                <Link 
                  to="/therapy-services/treatment-methods/functional-estim" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Full Body Vibration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Full Body Vibration</h2>
                <p className="text-gray-700 mb-4">
                  A type of neuro-muscular re-education, Vibration therapy ultimately works to increase communication 
                  between the body and the brain.
                </p>
                <Link 
                  to="/therapy-services/treatment-methods/full-body-vibration" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Additional Techniques */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Additional Techniques</h2>
                <p className="text-gray-700 mb-4">
                  Our therapists utilize many other specialized techniques including Kinesiotape, 
                  Neuro-Developmental Treatment (NDT), PNF, and Total Motion Release.
                </p>
                <Link 
                  to="/therapy-services/treatment-methods/additional-techniques" 
                  className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Comprehensive Approach</h2>
            <p className="text-lg mb-6">
              At Now I Can, we believe in using a combination of treatment methods to achieve the best results for each child. 
              Our therapists are trained in multiple techniques and will create a customized treatment plan based on your child's 
              specific needs and goals.
            </p>
            <p className="text-lg">
              During your free consultation, we'll discuss which treatment methods might be most beneficial for your child 
              and how we can integrate them into a comprehensive therapy plan.
            </p>
          </div>
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Intensive Therapy Program</h2>
              <p className="text-lg mb-6">
                Our intensive therapy program utilizes these treatment methods in a concentrated format, 
                helping children achieve significant progress in a short period of time.
              </p>
              <Link 
                to="/therapy-services/intensive-physical-therapy" 
                className="btn bg-blue-600 text-white hover:bg-blue-700"
              >
                Learn About Intensive Therapy
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
              <p className="text-lg mb-6">
                The team at Now I Can looks forward to speaking with you to discuss how your child can reach their 
                highest potential. Schedule a free consultation now.
              </p>
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-blue-600 text-white hover:bg-blue-700"
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

export default TreatmentMethods;