import React from 'react';
import { Link } from 'react-router-dom';

const ManualTherapy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Manual Therapy</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 w-full">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/db6cd4b0-2346-4e1a-9172-f5e762b78278/H-Manual-Therapy.jpg" 
                alt="Manual Therapy session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Hands-On Therapy for Improved Movement</h2>
              <p className="text-lg mb-6">
                Now I Can therapists provide the hands-on evaluation and personalized therapy your child deserves. 
                Applying the newest innovations, our physical therapists use manual therapy as a tool to prepare the body 
                to achieve better range of motion or improved alignment. We use a combination of massage and pressure 
                point techniques to target joints, muscles, ligaments, tendons, fascia, and lymphatic fluid in areas 
                affected by neuromuscular disorders, faulty movement patterns, or injury.
              </p>
              <p className="text-lg">
                These hands-on therapies help to alleviate pain, stiffness, spasticity, swelling, guarding, and other imbalances.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Manual Therapy Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/7c930347-20ac-4125-9cb6-d9fc7d7f7499/C-Manual-Myofascial.jpg" 
                  alt="Soft Tissue Mobilization and Myofascial Release" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Soft Tissue Mobilization and Myofascial Release</h3>
                <p className="text-lg">
                  Soft Tissue Mobilization restores mechanical movement and increases range of motion by releasing 
                  tension within scar tissue and fascia. Fascia are sheets of fibrous tissue that surround and 
                  support muscles by separating them into layers. Neuro disorders and injury may cause both fascia 
                  and muscles to shorten, restricting movement and blood flow. Our soft tissue mobilization and 
                  Myofascial Release techniques apply different levels and directions of pressure to target areas 
                  resulting in the breakdown of muscle adhesions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/b208cf8a-36da-42c2-8620-fb8e27c948c7/C-Manual-JointMob.jpg" 
                  alt="Joint Mobilization" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Joint Mobilization</h3>
                <p className="text-lg">
                  When joint structures are out of alignment they may interfere with normal range of motion by 
                  introducing mechanical hiccups like "sliding" or "pivoting."
                </p>
                <p className="text-lg mt-4">
                  Using small and specific movements, our physical therapists manually move a target synovial joint 
                  through natural levels of resistance. These motions stretch and strengthen the tissue surrounding 
                  the joint bone—normalizing joint motion, reducing spasms, and controlling pain.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/3d977932-9304-4de9-be38-e099a7ec04dd/C-Manual-NDT.jpg" 
                  alt="Strain-Counterstrain Technique" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Strain-Counterstrain</h3>
                <p className="text-lg">
                  The goal of the Strain-Counterstrain technique is to correct postural and structural issues 
                  originating from abnormal neuromuscular reflexes. It uses passive body positioning of muscles 
                  in spasm and repositions them toward ease that shortens the muscle. The purpose of shortening 
                  the muscle is to relax the reflexes that produce muscle spasm. In return, muscle tone begins 
                  to develop while joints gain greater range of motion and muscle pain reduces. This extremely 
                  gentle but effective technique of "releasing" muscles and connective tissue was developed by 
                  Dr. Lawrence Jones.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/4dd02e91-884f-4278-84f9-4a4f2f9f6b5c/C-Manual-MET.jpg" 
                  alt="Muscle Energy Techniques" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Muscle Energy Techniques</h3>
                <p className="text-lg">
                  Muscle energy is an active technique used to reposition a dysfunctional joint and treat the 
                  surrounding muscles. It can be used to lengthen a shortened or spastic muscle or mobilize a 
                  joint that is stiff or restricted. The patient is guided through performing a specific muscle 
                  contraction against a resistive barrier (the physical therapist's manual contact with the joint.) 
                  This process is repeated until visible muscle stretch and increased range of motion is achieved.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Manual Techniques Utilized in Now I Can Clinics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-1">
              <div className="h-full">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/881efc39-ecce-4421-8cee-9317386a1e1c/C-Manual-NDT5.jpg" 
                  alt="Manual therapy techniques" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Acupressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Craniosacral Therapy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Lymphatic Drainage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Massage</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Myofascial Release</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Muscle Energy Techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Muscle Stretching</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Soft Tissue Mobilization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Strain-Counterstrain</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Visceral Manipulation</span>
                  </li>
                </ul>
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
                  Schedule a free consultation now.
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
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/f5fc8898-dc72-4d2d-809e-eac8af33b792/V-Zack.png" 
                  alt="Patient success story" 
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

export default ManualTherapy;