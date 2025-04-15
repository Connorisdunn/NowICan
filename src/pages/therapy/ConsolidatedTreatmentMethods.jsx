import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import orthoticImage from '../../assets/images/orthotic.jpg';
import orthoticImage2 from '../../assets/images/orthotic2.jpg';
import universalImage from '../../assets/images/universal-exercise.jpg';
import universalImage2 from '../../assets/images/universal-exercise2.jpg';
import manualImage1 from '../../assets/images/manual-therapy1.jpg';
import manualImage2 from '../../assets/images/manual-therapy2.jpg';
import manualImage3 from '../../assets/images/manual-therapy3.jpg';
import manualImage4 from '../../assets/images/manual-therapy4.jpg';
import manualImage5 from '../../assets/images/manual-therapy5.jpg';
import estimImage from '../../assets/images/estim.jpg';
import vibrationImage from '../../assets/images/vibration.jpg';
import ndtImage from '../../assets/images/C-MMT-ndt-manual.jpg';
import pnfImage from '../../assets/images/pnf.jpg';
import tmrImage from '../../assets/images/tmr.jpg';
import theratogsImage from '../../assets/images/theratogs.jpg';
import dmiImage from '../../assets/images/imagecomingsoon.png';
import treatmentImage from '../../assets/images/P-Lauren-w-rod.jpg';

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
            <div className="p-8">
              <p className="text-xl italic text-primary-blue-700 mb-5">
                Just like superheroes, our kids wear suits and achieve great feats!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={orthoticImage}
                    alt="Child performing therapy exercises in orthotic suit" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={orthoticImage2}
                    alt="Therapist adjusting orthotic suit" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-5">Orthotic Suit</h3>
              <p className="text-lg text-gray-700 mb-5">
                Research shows that orthotic suits comprised of various resistance bands placed over major muscle groups, 
                can greatly increase a child's mobility achievements. Now I Can therapists are experienced in accurately 
                assessing where to place the bungees, which order to train the muscles, and the amount of resistance 
                required for each child's specific needs. We love using this therapy tool at Now I Can!
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Made of soft canvas, our suit is a breathable, dynamic orthotic that improves and changes proprioception 
                (the brain's awareness of the position and movement of the body). It works by loading the entire body with 
                weighted resistance bands that mimic real-life muscular reaction to gravitational forces. Wearing the suit 
                reduces pathological reflexes and also restores physiological muscle synergies.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Each child wearing the suit will move through exercises that help them experience "normalized" movements 
                and gait patterns. How the suit is worn, and how the straps engage the body through resistance, cause the 
                nervous system to send new messages to the vestibular system.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                In neuromuscular conditions, such as Cerebral Palsy, the information from the body is misinterpreted by the 
                brain reducing body awareness and overall function. The good news is that by using Suit Therapy we can override 
                unwanted signals and replace them with correct information, which is then sent to the brain. Through thousands 
                of repetitive actions performed while using Suit Therapy, kids can start to retrain their brains and achieve 
                next-level change.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                Compared to traditional therapy, Suit Therapy—as part of an intensive training program—is an ideal way to 
                accelerate a child's progress and rapidly attain new levels of achievement.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-primary-blue-700 border-b-2 border-primary-blue-500 pb-2">Suit Therapy Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Retrains central nervous system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Provides external stabilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Normalizes muscle tone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Aligns the body and normalizes gait pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Provides dynamic correction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Provides tactile stimulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Influences vestibular system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves balance and coordination</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-primary-blue-700 border-b-2 border-primary-blue-500 pb-2">More Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Decreases uncontrolled movement in ataxia and athethosis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves body and spatial awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Supports weak muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Provides resistance to strong muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves bone density</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Helps decrease contractions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Vertical loading over the hip joint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves hip alignment</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 mb-6">
            <h3 className="text-xl font-bold mb-4 text-primary-blue-700 border-b-2 border-primary-blue-500 pb-2">Indications for Suit Therapy Use</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Cerebral Palsy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Developmental Delays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Traumatic Brain Injury</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Post Stroke (CVA)</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Ataxia and Athethosis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Spasticity (increased muscle tone)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Hypotonia (low muscle tone)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Hypertonia</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                  src={universalImage2}
                  alt="Child in Universal Exercise Unit" 
                  className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={universalImage}
                    alt="Therapist adjusting orthotic suit" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">Universal Exercise Unit</h3>
              <p className="text-lg text-gray-700 mb-5">
                We want to see your child reach milestones. Improvements in crawling, sitting, walking, even jumping - are all 
                within reach with the help of the Universal Exercise Unit (UEU).
              </p>
              <p className="text-lg text-gray-700 mb-5">
                The Universal Exercise Unit holds the child with bungee cords attached to a belt around their waist. 
                Pulleys and weights may also be used to create muscle isolation and improve strengthening. The UEU allows 
                therapists to have free hands to help the child perform the exercises correctly. The bungees allow kids to 
                feel themselves in space, improve balance and have needed support while stretching, doing sit to stand, or 
                balancing on one leg. The UEU opens the door to a whole new set of treatments that can rapidly help patients 
                achieve maximum function in gait, balance and coordination.
              </p>
              <p className="text-lg text-gray-700 mb-5">
                The best part about the Universal Exercise Unit is that it's <em>fun</em>! With a few adjustments to the 
                bungee support, kids can learn to jump and "fly" in the air. It's so fun to see children experience movements 
                and sensations they've never been able to experience before!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-primary-blue-700 border-b-2 border-primary-blue-500 pb-2">Benefits of UEU Treatment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Increased range of motion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Isolates desired muscle groups to strengthen them and enable function</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Eliminates gravitational forces acting on the body</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves balance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-primary-blue-700 border-b-2 border-primary-blue-500 pb-2">Additional Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Improves coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Promotes developmental milestones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Facilitates upright position, improving breath support and decreasing pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Promotes independence and overall improved physical image</span>
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
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={manualImage5} 
                    alt="Therapist providing hands-on manual therapy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-5">Manual Therapy</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Now I Can therapists provide the hands-on evaluation and personalized therapy your child deserves. 
                    Applying the newest innovations, our physical therapists use manual therapy as a tool to prepare the 
                    body to achieve better range of motion or improved alignment.
                  </p>
                  <p className="text-lg text-gray-700">
                    These hands-on therapies help to alleviate pain, stiffness, spasticity, swelling, guarding, and other imbalances.
                  </p>
                </div>
              </div>
              
              <br></br>
              <p className="text-lg text-gray-700 mb-5">
                We use a combination of massage and pressure point techniques to target joints, muscles, ligaments, 
                tendons, fascia, and lymphatic fluid in areas affected by neuromuscular disorders, faulty movement 
                patterns, or injury.
              </p>
              <br></br>
              
              {/* Soft Tissue Mobilization Section */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={manualImage1} 
                        alt="Soft tissue mobilization therapy" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">Soft Tissue Mobilization and Myofascial Release</h4>
                    <p className="text-lg text-gray-700">
                      Soft Tissue Mobilization restores mechanical movement and increases range of motion by releasing tension 
                      within scar tissue and fascia. Fascia are sheets of fibrous tissue that surround and support muscles 
                      by separating them into layers. Neuro disorders and injury may cause both fascia and muscles to shorten, 
                      restricting movement and blood flow. Our soft tissue mobilization and Myofascial Release techniques apply 
                      different levels and directions of pressure to target areas resulting in the breakdown of muscle adhesions.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Joint Mobilization Section */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={manualImage2} 
                        alt="Joint mobilization therapy" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">Joint Mobilization</h4>
                    <p className="text-lg text-gray-700 mb-3">
                      When joint structures are out of alignment they may interfere with normal range of motion by 
                      introducing mechanical hiccups like "sliding" or "pivoting."
                    </p>
                    <p className="text-lg text-gray-700">
                      Using small and specific movements, our physical therapists manually move a target synovial joint 
                      through natural levels of resistance. These motions stretch and strengthen the tissue surrounding 
                      the joint bone—normalizing joint motion, reducing spasms, and controlling pain.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Strain-Counterstrain Section */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={manualImage3} 
                        alt="Strain-counterstrain technique" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">Strain-Counterstrain</h4>
                    <p className="text-lg text-gray-700">
                      The goal of the Strain-Counterstrain technique is to correct postural and structural issues originating 
                      from abnormal neuromuscular reflexes. It uses passive body positioning of muscles in spasm and repositions 
                      them toward ease that shortens the muscle. The purpose of shortening the muscle is to relax the reflexes 
                      that produce muscle spasm. In return, muscle tone begins to develop while joints gain greater range of 
                      motion and muscle pain reduces. This extremely gentle but effective technique of "releasing" muscles and 
                      connective tissue was developed by Dr. Lawrence Jones.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Muscle Energy Techniques Section */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={manualImage4} 
                        alt="Muscle energy techniques" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">Muscle Energy Techniques</h4>
                    <p className="text-lg text-gray-700">
                      Muscle energy is an active technique used to reposition a dysfunctional joint and treat the 
                      surrounding muscles. It can be used to lengthen a shortened or spastic muscle or mobilize a joint 
                      that is stiff or restricted. The patient is guided through performing a specific muscle contraction 
                      against a resistive barrier (the physical therapist's manual contact with the joint.) This process 
                      is repeated until visible muscle stretch and increased range of motion is achieved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Manual Techniques List - Interactive Version */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-primary-blue-700 border-b-2 border-primary-blue-500 pb-2">
                Manual Techniques Used
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Acupressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Craniosacral Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Lymphatic Drainage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Massage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Myofascial Release</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-4 text-primary-blue-700 border-b-2 border-primary-blue-500 pb-2">
                Additional Techniques
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Muscle Energy Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Muscle Stretching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Soft Tissue Mobilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Strain-Counterstrain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue-600 text-xl mr-2">•</span>
                  <span className="text-lg">Visceral Manipulation</span>
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
            <div className="p-8">
              
              {/* Grid layout with square image and intro text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={estimImage} 
                    alt="Functional E-Stim therapy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-5">Functional E-Stim</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    Functional Electrical Stimulation, more commonly called E-Stim, is a dynamic technique that brings muscles 
                    back to life. 
                    <br></br>
                    <br></br>
                    The goal of E-Stim is to restore or improve function and strength of the muscle by stimulating 
                    muscle movement and resetting muscle memory.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-5">
                Therapy is conducted by placing a small adhesive on the skin, over a nerve or muscle. Slowly, and in low doses, 
                a mild electrical current that mimics brain signals is transmitted into the adhesives and received by targeted 
                nerves and muscles. The result? Muscle stimulation that results in contraction. Fully paralyzed muscles and 
                partially paralyzed muscles alike can slowly awaken and begin to regenerate.
              </p>
              
              <p className="text-lg text-gray-700 mb-5">
                With time and repetition, E-Stim helps weak muscles gain strength and develop better tone.
              </p>
              
              <p className="text-lg text-gray-700 mb-5">
                E-Stim therapy is used during functional activities and can be used on all parts of the body.
              </p>
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
            <div className="p-8">
              {/* Grid layout with square image and intro text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={vibrationImage} 
                    alt="Full body vibration therapy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-5">Vibration Plate</h3>
                  <p className="text-lg text-gray-700 mb-4">
                    A type of neuro-muscular re-education, vibration therapy ultimately works to increase communication between 
                    the body and the brain.
                    <br></br>
                    <br></br>
                    When a child stands on, or otherwise engages with, our vibration plates, each motion 
                    transfers a quick burst of energy to the child which then engages the involuntary stretch reflex and causes 
                    muscles to contract and relax multiple times per second.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-5">
                The high repetition rate (frequency) of the vibrations, plus the alternating tilt of the plates, causes rhythmic 
                muscle contractions between the right and left side of each muscle, mimicking a human gait. (The motion is similar 
                to the way a pelvis moves and tilts when walking.)
              </p>
              
              <p className="text-lg text-gray-700 mb-5">
                The result? The brain receives thousands of signals which enhances neuroplasticity, which then translates into 
                motor relearning. Tense muscles begin to relax, balance improves, muscles strengthen, bone density increases, 
                spasms decrease, and over all there is a lessening of complications associated with disorders that restrict 
                movement and limit sensory processing.
              </p>
              
              <p className="text-lg text-gray-700 mb-5">
                Your Now I Can Foundation therapists are able to assess your child's range of ability then formulate a vibration 
                plate action plan that produces optimized change.
              </p>
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
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-5">Complementary Therapeutic Approaches</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our therapists employ a wide range of additional specialized techniques to complement our core treatment
                methods. Each of these approaches can be used individually or in combination to address specific needs
                and enhance overall outcomes.
              </p>
              
              <br></br>
              {/* NDT Section with image */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={ndtImage} 
                        alt="Neuro-Developmental Treatment (NDT)" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">Neuro-Developmental Treatment (NDT)</h4>
                    <p className="text-lg text-gray-700 mb-4">
                      Neuro-Developmental Treatment (NDT) is a hands-on therapy approach that works to override incorrect 
                      neurological signals being sent to the body and create new neuro-pathways that help children move in 
                      ways they've never moved before, or regain ability that has been lost.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Our therapists will manually control specific movements to ensure there is proper stimulation of 
                      tactile, vestibular, and somatosensory receptors within the body.
                    </p>
                    <p className="text-lg text-gray-700">
                      Frequent repetition of these therapeutic movements creates muscle memory that allows the child 
                      to develop a trusted set of movements they can use on a daily basis.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* PNF Section with image */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={pnfImage} 
                        alt="Proprioceptive Neuromuscular Facilitation (PNF)" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">PNF</h4>
                    <p className="text-lg text-gray-700 mb-4">
                      Proprioceptive Neuromuscular Facilitation (PNF) is an advanced form of flexibility training that 
                      involves both the stretching and contracting of muscle groups.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      This hands-on therapeutic exercise method generally produces excellent results in children with 
                      neuromuscular and orthopedic conditions.
                    </p>
                    <p className="text-lg text-gray-700">
                      PNF implements specific stretching techniques that stimulate proprioceptive centers 
                      within joints, muscles and tendons. As these areas "come to life", flexibility and range of motion 
                      increases and normalized patterns of movement begin to emerge.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Total Motion Release Section with image */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={tmrImage} 
                        alt="Total Motion Release therapy" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">Total Motion Release</h4>
                    <p className="text-lg text-gray-700 mb-4">
                      Our total motion release technique uses the principles of "Strain Counterstrain" to alleviate pain 
                      and dynamically increase range of motion and comfort throughout the body.
                    </p>
                    <p className="text-lg text-gray-700">
                      It starts with hands-on therapy that gently guides spasmed muscles and debilitated joints into 
                      agreeable, shortened muscle positions. This new alignment blocks spasms and delivers a calming release 
                      to affected muscles, allowing previously restricted joints to attain greater levels of motion.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* DMI Section with image */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={dmiImage} 
                        alt="Dynamic Movement Intervention" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">Dynamic Movement Intervention</h4>
                    <p className="text-lg text-gray-700 mb-4">
                      Dynamic Movement Intervention (DMI) is a therapy approach to help children build strength, balance, and 
                      coordination through fun, challenging movements. During DMI sessions, patients are guided through specific 
                      exercises that stimulate their brains and bodies to learn new motor skills, like sitting, crawling, or walking.
                    </p>
                    <p className="text-lg text-gray-700">
                      It's especially helpful for children with developmental delays or neurological challenges because it encourages 
                      the brain to form new pathways—supporting long-term improvements in movement and independence.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* TheraTogs Section with image */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={theratogsImage} 
                        alt="TheraTogs orthotic undergarments" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-primary-blue-700 mb-3">TheraTogs</h4>
                    <p className="text-lg text-gray-700 mb-4">
                      TheraTogs are specialized orthotic undergarments that support children with neuromotor challenges. 
                      These wearable systems provide gentle compression and sensory input, helping improve posture, stability, 
                      and movement control.
                    </p>
                    <p className="text-lg text-gray-700">
                      By enhancing body awareness and alignment, TheraTogs assist children in developing 
                      better motor skills and achieving greater independence in their daily activities.
                    </p>
                  </div>
                </div>
              </div>
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
            src={treatmentImage}
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
                  ? 'bg-primary-blue-600 text-white border-b-2 border-primary-blue-600'
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
          <div className="bg-primary-blue-50 rounded-lg p-6 border border-primary-blue-200 shadow-md">
            <h2 className="text-xl font-bold text-primary-blue-800 mb-3">Our Comprehensive Approach</h2>
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
                className="inline-block px-4 py-2 bg-primary-blue-600 text-white font-medium rounded-lg hover:bg-primary-blue-700 transition-colors"
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
                className="inline-block px-4 py-2 bg-primary-blue-600 text-white font-medium rounded-lg hover:bg-primary-blue-700 transition-colors"
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