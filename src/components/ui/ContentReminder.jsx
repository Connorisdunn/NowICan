import React from 'react';

const ContentReminder = ({ message = "This content has been created for placeholder purposes and should be replaced with factual information before launch." }) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
      <div className="flex items-start">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <div>
          <h4 className="font-semibold text-yellow-800 mb-1">Content Reminder</h4>
          <p className="text-yellow-700 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentReminder;