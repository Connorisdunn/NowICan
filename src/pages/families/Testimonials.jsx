import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
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
    },
    {
      id: 5,
      family: "Allison & Troy Ebersole, Schaefferstown, PA",
      content: "Now I Can has changed our daughter, Lauren's life! We found Now I Can by divine intervention, literally. When we booked Lauren's first session, we were not exactly sure what to expect, but we knew we were meant to get her there for treatment! The type of treatment Lauren was receiving was new to us. We were intrigued by the various methods, models and techniques the physical therapists used with Lauren. The Suit, Spider Cage and vibration plate were brand new to us. Lauren enjoys using them in her intensive sessions! The magical gift of time allows Lauren to do things in PT that she would never have time to do in traditional therapy. The gains we saw within the first week in her flexibility, mobility and confidence alone are amazing! Each summer she looked forward to her intensive sessions in Utah. The staff at Now I Can are caring, fun, knowledgeable, warm and welcoming. We were so inspired by what we experienced at Now I Can in Utah, we decided to partner with Now I Can to bring a facility to the east coast so that other families can experience the transformation therapy found at Now I Can.",
      child: "Lauren",
      highlighted: true
    },
    {
      id: 6,
      family: "Johnson Family",
      content: "Now I Can has been an absolute miracle for our family. Never do we have as much hope for the future or see as much progress as we do after completing one session with Now I Can. Their entire staff is so friendly and they make therapy so much fun that my son loves going! We drive all the way from California every year to do a session because we believe in it so much. Thank you Now I Can for changing lives and making the impossible, possible!",
      child: null,
      highlighted: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.highlighted);
  const otherTestimonials = testimonials.filter(t => !t.highlighted);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Family Testimonials</h1>
        
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Real Stories from Our Families</h2>
            <p className="text-lg mb-6">
              At Now I Can, we measure our success by the progress of our patients and the joy of their families. 
              We invite you to read about the experiences of families who have participated in our therapy programs 
              and witness the life-changing impact intensive therapy can have.
            </p>
            <p className="text-lg">
              These testimonials come directly from parents whose children have received therapy at our facilities. 
              Each child's journey is unique, and results vary based on individual circumstances, but we're proud of 
              the positive experiences shared by our Now I Can families.
            </p>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTestimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-blue-50 rounded-lg shadow-md p-8 border border-blue-100">
                <div className="mb-6">
                  <p className="text-lg italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-bold">— {testimonial.family}</p>
                  {testimonial.child && (
                    <p className="text-blue-600">{testimonial.child}'s Journey</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">More Family Experiences</h2>
          <div className="space-y-6">
            {otherTestimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <p className="text-lg italic">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-bold">— {testimonial.family}</p>
                  {testimonial.child && (
                    <p className="text-blue-600">{testimonial.child}'s Journey</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Colby's Story</h2>
            <p className="text-lg mb-4">
              Colby Christensen, the daughter of Now I Can founders Joel and Tracey Christensen, was the inspiration 
              behind our foundation. Diagnosed with Hemiplegic Cerebral Palsy as a baby, Colby's journey with intensive 
              therapy led to remarkable progress that traditional therapy alone couldn't provide.
            </p>
            <p className="text-lg mb-4">
              "If your child has a neuromuscular disorder like me, you've probably spoken to surgeons and watched helplessly 
              as your child went through intervention after intervention. When I was small that's how it went for me—but 
              introducing intensive physical therapy into my life changed all that. I just kept making progress which meant 
              I didn't need as many surgeries and interventions. Instead of spending my time recovering from surgery, or in therapy, 
              I became an active teenager. I made the cheerleading team, I went to football games with friends and walked up and 
              down the bleachers, and I eventually attended college fully able to walk across campus on my own."
            </p>
            <p className="text-lg italic text-center mt-6">
              "The intensive physical therapy I received as a child at Now I Can boosted my ability and impacted my life 
              in many wonderful ways. I'm so glad my parents didn't settle for 'average' therapy, but instead they searched 
              for MORE and they gave me MORE at Now I Can."
            </p>
            <p className="text-gray-700 font-bold text-right mt-4">
              — Colby Christensen
            </p>
            <div className="flex justify-center mt-6">
              <Link 
                to="/about-us/our-story" 
                className="btn bg-blue-600 text-white hover:bg-blue-700"
              >
                Read Colby's Full Story
              </Link>
            </div>
          </div>
        </section>
        
        <section>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
            <p className="text-lg mb-6">
              Has your family experienced the Now I Can difference? We would love to hear about your child's progress 
              and journey with us. Sharing your story can inspire other families who are considering intensive therapy 
              for their children.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/for-families/getting-started/free-consultation" 
                className="btn bg-gray-600 text-white hover:bg-gray-700 px-6 py-3"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/contact-us" 
                className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-3"
              >
                Contact Us to Share Your Story
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;