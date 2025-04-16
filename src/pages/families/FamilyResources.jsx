import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import ebersoleFamilyImg from '../../assets/images/Ebersole.jpg';
import minerFamilyImg from '../../assets/images/imagecomingsoon.png';
import gilesFamilyImg from '../../assets/images/Giles-Family.png';
import retaFamilyImg from '../../assets/images/Reta-family.png';
import andersonFamilyImg from '../../assets/images/Anderson.png';
import johnsonFamilyImg from '../../assets/images/johnson.jpg';
import colbyImg from '../../assets/images/colby.jpg';
import testimonialsHeaderImg from '../../assets/images/UniversalExerciseUnit2.jpg';

const FamilyResources = () => {
  const [activeTab, setActiveTab] = useState('testimonials');
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      family: "Ebersole Family, Schaefferstown, PA",
      content: "Now I Can has changed our daughter, Lauren's life! We found Now I Can by divine intervention, literally. When we booked Lauren's first session, we were not exactly sure what to expect, but we knew we were meant to get her there for treatment! The type of treatment Lauren was receiving was new to us. We were intrigued by the various methods, models and techniques the physical therapists used with Lauren. The Suit, Spider Cage and vibration plate were brand new to us. Lauren enjoys using them in her intensive sessions! The magical gift of time allows Lauren to do things in PT that she would never have time to do in traditional therapy. The gains we saw within the first week in her flexibility, mobility and confidence alone are amazing! Each summer she looked forward to her intensive sessions in Utah. The staff at Now I Can are caring, fun, knowledgeable, warm and welcoming. We were so inspired by what we experienced at Now I Can in Utah, we decided to partner with Now I Can to bring a facility to the east coast so that other families can experience the transformation therapy found at Now I Can.",
      child: "Lauren",
      highlighted: true,
      image: ebersoleFamilyImg
    },
    {
      id: 2,
      family: "Giles Family",
      content: "My son, Canyon, was born with cerebral palsy. We were referred to \"Now I Can\" by a friend whose brother had benefited from the amazing therapy that they provide. I can honestly say \"Now I Can\" has changed our sons life! I have never met a team of people so dedicated and willing to do anything to help our child. When we first started going to \"Now I Can\" my son couldn't even crawl; now he can crawl and has started walking using a walker. Because of their continuous love and dedication to helping our son, we have made it a priority to continue getting these services every year. \"Now I Can\" gives us continuous hope for his future.",
      child: "Canyon",
      highlighted: false,
      image: gilesFamilyImg
    },
    {
      id: 3,
      family: "Johnson Family",
      content: "Now I Can has been an absolute miracle for our family. Never do we have as much hope for the future or see as much progress as we do after completing one session with Now I Can. Their entire staff is so friendly and they make therapy so much fun that my son loves going! We drive all the way from California every year to do a session because we believe in it so much. Thank you Now I Can for changing lives and making the impossible, possible!",
      child: null,
      highlighted: false,
      image: johnsonFamilyImg
    },
    {
      id: 4,
      family: "Miner Family, Texas, USA",
      content: "Our son has had the privilege of participating in the Now I Can therapy program on two different occasions this year. Bronson (age 2) has been diagnosed with cerebral palsy and lacks basic functionality in his legs. As his parents, we're committed to giving Bronson every opportunity to progress as far as he can given his physical disabilities. We found that Now I Can's highest priority is to also help children like Bronson reach their goals. The staff and therapists at Now I Can are always friendly and have become close friends to Bronson and our family. Each 3 week therapy session starts with a sit down meeting where together with the therapist, we establish goals for Bronson and his near future. We feel that the therapists do exceptional work when customizing a plan to help Bronson reach his goals and ultimate potential. We have loved this opportunity and feel very privileged to be given the chance to become part of the Now I Can family. Our hope is to continue working with Now I Can to help Bronson reach his fullest potential!",
      child: "Bronson",
      highlighted: true,
      image: minerFamilyImg
    },
    {
      id: 5,
      family: "Reta Family",
      content: "I can't say enough about Now I Can! We have been going annually for several years. Not only do you get top quality intensive therapy but you are treated like family! The staff and volunteers are top notch. My daughter has made tremendous progress and she has so much fun she forgets how hard she is working. An intensive at Now I Can is an opportunity not to be missed.",
      child: null,
      highlighted: false,
      image: retaFamilyImg
    },
    {
      id: 6,
      family: "Anderson Family",
      content: "Our son Liam has cerebral palsy and requires a lot of help with walking and standing and just doing everyday things. He uses a walker and is very independent in his own way. We have gone to the Now I Can for 4 years and we have loved every single hour Liam has spent there. When he does his summer sessions which requires him to go M-F for 4 hours, he wakes up every morning asking if it's a Now I Can day. He LOVES it. He is always so sad when it's over. We have seen so much improvement in Liam since he's been going to NIC. They helped him learn how to ride a bike and he rides it all the time now. The freedom that they have given him through all the hard work is amazing. He loves the time there and is always looking forward to it. We have learned so much as parents about our son's therapy programs and love how we are given a therapy plan for home when he finishes his summer therapy. It's so helpful to have something written out and with clear instructions on how to do everything. We plan on going to Now I Can every summer!",
      child: "Liam",
      highlighted: true,
      image: andersonFamilyImg
    }
  ];
  
  // FAQs data
  const faqs = [
    {
      id: 1,
      question: "What items should we bring to therapy?",
      answer: (
        <ul className="list-disc pl-6 space-y-1">
          <li>Water bottle</li>
          <li>Favorite snacks</li>
          <li>Any assistive devices that you currently use and or are planning to use in the future</li>
          <li>Shorts or pants that are easy to move in (for preparation time)</li>
          <li>Long pants that are easy to move in (for the suit)</li>
          <li>Socks (for shoes worn with the suit)</li>
          <li>Shirt with sleeves (monkey cage bungees can rub against arms with sleeveless shirts)</li>
          <li>Extra diapers (if needed)</li>
        </ul>
      )
    },
    {
      id: 2,
      question: "What happens on the first day of therapy?",
      answer: "The first day will be a shorter day–about 1.5 hours. You will meet with one or more therapists for your child's PT evaluation. Be prepared to talk about the areas you'd like to see your child progress in, and the goals you have."
    }
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src={testimonialsHeaderImg} 
            alt="Family Stories at Now I Can" 
            className="w-full h-96 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold font-heading mb-6">Family Resources</h1>
        <p className="text-lg mb-8">
          Resources to help you navigate your journey with Now I Can, including family stories
          and helpful information for your therapy experience.
        </p>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            className={`mr-2 py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'testimonials'
                ? 'bg-primary-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('testimonials')}
          >
            Family Stories
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'faqs'
                ? 'bg-primary-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('faqs')}
          >
            FAQs
          </button>
        </div>
        
        {/* Family Stories Content */}
        {activeTab === 'testimonials' && (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Family Stories</h2>
              <div className="space-y-4">
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4">
                        <div className="aspect-square w-full">
                          <img 
                            src={testimonial.image} 
                            alt={`${testimonial.family}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="mb-4">
                          <p className="text-gray-700 italic">
                            "{testimonial.content}"
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-800 font-bold">— {testimonial.family}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-8">
              <div className="bg-primary-blue-50 rounded-lg p-6 border border-primary-blue-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="aspect-square w-full">
                      <img 
                        src={colbyImg}
                        alt="Colby Christensen" 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-primary-blue-800 mb-4">Colby's Story</h2>
                    <p className="text-gray-700 mb-4">
                      Colby Christensen, the daughter of Now I Can founders Joel and Tracey Christensen, was the inspiration 
                      behind our foundation. Diagnosed with Hemiplegic Cerebral Palsy as a baby, Colby's journey with intensive 
                      therapy led to remarkable progress that traditional therapy alone couldn't provide.
                    </p>
                    <p className="text-gray-700 italic mt-4">
                      "The intensive physical therapy I received as a child at Now I Can boosted my ability and impacted my life 
                      in many wonderful ways. I'm so glad my parents didn't settle for 'average' therapy, but instead they searched 
                      for MORE and they gave me MORE at Now I Can."
                    </p>
                    <p className="text-gray-700 font-bold text-right mt-2">
                      — Colby Christensen
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link 
                    to="/about-us/our-story-mission" 
                    className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700"
                  >
                    Read Colby's Full Story
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
        
        {/* FAQs Content */}
        {activeTab === 'faqs' && (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map(faq => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                      <div className="text-gray-700">
                        {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-8">
              <div className="bg-primary-blue-50 rounded-lg p-6 border border-primary-blue-100">
                <div className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary-blue-800 mb-4">Still Have Questions?</h2>
                    <p className="text-gray-700 mb-6">
                      We're here to help! If you have questions that aren't answered above, please reach out to our team. 
                      We're happy to provide more information about our therapy programs, financial options, or any other 
                      aspect of Now I Can.
                    </p>
                    {/* Added Contact Us button */}
                    <div className="flex justify-center">
                      <Link 
                        to="/contact-us" 
                        className="btn bg-primary-blue-600 text-white hover:bg-primary-blue-700 px-6 py-3 rounded-lg font-medium"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default FamilyResources;