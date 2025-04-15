import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Accommodations = () => {
  const [selectedLocation, setSelectedLocation] = useState('utah');

  // Content specific to Utah
  const utahContent = {
    onSiteTitle: "On-Site Accommodations in Utah",
    onSiteDescription: "Our Utah facility is proud to offer on-site family suites right on our property. These comfortable accommodations allow families to minimize travel time and maximize therapy benefits.",
    onSiteFeatures: [
      "Beautifully decorated, comfortable spaces",
      "Affordable rates ($35/night thanks to our donors)",
      "Walking distance to therapy sessions",
      "Kitchenette facilities in some units",
      "Private bathroom (some with bathtubs)",
      "Free WiFi and utilities"
    ],
    onSiteReservation: [
      "Three suites available (book early as they fill quickly)",
      "Typically booked for the duration of therapy sessions",
      "Request during your therapy scheduling process",
      "Special arrangements available for families with specific needs"
    ],
    onSiteTestimonial: '"Staying at the on-site apartments made our intensive therapy session so much easier. Not having to commute each day gave us more time to rest and prepare for therapy. It was perfect for our family\'s needs." - Johnson Family',
    nearbyOptions: [
      {
        name: "Marriott Residence Inn",
        description: "Extended stay hotel with kitchen, free breakfast",
        note: "Ask for Now I Can special rate"
      },
      {
        name: "Marriott Springhill Suites",
        description: "Spacious suites with mini-fridges, free breakfast",
        note: "Ask for Now I Can special rate"
      },
      {
        name: "Days Inn",
        description: "Budget-friendly option with standard amenities",
        note: ""
      },
      {
        name: "Aspenwood Manor",
        description: "Apartment-style accommodations",
        note: ""
      }
    ]
  };

  // Content specific to Pennsylvania
  const pennsylvaniaContent = {
    onSiteTitle: "Off-Site Accommodations near our Pennsylvania Location",
    onSiteDescription: "Our Pennsylvania location offers several comfortable accommodation options nearby. We've partnered with local hotels and rental properties to ensure families have a comfortable place to stay during therapy sessions.",
    onSiteFeatures: [
      "Multiple options to fit different budgets",
      "All accommodations within 15 minutes of our facility",
      "Special rates negotiated for Now I Can families",
      "Comfortable spaces for the whole family",
      "Hotel options with included breakfast",
      "Extended stay options with kitchen facilities"
    ],
    onSiteReservation: [
      "Request accommodation information during your therapy scheduling",
      "Book early for best availability, especially during summer months",
      "Special family rates available at partner hotels",
      "Alternative housing options can be discussed with our staff"
    ],
    onSiteTestimonial: '"The accommodation options in Pennsylvania worked perfectly for our family. The hotel was close to the therapy center and offered everything we needed for our two-week stay." - Williams Family',
    nearbyOptions: [
      {
        name: "Fairfield Inn & Suites",
        description: "Comfortable rooms with free breakfast",
        note: "Ask for Now I Can special rate"
      },
      {
        name: "Homewood Suites",
        description: "Extended stay with kitchenette suites",
        note: "Great for longer therapy sessions"
      },
      {
        name: "Inn at Leola Village",
        description: "Charming local inn with great amenities",
        note: ""
      },
      {
        name: "Suites at Eden Resort",
        description: "Resort-style accommodations with pools",
        note: ""
      },
      {
        name: "VRBO Vacation Rentals",
        description: "Many houses and cottages available in the Lititz area",
        note: "Best for families looking for home-like accommodations"
      }
    ]
  };

  // Get content based on selected location
  const locationContent = selectedLocation === 'utah' ? utahContent : pennsylvaniaContent;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/968d33ae-3963-42ba-a691-8091fa1adfdb/suite2bed.jpg" 
            alt="Accommodations at Now I Can" 
            className="w-full h-64 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold font-heading mb-6">Accommodations</h1>
        
        {/* Location Selector */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-flex items-center bg-gray-200 rounded-full h-12 w-80">
            {/* Utah Button */}
            <button
              className={`absolute left-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                selectedLocation === 'utah' 
                ? 'text-white' 
                : 'text-gray-700'
              }`}
              onClick={() => setSelectedLocation('utah')}
            >
              Utah
            </button>
            
            {/* Pennsylvania Button */}
            <button
              className={`absolute right-0 w-1/2 h-10 rounded-full transition-all duration-300 flex items-center justify-center font-medium z-10 ${
                selectedLocation === 'pennsylvania' 
                ? 'text-white' 
                : 'text-gray-700'
              }`}
              onClick={() => setSelectedLocation('pennsylvania')}
            >
              Pennsylvania
            </button>
            
            {/* Sliding Background */}
            <span 
              className={`absolute h-10 w-1/2 rounded-full transition-all duration-300 ease-in-out ${
                selectedLocation === 'utah' ? 'left-1 bg-primary-blue-600' : 'left-40 bg-primary-orange-600'
              }`}
            ></span>
          </div>
        </div>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Comfortable Stays for Therapy Sessions</h2>
            <p className="text-lg mb-6">
              We understand that many families travel from out of town to attend our intensive therapy programs. 
              Finding comfortable, convenient, and affordable accommodations is a key part of making your therapy 
              experience successful and stress-free.
            </p>
            <p className="text-lg">
              To help make your stay as comfortable as possible, we've compiled resources about accommodations near 
              both our Utah and Pennsylvania locations. From on-site lodging options to nearby hotels and vacation 
              rentals, we have information to suit every family's needs and budget.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/968d33ae-3963-42ba-a691-8091fa1adfdb/suite2bed.jpg" 
                  alt="Where to stay at Now I Can" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Where to Stay</h3>
                <p className="text-lg mb-4">
                  Finding the right place to stay is essential for making your family comfortable during your 
                  child's intensive therapy. {selectedLocation === 'utah' ? 'We offer on-site accommodations at our Utah location' : 'We have partnered with nearby hotels'} to provide 
                  comfortable and convenient options for our families.
                </p>
                <Link 
                  to="/for-families/accommodations/where-to-stay" 
                  className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 inline-block"
                >
                  View Lodging Options
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/f9aff50e-900f-4b67-be05-40d54c2c187f/C-FAQ-LTZ.jpg" 
                  alt="Local activities near Now I Can" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Local Activities</h3>
                <p className="text-lg mb-4">
                  During your stay for therapy, you'll want to make the most of your time in the area. 
                  {selectedLocation === 'utah' ? ' Utah offers numerous family-friendly activities, restaurants, and attractions to enjoy during your free time.' : ' Pennsylvania offers charming towns, historical sites, and family-friendly attractions to enjoy during your free time.'}
                </p>
                <Link 
                  to="/for-families/accommodations/local-activities" 
                  className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 inline-block"
                >
                  Explore Local Activities
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className={`${selectedLocation === 'utah' ? 'bg-primary-blue-50' : 'bg-primary-blue-50'} rounded-lg p-8 border ${selectedLocation === 'utah' ? 'border-primary-blue-100' : 'border-primary-blue-100'}`}>
            <h2 className={`text-2xl font-bold ${selectedLocation === 'utah' ? 'text-primary-blue-800' : 'text-primary-blue-800'} mb-4`}>{locationContent.onSiteTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  {locationContent.onSiteDescription}
                </p>
                <h3 className="text-lg font-bold mb-3">Features of our {selectedLocation === 'utah' ? 'on-site suites' : 'recommended accommodations'}:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {locationContent.onSiteFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Reservation Information:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  {locationContent.onSiteReservation.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
                <p className="text-lg italic">
                  {locationContent.onSiteTestimonial}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">{selectedLocation === 'utah' ? 'Utah' : 'Pennsylvania'} Location - Nearby Options</h3>
              <ul className="space-y-4">
                {locationContent.nearbyOptions.map((option, index) => (
                  <li key={index}>
                    <div className="font-bold">{option.name}</div>
                    <div className="text-gray-700">{option.description}</div>
                    {option.note && <div className="text-gray-700 italic">{option.note}</div>}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Transportation Options</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-bold">Rental Cars</div>
                  <div className="text-gray-700">
                    The most flexible option for families, allowing you to explore the area during free time.
                  </div>
                </li>
                <li>
                  <div className="font-bold">Ride Services</div>
                  <div className="text-gray-700">
                    Uber and Lyft are available in our {selectedLocation} location, providing convenient transportation.
                  </div>
                </li>
                <li>
                  <div className="font-bold">Public Transportation</div>
                  <div className="text-gray-700">
                    {selectedLocation === 'utah' 
                      ? 'Limited public transportation is available in Utah County. Our staff can provide more specific information.' 
                      : 'The Amtrak train station is nearby in Lancaster. Local bus services are also available.'}
                  </div>
                </li>
                {selectedLocation === 'pennsylvania' && (
                  <li>
                    <div className="font-bold">Airport Transportation</div>
                    <div className="text-gray-700">
                      From Philadelphia or Harrisburg airports, rental cars or pre-arranged shuttles are recommended.
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Need Help Planning Your Stay?</h2>
            <p className="text-lg mb-6">
              Our team is here to help you plan your accommodations during your child's therapy. We can provide 
              recommendations based on your family's specific needs, preferred amenities, and budget.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact-us" 
                className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 text-lg px-8 py-3"
              >
                Contact Us for Assistance
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Accommodations;