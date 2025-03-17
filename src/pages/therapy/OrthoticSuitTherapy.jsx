import React from 'react';
import { Link } from 'react-router-dom';

const OrthoticSuitTherapy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Orthotic Suit Therapy</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 w-full">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/8e22fc86-bcc5-46d9-9f66-6221d1b3f577/H-Suit-therapy.jpg" 
                alt="Child wearing orthotic suit during therapy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Just Like Superheroes, Our Kids Wear Suits and Achieve Great Feats!</h2>
              <p className="text-lg mb-6">
                Research shows that orthotic suits comprised of various resistance bands placed over major muscle groups, 
                can greatly increase a child's mobility achievements. Now I Can therapists are experienced in accurately 
                assessing where to place the bungees, which order to train the muscles, and the amount of resistance 
                required for each child's specific needs. We love using this therapy tool at Now I Can!
              </p>
              <p className="text-lg">
                Made of soft canvas, our suit is a breathable, dynamic orthotic that improves and changes proprioception 
                (the brain's awareness of the position and movement of the body). It works by loading the entire body with 
                weighted resistance bands that mimic real-life muscular reaction to gravitational forces. Wearing the suit 
                reduces pathological reflexes and also restores physiological muscle synergies.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/2aeb5562-0d40-4389-a339-b425dc9bb5a0/Suit-Therapy-Page-Spot1.jpg" 
                  alt="Child in orthotic suit" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">How It Works</h3>
                <p className="text-lg mb-4">
                  Each child wearing the suit will move through exercises that help them experience "normalized" movements 
                  and gait patterns. How the suit is worn, and how the straps engage the body through resistance, cause the 
                  nervous system to send new messages to the vestibular system.
                </p>
                <p className="text-lg">
                  In neuromuscular conditions, such as Cerebral Palsy, the information from the body is misinterpreted by the 
                  brain reducing body awareness and overall function. The good news is that by using Suit Therapy we can override 
                  unwanted signals and replace them with correct information, which is then sent to the brain. Through thousands 
                  of repetitive actions performed while using Suit Therapy, kids can start to retrain their brains and achieve 
                  next-level change.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/a20ab1b4-1638-47db-93dd-4a8b59acb657/Suit-Therapy-Page-Spot3.jpg" 
                  alt="Accelerated progress with suit therapy" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Accelerated Progress</h3>
                <p className="text-lg">
                  Compared to traditional therapy, Suit Therapy—as part of an intensive training program—is an ideal way to 
                  accelerate a child's progress and rapidly attain new levels of achievement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Indications for Suit Therapy Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
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
                  <span>Post Stroke (CVA)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Ataxia and Athethosis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Spasticity (increased muscle tone)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Hypotonia (low muscle tone)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Hypertonia</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Suit Therapy Benefits</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-1">
              <div className="h-full">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/3c35eb67-fadb-416d-af1a-6b0030c86325/C-Suit-Therapy-3.jpg" 
                  alt="Child in suit therapy" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Retrains central nervous system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Provides external stabilization</span>
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
                    <span>Provides dynamic correction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Provides tactile stimulation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Influences vestibular system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Improves balance and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Decreases uncontrolled movement in ataxia and athethosis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Improves body and spatial awareness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Supports weak muscles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Provides resistance to strong muscles to further enhance strengthening</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Improves bone density</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Helps decrease contractions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Vertical loading over the hip joint</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Improves hip alignment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 h-full">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/30720756-654f-4a48-b511-611806843f53/Reta-family.png" 
                  alt="Reta Family" 
                  className="w-full h-full object-cover"
                />
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
                <p className="text-gray-700 mt-2">- Reta Family</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
                <p className="text-lg mb-6">
                  The team at Now I Can looks forward to speaking with you to discuss how your child can reach their highest potential. 
                  Click here or give us a call to schedule a free screening!
                </p>
                <div>
                  <Link 
                    to="/for-families/getting-started/free-consultation" 
                    className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
              <div className="h-full">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/28819d7f-9bf5-49a0-81f0-e485d1fb7d2b/zoe-in-suit.png" 
                  alt="Child in therapy suit" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrthoticSuitTherapy;