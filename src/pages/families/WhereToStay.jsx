import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccommodationBooking from '../../components/families/AccommodationBooking';

const WhereToStay = () => {
  const [selectedLocation, setSelectedLocation] = useState('utah');
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        {!showBookingForm ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold font-heading">Where to Stay</h1>
              <button 
                onClick={() => setShowBookingForm(true)}
                className="btn bg-blue-600 text-white hover:bg-blue-700"
              >
                Book Accommodation
              </button>
            </div>
            
            <div className="mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/b4c8215b-7666-466f-9cbb-681d523f871c/H-Utah-location.jpg" 
                alt="Now I Can accommodations" 
                className="w-full h-64 object-cover"
              />
            </div>
            
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Lodging Options for Therapy Families</h2>
                <p className="text-lg mb-6">
                  Finding comfortable lodging is an important part of your therapy journey. Many families travel to our 
                  facilities and stay for three-week intensive therapy sessions, making an appropriate place to stay 
                  essential for a successful experience.
                </p>
                <p className="text-lg">
                  We've partnered with local accommodations and offer our own on-site options at our Utah location to 
                  help you find a comfortable "home away from home" during your stay.
                </p>
              </div>
            </section>
            
            <section className="mb-10">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center mb-8">
                <button 
                  className={`px-6 py-3 rounded-lg text-lg ${selectedLocation === 'utah' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setSelectedLocation('utah')}
                >
                  Utah (Orem) Location
                </button>
                <button 
                  className={`px-6 py-3 rounded-lg text-lg ${selectedLocation === 'pennsylvania' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setSelectedLocation('pennsylvania')}
                >
                  Pennsylvania (Lititz) Location
                </button>
              </div>
              
              {selectedLocation === 'utah' ? (
                <div>
                  <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 mb-8">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">On-Site Accommodations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold mb-3">Now I Can Cottages</h3>
                        <p className="text-gray-700 mb-4">
                          We're pleased to offer on-site family cottages right on our campus! These comfortable, 
                          affordable accommodations allow families to minimize travel time and maximize therapy benefits.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Three suites available on campus</li>
                          <li>Just $35/night (subsidized by our donors)</li>
                          <li>Full kitchen access</li>
                          <li>Washer & dryer access</li>
                          <li>Private bedrooms with queen beds</li>
                          <li>Pull-out sleeper loveseats</li>
                          <li>Free WiFi</li>
                        </ul>
                        <button 
                          onClick={() => setShowBookingForm(true)}
                          className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
                        >
                          Book On-Site Cottage
                        </button>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-3">Cottage Amenities</h3>
                        <p className="text-gray-700 mb-4">
                          Our cottages are equipped with everything you need for a comfortable stay:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li>Bed linens and towels provided</li>
                          <li>Mini-fridge in each apartment</li>
                          <li>Microwave and toaster oven</li>
                          <li>TV in each unit</li>
                          <li>Kitchen supplies (pots, pans, dishes, utensils)</li>
                          <li>Basic condiments and cooking supplies</li>
                          <li>Walk-in shower (bathtub accessible in cottage #3)</li>
                        </ul>
                        <p className="text-sm italic mt-4">
                          Note: Our on-site accommodations book quickly. We recommend reserving as early as possible 
                          when scheduling your therapy session.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">Local Hotel Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Marriott Residence Inn</h4>
                      <p className="text-gray-700 mb-4">
                        Extended stay hotel with fully equipped kitchens, free hot breakfast, evening socials, 
                        and indoor pool. Ideal for longer therapy stays.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>5-10 minute drive to Now I Can</li>
                        <li>Special rates available for Now I Can families</li>
                        <li>Studio, 1 and 2-bedroom suites available</li>
                        <li>Free WiFi and parking</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (801) 225-7373 | Mention "Now I Can" for special rates
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Marriott SpringHill Suites</h4>
                      <p className="text-gray-700 mb-4">
                        Spacious suites with mini-fridges and microwaves, free breakfast buffet, indoor pool, 
                        and fitness center.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>10-15 minute drive to Now I Can</li>
                        <li>Special rates available for Now I Can families</li>
                        <li>Larger suites for families</li>
                        <li>Free WiFi and parking</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (801) 373-0073 | Mention "Now I Can" for special rates
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Days Inn Provo</h4>
                      <p className="text-gray-700 mb-4">
                        Budget-friendly option with basic amenities, mini-fridges, and microwaves in rooms.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>5-10 minute drive to Now I Can</li>
                        <li>Complimentary continental breakfast</li>
                        <li>Free WiFi and parking</li>
                        <li>Outdoor pool (seasonal)</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (801) 373-8100
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Aspenwood Manor</h4>
                      <p className="text-gray-700 mb-4">
                        Apartment-style accommodations with full kitchens, separate bedrooms, and living areas.
                        Ideal for families needing more space during extended stays.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>15-20 minute drive to Now I Can</li>
                        <li>Multiple bedroom options available</li>
                        <li>Weekly and monthly rates</li>
                        <li>Free WiFi and parking</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (801) 224-5703
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h4 className="text-xl font-bold mb-2">Vacation Rentals</h4>
                    <p className="text-gray-700 mb-4">
                      Many families prefer the space and amenities of a vacation rental home during their stay. 
                      The Utah County area offers numerous options through services like:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Airbnb</li>
                      <li>VRBO</li>
                      <li>HomeAway</li>
                      <li>Local vacation rental companies</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      These options are particularly good for larger families or those staying for multiple therapy sessions.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Pennsylvania Location Accommodations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Fairfield Inn & Suites</h4>
                      <p className="text-gray-700 mb-4">
                        Comfortable rooms with free breakfast, indoor pool, and fitness center.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>10-15 minute drive to Now I Can</li>
                        <li>Mini-fridges and microwaves in rooms</li>
                        <li>Free WiFi and parking</li>
                        <li>Hot breakfast included</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (717) 581-1800 | Ask about Now I Can rates
                      </p>
                      <button 
                        onClick={() => setShowBookingForm(true)}
                        className="mt-4 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
                      >
                        Book Partner Hotel
                      </button>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Homewood Suites</h4>
                      <p className="text-gray-700 mb-4">
                        Extended stay hotel with full kitchens, free hot breakfast, evening socials Monday-Thursday, 
                        indoor pool and fitness center.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>15-20 minute drive to Now I Can</li>
                        <li>Studio and one-bedroom suites</li>
                        <li>Free WiFi and parking</li>
                        <li>Pet-friendly rooms available</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (717) 381-4400
                      </p>
                      <button 
                        onClick={() => setShowBookingForm(true)}
                        className="mt-4 bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded"
                      >
                        Book Partner Hotel
                      </button>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Inn at Leola Village</h4>
                      <p className="text-gray-700 mb-4">
                        Charming historic inn with modern amenities, on-site restaurants, and spa services.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>20 minute drive to Now I Can</li>
                        <li>Unique atmosphere in restored historic buildings</li>
                        <li>Free WiFi and parking</li>
                        <li>On-site dining options</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (717) 656-7002
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="text-xl font-bold mb-2">Suites at Eden Resort</h4>
                      <p className="text-gray-700 mb-4">
                        Resort-style accommodations with indoor and outdoor pools, on-site restaurants, and spacious suites.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>25 minute drive to Now I Can</li>
                        <li>One and two-bedroom villa suites with full kitchens</li>
                        <li>Multiple recreation options on property</li>
                        <li>Free WiFi and parking</li>
                      </ul>
                      <p className="font-medium">
                        Phone: (717) 569-6444
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h4 className="text-xl font-bold mb-2">Vacation Rentals in Lititz Area</h4>
                    <p className="text-gray-700 mb-4">
                      The Lititz and Lancaster County area is popular with tourists, offering many vacation rental options 
                      through platforms like VRBO and Airbnb. These can be ideal for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Families needing multiple bedrooms</li>
                      <li>Those who prefer to cook their own meals</li>
                      <li>Longer stays for extended therapy sessions</li>
                      <li>Families wanting a more home-like environment</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      The area offers everything from cozy cottages to larger family homes, many located in scenic 
                      countryside settings or charming small towns.
                    </p>
                  </div>
                </div>
              )}
            </section>
            
            <section className="mb-10">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Booking Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-3">When to Book:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Book accommodations as soon as your therapy session is confirmed</li>
                      <li>For on-site cottages (Utah location), request during therapy scheduling</li>
                      <li>Consider booking refundable options if your therapy dates might change</li>
                      <li>Ask about discounted weekly or monthly rates for extended stays</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3">What to Ask:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Distance to Now I Can facility</li>
                      <li>Availability of kitchen facilities</li>
                      <li>Accessibility features if needed</li>
                      <li>Laundry facilities access</li>
                      <li>Cancelation policies</li>
                      <li>Special rates for medical stays</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setShowBookingForm(true)}
                    className="btn bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Book Your Stay Now
                  </button>
                </div>
              </div>
            </section>
            
            <section>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-4">Need Assistance with Accommodations?</h2>
                <p className="text-lg mb-6">
                  Our team is here to help you find the best lodging option for your family's needs and budget. 
                  We can provide additional recommendations based on your specific situation and preferences.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/for-families/accommodations/local-activities" 
                    className="btn bg-gray-600 text-white hover:bg-gray-700 px-6 py-3"
                  >
                    Explore Local Activities
                  </Link>
                  <Link 
                    to="/contact-us" 
                    className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-3"
                  >
                    Contact Us for Help
                  </Link>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Book Your Accommodation</h1>
              <button 
                onClick={() => setShowBookingForm(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Accommodation Options
              </button>
            </div>
            <AccommodationBooking />
          </>
        )}
      </div>
    </div>
  );
};

export default WhereToStay;