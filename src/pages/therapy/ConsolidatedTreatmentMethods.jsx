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
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/2aeb5562-0d40-4389-a339-b425dc9bb5a0/Suit-Therapy-Page-Spot1.jpg" 
                alt="Child in orthotic suit during therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">Just Like Superheroes, Our Kids Wear Suits and Achieve Great Feats!</h3>
              <p className="text-lg text-gray-700 mb-5">
                Made of soft canvas, our suit is a breathable, dynamic orthotic that improves and changes proprioception 
                (the brain's awareness of the position and movement of the body). It works by loading the entire body with 
                weighted resistance bands that mimic real-life muscular reaction to gravitational forces.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Research shows that orthotic suits comprised of various resistance bands placed over major muscle groups, 
                can greatly increase a child's mobility achievements. Now I Can therapists are experienced in accurately 
                assessing where to place the bungees, which order to train the muscles, and the amount of resistance 
                required for each child's specific needs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Retrains central nervous system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Normalizes muscle tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Aligns the body and normalizes gait pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves balance and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Provides tactile stimulation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Who Can Benefit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Cerebral Palsy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Developmental Delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Traumatic Brain Injury</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Spasticity or Hypotonia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Ataxia and Athethosis</span>
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
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/334e7c4c-6c44-4327-baa4-8e0bdf38fd9e/nowican-17.jpg" 
                alt="Child in Universal Exercise Unit" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">Achieving New Milestones</h3>
              <p className="text-lg text-gray-700 mb-5">
                The Universal Exercise Unit (UEU), sometimes called a "Spider Cage," is one of our most versatile therapy tools.
                It allows children to exercise in any position (lying, sitting, kneeling, or standing) while being supported by a system
                of bungee cords that connect to a belt around their waist.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                This suspension system provides the perfect amount of support while still challenging the child to use their own
                muscles. The bungees can be adjusted to provide assistance or resistance depending on the child's needs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Strengthens weak muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves balance and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Increases range of motion and flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Promotes functional movements and skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Provides sensory integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Applications</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Isolated muscle strengthening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Balance and coordination training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Functional movement practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Weight-bearing activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Transitional movement training</span>
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
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/7c930347-20ac-4125-9cb6-d9fc7d7f7499/C-Manual-Myofascial.jpg" 
                alt="Manual therapy techniques" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">The Power of Hands-On Treatment</h3>
              <p className="text-lg text-gray-700 mb-5">
                Manual therapy involves skilled, hands-on techniques that our therapists use to assess and treat soft tissues
                and joint structures. These techniques help to modulate pain, reduce inflammation, increase range of motion,
                induce relaxation, improve tissue repair, and facilitate movement.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Our physical therapists apply the newest innovations in manual therapy to prepare the body for greater
                range of motion and enhanced functional abilities. These techniques are tailored to each child's specific
                needs and are often used in preparation for other treatment methods.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Manual Techniques Used</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Myofascial release</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Soft tissue mobilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Joint mobilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Neurodevelopmental techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Proprioceptive neuromuscular facilitation (PNF)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Decreased muscle spasticity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improved joint mobility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Reduced pain and discomfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Enhanced tissue flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Preparation for functional activities</span>
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
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/2da88116-077a-4715-8869-30841d6966cd/C-estim-close-up.gif" 
                alt="Functional E-Stim therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">Awakening Muscles</h3>
              <p className="text-lg text-gray-700 mb-5">
                Functional Electrical Stimulation, more commonly called E-Stim, is a dynamic technique that brings muscles
                back to life. The goal of E-Stim is to restore or improve function and strength of muscles that have
                become weak or are not functioning properly due to neurological conditions.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Small electrodes are placed on the skin over the targeted muscles, and controlled electrical impulses
                stimulate the nerves to activate these muscles. This helps train the muscles to contract properly and
                can even help in reestablishing proper neural pathways to improve function.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Strengthens weak muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Increases blood flow to muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Prevents muscle atrophy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves muscle activation patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Enhances functional movements</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Who Can Benefit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Children with weakness from cerebral palsy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Spinal cord injuries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Stroke recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Muscular dystrophy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Other neuromuscular conditions</span>
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
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/8f0c5037-f94f-461d-8fdb-4e1f401adf57/Vibration-Plate-Page-Spot1.jpg" 
                alt="Full body vibration therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">Enhancing Body-Brain Communication</h3>
              <p className="text-lg text-gray-700 mb-5">
                Vibration therapy is a type of neuro-muscular re-education that ultimately works to increase communication
                between the body and the brain. This therapy provides mechanical stimulation that travels throughout the body,
                stimulating muscle spindles and activating reflexive muscle contractions.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Our vibration platform delivers controlled, consistent vibration through the feet and legs that travels
                throughout the body. The therapist can adjust the frequency and amplitude of the vibrations based on the
                child's specific needs and goals.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Increases muscle strength and tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves balance and proprioception</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Enhances circulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Promotes bone density</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Reduces muscle spasticity</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Applications</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Pre-treatment warm-up</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Standing tolerance and balance training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Spasticity management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Strengthening exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Sensory integration</span>
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
            <div className="h-96 overflow-hidden">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/b094f921-0803-41f7-b754-413d78dcae28/K-Tape-Vert.png" 
                alt="Additional techniques including kinesiotape" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">Complementary Therapeutic Approaches</h3>
              <p className="text-lg text-gray-700 mb-5">
                Our therapists employ a wide range of additional specialized techniques to complement our core treatment
                methods. Each of these approaches can be used individually or in combination to address specific needs
                and enhance overall outcomes.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Specialized Techniques</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Kinesiotape:</strong> Elastic therapeutic tape that supports muscles while allowing full range of motion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Neuro-Developmental Treatment (NDT):</strong> Hands-on approach that facilitates more normal movement patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Proprioceptive Neuromuscular Facilitation (PNF):</strong> Techniques that enhance neuromuscular response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg"><strong>Total Motion Release:</strong> Innovative approach using mirror movements to improve function</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-blue-700 border-b-2 border-blue-500 pb-2">Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Tailored approach for each child's unique needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Enhanced outcomes when combined with core treatment methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Addresses specific functional limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Supports carryover of skills to daily activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Provides additional tools for home program continuation</span>
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
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/b2c625fa-f41f-418a-aae5-bea1168e4f65/H-Lauren-with-ball.jpg" 
            alt="Innovative treatment methods at Now I Can" 
            className="w-full h-64 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold font-heading mb-6">Treatment Methods</h1>
        <p className="text-lg mb-8">
          Now I Can therapists have extensive training in cutting edge methods, models and techniques 
          to use with each child to help them reach towards each developmental milestone.
        </p>
        
        {/* Method Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 overflow-x-auto pb-2 border-b border-gray-200">
          {treatmentMethods.map((method) => (
            <button
              key={method.id}
              className={`px-4 py-3 whitespace-nowrap text-sm font-medium transition-colors rounded-t-lg ${
                activeTab === method.id
                  ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(method.id)}
            >
              {method.name}
            </button>
          ))}
        </div>
        
        {/* Current Method Content */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-6">{currentMethod.name}</h2>
          {currentMethod.content}
        </div>
        
        {/* Our Approach Section */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 shadow-md">
            <h2 className="text-xl font-bold text-blue-800 mb-3">Our Comprehensive Approach</h2>
            <p className="text-base mb-3">
              At Now I Can, we believe in using a combination of treatment methods to achieve the best results for each child. 
              Our therapists are trained in multiple techniques and will create a customized treatment plan based on your child's 
              specific needs and goals.
            </p>
            <p className="text-base">
              During your free consultation, we'll discuss which treatment methods might be most beneficial for your child 
              and how we can integrate them into a comprehensive therapy plan.
            </p>
          </div>
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-bold mb-2">Intensive Therapy Program</h2>
              <p className="text-base mb-3">
                Our intensive therapy program utilizes these treatment methods in a concentrated format, 
                helping children achieve significant progress in a short period of time.
              </p>
              <Link 
                to="/therapy-services/intensive-physical-therapy" 
                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn About Intensive Therapy
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-bold mb-2">Get Started Today</h2>
              <p className="text-base mb-3">
                The team at Now I Can looks forward to speaking with you to discuss how your child can reach their 
                highest potential. Schedule a free consultation now.
              </p>
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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