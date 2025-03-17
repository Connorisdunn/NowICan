import React from 'react';
import { Link } from 'react-router-dom';

const PennsylvaniaLocation = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Now I Can - Pennsylvania</h1>
        <p className="text-lg mb-8">
          Our Pennsylvania location offers state-of-the-art therapy services in the charming town of Lititz, known as "America's Coolest Small Town."
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              Pennsylvania Facility Image
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">About Our Facility</h2>
              <p className="text-gray-700 mb-4">
                In 2009 Allison and Troy welcomed their first child into the world, a beautiful daughter named Lauren. At 18-months Lauren was diagnosed with cerebral palsy. Within months, physical therapy became a staple of their everyday living. As Lauren grew and faced new challenges they began to wonder: is there more we can do? When Lauren was 7-years old God answered their question as Allison learned about Now I Can Foundation in Utah.
              </p>
              <p className="text-gray-700 mb-4">
                As a family that enjoyed exploring the south-western states, Allison and Troy decided to make physical therapy a part of their summer vacation. They registered Lauren to receive 3-weeks of intensive physical therapy at Now I Can Foundation in Provo, UT. After just one week of therapy Allison and Troy were blown away by the amazing progress Lauren had made in such a short time span. Allison's eyes had been opened. There was MORE. And it came in a package called intensive physical therapy. This changed everything.
              </p>
              <p className="text-gray-700 mb-4">
                For the next five summers Allison and Troy took their children to Utah for a month. During the week Lauren would receive cutting-edge treatment, and on the weekends the family would take mini-trips to explore the national parks and visit new towns.
              </p>
              <p className="text-gray-700">
                It was after summer number four that Allison recognized God was leading her to open an intensive physical therapy clinic in Pennsylvania that would serve children and families living on the East Coast. Partnering with Now I Can Foundation in Utah, Allison and her brother, Ross, established Now I Can Foundation North East in the town of Lititz, Pennsylvania. The intensive physical therapy center is located on the same campus as Ross's technology company, Listrak.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 p-4">
              <h2 className="text-xl font-bold text-white">Contact Information</h2>
            </div>
            <div className="p-6">
              <address className="not-italic text-gray-700 mb-6">
                <p className="mb-1 font-medium">Now I Can - Pennsylvania</p>
                <p className="mb-1">100 West Millport Road</p>
                <p className="mb-3">Lititz, PA 17543</p>
                <p className="mb-1">
                  <a href="tel:+17172695829" className="text-purple-600 hover:text-purple-800">
                    (717) 269-5829
                  </a>
                </p>
                <p>
                  <a href="mailto:allison@nowican.org" className="text-purple-600 hover:text-purple-800">
                    allison@nowican.org
                  </a>
                </p>
              </address>
              
              <div className="space-y-3">
                <Link 
                  to="/for-families/getting-started/free-consultation" 
                  className="btn w-full bg-purple-600 text-white hover:bg-purple-700 text-center"
                >
                  Schedule a Consultation
                </Link>
                <Link 
                  to="/therapy-services/therapy-schedule" 
                  className="btn w-full bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 text-center"
                >
                  View Therapy Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Come For The Therapy, Stay For The Adventure!</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Lititz, Pennsylvania! Voted "America's Coolest Small Town" in 2013, our vibrant community is constantly growing, offering all kinds of activities, entertainment and eating experiences the entire family will enjoy.
            </p>
            <p className="text-gray-700 mb-4">
              The picturesque, tree-lined streets of downtown Lititz are home to blocks of eclectic retail shops and boutiques, entertainment, historical architecture and tours, plus unique eateries that span coffee and ice cream shops, to gourmet sandwiches and pizzas, to fine dining and desserts.
            </p>
            <p className="text-gray-700 mb-4">
              Lititz is also home to Julius Sturgis Pretzels, the oldest pretzel company in the USA. Take a tour and discover how pretzels came into existence, then try your hand at pretzel making. To satisfy your sweet tooth visit the second oldest chocolate factory in America–Wilbur Chocolates.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-6">Things to Do in the Area</h2>
          <p className="text-gray-700 mb-6">
            Families enjoy time spent here doing fun activities outside of the physical therapy hours. If you have questions about accommodations or need suggestions for some entertainment or great food, we are here to help!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Local Attractions</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Lititz Springs Park</li>
                <li>Julius Sturgis Pretzel Bakery</li>
                <li>Wilbur Chocolate Factory</li>
                <li>Wolf Sanctuary of PA</li>
                <li>Amish Farm and House</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Family Entertainment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Dutch Wonderland Amusement Park</li>
                <li>Hershey Park (25 miles away)</li>
                <li>The Turkey Hill Experience</li>
                <li>Strasburg Rail Road</li>
                <li>Cherry Crest Adventure Farm</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Shopping & Dining</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Kitchen Kettle Village</li>
                <li>Tanger Outlets Lancaster</li>
                <li>Lititz Farmers Market</li>
                <li>Appalachian Brewing Company</li>
                <li>Tomato Pie Cafe</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link 
              to="/for-families/accommodations/local-activities" 
              className="btn bg-purple-600 text-white hover:bg-purple-700"
            >
              View All Local Activities
            </Link>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
          <p className="text-lg mb-6">
            We look forward to welcoming you to our Pennsylvania location. Contact us today to schedule a consultation or learn more about our therapy services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/for-families/getting-started/free-consultation" 
              className="btn bg-white text-purple-600 hover:bg-purple-50"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/contact-us" 
              className="btn bg-transparent border border-white text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PennsylvaniaLocation;