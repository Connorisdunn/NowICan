import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConsolidatedTreatmentMethods = () => {
  const [activeTab, setActiveTab] = useState('orthotic-suit');
  
  const treatmentMethods = [
    {
      id: 'orthotic-suit',
      name: 'Orthotic Suit Therapy',
      description: 'A dynamic orthotic suit that improves body awareness and movement patterns.',
      content: (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Just Like Superheroes, Our Kids Wear Suits and Achieve Great Feats!</h3>
              <p className="text-gray-700 mb-4">
                Made of soft canvas, our suit is a breathable, dynamic orthotic that improves and changes proprioception 
                (the brain's awareness of the position and movement of the body). It works by loading the entire body with 
                weighted resistance bands that mimic real-life muscular reaction to gravitational forces.
              </p>
              <p className="text-gray-700 mb-4">
                Research shows that orthotic suits comprised of various resistance bands placed over major muscle groups, 
                can greatly increase a child's mobility achievements. Now I Can therapists are experienced in accurately 
                assessing where to place the bungees, which order to train the muscles, and the amount of resistance 
                required for each child's specific needs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Retrains central nervous system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Normalizes muscle tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Aligns the body and normalizes gait pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improves balance and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Provides tactile stimulation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Who Can Benefit</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Cerebral Palsy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Developmental Delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Traumatic Brain Injury</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Spasticity or Hypotonia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Ataxia and Athethosis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'universal-exercise',
      name: 'Universal Exercise Unit',
      description: 'A specialized cage-like device that allows for a wide range of therapeutic exercises.',
      content: (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Achieving New Milestones</h3>
              <p className="text-gray-700 mb-4">
                The Universal Exercise Unit (UEU), sometimes called a "Spider Cage," is one of our most versatile therapy tools.
                It allows children to exercise in any position (lying, sitting, kneeling, or standing) while being supported by a system
                of bungee cords that connect to a belt around their waist.
              </p>
              <p className="text-gray-700 mb-4">
                This suspension system provides the perfect amount of support while still challenging the child to use their own
                muscles. The bungees can be adjusted to provide assistance or resistance depending on the child's needs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Strengthens weak muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improves balance and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Increases range of motion and flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Promotes functional movements and skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Provides sensory integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Applications</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Isolated muscle strengthening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Balance and coordination training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Functional movement practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Weight-bearing activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Transitional movement training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'manual-therapy',
      name: 'Manual Therapy',
      description: 'Hands-on techniques to prepare the body for increased range of motion and function.',
      content: (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">The Power of Hands-On Treatment</h3>
              <p className="text-gray-700 mb-4">
                Manual therapy involves skilled, hands-on techniques that our therapists use to assess and treat soft tissues
                and joint structures. These techniques help to modulate pain, reduce inflammation, increase range of motion,
                induce relaxation, improve tissue repair, and facilitate movement.
              </p>
              <p className="text-gray-700 mb-4">
                Our physical therapists apply the newest innovations in manual therapy to prepare the body for greater
                range of motion and enhanced functional abilities. These techniques are tailored to each child's specific
                needs and are often used in preparation for other treatment methods.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Manual Techniques Used</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Myofascial release</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Soft tissue mobilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Joint mobilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Neurodevelopmental techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Proprioceptive neuromuscular facilitation (PNF)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Decreased muscle spasticity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improved joint mobility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Reduced pain and discomfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enhanced tissue flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Preparation for functional activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'functional-estim',
      name: 'Functional E-Stim',
      description: 'Electrical stimulation that helps activate and strengthen weak muscles.',
      content: (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Awakening Muscles</h3>
              <p className="text-gray-700 mb-4">
                Functional Electrical Stimulation, more commonly called E-Stim, is a dynamic technique that brings muscles
                back to life. The goal of E-Stim is to restore or improve function and strength of muscles that have
                become weak or are not functioning properly due to neurological conditions.
              </p>
              <p className="text-gray-700 mb-4">
                Small electrodes are placed on the skin over the targeted muscles, and controlled electrical impulses
                stimulate the nerves to activate these muscles. This helps train the muscles to contract properly and
                can even help in reestablishing proper neural pathways to improve function.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Strengthens weak muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Increases blood flow to muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prevents muscle atrophy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improves muscle activation patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enhances functional movements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Who Can Benefit</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Children with weakness from cerebral palsy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Spinal cord injuries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Stroke recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Muscular dystrophy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Other neuromuscular conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vibration',
      name: 'Full Body Vibration',
      description: 'Therapeutic vibration that enhances brain-body communication and strengthens muscles.',
      content: (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Enhancing Body-Brain Communication</h3>
              <p className="text-gray-700 mb-4">
                Vibration therapy is a type of neuro-muscular re-education that ultimately works to increase communication
                between the body and the brain. This therapy provides mechanical stimulation that travels throughout the body,
                stimulating muscle spindles and activating reflexive muscle contractions.
              </p>
              <p className="text-gray-700 mb-4">
                Our vibration platform delivers controlled, consistent vibration through the feet and legs that travels
                throughout the body. The therapist can adjust the frequency and amplitude of the vibrations based on the
                child's specific needs and goals.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Increases muscle strength and tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improves balance and proprioception</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enhances circulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Promotes bone density</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Reduces muscle spasticity</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Applications</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Pre-treatment warm-up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Standing tolerance and balance training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Spasticity management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Strengthening exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sensory integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'additional',
      name: 'Additional Techniques',
      description: 'Specialized methods including Kinesiotape, NDT, and more to support recovery and function.',
      content: (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Complementary Therapeutic Approaches</h3>
              <p className="text-gray-700 mb-4">
                Our therapists employ a wide range of additional specialized techniques to complement our core treatment
                methods. Each of these approaches can be used individually or in combination to address specific needs
                and enhance overall outcomes.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Specialized Techniques</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Kinesiotape:</strong> Elastic therapeutic tape that supports muscles while allowing full range of motion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Neuro-Developmental Treatment (NDT):</strong> Hands-on approach that facilitates more normal movement patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Proprioceptive Neuromuscular Facilitation (PNF):</strong> Techniques that enhance neuromuscular response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Total Motion Release:</strong> Innovative approach using mirror movements to improve function</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Tailored approach for each child's unique needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enhanced outcomes when combined with core treatment methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Addresses specific functional limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Supports carryover of skills to daily activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Provides additional tools for home program continuation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];
  
  const currentMethod = treatmentMethods.find(method => method.id === activeTab);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Treatment Methods</h1>
        <p className="text-lg mb-8">
          Now I Can therapists have extensive training in cutting edge methods, models and techniques 
          to use with each child to help them reach towards each developmental milestone.
        </p>
        
        {/* Method Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {treatmentMethods.map((method) => (
            <button
              key={method.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                activeTab === method.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(method.id)}
            >
              {method.name}
            </button>
          ))}
        </div>
        
        {/* Method Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {treatmentMethods.map((method) => (
            <div 
              key={method.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
                activeTab === method.id 
                  ? 'ring-2 ring-blue-600 transform scale-105 z-10' 
                  : 'opacity-70 hover:opacity-100 cursor-pointer'
              }`}
              onClick={() => setActiveTab(method.id)}
            >
              <div className={`h-2 ${activeTab === method.id ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">{method.name}</h2>
                <p className="text-gray-700 mb-4">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Current Method Content */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">{currentMethod.name}</h2>
          {currentMethod.content}
        </div>
        
        {/* Parent Testimonial */}
        <div className="mb-12">
          <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 h-full bg-gray-200 flex items-center justify-center text-gray-500">
                Testimonial Photo
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">Parent Testimonial</h2>
                <p className="text-lg italic">
                  "I can't say enough about Now I Can! We have been going annually for several years. 
                  Not only do you get top quality intensive therapy but you are treated like family! 
                  The staff and volunteers are top notch. My daughter has made tremendous progress and 
                  she has so much fun she forgets how hard she is working. An intensive at Now I Can 
                  is an opportunity not to be missed."
                </p>
                <p className="text-gray-700 mt-2">- Now I Can Parent</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Approach Section */}
        <section className="mb-12">
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md">
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

export default ConsolidatedTreatmentMethods;