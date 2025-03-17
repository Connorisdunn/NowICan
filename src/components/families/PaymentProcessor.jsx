import React, { useState } from 'react';
import ContentReminder from '../ui/ContentReminder';

const PaymentProcessor = () => {
  const [formData, setFormData] = useState({
    paymentType: 'deposit',
    amount: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    name: '',
    email: '',
    phone: '',
    patientName: '',
    therapyDates: '',
    notes: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // If payment type changes, reset amount for preset amounts
    if (name === 'paymentType') {
      let defaultAmount = '';
      
      if (value === 'deposit') {
        defaultAmount = '500.00';
      } else if (value === 'fullPayment') {
        defaultAmount = '3500.00';
      }
      
      setFormData(prev => ({
        ...prev,
        amount: defaultAmount
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would process the payment
    console.log('Processing payment:', formData);
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. A confirmation email has been sent to {formData.email}.
        </p>
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-6 text-left">
          <h3 className="font-semibold text-blue-800 mb-3">Payment Details</h3>
          <p className="text-gray-700">
            <span className="font-medium">Amount:</span> ${formData.amount}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Payment Type:</span> {formData.paymentType === 'deposit' ? 'Therapy Deposit' : formData.paymentType === 'fullPayment' ? 'Full Session Payment' : 'Custom Payment'}
          </p>
          {formData.patientName && (
            <p className="text-gray-700">
              <span className="font-medium">Patient:</span> {formData.patientName}
            </p>
          )}
          {formData.therapyDates && (
            <p className="text-gray-700">
              <span className="font-medium">Therapy Dates:</span> {formData.therapyDates}
            </p>
          )}
          <p className="text-gray-700">
            <span className="font-medium">Transaction ID:</span> {Math.random().toString(36).substring(2, 15).toUpperCase()}
          </p>
        </div>
        <p className="text-gray-600">
          If you have any questions about your payment, please contact us at{' '}
          <a href="mailto:info@nowican.org" className="text-blue-600 hover:underline">info@nowican.org</a>.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Make Another Payment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <h2 className="text-2xl font-bold text-white">Make a Payment</h2>
        <p className="text-blue-100 mt-2">
          Secure payment processing for therapy sessions and deposits.
        </p>
      </div>
      
      <ContentReminder message="This is a demo payment form. In the actual website, this would connect to a secure payment gateway." />
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Payment Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Type</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div 
                className={`border rounded-lg p-4 cursor-pointer ${formData.paymentType === 'deposit' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                onClick={() => handleInputChange({ target: { name: 'paymentType', value: 'deposit' } })}
              >
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="paymentType" 
                    id="deposit" 
                    checked={formData.paymentType === 'deposit'} 
                    value="deposit"
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="deposit" className="text-gray-900 font-medium">Therapy Deposit</label>
                </div>
                <p className="mt-1 text-sm text-gray-500 pl-6">$500 deposit to reserve your therapy session</p>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer ${formData.paymentType === 'fullPayment' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                onClick={() => handleInputChange({ target: { name: 'paymentType', value: 'fullPayment' } })}
              >
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="paymentType" 
                    id="fullPayment" 
                    checked={formData.paymentType === 'fullPayment'} 
                    value="fullPayment"
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="fullPayment" className="text-gray-900 font-medium">Full Session Payment</label>
                </div>
                <p className="mt-1 text-sm text-gray-500 pl-6">$3,500 for a complete 3-week therapy session</p>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer ${formData.paymentType === 'custom' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                onClick={() => handleInputChange({ target: { name: 'paymentType', value: 'custom' } })}
              >
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    name="paymentType" 
                    id="custom" 
                    checked={formData.paymentType === 'custom'} 
                    value="custom"
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="custom" className="text-gray-900 font-medium">Custom Amount</label>
                </div>
                <p className="mt-1 text-sm text-gray-500 pl-6">Specify your own payment amount</p>
              </div>
            </div>
          </div>
          
          {/* Payment Amount */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Payment Amount ($)</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input 
                type="text" 
                name="amount" 
                id="amount" 
                className="form-input block w-full pl-7 pr-12 rounded-md" 
                placeholder="0.00"
                value={formData.amount}
                onChange={handleInputChange}
                required
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">USD</span>
              </div>
            </div>
          </div>
          
          {/* Payment Method Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div 
                className={`border rounded-lg p-4 cursor-pointer ${formData.paymentMethod === 'creditCard' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                onClick={() => handleInputChange({ target: { name: 'paymentMethod', value: 'creditCard' } })}
              >
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    id="creditCard" 
                    checked={formData.paymentMethod === 'creditCard'} 
                    value="creditCard"
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="creditCard" className="ml-3 block text-sm font-medium text-gray-700">
                    Credit or Debit Card
                  </label>
                </div>
              </div>
              
              <div 
                className={`border rounded-lg p-4 cursor-pointer ${formData.paymentMethod === 'ach' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
                onClick={() => handleInputChange({ target: { name: 'paymentMethod', value: 'ach' } })}
              >
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    id="ach" 
                    checked={formData.paymentMethod === 'ach'} 
                    value="ach"
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 border-gray-300"
                  />
                  <label htmlFor="ach" className="ml-3 block text-sm font-medium text-gray-700">
                    Bank Transfer (ACH)
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card Information - only shown if credit card selected */}
          {formData.paymentMethod === 'creditCard' && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Card Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input 
                    type="text" 
                    id="cardNumber" 
                    name="cardNumber" 
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                    <input 
                      type="text" 
                      id="cardExpiry" 
                      name="cardExpiry" 
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700">CVC</label>
                    <input 
                      type="text" 
                      id="cardCvc" 
                      name="cardCvc" 
                      placeholder="123"
                      value={formData.cardCvc}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Bank Information - only shown if ACH selected */}
          {formData.paymentMethod === 'ach' && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Bank Account Information</h3>
              
              <div className="space-y-4">
                <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-md border border-blue-100">
                  For demonstration purposes, we're not collecting actual bank details in this form. 
                  In a real implementation, this would include secure routing and account number collection.
                </p>
              </div>
            </div>
          )}
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Therapy Details */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Therapy Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
                <input 
                  type="text" 
                  id="patientName" 
                  name="patientName" 
                  value={formData.patientName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="therapyDates" className="block text-sm font-medium text-gray-700">Therapy Session Dates</label>
                <input 
                  type="text" 
                  id="therapyDates" 
                  name="therapyDates" 
                  placeholder="e.g., July 8-26, 2024"
                  value={formData.therapyDates}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea 
                id="notes" 
                name="notes" 
                rows="3" 
                value={formData.notes}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Any additional information about this payment"
              ></textarea>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Process Payment
            </button>
            <p className="mt-2 text-sm text-gray-500 text-center">
              Your payment is secure and encrypted.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentProcessor;