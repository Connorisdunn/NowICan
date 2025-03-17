import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const faqs = [
    {
      id: 1,
      question: "What items should we bring to therapy?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Water bottle</li>
          <li>Favorite snacks</li>
          <li>Any assistive devices that you currently use and or are planning to use in the future</li>
          <li>Shorts or pants that are easy to move in (for preparation time)</li>
          <li>Long pants that are easy to move in (for the suit)</li>
          <li>Socks (for shoes worn with the suit)</li>
          <li>Shirt with sleeves (monkey cage bungees can rub against arms with sleeveless shirts)</li>
          <li>Extra diapers (if needed)</li>
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
      question: "Who designs the goals for each child?",
      answer: "The therapist that is evaluating your child along with the child's family design individualized goals for each session for the child. Please come prepared to the evaluation session with physical therapy goals in mind for your child.",
      category: "therapy"
    },
    {
      id: 4,
      question: "How long are intensive therapy sessions?",
      answer: "Our intensive therapy sessions run for three weeks, with therapy provided 4 hours per day, 5 days a week. This model allows children to make significant progress in a short period of time.",
      category: "therapy"
    },
    {
      id: 5,
      question: "What is the age range for children who can receive therapy at Now I Can?",
      answer: "We work with children from as young as 10 months through young adulthood. Our therapy methods are adaptable for different ages and developmental stages. Our team will assess if our therapy approaches are appropriate for your child's specific needs.",
      category: "therapy"
    },
    {
      id: 6,
      question: "Where can I stay in Provo, UT?",
      answer: (
        <>
          <p className="mb-2">Now I Can Foundation is happy to offer some apartments right on our campus property! Email <span className="font-medium">Melissa Chalk</span> for more information or call 801-228-1935.</p>
          <p>Several hotels nearby also give Now I Can patients great rates. Check out the Marriott Residence Inn, the Marriott Springhill Suites, Days Inn, and Aspenwood Manor in Provo, and tell them you're coming to Now I Can!</p>
        </>
      ),
      category: "accommodations"
    },
    {
      id: 7,
      question: "What can we do while staying in Provo?",
      answer: "Provo is located about 50 miles south of Salt Lake City, Utah, and is at the base of the beautiful Wasatch Mountains. Fun family activities abound, from hiking or skiing, to visiting museums and water slide parks. Visit our Local Activities page for more information.",
      category: "accommodations"
    },
    {
      id: 8,
      question: "Where can I stay in Lititz, PA?",
      answer: (
        <>
          <p className="mb-2">There are several hotels with kitchenette suites nearby Now I Can:</p>
          <ul className="list-disc pl-6 space-y-1 mb-2">
            <li>Fairfield Inn & Suites</li>
            <li>Homewood Suites</li>
            <li>Inn at Leola Village</li>
            <li>Suites at Eden Resort</li>
          </ul>
          <p>Also - VRBO has many offerings of houses and cottages to stay in the Lititz Area</p>
        </>
      ),
      category: "accommodations"
    },
    {
      id: 9,
      question: "What can we do while staying in Lititz, PA?",
      answer: (
        <>
          <p className="mb-2">Lititz, PA is home to "America's Coolest Small Town". Lititz, PA is located 38 miles from Harrisburg, 76 miles from Philadelphia, and 9 miles from Lancaster. The area is rich in history, shopping parks, entertainment and restaurants.</p>
          <p>Please visit <span className="font-medium">LititzPA.com</span> to see all the amazing opportunities that abound in this quaint small town. We are located a short drive from Hershey, PA, home to world famous Hershey Park & Chocolate World!</p>
        </>
      ),
      category: "accommodations"
    },
    {
      id: 10,
      question: "Does insurance cover intensive physical therapy?",
      answer: "While we don't directly bill insurance companies, many families have successfully received partial reimbursement from their insurance providers. We provide detailed documentation with CPT codes and therapy notes that you can submit to your insurance company. We recommend contacting your insurance provider before beginning therapy to understand your coverage options.",
      category: "costs"
    },
    {
      id: 11,
      question: "How much does an intensive therapy session cost?",
      answer: "The cost of intensive therapy varies based on the duration and specific needs of your child. We understand that the financial investment is significant, which is why we offer financial assistance through our Ability Fund. Please contact us directly for current pricing information and to discuss payment options.",
      category: "costs"
    },
    {
      id: 12,
      question: "Are there any financial assistance options available?",
      answer: "Yes, through our Ability Fund, Now I Can Foundation provides financial aid and grants to many patients who need assistance covering therapy costs. While we ask families to pay some portion, we strive to make our therapy accessible to all who need it. Visit our Therapy Grants page for more information about applying for financial assistance.",
      category: "costs"
    },
    {
      id: 13,
      question: "How do I schedule a free consultation?",
      answer: "You can schedule a free consultation by visiting our Free Consultation page, calling our Utah location at (801) 228-1935, or our Pennsylvania location at 717-269-5829. You can also email info@nowican.org for Utah or allison@nowican.org for Pennsylvania.",
      category: "getting-started"
    },
    {
      id: 14,
      question: "What conditions do you treat at Now I Can?",
      answer: (
        <>
          <p className="mb-2">We work with children with a variety of neuromuscular conditions, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cerebral Palsy</li>
            <li>Developmental Delays</li>
            <li>Traumatic Brain Injury</li>
            <li>Post Stroke (CVA)</li>
            <li>Ataxia and Athethosis</li>
            <li>Spasticity (increased muscle tone)</li>
            <li>Hypotonia (low muscle tone)</li>
          </ul>
        </>
      ),
      category: "getting-started"
    },
    {
      id: 15,
      question: "How far in advance should I book an intensive therapy session?",
      answer: "We recommend booking your intensive therapy session as far in advance as possible, ideally 3-6 months before your preferred dates. Some sessions, particularly during summer months, fill up quickly. However, we sometimes have openings due to cancellations, so don't hesitate to check availability even for closer dates.",
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

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Frequently Asked Questions</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Common Questions About Now I Can</h2>
            <p className="text-lg mb-6">
              We understand that families considering intensive therapy have many questions. We've compiled answers 
              to the most frequently asked questions about our therapy programs, accommodations, costs, and more.
            </p>
            <p className="text-lg">
              If you don't find the answer you're looking for here, please don't hesitate to contact us directly. 
              Our team is always happy to provide the information you need to make informed decisions about your 
              child's therapy.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="space-y-6">
            {filteredFaqs.map(faq => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{faq.question}</h3>
                  <div className="text-gray-700">
                    {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6">
              We're here to help! If you have questions that aren't answered above, please reach out to our team. 
              We're happy to provide more information about our therapy programs, financial options, or any other 
              aspect of Now I Can.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Utah Location</h3>
                <p className="mb-1">1950 S 375 E</p>
                <p className="mb-1">Orem, UT 84058</p>
                <p className="mb-1">(801) 228-1935</p>
                <p className="mb-4">info@nowican.org</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Pennsylvania Location</h3>
                <p className="mb-1">100 West Millport Road</p>
                <p className="mb-1">Lititz, PA  17543</p>
                <p className="mb-1">717-269-5829</p>
                <p className="mb-4">allison@nowican.org</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Schedule a Consultation</h3>
              <p className="text-gray-700 mb-4">
                The best way to get personalized answers to your questions is to schedule a free consultation with our team. 
                We can discuss your child's specific needs and how our therapy programs might benefit them.
              </p>
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
              >
                Free Consultation
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Therapy Schedule</h3>
              <p className="text-gray-700 mb-4">
                View our current therapy schedule to see available session dates at both our Utah and Pennsylvania locations. 
                Plan your visit and check availability for your preferred dates.
              </p>
              <Link 
                to="/therapy-services/therapy-schedule" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
              >
                View Schedule
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Family Testimonials</h3>
              <p className="text-gray-700 mb-4">
                Read stories from families who have experienced our intensive therapy programs. Learn about their journeys 
                and the progress their children have made at Now I Can.
              </p>
              <Link 
                to="/for-families/testimonials" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 w-full text-center"
              >
                Read Testimonials
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;