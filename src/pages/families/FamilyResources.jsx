import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FamilyResources = () => {
  const [activeTab, setActiveTab] = useState('testimonials');
  const [activeFaqCategory, setActiveFaqCategory] = useState('all');
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      family: "Miner Family, Texas, USA",
      content: "Our son has had the privilege of participating in the Now I Can therapy program on two different occasions this year. Bronson (age 2) has been diagnosed with cerebral palsy and lacks basic functionality in his legs. As his parents, we're committed to giving Bronson every opportunity to progress as far as he can given his physical disabilities. We found that Now I Can's highest priority is to also help children like Bronson reach their goals. The staff and therapists at Now I Can are always friendly and have become close friends to Bronson and our family. Each 3 week therapy session starts with a sit down meeting where together with the therapist, we establish goals for Bronson and his near future. We feel that the therapists do exceptional work when customizing a plan to help Bronson reach his goals and ultimate potential. We have loved this opportunity and feel very privileged to be given the chance to become part of the Now I Can family. Our hope is to continue working with Now I Can to help Bronson reach his fullest potential!",
      child: "Bronson",
      highlighted: true
    },
    {
      id: 2,
      family: "Giles Family",
      content: "My son, Canyon, was born with cerebral palsy. We were referred to \"Now I Can\" by a friend whose brother had benefited from the amazing therapy that they provide. I can honestly say \"Now I Can\" has changed our sons life! I have never met a team of people so dedicated and willing to do anything to help our child. When we first started going to \"Now I Can\" my son couldn't even crawl; now he can crawl and has started walking using a walker. Because of their continuous love and dedication to helping our son, we have made it a priority to continue getting these services every year. \"Now I Can\" gives us continuous hope for his future.",
      child: "Canyon",
      highlighted: false
    },
    {
      id: 3,
      family: "Reta Family",
      content: "I can't say enough about Now I Can! We have been going annually for several years. Not only do you get top quality intensive therapy but you are treated like family! The staff and volunteers are top notch. My daughter has made tremendous progress and she has so much fun she forgets how hard she is working. An intensive at Now I Can is an opportunity not to be missed.",
      child: null,
      highlighted: false
    },
    {
      id: 4,
      family: "Anderson Family",
      content: "Our son Liam has cerebral palsy and requires a lot of help with walking and standing and just doing everyday things. He uses a walker and is very independent in his own way. We have gone to the Now I Can for 4 years and we have loved every single hour Liam has spent there. When he does his summer sessions which requires him to go M-F for 4 hours, he wakes up every morning asking if it's a Now I Can day. He LOVES it. He is always so sad when it's over. We have seen so much improvement in Liam since he's been going to NIC. They helped him learn how to ride a bike and he rides it all the time now. The freedom that they have given him through all the hard work is amazing. He loves the time there and is always looking forward to it. We have learned so much as parents about our son's therapy programs and love how we are given a therapy plan for home when he finishes his summer therapy. It's so helpful to have something written out and with clear instructions on how to do everything. We plan on going to Now I Can every summer!",
      child: "Liam",
      highlighted: true
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
        </ul>
      ),
      category: "therapy"
    },
    {
      id: 2,
      question: "What happens on the first day of therapy?",
      answer: "The first day will be a shorter day–about 1.5 hours. You will meet with one or more therapists for your child's PT evaluation. Be prepared to talk about the areas you'd like to see your child progress in, and the goals you have.",
      category: "therapy"
    },
    {
      id: 3,
      question: "How long are intensive therapy sessions?",
      answer: "Our intensive therapy sessions run for three weeks, with therapy provided 4 hours per day, 5 days a week. This model allows children to make significant progress in a short period of time.",
      category: "therapy"
    },
    {
      id: 4,
      question: "Where can I stay in Provo, UT?",
      answer: "Now I Can Foundation is happy to offer some apartments right on our campus property! Email Melissa Chalk for more information or call 801-228-1935. Several hotels nearby also give Now I Can patients great rates.",
      category: "accommodations"
    },
    {
      id: 5,
      question: "Where can I stay in Lititz, PA?",
      answer: "There are several hotels with kitchenette suites nearby Now I Can, including Fairfield Inn & Suites, Homewood Suites, and more. VRBO has many offerings of houses and cottages to stay in the Lititz Area.",
      category: "accommodations"
    },
    {
      id: 6,
      question: "Does insurance cover intensive physical therapy?",
      answer: "While we don't directly bill insurance companies, many families have successfully received partial reimbursement from their insurance providers. We provide detailed documentation with CPT codes and therapy notes that you can submit to your insurance company.",
      category: "costs"
    },
    {
      id: 7,
      question: "Are there any financial assistance options available?",
      answer: "Yes, through our Ability Fund, Now I Can Foundation provides financial aid and grants to many patients who need assistance covering therapy costs. While we ask families to pay some portion, we strive to make our therapy accessible to all who need it.",
      category: "costs"
    },
    {
      id: 8,
      question: "How do I schedule a free consultation?",
      answer: "You can schedule a free consultation by visiting our Free Consultation page, calling our Utah location at (801) 228-1935, or our Pennsylvania location at 717-269-5829. You can also email info@nowican.org for Utah or allison@nowican.org for Pennsylvania.",
      category: "getting-started"
    },
    {
      id: 9,
      question: "What conditions do you treat at Now I Can?",
      answer: "We work with children with a variety of neuromuscular conditions, including but not limited to: Cerebral Palsy, Developmental Delays, Traumatic Brain Injury, Post Stroke (CVA), Ataxia and Athethosis, Spasticity, and Hypotonia.",
      category: "getting-started"
    },
    {
      id: 10,
      question: "How far in advance should I book an intensive therapy session?",
      answer: "We recommend booking your intensive therapy session as far in advance as possible, ideally 3-6 months before your preferred dates. Some sessions, particularly during summer months, fill up quickly.",
      category: "getting-started"
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'therapy', name: 'Therapy Sessions' },
    { id: 'accommodations', name: 'Accommodations' },
    { id: 'costs', name: 'Costs & Insurance' },
    { id: 'getting-started', name: 'Getting Started' },
  ];
  
  const featuredTestimonials = testimonials.filter(t => t.highlighted);
  const otherTestimonials = testimonials.filter(t => !t.highlighted);
  
  const filteredFaqs = activeFaqCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeFaqCategory);
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/39fc64f9-31df-4b8a-87e3-5898cdb8a92d/H-Testimonials.jpg" 
            alt="Family Stories at Now I Can" 
            className="w-full h-64 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold font-heading mb-6">Family Resources</h1>
        <p className="text-lg mb-8">
          Resources to help you navigate your journey with Now I Can, including family stories,
          frequently asked questions, and helpful information for your therapy experience.
        </p>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            className={`mr-2 py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'testimonials'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('testimonials')}
          >
            Family Stories
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm rounded-t-lg ${
              activeTab === 'faqs'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('faqs')}
          >
            FAQs
          </button>
        </div>
        
        {/* Testimonials Content */}
        {activeTab === 'testimonials' && (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Featured Family Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredTestimonials.map(testimonial => (
                  <div key={testimonial.id} className="bg-blue-50 rounded-lg shadow-md overflow-hidden border border-blue-100">
                    {testimonial.id === 1 && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/30720756-654f-4a48-b511-611806843f53/Reta-family.png" 
                          alt="Featured family testimonial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {testimonial.id === 4 && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/17e1ce8e-4b86-4a98-b7a7-cd25702d8556/Testimonials-Anderson.png" 
                          alt="Featured family testimonial" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="mb-4">
                        <p className="text-gray-700 italic">
                          "{testimonial.content.length > 250 ? `${testimonial.content.substring(0, 250)}...` : testimonial.content}"
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-800 font-bold">— {testimonial.family}</p>
                        {testimonial.child && (
                          <p className="text-blue-600">{testimonial.child}'s Journey</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">More Family Experiences</h2>
              <div className="space-y-4">
                {otherTestimonials.map(testimonial => (
                  <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4">
                        {testimonial.id === 2 && (
                          <div className="h-full overflow-hidden">
                            <img 
                              src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/31762d9a-35b9-48c7-aa72-7468a61a1f7f/Giles-Family.png" 
                              alt="Giles Family" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        {testimonial.id === 3 && (
                          <div className="h-full overflow-hidden">
                            <img 
                              src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/30720756-654f-4a48-b511-611806843f53/Reta-family.png" 
                              alt="Reta Family" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="mb-4">
                          <p className="text-gray-700 italic">
                            "{testimonial.content.length > 200 ? `${testimonial.content.substring(0, 200)}...` : testimonial.content}"
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-800 font-bold">— {testimonial.family}</p>
                          {testimonial.child && (
                            <p className="text-blue-600">{testimonial.child}'s Journey</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/685d3859-6826-45eb-88ad-6f6bad55abae/Colby.jpg" 
                      alt="Colby Christensen" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Colby's Story</h2>
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
                    className="btn bg-blue-600 text-white hover:bg-blue-700"
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
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      activeFaqCategory === category.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setActiveFaqCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="space-y-4">
                {filteredFaqs.map(faq => (
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
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/0e517959-5a2a-4ce7-95f6-d0c6e2eef69f/H-FAQ-for-families.jpg" 
                      alt="Frequently Asked Questions" 
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Still Have Questions?</h2>
                    <p className="text-gray-700 mb-6">
                      We're here to help! If you have questions that aren't answered above, please reach out to our team. 
                      We're happy to provide more information about our therapy programs, financial options, or any other 
                      aspect of Now I Can.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Utah Location</h3>
                    <p className="mb-1">1950 S 375 E</p>
                    <p className="mb-1">Orem, UT 84058</p>
                    <p className="mb-1">(801) 228-1935</p>
                    <p className="mb-2">info@nowican.org</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Pennsylvania Location</h3>
                    <p className="mb-1">100 West Millport Road</p>
                    <p className="mb-1">Lititz, PA  17543</p>
                    <p className="mb-1">717-269-5829</p>
                    <p className="mb-2">allison@nowican.org</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/dfbfc6b8-d061-455f-b6a4-5ad4a1f9568e/Intensive.jpg" 
                  alt="Intensive therapy at Now I Can" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Therapy Information</h3>
                <p className="text-gray-700 mb-4">
                  Learn more about our intensive therapy approach, treatment methods, and what to expect during your child's therapy sessions.
                </p>
              <Link 
                to="/therapy-services/intensive-physical-therapy" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
              >
                Explore Therapy Services
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/b55c7694-f32a-4da9-9266-cfb53d817a8d/H-Therapy-Schedule.jpg" 
                  alt="Financial support at Now I Can" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Financial Support</h3>
                <p className="text-gray-700 mb-4">
                  Discover payment options, insurance information, and financial assistance through our Ability Fund grant program.
                </p>
              <Link 
                to="/for-families/payment-financial-aid" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
              >
                Payment Options
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/619bb52cb80989574ac52490/968d33ae-3963-42ba-a691-8091fa1adfdb/suite2bed.jpg" 
                  alt="Accommodations at Now I Can" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Accommodations</h3>
                <p className="text-gray-700 mb-4">
                  Find information about lodging options, local activities, and planning your stay near our therapy centers.
                </p>
              <Link 
                to="/for-families/accommodations" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
              >
                Accommodations Info
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FamilyResources;