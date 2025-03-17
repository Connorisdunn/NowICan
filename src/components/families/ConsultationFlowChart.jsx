import React from 'react';

const ConsultationFlowChart = () => {
  const steps = [
    {
      title: 'Submit Your Request',
      description: 'Fill out our quick and easy consultation request form with basic information about your child and your contact details.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      timeframe: 'Takes 5 minutes',
      color: 'blue'
    },
    {
      title: 'Initial Phone Call',
      description: 'Our intake coordinator will call you within 1-2 business days to discuss your child's needs and answer initial questions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      timeframe: 'Within 1-2 business days',
      color: 'green'
    },
    {
      title: 'Consultation Appointment',
      description: 'Schedule a free in-person or virtual consultation with our physical therapy team to evaluate your child's needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      timeframe: 'Based on your availability',
      color: 'purple'
    },
    {
      title: 'Therapy Recommendation',
      description: 'Receive a personalized therapy plan with recommendations for session type, duration, and treatment approaches.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      timeframe: 'During or after consultation',
      color: 'coral'
    },
    {
      title: 'Schedule & Begin Therapy',
      description: 'If you decide to proceed, we'll help you schedule therapy sessions and discuss payment options and financial assistance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      timeframe: 'Based on therapy schedule',
      color: 'blue'
    }
  ];

  const getStepColors = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        light: 'bg-blue-50',
        dark: 'bg-blue-600'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
        light: 'bg-green-50',
        dark: 'bg-green-600'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        light: 'bg-purple-50',
        dark: 'bg-purple-600'
      },
      coral: {
        bg: 'bg-coral-100',
        text: 'text-coral-600',
        border: 'border-coral-200',
        light: 'bg-coral-50',
        dark: 'bg-coral-600'
      }
    };
    
    return colors[color] || colors.blue;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Consultation Process</h3>
      <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Our simplified consultation process helps you understand what to expect when you reach out to Now I Can.
        We're committed to making this journey as smooth as possible for you and your family.
      </p>
      
      <div className="space-y-8 relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-4 md:left-6 top-6 bottom-10 w-0.5 bg-gray-200 hidden md:block"></div>
        
        {steps.map((step, index) => {
          const colors = getStepColors(step.color);
          
          return (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-lg border border-gray-100 hover:border-gray-200 bg-white hover:shadow-md transition-all duration-300">
                <div className={`flex-shrink-0 w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center z-10`}>
                  <div className={`${colors.text}`}>{step.icon}</div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-lg font-bold mb-1 flex flex-wrap items-center gap-2">
                    <span>{step.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${colors.light} ${colors.text} font-medium`}>
                      {step.timeframe}
                    </span>
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 font-semibold">
                  {index + 1}
                </div>
              </div>
              
              {/* Arrow connecting to next step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-6 ml-0.5 -translate-x-1/2 h-8 w-6 overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 border-r-2 border-b-2 border-gray-200 rotate-45"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-600 italic">
          We're here to support you every step of the way. If you have any questions about this process,
          please don't hesitate to contact us directly.
        </p>
      </div>
    </div>
  );
};

export default ConsultationFlowChart;