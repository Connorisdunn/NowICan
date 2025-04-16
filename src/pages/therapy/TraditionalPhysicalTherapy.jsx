import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import traditionalBannerImage from '../../assets/images/VibrationPlateHeader.jpg';
import regularSessionsImage from '../../assets/images/ball.jpg';
import extendedTreatmentImage from '../../assets/images/TraditionalTherapy3.jpg';

const TraditionalPhysicalTherapy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="mb-8 overflow-hidden rounded-lg shadow-md">
          <img 
            src={traditionalBannerImage} 
            alt="Traditional Physical Therapy at Now I Can" 
            className="w-full h-96 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold font-heading mb-6">Traditional Physical Therapy</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Ongoing Support for Your Child's Development</h2>
            <p className="text-lg mb-6">
              At Now I Can, our physical therapists inspire and motivate children to help them reach new developmental milestones.
            </p>
            <p className="text-lg mb-6">
              Our therapy team creates an individualized plan for every child that comes through our doors. 
              Along with our intensive programs, we offer traditional physical therapy appointments. 
              Traditional therapy sessions are ideal for keeping the body limber, strengthened and moving toward milestones. 
              These visits are more frequent and on-going, and are offered on a daily, weekly, bi-weekly, 
              or monthly basis according to our schedule and your needs.
            </p>
            <p className="text-lg">
              Longer sessions enable the child's brain more time to create new pathways and learn new skills. 
              The gift of time allows the physical therapist to use manual techniques and do more treatment than 
              possible in a typical 45-minute session.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Traditional Therapy Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={regularSessionsImage} 
                  alt="Regular therapy sessions" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Regular Sessions</h3>
                <p className="text-lg mb-4">
                  Our traditional therapy sessions provide consistent, ongoing care for children who need regular support.
                  Sessions can be scheduled on a weekly, bi-weekly, or monthly basis, depending on your child's needs and goals.
                </p>
                <p className="text-lg">
                  These regular sessions help maintain progress made during intensive therapy periods and continue working 
                  toward long-term developmental milestones.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={extendedTreatmentImage} 
                  alt="Extended treatment time" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Extended Treatment Time</h3>
                <p className="text-lg mb-4">
                  Unlike standard therapy sessions that typically last 30-45 minutes, our traditional therapy 
                  sessions are longer, allowing for more comprehensive treatment and progress.
                </p>
                <p className="text-lg">
                  The additional time gives your child's brain more opportunity to create new pathways and learn new skills, 
                  while allowing our therapists to use a wider range of techniques during each session.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-primary-blue-50 rounded-lg p-8 border border-primary-blue-100 mb-12">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-primary-blue-800 mb-6">Get Started Today</h2>
            <p className="text-xl text-center mb-8 max-w-3xl">
              The team at Now I Can looks forward to speaking with you to discuss how your child can reach their highest potential. 
              Schedule a free consultation now!
            </p>
            <Link 
              to="/for-families/getting-started/free-consultation" 
              className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 text-lg px-8 py-3"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TraditionalPhysicalTherapy;