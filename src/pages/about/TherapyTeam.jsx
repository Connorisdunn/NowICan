import React from 'react';
import { Link } from 'react-router-dom';

const TherapyTeam = () => {
  const therapists = [
    {
      name: 'MARK BARNEY, DPT',
      title: 'Doctor of Physical Therapy',
      location: 'utah',
      bio: [
        "Mark graduated from Southern Utah University in 2002 with a Bachelors of Science in Physical Education/emphasis in Athletic training and Health Education. He received his Doctorate of Physical Therapy degree from the University of Saint Augustine for Health Sciences in 2008.",
        "After graduation Mark had the opportunity to work in many different clinical settings including orthopedic outpatient, skilled nursing, and home health. It wasn't long before his career route took a dramatic turn into the field of Pediatrics. Mark finds great satisfaction in assisting children to realize their potential with improved motor function and mobility.",
        "Mark's training includes courses in musculoskeletal development, manual therapy, myofascial release, NDT, pediatric equipment and bracing, pediatric kinesiology taping, pediatric treatment, and motor control/learning.",
        "Mark lives in Spanish Fork, UT with his wife and five children. He feels lucky to be around kids at work and at home. He loves to spend time with his family and enjoys being in the outdoors, any sporting event, and serving in the community."
      ]
    },
    {
      name: 'NACOLE JACKSON',
      title: 'Physical Therapist Assistant',
      location: 'utah',
      bio: [
        "Nacole Jackson graduated from Provo College as a Physical Therapist Assistant with high honors.",
        "Nacole has worked in many physical therapy settings including acute care, inpatient, outpatient orthopedics, industrial PT, and pediatrics. She also has more than 10 years of experience working with children in various teaching settings prior to coming to Now I Can in 2008.",
        "Nacole enjoys integrating her physical therapy and teaching knowledge to help patients learn and achieve their therapy goals.",
        "Patients and parents appreciate Nacole's vast knowledge as well as her kind attention to her patients' needs."
      ]
    },
    {
      name: 'BRITTANY WALKER',
      title: 'Physical Therapist Assistant',
      location: 'utah',
      bio: [
        "Brittany grew up in Sandy, UT where she graduated from Jordan High School, and will forever be a Beetdigger!",
        "She received her Bachelor's degree in Exercise and Sport Science from the University of Utah, and her Physical Therapist Assistant degree from Provo College.",
        "Brittany has worked as a PTA in many different settings, but pediatrics is her favorite! She loves seeing people get better and achieve their goals, especially the little ones!",
        "Brittany is very patient and creative, and has a huge heart for helping children."
      ]
    },
    {
      name: 'MEGAN MERRILL, DPT',
      title: 'Doctor of Physical Therapy',
      location: 'utah',
      bio: [
        "Megan grew up in Pocatello, Idaho, and moved to Provo to study at BYU. She earned her BS in Exercise Science in 2013, and started her Doctorate in Physical Therapy one week later at Rocky Mountain University of Health Professions.",
        "Megan has known she wanted to work with kiddos from the very beginning. She volunteered at Now I Can for 3 years during college and returned as a therapist in 2019: truly a dream come true!",
        "Megan has been married for one and a half years and recently bought a miniature schnauzer named Ollie, who keeps their little family very busy!"
      ]
    },
    {
      name: "JEANE' BOWERMAN",
      title: 'Physical Therapist',
      location: 'pennsylvania',
      bio: [
        "Jeane' graduated from the University of the Sciences in Philadelphia with her master's degree in Physical Therapy in 2003. She has worked in a variety of settings including pediatrics, outpatient orthopedics, and inpatient rehab. With approximately 10 years of pediatric experience, Jeane' had the opportunity to work in early intervention, preschool based therapy, and outpatient pediatrics. Working with kids has always been her passion and most rewarding occupational setting. She has taken continuing education classes in various topics including NDT, pediatric gait, and infant development. She has also received on-the-job training in pediatric aquatics and myofascial release. Jeane' lives in Lancaster County with her husband, 2 kids, and a black lab. In her free time, she enjoys running, reading, being outside in nature, and spending time with her family."
      ]
    },
    {
      name: 'ANGIE SIEBER',
      title: 'PTA, Clinic Manager',
      location: 'pennsylvania',
      bio: [
        "Angie graduated from Alvernia University and has been a PTA for 30 years. She has worked in a variety of settings, but her heart always pulled her back to pediatrics. Angie has her certification in introductory levels A, B and C in DMI. She has completed TASES for upper and lower extremities, has completed TMR Tots Levels 1 and 2 and several primitive reflex integration courses. She will be a certified Thera Togs fitter upon completing the Togs labs in February 2025. She studied NDT pediatric handling skills with Lois Bly in addition to many other pediatric based continuing education classes over the years. She has worked in an early intervention preschool, an inpatient rehab on the pediatric core team, ortho outpatient with student athletes, and school based PT making the move to pediatric intensive PT in 2022 when Now I Can Northeast opened a natural fit for her career.",
        "Angie is also a certified group fitness instructor and has pediatric yoga/pilates certification and Generation Pound certification. Angie also coached boys soccer for 11 years at club and travel levels.",
        "Angie lives in Lititz, PA with her husband Craig and has two grown children. Angie enjoys gardening in her spare time and loves to travel and vacation anywhere that involves a beach and is an avid seashell collector."
      ]
    },
    {
      name: 'RANDI SHENBERGER',
      title: 'Office Manager',
      location: 'pennsylvania',
      bio: [
        "Randi Shenberger is a native to Pennsylvania. She loves to travel. She has been to Africa, Costa Rica, Dominican Republic, England, Mexico, Sweden and Wales. A few of her hobbies are: reading, listening to music, drinking coffee and running. Her absolute favorite part of Now I Can is the children! She loves watching the children progress from when they first begin treatment to then witnessing the growth and changes that have been made by the end of their therapy at Now I Can! She feels it is an amazing and beautiful thing to be a part of! Randi keeps the whole Now I Can Northeast crew organized!",
        "Randi looks forward to scheduling your child for a session at Now I Can!"
      ]
    },
    {
      name: 'MELISSA CHALK',
      title: 'Managing Director',
      location: 'utah',
      bio: [
        "Melissa Chalk grew up in Vista, CA. She moved to Utah to attend BYU and stayed. She loves to read, travel, cook, sing in the car, sit on the beach, and spend time with family and friends. She is excited to be a part of the Now I Can team!",
        "Melissa has been Now I Can's Director of Operations since 2013. She brings extensive clinical management experience, as well as her special blend of magic to keep everything running smoothly. If you call, you will likely hear Melissa's cheerful voice! She helps keep patients, volunteers, and therapists' schedules on track, as well as handling all day-to-day operations and accounting.",
        "Give Melissa a call to schedule your session today!"
      ]
    },
    {
      name: 'TRACEY CHRISTENSEN',
      title: 'Executive Director, Utah and Co-Founder',
      location: 'utah',
      bio: [
        "Joel and Tracey Christensen are founders and board members of Now I Can Foundation. Tracey has been the Executive Director for most all of Now I Can's 16 years. She enjoys working with the amazing Now I Can team, cheering on our patients, and learning from their great parents.",
        "Tracey is responsible for Development, Community Outreach and Marketing. She really loves cheering on the kids and being their friend.",
        "Tracey loves sports, food, sunshine and time with family and friends!"
      ]
    },
    {
      name: 'ALLISON EBERSOLE',
      title: 'General Manager, Northeast',
      location: 'pennsylvania',
      bio: [
        "Allison Ebersole graduated from Penn State University with a BS degree in Recreation and Parks Management. She then earned her Masters Degree in Elementary Education. She is a former first grade teacher. She has always had a heart for helping children develop, grow and reach for the stars! Having a daughter with cerebral palsy, she knew first hand the time, dedication and hard work that goes into raising a child with special needs. Allison has a passion for helping special needs kids achieve their greatest potential. Her dream of opening an intensive physical therapy center has now become a reality! Her motto for the center is making miracles happen step by step!! She is excited to watch how children's lives will be positively impacted by the center."
      ]
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState('all');

  const filteredTherapists = selectedLocation === 'all' 
    ? therapists 
    : therapists.filter(therapist => therapist.location === selectedLocation);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Our Therapy Team</h1>
        <p className="text-lg mb-8">
          Meet our dedicated team of physical therapists and staff who are committed to helping children with disabilities reach their full potential.
        </p>
        
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            className={`px-4 py-2 rounded-full ${selectedLocation === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setSelectedLocation('all')}
          >
            All Locations
          </button>
          <button
            className={`px-4 py-2 rounded-full ${selectedLocation === 'utah' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setSelectedLocation('utah')}
          >
            Utah (Orem)
          </button>
          <button
            className={`px-4 py-2 rounded-full ${selectedLocation === 'pennsylvania' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setSelectedLocation('pennsylvania')}
          >
            Pennsylvania (Lititz)
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTherapists.map((therapist, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`h-3 ${therapist.location === 'utah' ? 'bg-blue-600' : 'bg-purple-600'}`}></div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center text-gray-400 text-xs">
                      Therapist Photo
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-xl font-bold mb-1">{therapist.name}</h2>
                    <p className={`text-sm font-medium mb-4 ${therapist.location === 'utah' ? 'text-blue-600' : 'text-purple-600'}`}>
                      {therapist.title}
                    </p>
                    <div className="space-y-3">
                      {therapist.bio.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 text-sm">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6">
            We're always looking for talented and passionate physical therapists and staff who are dedicated to helping children reach their full potential.
          </p>
          <Link 
            to="/contact-us" 
            className="btn bg-blue-600 text-white hover:bg-blue-700"
          >
            Contact Us About Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TherapyTeam;