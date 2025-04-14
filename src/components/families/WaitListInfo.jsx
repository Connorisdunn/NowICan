import React from "react";
import { Link } from "react-router-dom";

const WaitListInfo = () => {
  const waitlistSteps = [
    {
      title: "Submit Waitlist Request",
      description: "Complete the free consultation form and indicate that you're interested in joining the waitlist for a specific session."
    },
    {
      title: "Confirmation",
      description: "Our team will contact you to confirm your waitlist placement and provide an estimated wait time based on current demand."
    },
    {
      title: "Status Updates",
      description: "We'll provide regular updates on your waitlist status and notify you of any changes or opportunities to secure a spot."
    },
    {
      title: "Spot Availability",
      description: "When a spot becomes available, we'll contact you immediately with the option to accept or decline the opening."
    },
    {
      title: "Quick Decision Window",
      description: "You'll have 24 hours to confirm the spot. This helps us manage the waitlist efficiently and serve as many families as possible."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-primary-blue-500 to-primary-orange-500 p-6">
        <h3 className="text-xl font-bold text-white">Waitlist Information</h3>
        <p className="text-primary-blue-100 mt-2">
          How our waitlist process works and what to expect when you join.
        </p>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-6">
          Our therapy sessions are in high demand, especially during summer months and school breaks. 
          If your preferred session is already full, we encourage you to join our waitlist. 
          Here's everything you need to know about our waitlist process:
        </p>
        
        <div className="space-y-6 mb-8">
          {waitlistSteps.map((step, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-blue-100 text-primary-blue-600 font-semibold text-sm">
                  {index + 1}
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-800">{step.title}</h4>
                <p className="mt-1 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary-blue-50 rounded-lg p-6 border border-primary-blue-100">
          <h4 className="font-bold text-primary-blue-800 mb-3">Waitlist Policies</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              We maintain separate waitlists for each session date and location.
            </li>
            <li>
              Priority is given based on the time of your waitlist request.
            </li>
            <li>
              If you decline a spot, you can remain on the waitlist for future openings.
            </li>
            <li>
              We recommend selecting multiple possible session dates to increase your chances.
            </li>
            <li>
              Medical urgency factors may be considered in special circumstances.
            </li>
          </ul>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/for-families/getting-started/free-consultation" 
            className="btn bg-primary-blue-600 hover:bg-primary-blue-700 text-white inline-block"
          >
            Join the Waitlist
          </Link>
          <p className="mt-4 text-sm text-gray-600">
            Questions about the waitlist? Contact us directly at{" "}
            <a href="mailto:info@nowican.org" className="text-primary-blue-600 hover:text-primary-blue-800">
              info@nowican.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitListInfo;