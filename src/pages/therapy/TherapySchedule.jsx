import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WaitListInfo from '../../components/families/WaitListInfo';

const TherapySchedule = () => {
  const [selectedLocation, setSelectedLocation] = useState('utah');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [showWaitlistInfo, setShowWaitlistInfo] = useState(false);
  
  const scheduleData = {
    utah: {
      '2024': [
        { date: 'January 2 - 19', availability: 'Limited', waitlist: false },
        { date: 'January 22 - February 9', availability: 'Full', waitlist: true },
        { date: 'February 12 - March 1', availability: 'Full', waitlist: true },
        { date: 'March 4 - 22', availability: 'Limited', waitlist: false },
        { date: 'March 25 - April 12', availability: 'Available', waitlist: false },
        { date: 'April 15 - May 3', availability: 'Available', waitlist: false },
        { date: 'May 6 - 24', availability: 'Limited', waitlist: false },
        { date: 'May 28 - June 14', availability: 'Limited', waitlist: false },
        { date: 'June 17 - July 5', availability: 'Full', waitlist: true },
        { date: 'July 8 - 26', availability: 'Full', waitlist: true },
        { date: 'July 29 - August 16', availability: 'Full', waitlist: true },
        { date: 'August 19 - September 6', availability: 'Limited', waitlist: false },
        { date: 'September 9 - 27', availability: 'Available', waitlist: false },
        { date: 'September 30 - October 18', availability: 'Available', waitlist: false },
        { date: 'October 21 - November 8', availability: 'Available', waitlist: false },
        { date: 'November 11 - 22', availability: 'Available', waitlist: false },
        { date: 'December 2 - 20', availability: 'Available', waitlist: false },
      ],
      '2025': [
        { date: 'January 6 - 24', availability: 'Available', waitlist: false },
        { date: 'January 27 - February 7', availability: 'Available', waitlist: false },
        { date: 'February 10 - 28', availability: 'Available', waitlist: false },
        { date: 'March 3 - 21', availability: 'Available', waitlist: false },
        { date: 'March 21 - April 11', availability: 'Available', waitlist: false },
        { date: 'April 14 - May 2', availability: 'Available', waitlist: false },
        { date: 'May 5 - 23', availability: 'Available', waitlist: false },
        { date: 'May 27 - June 13', availability: 'Available', waitlist: false },
        { date: 'June 16 - July 3', availability: 'Available', waitlist: false },
        { date: 'July 7 - 25', availability: 'Available', waitlist: false },
        { date: 'July 28 - August 15', availability: 'Available', waitlist: false },
        { date: 'August 18 - September 5', availability: 'Available', waitlist: false },
        { date: 'September 8 - 26', availability: 'Available', waitlist: false },
        { date: 'September 29 - October 17', availability: 'Available', waitlist: false },
        { date: 'October 20 - November 17', availability: 'Available', waitlist: false },
        { date: 'November 10 - 21', availability: 'Available', waitlist: false },
        { date: 'December 1 - 19', availability: 'Available', waitlist: false },
      ]
    },
    pennsylvania: {
      '2024': [
        { date: 'January 2 - 19', availability: 'Full', waitlist: true },
        { date: 'January 22 - February 9', availability: 'Full', waitlist: true },
        { date: 'February 12 - March 1', availability: 'Full', waitlist: true },
        { date: 'March 4 - 22', availability: 'Limited', waitlist: false },
        { date: 'March 25 - April 12', availability: 'Limited', waitlist: false },
        { date: 'April 15 - May 3', availability: 'Available', waitlist: false },
        { date: 'May 6 - 24', availability: 'Available', waitlist: false },
        { date: 'May 28 - June 14', availability: 'Limited', waitlist: false },
        { date: 'June 17 - July 5', availability: 'Full', waitlist: true },
        { date: 'July 8 - 26', availability: 'Full', waitlist: true },
        { date: 'July 29 - August 16', availability: 'Full', waitlist: true },
        { date: 'August 19 - September 6', availability: 'Limited', waitlist: false },
        { date: 'September 9 - 27', availability: 'Available', waitlist: false },
        { date: 'September 30 - October 18', availability: 'Available', waitlist: false },
        { date: 'October 21 - November 8', availability: 'Available', waitlist: false },
        { date: 'November 11 - 22', availability: 'Available', waitlist: false },
        { date: 'December 2 - 20', availability: 'Available', waitlist: false },
      ],
      '2025': [
        { date: 'January 6 - 24', availability: 'Available', waitlist: false },
        { date: 'January 27 - February 14', availability: 'Available', waitlist: false },
        { date: 'February 17 - March 7', availability: 'Available', waitlist: false },
        { date: 'March 10 - 28', availability: 'Available', waitlist: false },
        { date: 'March 31 - April 18', availability: 'Available', waitlist: false },
        { date: 'April 21 - May 9', availability: 'Available', waitlist: false },
        { date: 'May 12 - 30', availability: 'Available', waitlist: false },
        { date: 'June 2 - June 20', availability: 'Available', waitlist: false },
        { date: 'June 23 - July 11', availability: 'Available', waitlist: false },
        { date: 'July 14 - August 1', availability: 'Available', waitlist: false },
        { date: 'August 4 - 22', availability: 'Available', waitlist: false },
        { date: 'August 25 - September 12', availability: 'Available', waitlist: false },
        { date: 'September 15 - October 3', availability: 'Available', waitlist: false },
        { date: 'October 6 - 24', availability: 'Available', waitlist: false },
        { date: 'October 27 - November 14', availability: 'Available', waitlist: false },
        { date: 'December 1 - 19', availability: 'Available', waitlist: false },
      ]
    }
  };
  
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };
  
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  
  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'Available':
        return 'bg-primary-orange-100 text-primary-orange-800';
      case 'Limited':
        return 'bg-yellow-100 text-yellow-800';
      case 'Full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        {!showWaitlistInfo ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold font-heading">Therapy Schedule</h1>
              <button 
                onClick={() => setShowWaitlistInfo(true)} 
                className="btn bg-primary-blue-600 hover:bg-primary-blue-700 text-white"
              >
                View Waitlist Information
              </button>
            </div>
            
            <p className="text-lg mb-8">
              Below is our current therapy schedule. Our intensive therapy sessions run for three weeks, with therapy provided 4 hours per day, 5 days a week.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-10">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <select
                      id="location"
                      name="location"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500 sm:text-sm rounded-md"
                      value={selectedLocation}
                      onChange={(e) => handleLocationChange(e.target.value)}
                    >
                      <option value="utah">Utah (Orem)</option>
                      <option value="pennsylvania">Pennsylvania (Lititz)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                    Year
                  </label>
                  <div className="relative">
                    <select
                      id="year"
                      name="year"
                      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-blue-500 focus:border-primary-blue-500 sm:text-sm rounded-md"
                      value={selectedYear}
                      onChange={(e) => handleYearChange(e.target.value)}
                    >
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">
                {selectedYear} Schedule - {selectedLocation === 'utah' ? 'Utah (Orem)' : 'Pennsylvania (Lititz)'}
              </h2>
              
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Session Dates
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Availability
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {scheduleData[selectedLocation][selectedYear].map((session, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {session.date}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getAvailabilityColor(session.availability)}`}>
                            {session.availability}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {session.availability === 'Full' ? (
                            <button 
                              onClick={() => setShowWaitlistInfo(true)}
                              className="text-primary-blue-600 hover:text-primary-blue-900"
                            >
                              Join Waitlist
                            </button>
                          ) : (
                            <Link
                              to="/for-families/getting-started/free-consultation"
                              className="text-primary-blue-600 hover:text-primary-blue-900"
                            >
                              Request Session
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-primary-blue-50 rounded-lg p-8 border border-primary-blue-100 mb-10">
              <h2 className="text-2xl font-bold text-primary-blue-800 mb-4">About Our Therapy Sessions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4 h-48 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/925c9c27-3b4a-4b66-a4ee-8acf79695199/HP-Therapy-Schedule.jpg" 
                      alt="Intensive Therapy Model" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Intensive Therapy Model</h3>
                  <p className="text-gray-700 mb-4">
                    Our intensive therapy sessions run for three weeks, with therapy provided 4 hours per day, 5 days a week.
                    This model allows children to make significant progress in a short period of time.
                  </p>
                  <Link
                    to="/therapy-services/intensive-physical-therapy"
                    className="text-primary-blue-600 hover:text-primary-blue-800 font-medium"
                  >
                    Learn more about Intensive Therapy →
                  </Link>
                </div>
                
                <div>
                  <div className="mb-4 h-48 overflow-hidden rounded-lg">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/dfbfc6b8-d061-455f-b6a4-5ad4a1f9568e/Intensive.jpg" 
                      alt="Traditional Therapy Options" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Traditional Therapy Options</h3>
                  <p className="text-gray-700 mb-4">
                    We also offer traditional therapy appointments for ongoing care.
                    These visits are offered on a weekly, bi-weekly, or monthly basis according to your needs.
                  </p>
                  <Link
                    to="/therapy-services/traditional-physical-therapy"
                    className="text-primary-blue-600 hover:text-primary-blue-800 font-medium"
                  >
                    Learn more about Traditional Therapy →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Scheduling Process</h2>
                <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                  <li className="pl-2">
                    <span className="font-medium text-gray-900">Consultation:</span> Schedule a free consultation with our team to discuss your child's needs and goals.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-gray-900">Patient Intake:</span> Complete and submit patient information forms.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-gray-900">Session Selection:</span> Select therapy dates that work with your schedule.
                  </li>
                  <li className="pl-2">
                    <span className="font-medium text-gray-900">Confirmation:</span> Our team will contact you to confirm your session dates and discuss payment options.
                  </li>
                </ol>
                <div className="mt-6">
                  <Link
                    to="/for-families/getting-started/free-consultation"
                    className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Waitlist Information</h2>
                <p className="text-gray-700 mb-4">
                  If your preferred session dates are full, you can join our waitlist. Here's how the waitlist works:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li className="pl-2">
                    We'll add you to the waitlist for your preferred session dates.
                  </li>
                  <li className="pl-2">
                    If a spot becomes available, we'll contact you in the order you were added to the waitlist.
                  </li>
                  <li className="pl-2">
                    You'll have 24 hours to confirm or decline the opening.
                  </li>
                  <li className="pl-2">
                    If you decline, we'll keep you on the waitlist for future openings or you can select different dates.
                  </li>
                </ul>
                <div className="mt-6">
                  <button 
                    onClick={() => setShowWaitlistInfo(true)}
                    className="text-primary-blue-600 hover:text-primary-blue-800 font-medium"
                  >
                    Learn more about our waitlist process →
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Waitlist Information</h1>
              <button 
                onClick={() => setShowWaitlistInfo(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Therapy Schedule
              </button>
            </div>
            <WaitListInfo />
          </>
        )}
      </div>
    </div>
  );
};

export default TherapySchedule;