import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentProcessor from '../../components/families/PaymentProcessor';

const PaymentOptions = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Payment Options</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Flexible Payment Solutions</h2>
            <p className="text-lg mb-6">
              At Now I Can, we understand that investing in your child's therapy is a significant financial commitment. 
              We strive to provide flexible payment options to help make our services accessible to as many families as possible.
            </p>
            <p className="text-lg">
              Our team will work with you to find a payment solution that fits your family's needs and circumstances.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Available Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Credit Card</h3>
              </div>
              <p className="text-gray-700">
                We accept all major credit cards including Visa, MasterCard, American Express, and Discover.
                Payments can be made online, by phone, or in person.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Check / ACH</h3>
              </div>
              <p className="text-gray-700">
                Personal checks are accepted for payment. We also offer electronic ACH transfers directly from your 
                bank account for convenient, recurring payments.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">HSA / FSA</h3>
              </div>
              <p className="text-gray-700">
                Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) can be used for our therapy 
                services. We can provide all necessary documentation for your records.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Payment Plans</h3>
              <p className="text-lg mb-4">
                We offer customized payment plans to help spread the cost of therapy over time. Our payment plans are 
                designed to be flexible and accommodate various financial situations.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>No interest payment plans</li>
                <li>Flexible payment schedules</li>
                <li>Customized to your financial situation</li>
                <li>Easy automated payments</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Therapy Deposits</h3>
              <p className="text-lg mb-4">
                To secure your child's spot in our therapy schedule, we require a deposit at the time of booking. 
                This deposit helps us prepare for your child's therapy session and ensures we have the appropriate 
                resources available.
              </p>
              <p className="text-lg">
                Deposit amounts vary based on the therapy program selected. The deposit is applied toward your 
                total therapy cost and is part of the overall fee, not an additional charge.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Insurance Reimbursement</h2>
            <p className="text-lg mb-6">
              While Now I Can does not directly bill insurance companies, many families have been successful in 
              obtaining partial reimbursement from their insurance providers. We provide detailed documentation 
              to help you submit claims to your insurance company.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Documentation We Provide:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Superbills with appropriate CPT codes</li>
                  <li>Detailed treatment notes</li>
                  <li>Therapy progress reports</li>
                  <li>Letters of medical necessity (upon request)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Insurance Tips:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact your insurance provider before beginning therapy</li>
                  <li>Ask about coverage for out-of-network physical therapy services</li>
                  <li>Inquire about special provisions for pediatric therapy</li>
                  <li>Keep detailed records of all communications with your insurance company</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Financial Assistance</h2>
            <p className="text-lg mb-6">
              We believe that every child deserves access to the therapy they need, regardless of their family's 
              financial situation. That's why we offer financial assistance through our Ability Fund grant program.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/for-families/payment-financial-aid/therapy-grants" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
              >
                Learn About Our Therapy Grants
              </Link>
            </div>
          </div>
        </section>
        
        <section>
          {!showPaymentForm ? (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
              <p className="text-lg mb-6">
                Ready to make a payment for your child's therapy session? We've made it simple and secure 
                to pay online through our payment portal.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setShowPaymentForm(true)} 
                  className="btn bg-blue-600 text-white hover:bg-blue-700 text-center text-lg px-8 py-3"
                >
                  Make a Payment
                </button>
                <Link 
                  to="/contact-us" 
                  className="btn bg-gray-600 text-white hover:bg-gray-700 text-center text-lg px-8 py-3"
                >
                  Contact Our Financial Team
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Payment Portal</h2>
                <button 
                  onClick={() => setShowPaymentForm(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Payment Options
                </button>
              </div>
              <PaymentProcessor />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PaymentOptions;