import React from 'react';
import { Link } from 'react-router-dom';

const FunctionalEStim = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Functional E-Stim</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Bringing Muscles Back to Life</h2>
            <p className="text-lg mb-6">
              Functional Electrical Stimulation, more commonly called E-Stim, is a dynamic technique that brings 
              muscles back to life. The goal of E-Stim is to restore or improve function and strength of the muscle 
              by stimulating muscle movement and resetting muscle memory.
            </p>
            <p className="text-lg">
              Therapy is conducted by placing a small adhesive on the skin, over a nerve or muscle. Slowly, and in 
              low doses, a mild electrical current that mimics brain signals is transmitted into the adhesives and 
              received by targeted nerves and muscles. The result? Muscle stimulation that results in contraction. 
              Fully paralyzed muscles and partially paralyzed muscles alike can slowly awaken and begin to regenerate.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Building Strength and Tone</h3>
              <p className="text-lg">
                With time and repetition, E-Stim helps weak muscles gain strength and develop better tone. 
                This improvement in muscle function can lead to increased mobility, better balance, and greater 
                independence for your child.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Versatile Application</h3>
              <p className="text-lg">
                E-Stim therapy is used during functional activities and can be used on all parts of the body. 
                Our therapists carefully determine which muscle groups would benefit most from E-Stim treatment 
                and integrate this technique with other therapies for optimal results.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Benefits of E-Stim Therapy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Muscle Activation</h3>
              <p className="text-gray-700">
                Stimulates dormant or weak muscles, helping them contract and develop better function even in cases 
                where voluntary muscle control is limited.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Neurological Retraining</h3>
              <p className="text-gray-700">
                Helps establish new neural pathways by sending signals that mimic those naturally produced by the brain, 
                essentially retraining the nervous system.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Functional Improvement</h3>
              <p className="text-gray-700">
                When used during functional activities, E-Stim helps create proper movement patterns that can eventually 
                be performed without assistance.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-3 text-center">Ella's Story</h2>
            <div className="mt-4">
              <p className="text-lg mb-4">
                Ella came to Now I Can with significant muscle weakness in her legs. After evaluation, our therapists 
                determined that E-Stim would be beneficial as part of her intensive therapy program. Initially, Ella's 
                muscles showed minimal response to voluntary control, but after just one week of daily E-Stim therapy 
                combined with other techniques, her parents noticed she was beginning to initiate small movements on her own.
              </p>
              <p className="text-lg">
                By the end of her three-week intensive session, Ella had gained substantial strength in her leg muscles and 
                was able to stand with minimal support - something that seemed impossible before. The E-Stim therapy helped 
                "wake up" muscles that had been dormant and gave Ella's brain new pathways to control her movements.
              </p>
              <p className="text-gray-700 mt-4 italic text-center">
                Note: Ella's story is a composite created based on typical patient experiences at Now I Can. While it represents 
                the type of progress we often see, individual results will vary based on each child's unique condition and needs.
              </p>
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

export default FunctionalEStim;