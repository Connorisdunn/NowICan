import React from 'react';
import { Link } from 'react-router-dom';

const IntensivePhysicalTherapy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Intensive Physical Therapy</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8 mb-6">
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4">A Unique Approach to Physical Therapy</h2>
                <p className="text-lg mb-6">
                  A unique characteristic of Now I Can physical therapy centers is the use of the Intensive Model of Therapy (IMOT). 
                  IMOT originated in Poland, and our founders, the Christensens took their daughter, Colby there to receive this effective therapy. 
                  This treatment model has proven to bring results for thousands of children.
                </p>
                <p className="text-lg">
                  Now I Can physical therapists design a tailored program for each patient, designed to meet their individual needs and goals. 
                  During an intensive session, many children gain greater independence and new developmental skills. 
                  It's very common for patients to see more progress in three weeks of intensive therapy than they do in 12 months of traditional therapy!
                </p>
              </div>
              <div className="lg:w-1/2 rounded-lg overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/7a994aef-117f-4922-b156-8752c83881a6/H-About-NIC.jpg" 
                  alt="Intensive Physical Therapy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg">
              During an Intensive Physical Therapy Session, we use the NeuroSuit and the Universal Exercise Unit. 
              Children from as young as 10 months see great results from intensive physical therapy. 
              Our team will be able to assess if a lighter schedule is best for your child.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Does the IMOT Schedule Look Like?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/dfbfc6b8-d061-455f-b6a4-5ad4a1f9568e/Intensive.jpg" 
                  alt="Session Structure" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Session Structure</h3>
                <p className="text-lg mb-4">
                  Now I Can therapists treat patients for 4 hours a day, five days a week. 
                  An intensive program is three weeks in length, but weekly sessions are also part of Now I Can's services.
                </p>
                <p className="text-lg">
                  At Now I Can, children work toward their specific functional goals, while developing improved strength, endurance, motor planning and balance. 
                  Therapists work to help regulate muscle tone, integrate unwanted reflex patterns and improve alignment. 
                  Therapists also work with patients to improve their motor patterns through repetition while in correct alignment.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/db6cd4b0-2346-4e1a-9172-f5e762b78278/H-Manual-Therapy.jpg" 
                  alt="Preparation & Techniques" 
                  className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Preparation & Techniques</h3>
                <p className="text-lg">
                  Before any exercise has started, therapists spend time manually working with children with a variety of modality options 
                  that might include heat, massage oil, brushing and other sensory inputs. This is all to prepare the body for exercise and motor inputs. 
                  Manual techniques might include myofascial release, total motion release, strain/counterstrain, massage or a variety of other techniques!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Treatment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/8e22fc86-bcc5-46d9-9f66-6221d1b3f577/H-Suit-therapy.jpg" 
                  alt="Orthotic Suit Therapy" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Orthotic Suit</h3>
                <p className="text-lg mb-4">
                  During therapy, most children 2½ years or older, spend time in either the NeuroSuit or Therasuit. 
                  The suit is made of a vest, shorts, shoes, and rubber bungees. The suits simultaneously provide resistance 
                  and support to a patient. It helps their body find better alignment, while the bungee cords provide a 
                  comforting compression to the joints and distribute vertical weight-bearing to the entire body.
                </p>
                <p className="text-lg">
                  The bungees mimic the major muscle groups, and when skillfully applied, can help patients learn better 
                  patterns of movement and gain correct muscle memory that carries over even after the suit is removed.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/3b820391-8062-4b3c-a82e-bef7df3691f2/H-Cage-therapy.jpg" 
                  alt="Universal Exercise Unit" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Universal Exercise Unit</h3>
                <p className="text-lg mb-4">
                  Now I Can uses the Universal Exercise Unit to help patients isolate, stretch, and strengthen specific muscles. 
                  This piece of equipment uses weights and pulleys to allow the therapist to facilitate different stretches and 
                  exercises while keeping their hands free to help their patient.
                </p>
                <p className="text-lg">
                  The UEU also helps children work on functional skills such as sit-to-stand, kneeling and jumping to name a few.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 mb-4">
            <Link 
              to="/therapy-services/treatment-methods" 
              className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 inline-block px-6 py-3 text-lg"
            >
              Discover Our Complete Range of Treatment Methods
            </Link>
          </div>
        </section>
        
        <section className="bg-primary-blue-50 rounded-lg overflow-hidden border border-primary-blue-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-primary-blue-800 mb-6">Get Started Today</h2>
              <p className="text-xl mb-8">
                The team at Now I Can looks forward to speaking with you to discuss how your child can reach their highest potential. 
                Schedule a free consultation now.
              </p>
              <div>
                <Link 
                  to="/for-families/getting-started/free-consultation" 
                  className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 text-lg px-8 py-3"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            <div className="h-full">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/i.vimeocdn.com/video/1342502282-0a073e4ce3ece0e8a2259911222acaec1cd4a264667b0c2ccf0513c2f36dbed4-d_1280" 
                alt="Child in therapy session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntensivePhysicalTherapy;