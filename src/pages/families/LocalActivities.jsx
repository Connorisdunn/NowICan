import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LocalActivities = () => {
  const [selectedLocation, setSelectedLocation] = useState('utah');
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Local Activities</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Making the Most of Your Stay</h2>
            <p className="text-lg mb-6">
              While your child's therapy is the primary focus of your visit, we understand the importance of having 
              enjoyable activities for the whole family during your downtime. Both our Utah and Pennsylvania locations 
              are situated in areas with plenty to see and do.
            </p>
            <p className="text-lg">
              From outdoor adventures to cultural experiences, we've compiled some of the most family-friendly 
              activities near our facilities to help you plan your stay.
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
              <h3 className="text-2xl font-bold mb-6">Activities Near Our Utah Location</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Outdoor Adventures</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Wasatch Mountains</h5>
                    <p className="text-gray-700 mb-3">
                      Located just minutes from our facility, the beautiful Wasatch Mountains offer numerous 
                      family-friendly hiking trails, scenic drives, and picnic areas. In winter, you'll find 
                      world-class skiing and snowboarding.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Sundance Resort (15 minutes)</li>
                      <li>Provo Canyon (10 minutes)</li>
                      <li>Bridal Veil Falls (15 minutes)</li>
                      <li>Timpanogos Cave National Monument (20 minutes)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Utah Lake State Park</h5>
                    <p className="text-gray-700 mb-3">
                      Just a short drive from our facility, Utah Lake offers boating, fishing, beaches, and picnic areas. 
                      The visitor center has educational exhibits about the lake's ecosystem.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Fishing (bass, catfish, walleye)</li>
                      <li>Boat rentals available</li>
                      <li>Swimming beaches</li>
                      <li>Bird watching (over 200 species)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Family Entertainment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Seven Peaks Water Park</h5>
                    <p className="text-gray-700 mb-3">
                      A favorite among local families, Seven Peaks offers water slides, wave pools, lazy rivers, and 
                      splash areas for younger children.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>10 minutes from Now I Can</li>
                      <li>Areas appropriate for all ages</li>
                      <li>Season passes available</li>
                      <li>Special needs accommodations available</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Thanksgiving Point</h5>
                    <p className="text-gray-700 mb-3">
                      This educational complex includes multiple museums, beautiful gardens, a farm, and theaters.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Museum of Natural Curiosity (interactive children's museum)</li>
                      <li>Museum of Ancient Life (dinosaur museum)</li>
                      <li>Butterfly Biosphere</li>
                      <li>Farm Country (petting zoo and farm animals)</li>
                      <li>15-20 minutes from Now I Can</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">BYU Campus</h5>
                    <p className="text-gray-700 mb-3">
                      Brigham Young University offers several family-friendly attractions on its beautiful campus.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>BYU Museum of Art</li>
                      <li>Monte L. Bean Life Science Museum (with extensive animal displays)</li>
                      <li>BYU Planetarium</li>
                      <li>5-10 minutes from Now I Can</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Provo Recreation Center</h5>
                    <p className="text-gray-700 mb-3">
                      This state-of-the-art recreation facility offers numerous activities for the whole family.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Indoor pools with slides and splash features</li>
                      <li>Rock climbing wall</li>
                      <li>Gymnasiums and fitness areas</li>
                      <li>Day passes available for non-residents</li>
                      <li>10 minutes from Now I Can</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Day Trips</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Salt Lake City</h5>
                    <p className="text-gray-700 mb-3">
                      Utah's capital city is just 45 minutes north and offers numerous family attractions.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Hogle Zoo</li>
                      <li>The Living Planet Aquarium</li>
                      <li>Discovery Gateway Children's Museum</li>
                      <li>Temple Square</li>
                      <li>Natural History Museum of Utah</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Park City</h5>
                    <p className="text-gray-700 mb-3">
                      This charming mountain town is known for skiing in winter and summer recreation.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Olympic Park (with summer activities and exhibits)</li>
                      <li>Alpine slides and mountain coasters</li>
                      <li>Historic Main Street shopping</li>
                      <li>45-60 minutes from Now I Can</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold mb-6">Activities Near Our Pennsylvania Location</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Local Attractions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Lititz - "America's Coolest Small Town"</h5>
                    <p className="text-gray-700 mb-3">
                      The charming town of Lititz offers unique shops, historic sites, and delicious local treats.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Julius Sturgis Pretzel Bakery (America's first pretzel bakery)</li>
                      <li>Wilbur Chocolate Factory</li>
                      <li>Lititz Springs Park</li>
                      <li>Shops and restaurants on Main Street</li>
                      <li>5 minutes from Now I Can</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Amish Country</h5>
                    <p className="text-gray-700 mb-3">
                      Lancaster County is famous for its Amish communities, offering a glimpse into a simpler way of life.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Buggy rides</li>
                      <li>Amish farm tours</li>
                      <li>Handmade crafts and quilts</li>
                      <li>Farm-to-table restaurants</li>
                      <li>10-20 minutes from Now I Can</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Family Entertainment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Hershey Park</h5>
                    <p className="text-gray-700 mb-3">
                      "The Sweetest Place on Earth" offers rides, shows, and chocolate-themed attractions.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Hershey Park theme park with rides for all ages</li>
                      <li>Hershey's Chocolate World tour and attractions</li>
                      <li>ZooAmerica North American Wildlife Park</li>
                      <li>The Hershey Story Museum</li>
                      <li>30-35 minutes from Now I Can</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Dutch Wonderland</h5>
                    <p className="text-gray-700 mb-3">
                      A kingdom for kids with over 35 fun rides, attractions, and shows.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Rides designed for younger children</li>
                      <li>Water play area</li>
                      <li>Live entertainment</li>
                      <li>20-25 minutes from Now I Can</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Lancaster Science Factory</h5>
                    <p className="text-gray-700 mb-3">
                      Hands-on science museum with interactive exhibits for children of all ages.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Over 75 hands-on exhibits</li>
                      <li>STEM-focused activities</li>
                      <li>Special workshops and demonstrations</li>
                      <li>15-20 minutes from Now I Can</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Turkey Hill Experience</h5>
                    <p className="text-gray-700 mb-3">
                      Interactive attraction dedicated to Turkey Hill ice cream and beverages.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Create your own ice cream flavor</li>
                      <li>Milk a mechanical cow</li>
                      <li>Learn about ice cream production</li>
                      <li>Free samples</li>
                      <li>30 minutes from Now I Can</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Outdoor Activities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Parks and Nature</h5>
                    <p className="text-gray-700 mb-3">
                      Lancaster County offers beautiful parks and natural areas for outdoor recreation.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Lititz Springs Park (historic park with playgrounds)</li>
                      <li>Speedwell Forge Lake (fishing and wildlife viewing)</li>
                      <li>Middle Creek Wildlife Management Area (hiking and bird watching)</li>
                      <li>Various distances from Now I Can</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h5 className="text-lg font-bold mb-2">Strasburg Rail Road</h5>
                    <p className="text-gray-700 mb-3">
                      America's oldest operating railroad offers scenic rides through Amish country.
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>45-minute train rides</li>
                      <li>Themed events throughout the year</li>
                      <li>Railroad Museum of Pennsylvania nearby</li>
                      <li>30 minutes from Now I Can</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        
        <section className="mb-10">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Dining Options</h2>
            <p className="text-lg mb-6">
              Both our Utah and Pennsylvania locations are surrounded by a variety of family-friendly dining options, 
              from quick-service restaurants to unique local eateries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">
                  {selectedLocation === 'utah' ? 'Utah Location - Popular Restaurants:' : 'Pennsylvania Location - Popular Restaurants:'}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedLocation === 'utah' ? (
                    <>
                      <li>Tucanos Brazilian Grill (family-friendly buffet)</li>
                      <li>Brick Oven (local pizzeria and Italian food)</li>
                      <li>Café Rio (quick-service Mexican)</li>
                      <li>Station 22 (American comfort food)</li>
                      <li>Cubby's (healthy sandwiches and bowls)</li>
                    </>
                  ) : (
                    <>
                      <li>Tomato Pie Café (local favorite for breakfast and lunch)</li>
                      <li>Bulls Head Public House (traditional English pub)</li>
                      <li>Appalachian Brewing Company (family-friendly brewpub)</li>
                      <li>Spill Coffee (coffee shop with light fare)</li>
                      <li>Lititz Family Cupboard (homestyle Amish cooking)</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Grocery and Meal Prep:</h3>
                <p className="text-gray-700 mb-3">
                  If you're staying in accommodations with a kitchen, there are several grocery options nearby:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedLocation === 'utah' ? (
                    <>
                      <li>Smith's Marketplace (5 minutes from Now I Can)</li>
                      <li>Walmart Supercenter (10 minutes)</li>
                      <li>Macey's (5 minutes)</li>
                      <li>Trader Joe's (15 minutes)</li>
                      <li>Costco (10 minutes)</li>
                    </>
                  ) : (
                    <>
                      <li>Stauffers of Kissel Hill (5 minutes from Now I Can)</li>
                      <li>Giant Food Store (10 minutes)</li>
                      <li>Walmart Supercenter (15 minutes)</li>
                      <li>Whole Foods (20 minutes)</li>
                      <li>ALDI (10 minutes)</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Planning Your Activities</h2>
            <p className="text-lg mb-6">
              When planning activities during your therapy stay, we recommend:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
              <li>Scheduling activities for after therapy sessions, when your child may need a fun distraction</li>
              <li>Keeping some days open for rest, especially in the middle of the intensive therapy program</li>
              <li>Considering your child's energy levels when planning activities</li>
              <li>Looking for adaptive or accessible options if needed for your child</li>
              <li>Taking advantage of local events happening during your stay</li>
            </ul>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/for-families/accommodations/where-to-stay" 
                className="btn bg-gray-600 text-white hover:bg-gray-700 px-6 py-3"
              >
                View Lodging Options
              </Link>
              <Link 
                to="/contact-us" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-3"
              >
                Ask About Local Activities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LocalActivities;