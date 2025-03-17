import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalTechniques = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Additional Techniques</h1>
        <p className="text-lg mb-8">
          Now I Can therapists utilize many specialized techniques to help children reach their greatest potential. 
          Below are some of the additional methods we incorporate into our comprehensive therapy approach.
        </p>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Kinesiotape</h2>
              <p className="text-lg mb-4">
                Kinesiotape is made from breathable cotton fabric strips with adhesive on one side. Designed specifically 
                to be worn on the body, Kinesiotape is used to help support and restore balance within muscles. By placing 
                Kinesiotape in specific arrangements we can activate weaker muscles, assist injured muscles in recovery, 
                and reduce the severity of over-contracting muscles.
              </p>
              <p className="text-lg">
                Kinesiotape is also used to encourage the correct positioning of a body segment while inhibiting certain muscles. 
                This simple application has also been found to increase the effectiveness of the lymphatic system.
              </p>
              <p className="text-lg mt-4">
                The positive effects of taping continue for 24-hours a day for several days after application. Kinesiotape is 
                hypoallergenic, water-resistant, and comfortable, so it can be left on for bathing, swimming, and other activities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Neuro-Developmental Treatment (NDT)</h2>
              <p className="text-lg mb-4">
                Neuro-Developmental Treatment (NDT) is a hands-on therapy approach that works to override incorrect neurological 
                signals being sent to the body and create new neuro-pathways that help children move in ways they've never moved 
                before, or regain ability that has been lost.
              </p>
              <p className="text-lg mb-4">
                Our therapists will manually control specific movements to ensure there is proper stimulation of tactile, 
                vestibular, and somatosensory receptors within the body.
              </p>
              <p className="text-lg">
                Frequent repetition of these therapeutic movements will create muscle memory that allows the child to develop 
                a trusted set of movements they can use on a daily basis.
              </p>
              <p className="text-lg mt-4">
                Not only will NDT help children achieve a basic skill set of movement, but its implementation also works to 
                eliminate atypical postures and motions that may eventually lead to secondary impairments as the child gets older.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Proprioceptive Neuromuscular Facilitation (PNF)</h2>
              <p className="text-lg mb-4">
                Proprioceptive Neuromuscular Facilitation (PNF) is an advanced form of flexibility training that involves 
                both the stretching and contracting of muscle groups.
              </p>
              <p className="text-lg mb-4">
                This hands-on therapeutic exercise method generally produces excellent results in children with neuromuscular 
                and orthopedic conditions.
              </p>
              <p className="text-lg">
                PNF implements specific stretching techniques that stimulate and facilitate proprioceptive centers within 
                joints, muscles and tendons. As these areas "come to life", flexibility and range of motion increases and 
                normalized patterns of movement begin to emerge and replace old patterns.
              </p>
              <p className="text-lg mt-4">
                Through a detailed evaluation, the Now I Can team will design a therapeutic plan to incorporate the most 
                appropriate PNF techniques to decrease and/or increase tone, gain range of motion, and improve coordination 
                and control of neuromuscular function.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Total Motion Release</h2>
              <p className="text-lg mb-4">
                Our total motion release technique uses the principles of "Strain Counterstrain" to alleviate pain and 
                dynamically increase range of motion and comfort throughout the body.
              </p>
              <p className="text-lg">
                It starts with hands-on therapy that gently guides spasmed muscles and debilitated joints into agreeable, 
                shortened muscle positions. This new alignment blocks spasms and delivers a calming release to affected muscles. 
                Relaxed muscles allow previously restricted joints to attain greater levels of motion release. While in this 
                position of counter-strain the therapist will have your child perform simple exercises that work to strengthen 
                the body and maintain proper alignment and function.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <div class="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">Parent Testimonial</h2>
              <p className="text-lg italic">
                "Our son, Canyon, was born with cerebral palsy. We were referred to "Now I Can" by a friend whose brother had 
                benefited from the amazing therapy that they provide. I can honestly say "Now I Can" has changed our sons life! 
                I have never met a team of people so dedicated and willing to do anything to help our child. When we first started 
                going to "Now I Can" my son couldn't even crawl; now he can crawl and has started walking using a walker. Because of 
                their continuous love and dedication to helping our son, we have made it a priority to continue getting these services 
                every year. "Now I Can" gives us continuous hope for his future."
              </p>
              <p className="text-gray-700 mt-2">-Giles Family</p>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg mb-6">
              The team at Now I Can looks forward to speaking with you to discuss how your child can reach their highest potential. 
              Schedule a free consultation now.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
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

export default AdditionalTechniques;