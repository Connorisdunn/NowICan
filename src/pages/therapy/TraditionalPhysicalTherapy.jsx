import React from 'react';
import { Link } from 'react-router-dom';

const TraditionalPhysicalTherapy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/6861c38a-ebdf-4fe0-8c3c-7dcd2ddc40f3/H-Traditional-Therapy.jpg" 
            alt="Traditional Physical Therapy at Now I Can" 
            className="w-full h-64 object-cover"
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
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/e68d6c63-dddb-46a7-a0af-e33aee339b3d/Traditional2.jpeg" 
                  alt="Regular therapy sessions" 
                  className="w-full h-full object-cover"
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
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/92400a06-7978-4ed7-9ed3-087006b83cdc/C-Traditional-4.jpg" 
                  alt="Extended treatment time" 
                  className="w-full h-full object-cover"
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
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Benefits of Traditional Therapy at Now I Can</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Consistent Progress</h3>
              <p className="text-gray-700">
                Regular therapy sessions ensure continuous progress toward developmental goals, 
                helping to maintain gains made during intensive therapy periods.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-gray-700">
                Each child receives an individualized therapy plan designed specifically for their 
                unique needs, challenges, and developmental goals.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Advanced Techniques</h3>
              <p className="text-gray-700">
                Our therapists utilize the same innovative treatment methods used in our intensive programs, 
                adapted for traditional therapy schedules.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-blue-50 rounded-lg p-8 border border-blue-100 mb-12">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Get Started Today</h2>
            <p className="text-xl text-center mb-8 max-w-3xl">
              The team at Now I Can looks forward to speaking with you to discuss how your child can reach their highest potential. 
              Schedule a free consultation now!
            </p>
            <Link 
              to="/for-families/getting-started/free-consultation" 
              className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6">Combining Traditional and Intensive Approaches</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg mb-6">
              Many families find that combining our traditional therapy program with periodic intensive 
              therapy sessions provides the optimal approach for their child's development. This combined 
              approach allows for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
              <li>Breakthrough progress during intensive sessions</li>
              <li>Consistent maintenance and reinforcement during traditional sessions</li>
              <li>Development of new skills year-round</li>
              <li>Adaptability to your family's schedule and lifestyle</li>
            </ul>
            <p className="text-lg mb-6">
              Our therapy team can help you determine the best combination of services for your child's unique needs.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/therapy-services/intensive-physical-therapy" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 mr-4"
              >
                Learn About Intensive Therapy
              </Link>
              <Link 
                to="/therapy-services/therapy-schedule" 
                className="btn bg-gray-600 text-white hover:bg-gray-700"
              >
                View Therapy Schedule
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TraditionalPhysicalTherapy;