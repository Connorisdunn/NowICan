import React from 'react';
import { Link } from 'react-router-dom';

const WhoWeServe = () => {
  const conditions = [
    {
      name: 'Cerebral Palsy',
      description: 'A group of disorders that affect movement and muscle tone or posture. Cerebral palsy is caused by damage that occurs to the immature brain as it develops, most often before birth.',
      color: 'blue'
    },
    {
      name: 'Developmental Delays',
      description: 'A delay in reaching milestones in one or more areas of development (physical, social, emotional, cognitive, or communication).',
      color: 'green'
    },
    {
      name: 'Traumatic Brain Injury',
      description: 'An injury that affects how the brain works, typically caused by a bump, blow, or jolt to the head.',
      color: 'purple'
    },
    {
      name: 'Post Stroke (CVA)',
      description: 'Cerebrovascular accident (stroke) can cause various physical limitations that benefit from intensive physical therapy.',
      color: 'coral'
    },
    {
      name: 'Ataxia and Athetosis',
      description: 'Ataxia is characterized by a lack of muscle coordination during voluntary movements. Athetosis is characterized by slow, involuntary, convoluted, writhing movements.',
      color: 'blue'
    },
    {
      name: 'Spasticity',
      description: 'Increased muscle tone that causes stiff muscles and can interfere with normal movement, speech, and gait.',
      color: 'green'
    },
    {
      name: 'Hypotonia',
      description: 'Low muscle tone that can make a child seem floppy or like a "rag doll" when being held.',
      color: 'purple'
    },
    {
      name: 'Hypertonia',
      description: 'Increased muscle tone that results in rigid muscles and can restrict movement.',
      color: 'coral'
    }
  ];

  const ageGroups = [
    {
      range: 'Infants & Toddlers (10 months - 3 years)',
      description: 'Early intervention is crucial for children with developmental delays or diagnosed conditions. Our therapists work with infants as young as 10 months to establish foundational movement patterns and prevent compensations that can lead to long-term issues.',
      icon: '👶'
    },
    {
      range: 'Preschool & Early Elementary (3-7 years)',
      description: 'During these formative years, we help children develop the gross motor skills needed for school participation, play, and daily activities. This is often an ideal time for intensive therapy to establish new movement patterns.',
      icon: '🧒'
    },
    {
      range: 'School Age (8-12 years)',
      description: 'As children grow, we focus on improving functional mobility, strengthening, and developing skills that support independence in school and community environments.',
      icon: '👧'
    },
    {
      range: 'Adolescents & Teens (13-18 years)',
      description: 'Our therapy for older children addresses the physical changes of puberty and focuses on activities that promote independence and participation in teenage social and academic life.',
      icon: '👦'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Who We Serve</h1>
        <p className="text-lg mb-8">
          At Now I Can Foundation, we provide specialized physical therapy services for children with a wide range of neuromuscular conditions and developmental challenges.
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Conditions We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((condition, index) => (
              <div key={index} className={`bg-${condition.color}-50 border border-${condition.color}-100 rounded-lg p-6`}>
                <h3 className={`text-xl font-bold mb-2 text-${condition.color}-700`}>{condition.name}</h3>
                <p className="text-gray-700">{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Approach</h2>
          <p className="text-lg mb-4">
            At Now I Can, we believe that every child has unique potential waiting to be unlocked. Our approach is both personalized and comprehensive, taking into account each child's specific diagnosis, developmental stage, goals, and challenges.
          </p>
          <p className="text-lg mb-4">
            Rather than focusing solely on the diagnosis, we look at the whole child - their strengths, challenges, family dynamics, and personal goals. This holistic perspective allows us to create therapy plans that address not just the physical symptoms, but also support overall development and quality of life.
          </p>
          <p className="text-lg">
            Our intensive therapy model provides the time and consistent engagement needed to make significant progress, often achieving in three weeks what might take months or even years in traditional therapy settings.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Age Groups We Serve</h2>
          <div className="space-y-6">
            {ageGroups.map((age, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{age.icon}</div>
                    <h3 className="text-xl font-bold">{age.range}</h3>
                  </div>
                  <p className="text-gray-700">{age.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Is Now I Can Right for Your Child?</h2>
          <p className="text-lg mb-6">
            If your child has a neuromuscular condition or developmental delay that affects their mobility or physical function, our intensive therapy program may be beneficial. The best way to determine if our approach is right for your child is to schedule a free consultation with our team.
          </p>
          <Link 
            to="/for-families/getting-started/free-consultation" 
            className="btn bg-blue-600 text-white hover:bg-blue-700"
          >
            Schedule a Free Consultation
          </Link>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>
          <p className="text-lg text-center mb-6">
            Read about the incredible achievements of children who have participated in our therapy programs.
          </p>
          <div className="text-center">
            <Link 
              to="/for-families/testimonials" 
              className="btn bg-blue-600 text-white hover:bg-blue-700"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;