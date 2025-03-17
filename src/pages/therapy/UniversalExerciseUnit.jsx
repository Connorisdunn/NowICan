import React from 'react';
import { Link } from 'react-router-dom';

const UniversalExerciseUnit = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Universal Exercise Unit</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="h-64 w-full">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/3b820391-8062-4b3c-a82e-bef7df3691f2/H-Cage-therapy.jpg" 
                alt="Universal Exercise Unit" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Reaching New Milestones</h2>
              <p className="text-lg mb-6">
                We want to see your child reach milestones. Improvements in crawling, sitting, walking, even jumping - 
                are all within reach with the help of the Universal Exercise Unit (UEU).
              </p>
              <p className="text-lg">
                The Universal Exercise Unit holds the child with bungee cords attached to a belt around their waist. 
                Pulleys and weights may also be used to create muscle isolation and improve strengthening. The UEU 
                allows therapists to have free hands to help the child perform the exercises correctly. The bungees 
                allow kids to feel themselves in space, improve balance and have needed support while stretching, 
                doing sit to stand, or balancing on one leg. The UEU opens the door to a whole new set of treatments 
                that can rapidly help patients achieve maximum function in gait, balance and coordination.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/334e7c4c-6c44-4327-baa4-8e0bdf38fd9e/nowican-17.jpg" 
                  alt="Child using Universal Exercise Unit" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Making Therapy Fun</h3>
                <p className="text-lg">
                  The best part about the Universal Exercise Unit is that it's <span className="font-bold">fun</span>! 
                  With a few adjustments to the bungee support, kids can learn to jump and "fly" in the air. 
                  It's so fun to see children experience movements and sensations they've never been able to experience before!
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/e58ab7df-5876-427b-8b18-b628ba68071d/nowican-5.jpg" 
                  alt="Customized UEU Treatment" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Customized Treatment</h3>
                <p className="text-lg">
                  Each UEU session is carefully designed by our expert therapists to address your child's specific goals and needs. 
                  The versatility of the Universal Exercise Unit allows us to create a wide range of exercises and activities 
                  that target exactly what your child needs to progress.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Benefits of UEU Treatment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Increased range of motion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Isolates desired muscle groups to strengthen them and enable function</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Eliminates gravitational forces acting on the body</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improves balance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Improves coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Promotes developmental milestones</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Facilitates upright position, improving breath support and decreasing pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Promotes independence and overall improved physical image</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg overflow-hidden border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 h-full flex items-center justify-center p-4">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/17e1ce8e-4b86-4a98-b7a7-cd25702d8556/Testimonials-Anderson.png" 
                  alt="Family Testimonial" 
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">Parent Testimonial</h2>
                <p className="text-lg italic">
                  "Each 3 week therapy session starts with a sit-down meeting where together with the therapist, 
                  we establish goals for Bronson and his near future. We feel that the therapists do exceptional 
                  work when customizing a plan to help Bronson reach his goals and ultimate potential."
                </p>
                <p className="text-gray-700 mt-2">— Miner Family, Texas, USA</p>
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
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/6986aca9-95f1-40c8-b0ae-b1b2b8789127/nowican-51.jpg" 
                  alt="Child using Universal Exercise Unit" 
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

export default UniversalExerciseUnit;