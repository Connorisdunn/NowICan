import React from 'react';
import { Link } from 'react-router-dom';

const PaymentFinancialAid = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Payment & Financial Aid</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Financial Options for Your Child's Therapy</h2>
            <p className="text-lg mb-6">
              At Now I Can, we understand that the cost of specialized therapy is a significant consideration 
              for families. We strive to make our services as accessible as possible through a variety of payment 
              options and financial assistance programs.
            </p>
            <p className="text-lg">
              We believe that financial constraints should never prevent a child from receiving the therapy they need. 
              Our team is committed to working with families to find solutions that make our therapy programs accessible.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Payment Options</h3>
                <p className="text-lg mb-4">
                  We offer several payment options to accommodate different family situations, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
                  <li>Insurance billing for qualifying services</li>
                  <li>Payment plans with flexible scheduling</li>
                  <li>Credit card, check, and electronic payment options</li>
                  <li>Health Savings Account (HSA) compatibility</li>
                </ul>
                <Link 
                  to="/for-families/payment-financial-aid/payment-options" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700 inline-block"
                >
                  View Payment Options
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Therapy Grants</h3>
                <p className="text-lg mb-4">
                  Through our Ability Fund, Now I Can Foundation provides financial aid and grants to many patients 
                  who need assistance covering therapy costs. Our grant program is designed to help make intensive 
                  therapy accessible to more families.
                </p>
                <Link 
                  to="/for-families/payment-financial-aid/therapy-grants" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700 inline-block"
                >
                  Learn About Therapy Grants
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Insurance Information</h2>
            <p className="text-lg mb-6">
              Many families have questions about insurance coverage for our services. While we don't directly bill 
              insurance companies, we can provide you with detailed documentation that you can submit to your insurance 
              provider for potential reimbursement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Insurance Documentation We Provide:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Detailed receipts with CPT codes</li>
                  <li>Treatment notes and documentation</li>
                  <li>Letters of medical necessity (upon request)</li>
                  <li>Supporting documentation for filing claims</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Tips for Insurance Coverage:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact your insurance provider before therapy begins</li>
                  <li>Ask about out-of-network benefits for physical therapy</li>
                  <li>Inquire about special provisions for pediatric therapy</li>
                  <li>Request information about reimbursement procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
            <p className="text-lg mb-6">
              Ready to make a payment for your child's therapy session? We've made it simple and secure to 
              pay online through our payment portal.
            </p>
            <div className="flex justify-center">
              <Link 
                to="#" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Payment portal would open here. This is a demo site.');
                }}
              >
                Make a Payment
              </Link>
            </div>
            <p className="text-sm text-center mt-4 text-gray-600">
              Note: This is a demonstration website. In the real application, this button would link to a secure payment portal.
            </p>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Financial Questions?</h2>
            <p className="text-lg mb-6">
              Our dedicated staff is available to answer any questions you have about payment options, financial aid, 
              or insurance documentation. We're here to help make the financial process as smooth as possible so you 
              can focus on what's most important: your child's progress.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact-us" 
                className="btn bg-gray-600 text-white hover:bg-gray-700 text-lg px-8 py-3"
              >
                Contact Our Financial Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentFinancialAid;