import React from 'react';
import { Link } from 'react-router-dom';

const Accommodations = () => {
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
                  child's intensive therapy. We offer on-site accommodations at our Utah location and have partnered 
                  with nearby hotels to provide discounted rates for our families at both locations.
                </p>
                <Link 
                  to="/for-families/accommodations/where-to-stay" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700 inline-block"
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
                  Both our Utah and Pennsylvania locations offer numerous family-friendly activities, 
                  restaurants, and attractions to enjoy during your free time.
                </p>
                <Link 
                  to="/for-families/accommodations/local-activities" 
                  className="btn bg-blue-600 text-white hover:bg-blue-700 inline-block"
                >
                  Explore Local Activities
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">On-Site Accommodations in Utah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  Our Utah facility is proud to offer on-site family suites right on our property. These 
                  comfortable accommodations allow families to minimize travel time and maximize therapy benefits.
                </p>
                <h3 className="text-lg font-bold mb-3">Features of our on-site suites:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Beautifully decorated, comfortable spaces</li>
                  <li>Affordable rates ($35/night thanks to our donors)</li>
                  <li>Walking distance to therapy sessions</li>
                  <li>Kitchenette facilities in some units</li>
                  <li>Private bathroom (some with bathtubs)</li>
                  <li>Free WiFi and utilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Reservation Information:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Three suites available (book early as they fill quickly)</li>
                  <li>Typically booked for the duration of therapy sessions</li>
                  <li>Request during your therapy scheduling process</li>
                  <li>Special arrangements available for families with specific needs</li>
                </ul>
                <p className="text-lg italic">
                  "Staying at the on-site apartments made our intensive therapy session so much easier. 
                  Not having to commute each day gave us more time to rest and prepare for therapy. It was 
                  perfect for our family's needs." - Johnson Family
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Nearby Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Utah Location - Nearby Options</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-bold">Marriott Residence Inn</div>
                  <div className="text-gray-700">Extended stay hotel with kitchen, free breakfast</div>
                  <div className="text-gray-700 italic">Ask for Now I Can special rate</div>
                </li>
                <li>
                  <div className="font-bold">Marriott Springhill Suites</div>
                  <div className="text-gray-700">Spacious suites with mini-fridges, free breakfast</div>
                  <div className="text-gray-700 italic">Ask for Now I Can special rate</div>
                </li>
                <li>
                  <div className="font-bold">Days Inn</div>
                  <div className="text-gray-700">Budget-friendly option with standard amenities</div>
                </li>
                <li>
                  <div className="font-bold">Aspenwood Manor</div>
                  <div className="text-gray-700">Apartment-style accommodations</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Pennsylvania Location - Nearby Options</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-bold">Fairfield Inn & Suites</div>
                  <div className="text-gray-700">Comfortable rooms with free breakfast</div>
                </li>
                <li>
                  <div className="font-bold">Homewood Suites</div>
                  <div className="text-gray-700">Extended stay with kitchenette suites</div>
                </li>
                <li>
                  <div className="font-bold">Inn at Leola Village</div>
                  <div className="text-gray-700">Charming local inn with great amenities</div>
                </li>
                <li>
                  <div className="font-bold">Suites at Eden Resort</div>
                  <div className="text-gray-700">Resort-style accommodations with pools</div>
                </li>
                <li>
                  <div className="font-bold">VRBO Vacation Rentals</div>
                  <div className="text-gray-700">Many houses and cottages available in the Lititz area</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Transportation Options</h2>
            <p className="text-lg mb-6">
              Getting around during your stay is an important consideration. Here are some transportation 
              options available near our facilities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Rental Cars</h3>
                <p className="text-gray-700">
                  The most flexible option for families, allowing you to explore the area during free time. 
                  Both locations have multiple rental car companies nearby.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Ride Services</h3>
                <p className="text-gray-700">
                  Uber and Lyft are available in both Utah and Pennsylvania locations, providing convenient 
                  transportation for families without their own vehicle.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Public Transportation</h3>
                <p className="text-gray-700">
                  Limited public transportation is available near both locations. Our staff can provide 
                  more specific information about local buses and other options.
                </p>
              </div>
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
                className="btn bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-3"
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