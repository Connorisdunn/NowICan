import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import utahImg from '../../assets/images/C-FAQ-UT.jpg';
import pennsylvaniaImg from '../../assets/images/C-FAQ-LTZ.jpg';

const Accommodations = () => {
  const [selectedLocation, setSelectedLocation] = useState('utah');
  const [activeTab, setActiveTab] = useState('cottages');

  // Define image URLs for different locations
  const locationImages = {
    utah: utahImg,
    pennsylvania: pennsylvaniaImg
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Accommodations</h1>
        
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src={locationImages[selectedLocation]} 
            alt={`Accommodations at Now I Can ${selectedLocation === 'utah' ? 'Utah' : 'Pennsylvania'}`} 
            className="w-full h-64 object-cover object-center"
          />
        </div>
        
        {/* Location Toggle Switch */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Select Your Location</h2>
          <div className="flex justify-center">
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
        </section>
        
        {/* Location-specific content */}
        <section className="mb-12">
          {selectedLocation === 'utah' ? (
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">Where Can I Stay in Provo, UT?</h3>
                  <p className="text-lg mb-4">
                    Now I Can Foundation offers comfortable on-site accommodations at just $35/night, thanks to our generous donors! 
                    Email <a href="mailto:melissa@nowican.org">Melissa Chalk</a> for more information or call 801-228-1935.
                  </p>
                  
                  <div className="my-6 border-l-4 border-primary-blue-600 pl-4">
                    <p className="text-lg italic mb-2">
                      Need an inexpensive and comfortable place to stay while doing an intensive session? 
                      We have family suites right on our property!
                    </p>
                  </div>
                  
                  {/* Accommodation Tabs */}
                  <div className="mt-6">
                    {/* Tabs Navigation */}
                    <div className="flex border-b">
                      <button 
                        className={`py-2 px-4 font-medium border-b-2 transition-colors duration-200 ${
                          activeTab === 'cottages' 
                            ? 'border-primary-blue-600 text-primary-blue-600' 
                            : 'border-transparent text-gray-500 hover:text-primary-blue-600'
                        }`}
                        onClick={() => setActiveTab('cottages')}
                      >
                        Cottage 1 & 2
                      </button>
                      <button 
                        className={`py-2 px-4 font-medium border-b-2 transition-colors duration-200 ${
                          activeTab === 'suite3' 
                            ? 'border-primary-blue-600 text-primary-blue-600' 
                            : 'border-transparent text-gray-500 hover:text-primary-blue-600'
                        }`}
                        onClick={() => setActiveTab('suite3')}
                      >
                        Suite 3
                      </button>
                      <button 
                        className={`py-2 px-4 font-medium border-b-2 transition-colors duration-200 ${
                          activeTab === 'hotels' 
                            ? 'border-primary-blue-600 text-primary-blue-600' 
                            : 'border-transparent text-gray-500 hover:text-primary-blue-600'
                        }`}
                        onClick={() => setActiveTab('hotels')}
                      >
                        Nearby Hotels
                      </button>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-b-lg">
                      {activeTab === 'cottages' && (
                        <div>
                          <h4 className="text-lg font-bold mb-2">Cottages 1 & 2</h4>
                          <p className="mb-2">Welcome to Now I Can! Both cottages are designed to accommodate one family, while another family can stay in Suite 3 at the same time.</p>
                          
                          <div className="mb-4">
                            <h5 className="font-medium">Cottage Layout:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Full kitchen across the hallway for your exclusive use during your stay</li>
                              <li>Two separate living spaces (Cottage 1 and Cottage 2)</li>
                              <li>Shared washer & dryer down the hallway (detergent provided)</li>
                              <li>Free WiFi</li>
                            </ul>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="font-medium">Cottage 1 Includes:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Queen bed with sheets and pillows</li>
                                <li>Mini-fridge with freezer compartment</li>
                                <li>Microwave and toaster oven</li>
                                <li>Pull-out sleeper loveseat</li>
                                <li>TV</li>
                                <li>Towels</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium">Cottage 2 Includes:</h5>
                              <ul className="list-disc pl-5 space-y-1">
                                <li>Queen bed with sheets and pillows</li>
                                <li>Mini-fridge with freezer compartment</li>
                                <li>Microwave</li>
                                <li>Towels</li>
                                <li>Additional living space</li>
                                <li>Bathroom</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h5 className="font-medium">Kitchen Includes:</h5>
                            <ul className="list-disc pl-5 grid grid-cols-2 gap-x-2">
                              <li>Pots & pans</li>
                              <li>Plates & bowls</li>
                              <li>Cups & cutlery</li>
                              <li>Mixing bowls</li>
                              <li>Measuring cups</li>
                              <li>Spatulas & spoons</li>
                              <li>Oven mitts</li>
                              <li>Toaster</li>
                              <li>Coffee maker</li>
                              <li>Blender</li>
                              <li>Microwave & oven</li>
                              <li>Full refrigerator</li>
                              <li>Basic cooking supplies (flour, sugar, salt, pepper, cooking spray)</li>
                              <li>Basic condiments (mayo, ketchup, mustard)</li>
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'suite3' && (
                        <div>
                          <h4 className="text-lg font-bold mb-2">Suite 3</h4>
                          <p className="mb-2">Welcome to Now I Can! We are thrilled to have you stay with us in our spacious Suite 3, which is designed to accommodate one family while another family can use Cottages 1 & 2.</p>
                          
                          <div className="mb-4">
                            <h5 className="font-medium">Suite Features:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Washer and dryer in the unit</li>
                              <li>Walk-in shower in the unit</li>
                              <li>Access to a bathtub down the hall</li>
                              <li>Master bedroom with queen bed, dresser, nightstands, and walk-in closet</li>
                              <li>Smaller bedroom with twin bed and nightstand (think larger walk-in closet size)</li>
                              <li>Additional rolling twin bed available</li>
                              <li>Roku TV and free WiFi</li>
                              <li>Child amenities: booster seat, bumbo seat</li>
                            </ul>
                          </div>
                          
                          <div className="mb-4">
                            <h5 className="font-medium">Full Kitchen Includes:</h5>
                            <ul className="list-disc pl-5 grid grid-cols-2 gap-x-2">
                              <li>Full refrigerator</li>
                              <li>Dishwasher</li>
                              <li>Pots & pans</li>
                              <li>Utensils</li>
                              <li>Plates, bowls, cups</li>
                              <li>Air fryer</li>
                              <li>Crock pot</li>
                              <li>Coffee maker</li>
                              <li>Blender</li>
                              <li>Waffle maker</li>
                              <li>Mixing bowls</li>
                              <li>Trash bags</li>
                              <li>Toilet paper</li>
                              <li>Basic cooking supplies (oil, salt, pepper, seasonings)</li>
                              <li>Basic condiments</li>
                            </ul>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'hotels' && (
                        <div>
                          <h4 className="text-lg font-bold mb-2">Nearby Hotels</h4>
                          <p className="mb-4">Several hotels nearby offer special rates for Now I Can patients and families.</p>
                          
                          <div className="mb-4">
                            <h5 className="font-medium">Mention Now I Can when booking at:</h5>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Marriott Residence Inn</li>
                              <li>Marriott Springhill Suites</li>
                              <li>Days Inn</li>
                              <li>Aspenwood Manor</li>
                            </ul>
                          </div>
                          
                          <p className="mb-4">
                            These hotels are all located within a short drive of our facility and offer various amenities that may suit your family's needs during your stay.
                          </p>
                        </div>
                      )}
                      
                      {activeTab !== 'hotels' && (
                        <p className="text-sm text-gray-600 italic mt-4">
                          On-site accommodations are just $35/night thanks to our generous donors! 
                          Call or email today to reserve your suite - they go quickly!
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">What Can We Do While Staying in Provo?</h3>
                  
                  <div className="space-y-4">
                    <p className="text-lg">
                      Provo is located about 50 miles south of Salt Lake City, Utah, and is at the base of the beautiful 
                      Wasatch Mountains. Our valley location offers many outdoor activities year-round:
                    </p>
                    
                    <div className="pl-5">
                      <h4 className="font-medium text-lg mb-2">Outdoor Activities</h4>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Skiing and snowboarding (15 minutes from Sundance Resort, 40 minutes from Park City)</li>
                        <li>Hiking scenic trails</li>
                        <li>Mountain biking</li>
                        <li>Rock climbing</li>
                        <li>Swimming</li>
                        <li>Provo Canyon and Bridal Veil Falls</li>
                      </ul>
                    </div>
                    
                    <div className="pl-5">
                      <h4 className="font-medium text-lg mb-2">Family-Friendly Entertainment</h4>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Museums</li>
                        <li>Waterparks</li>
                        <li>Theater productions</li>
                        <li>Arcades</li>
                        <li>Aquarium</li>
                        <li>Sporting events</li>
                        <li>Thanksgiving Point</li>
                      </ul>
                    </div>
                    
                    <p className="text-lg">
                      Our clinic is located on the border of Provo and Orem, which each have incredible recreation centers 
                      where you can swim, work out, or take a class as a guest for just $5 a day.
                    </p>
                    
                    <p className="text-lg">
                      We're also close to two major universities (BYU and UVU) with many cultural and educational activities,
                      as well as numerous restaurants and shopping centers all within a short drive from our facility.
                    </p>
                    
                    <p className="text-lg">
                      Families enjoy time spent here doing fun activities outside of the physical therapy hours. 
                      If you have questions about accommodations or need suggestions for entertainment or great food, 
                      we are here to help!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">Where Can I Stay in Lititz, PA?</h3>
                  <p className="text-lg mb-4">
                    There are several hotels with kitchenette suites nearby Now I Can:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-lg">
                    <li><a href="https://www.marriott.com/en-us/hotels/lnsfi-fairfield-inn-and-suites-lancaster/overview/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Fairfield Inn & Suites</a></li>
                    <li><a href="https://www.hilton.com/en/hotels/lnshwhw-homewood-suites-lancaster/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Homewood Suites</a></li>
                    <li><a href="https://www.theinnatleolavillage.com/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Inn at Leola Village</a></li>
                    <li><a href="https://edenresort.com/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">Suites at Eden Resort</a></li>
                  </ul>
                  <p className="text-lg mb-4">
                    <a href="https://www.vrbo.com/vacation-rentals/usa/pennsylvania/dutch-country/lititz" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">VRBO</a> has many offerings of houses and cottages to stay in the Lititz Area for families seeking a home-like setting.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">What Can We Do While Staying in Lititz, PA?</h3>
                  
                  <div className="bg-primary-orange-50 border-l-4 border-primary-orange-500 p-4 mb-6">
                    <h4 className="text-lg font-bold mb-2">Come For The Therapy, Stay For The Adventure!</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg">
                      Welcome to Lititz, Pennsylvania! Voted "America's Coolest Small Town" in 2013, our vibrant community is constantly growing, offering all kinds of activities, entertainment and eating experiences the entire family will enjoy.
                    </p>
                    
                    <p className="text-lg">
                      The picturesque, tree-lined streets of downtown Lititz are home to blocks of eclectic retail shops and boutiques, entertainment, historical architecture and tours, plus unique eateries that span coffee and ice cream shops, to gourmet sandwiches and pizzas, to fine dining and desserts. Lititz is also home to Julius Sturgis Pretzels, the oldest pretzel company in the USA. Take a tour and discover how pretzels came into existence, then try your hand at pretzel making. To satisfy your sweet tooth visit the second oldest chocolate factory in America–Wilbur Chocolates. There you can watch chocolatiers make all kinds of sweet treats while shopping their expansive selection of chocolates and candy. Across the street is Lititz Springs Park, a beautiful expanse of grass and tall trees, speckled with picnic tables, playgrounds, and a walking path that follows the waters of the natural spring that is the source of Lititz Run (creek). When planning your visit be sure to check the Lititz events calendar where you'll discover a constant rotation of festivals, musical performances, art and craft shows, plus holiday celebrations. There's always something happening in Lititz!
                    </p>
                    
                    <p className="text-lg">
                      Nestled in beautiful Lancaster County farmland, Lititz is a quick 15-minutes drive from city of Lancaster where you'll find even more shopping, dining, lodging, entertainment and outdoor activities. The Route 30 corridor is home to outlet shopping, Dutch Wonderland Amusement Park, many family owned buffets and chain restaurants, plus opportunities to explore the Amish community and their handcrafted goods.
                    </p>
                    
                    <p className="text-lg">
                      While visiting Lititz, be sure to make the 25 mile drive to the town of Hershey "The Sweetest Place on Earth!" Hershey is home to Hershey Park, Chocolate World, Zoo America, The Giant Center and the beautiful Hershey Gardens. You'll also find plenty of outlet and boutique shopping, gourmet restaurants, and coffee shops.
                    </p>
                    
                    <div className="bg-gray-50 p-5 rounded-lg mt-6">
                      <h4 className="font-bold mb-3">Links to More Information</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-medium">For more Lititz information </span>
                          <a href="https://lititzpa.com/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">click here</a>
                        </li>
                        <li>
                          <span className="font-medium">For more Lancaster information </span>
                          <a href="https://www.lancasterpa.com/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">click here</a>
                        </li>
                        <li>
                          <span className="font-medium">For more Hershey information </span>
                          <a href="https://www.hersheypa.com/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">click here</a>
                        </li>
                        <li>
                          <span className="font-medium">For more amazing places to visit in Pennsylvania </span>
                          <a href="https://www.visitpa.com/" className="text-primary-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">click here</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Accommodations;