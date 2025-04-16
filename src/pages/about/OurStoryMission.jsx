import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import foundationBannerImage from '../../assets/images/nowican-51.jpg';
import foundersImage from '../../assets/images/joel-tracey-christensen.jpg';
import colbyImage from '../../assets/images/colby.jpg';
import allisonTroyImage from '../../assets/images/ebersoleFamily1.jpg'; // Add this new import

const OurStoryMission = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        {/* Main content area with max width for better readability */}
        <div className="max-w-4xl mx-auto">
          {/* Banner image now inside the max-width container */}
          <div className="mb-8 overflow-hidden rounded-lg shadow-md">
            <img 
              src={foundationBannerImage} 
              alt="Now I Can Foundation" 
              className="w-full h-96 object-cover object-[center_60%]"
            />
          </div>
          
          <h1 className="text-4xl font-bold font-heading mb-6">Our Story & Mission</h1>
          
          {/* Mission Section */}
          <div className="bg-primary-blue-50 rounded-lg p-8 border border-primary-blue-100 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary-blue-800 text-center">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-4 text-center italic">
              "Our mission at Now I Can is to help children with disabilities reach their full potential and greatest independence through innovative physical therapy."
            </p>
          </div>
          
          {/* Vision Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Now I Can's vision is to become our patients' first choice in physical therapy by providing the highest quality of therapy that brings change, hope, and confidence to children with disabilities!
              </p>
              <p className="text-lg text-gray-700 font-medium">
                We see a world with fewer crutches, wheelchairs, and surgeries and more dreams realized!
              </p>
            </div>
          </div>
          
          {/* Values Section with Fixed Checkmarks */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary-blue-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">PROFESSIONAL</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We are punctual</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We work as a team</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We focus on the patient</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary-orange-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">EXCEPTIONAL</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We improve lives</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We use the best techniques</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We interact well with patients and parents</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary-orange-600 h-20 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">BELIEVERS IN CHANGE</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We utilize time wisely</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We emphasize the positive</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We set goals and work passionately towards them</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Story Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-primary-blue-100 p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex justify-center">
                    <img 
                      src={foundersImage} 
                      alt="Tracey and Joel Christensen - Now I Can Founders" 
                      className="w-64 h-64 rounded-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4 text-primary-blue-800">Tracey and Joel Christensen</h2>
                    <h3 className="text-lg font-medium text-primary-blue-600 mb-4">Now I Can Founders</h3>
                    <p className="text-gray-700 mb-4">
                      Tracey and Joel Christensen founded Now I Can Foundation in 2006. Inspired by their daughter, Colby, they wanted to bring the most effective physical therapy to Utah and surrounding states.
                    </p>
                    <p className="text-gray-700">
                      The Christensen's appreciate the meaningful experiences and people that Now I Can has brought to their lives over the years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Tracey is currently the Executive Director of Now I Can and she and Joel serve on the Board of Directors together. In his day job, Joel is the University Budget Director at BYU, but in his spare time he enjoys being active, having fun with family, and being Now I Can's premier handyman!
                </p>
                <p className="text-gray-700 mb-4">
                  Joel's educational background includes majoring in Exercise Science and an MBA from BYU. Tracey's degree is in Broadcast News, and she spent many years working in that field, and teaching scripture to high school students. She mostly loves being a Mom to her now young-adult kids.
                </p>
                <p className="text-gray-700">
                  Joel and Tracey feel blessed to know the children and families of Now I Can!
                </p>
              </div>
            </div>
            
            {/* Colby's Story - Reorganized with better spacing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3 flex justify-center">
                    <img 
                      src={colbyImage} 
                      alt="Colby Christensen" 
                      className="w-64 h-64 rounded-lg object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Colby's Story</h2>
                    <div className="italic text-gray-600 mb-4">
                      In Colby's own words...
                    </div>
                    <p className="text-gray-700">
                      Hi, my name is Colby Christensen.
                      <br></br>
                      <br></br>
                      I want to tell you my story, how it led to "Now I Can", and how their approach to physical therapy changed my life.
                    </p>
                  </div>
                </div>
              
                <div className="space-y-4 text-gray-700">
                  <p>
                    When I was a baby I was diagnosed with Hemiplegic Cerebral Palsy. Doctors told my parents that physical therapy could maybe help me, and I was referred to a local therapy office. In a couple years I was able to make small changes, but my parents couldn't help but wonder if maybe there was MORE?
                  </p>
                  
                  {/* Rest of Colby's story content remains unchanged */}
                  <p>
                    They did their homework and when I was four years old my Mom and Dad took me to Poland to try a "new" treatment. The treatment was called the Intensive Model of Therapy (IMOT for short). At home, in Utah, my traditional physical therapy sessions lasted 45-minutes, once a week. But the IMOT I received in Poland had me in innovative physical therapy sessions that were 3-hours long and occurred 5 days a week!
                  </p>
                  
                  <p>
                    The therapy was physically challenging, but it was also fun. The best part was that I could feel and see myself gaining strength fast. In just a few weeks I had discovered new ways to make my body move. It was so exciting!
                  </p>
                  
                  <p>
                    The results I got using IMOT were too good to ignore. That's why my Mom and Dad started an IMOT clinic in Utah to help me—and other kids like me--reach amazing goals that traditional PT would not have allowed. They named the clinic Now I Can.
                  </p>
                  
                  <p>
                    If your child has a neuromuscular disorder like me, you've probably spoken to surgeons and watched helplessly as your child went through intervention after intervention. When I was small that's how it went for me—but introducing intensive physical therapy into my life changed all that. I just kept making progress which meant I didn't need as many surgeries and interventions.
                  </p>
                  
                  <p>
                    Instead of spending my time recovering from surgery, or in therapy, I became an active teenager. I made the cheerleading team, I went to football games with friends and walked up and down the bleachers, and I eventually attended college fully able to walk across campus on my own.
                  </p>
                  
                  <p>
                    Growing up doing intensive physical therapy at Now I Can didn't just strengthen my body; it also strengthened my mind. My therapists have taught me how to be patient with myself and others. They've helped retrain my brain to see the positive in every situation, and they've helped me understand that it's not about being the fastest, it's about simply participating in an experience.
                  </p>
                  
                  <p>
                    (Which is way better than feeling sorry for yourself and doing nothing at all.) Sure, it takes me longer to do things—and sometimes I get frustrated—but then I remember to just let the bad thoughts go. This has made a big difference in my life because situations can have a totally different outcome just based on the way you look at it. My mom has always said it best, "Give every situation your very best and be proud knowing you gave it your all."
                  </p>
                  
                  <p>
                    Another life lesson I've learned through my time at Now I Can is that it's okay to ask for help. I used to struggle, believing the lie that I had be independent and do everything by myself, but that's not true at all. There's not one person in the world who can do everything; we all need help with something.
                  </p>
                  
                  <p>
                    I wouldn't be where I am today without all the willing help I've received. I am so grateful for my family and friends who have helped me with simple tasks like opening fruit snacks, tying my shoes, or doing my hair, as well as the bigger things. I'm still working hard to gain more independence, but it's comforting to know I can always ask for help.
                  </p>
                  
                  <p>
                    Do you want to know something else I love about Now I Can that has nothing to do with therapy? It's knowing the other patients. Seeing other kids with disabilities working through therapy made me feel I wasn't alone.
                  </p>
                  
                  <p>
                    It's easy to be self-centered and so caught up in your own story that you forget that life is about building relationships. Without relationships life is lonely and kinda depressing. It feels good to consider other people; share a smile; start a conversation; be charitable--because you don't know what the other person is going through.
                  </p>
                  
                  <p>
                    For me, connecting with other kids and families just made things better. As a young adult I have volunteered at Now I Can and every time I'm there those kids put a smile on my face. They remind me that life is good, and they inspire me to never stop trying.
                  </p>
                  
                  <p>
                    An interesting thing happened to me a couple years ago. A friend interviewed me about living life with a disability. She asked, "If you could change having a disability, would you?" I immediately answered "No." I was kind of surprised by my own response, but it's very true. Even though living with a disability can be really hard sometimes, I'm definitely grateful for all the important things I've learned because of it. Almost all of those things I discovered or learned at Now I Can.
                  </p>
                  
                  <p>
                    The intensive physical therapy I received as a child at Now I Can boosted my ability and impacted my life in many wonderful ways. I'm so glad my parents didn't settle for "average" therapy, but instead they searched for MORE and they gave me MORE at Now I Can.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Now I Can North East Story - New Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3 flex justify-center">
                    <img 
                      src={allisonTroyImage} 
                      alt="Allison and Troy with daughter Lauren" 
                      className="w-64 h-64 rounded-lg object-cover object-[25%_center]"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Our Pennsylvania Partnership Story</h2>
                    <h3 className="text-lg font-medium text-primary-blue-600 mb-4">Now I Can Foundation North East</h3>
                    <p className="text-gray-700">
                      A story of seeking more, finding hope, and expanding the Now I Can mission to the East Coast.
                    </p>
                  </div>
                </div>
              
                <div className="space-y-4 text-gray-700">
                  <p>
                    In 2009 Allison and Troy welcomed their first child into the world, a beautiful daughter named Lauren. At 18-months Lauren was diagnosed with cerebral palsy. Within months, physical therapy became a staple of their everyday living. As Lauren grew and faced new challenges they began to wonder: is there more we can do? When Lauren was 7-years old God answered their question as Allison learned about <span className="italic">Now I Can Foundation</span> in Utah.
                  </p>
                  
                  <p>
                    As a family that enjoyed exploring the south-western states, Allison and Troy decided to make physical therapy a part of their summer vacation. They registered Lauren to receive 3-weeks of intensive physical therapy at Now I Can Foundation in Provo, UT. After just one week of therapy Allison and Troy were blown away by the amazing progress Lauren had made in such a short time span. Allison's eyes had been opened. There was MORE. And it came in a package called intensive physical therapy. This changed everything.
                  </p>
                  
                  <p>
                    For the next five summers Allison and Troy took their children to Utah for a month. During the week Lauren would receive cutting-edge treatment, and on the weekends the family would take mini-trips to explore the national parks and visit new towns.
                  </p>
                  
                  <p>
                    It was after summer number four that Allison recognized God was leading her to open an intensive physical therapy clinic in Pennsylvania that would serve children and families living on the East Coast.
                  </p>
                  
                  <p>
                    Partnering with <span className="italic">Now I Can Foundation</span> in Utah, Allison and her brother, Ross, established <span className="italic">Now I Can Foundation North East</span> in the town of Lititz, Pennsylvania. The intensive physical therapy center is located on the same campus as Ross's technology company, Listrak.
                  </p>
                  
                  <p>
                    A long time First Grade teacher with a Masters in Education, Allison has a heart to see kids grow and achieve. She knows first hand that miracles happen every day–and she wants <span className="italic">Now I Can North East</span> to be a part of your family's miracle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary-blue-600 to-primary-orange-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Commitment</h2>
            <p className="text-lg mb-6 text-center">
              We are committed to help each child do more and reach higher!
            </p>
            <div className="flex justify-center">
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-primary-blue-800 text-white hover:bg-primary-blue-900 border-2 border-white font-bold text-lg px-8 py-3 shadow-md"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryMission;