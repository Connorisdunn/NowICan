import React from 'react';

const BoardOfDirectors = () => {
  const boardMembers = [
    {
      name: 'JOEL AND TRACEY CHRISTENSEN',
      bio: "Joel and Tracey Christensen are the founders of Now I Can Foundation. Both Joel and Tracey graduated from Brigham Young University. They have three children and enjoy spending time together as a family and doing home renovation projects."
    },
    {
      name: 'LARRY MCFERSON',
      bio: "Larry McFerson is a Financial Accountant, working at Brigham Young University. He is a graduate of Accounting from BYU and earned an MBA with an Accounting Emphasis from Utah State University. He grew up in Clearfield, UT, but has lived in Utah County for many years, and now lives in American Fork. He was recently married to Sarah, his eternal love, and they are looking forward to having a family together. He has more interests and hobbies than he has time and money to support. He loves anything BYU, anything athletic, and anything with the arts. He loves music, all-things Disney, and tries to stay active. He is grateful to Now I Can's \"Run to Walk,\" which is the first 5K he ever ran. He has done many races since (and has only missed one Now I Can race)."
    },
    {
      name: 'JOHN LIVINGSTON',
      bio: "John P. Livingstone is a Canadian who came to BYU in 1998 following his service as President of the Michigan Detroit Mission. John and his wife Linda are the parents of six daughters and one son and an ever-growing number of grandchildren. He began employment with the Church Educational System in 1972 and is a retired Associate Professor of Church History and Doctrine. He serves as a sealer in the Provo Temple currently. John is a past president of the Association of Mormon Counselors and Psychotherapists (AMCAP). John and Linda became Americans in May of 2005."
    },
    {
      name: 'NEIL LEBARON',
      bio: "Neil LeBaron has owned LeBaron & Associated, Inc., a Utah advertising agency for forty-five years. He has served on the executive board and as the vice president of American Indian Services for over twenty years. It is a 501 (C) (3) corporation providing scholarships for Native Americans. Neil has also served several missions for the Church of Jesus Christ of Latter-day Saints in Australia, Texas, and Utah including two educational service missions and a Humanitarian Service Mission which benefited non-profit walk-in clinics, community gardens, the education of school children and adults, homeless shelters, women's shelters, ESL education, and private schools. Neil married Ruth Ann Adams in 1971. Together they have eight children, thirty-six grandchildren and one great granddaughter."
    },
    {
      name: 'REBECCA SWINDLE',
      bio: "Rebecca is a native to Utah County. She spent much of her youth outdoors with her family working in a large yard, playing sports, or exploring the backside of Mt. Timpanogos. In her teens, she participated in many sports with most of her efforts being focused on Track and Field as a high jumper. After completing a mission for The Church of Jesus Christ of Latter-Day Saints in Montreal, Quebec, Rebecca received her Bachelor's Degree in Mass Media Communications from Brigham Young University. She married Seth Franklin Swindle and they enjoy being parents of five children. She has spent a joyful amount of time raising their kids! Rebecca has enjoyed working with groups ranging from a few people to thousands in schools, community activities, non-profits, and church settings. Currently, she is a real estate professional along the Wasatch Front in Utah and has found a lot of joy serving as a board member for the Timpanogos Storytelling Festival and the Now I Can Foundation."
    },
    {
      name: 'LIZ LIVINGSTON',
      bio: "Liz Livingston is the mother of seven children. She graduated in Secondary and Special Education from BYU and has a particular interest in all things that impact children and the family. She has taught French, music and special education seminary. Liz enjoys partnering with her husband, Lane, in a small real estate business. She also loves to help literacy flourish in her \"Friendship Library Project.\" She is so grateful to be involved with the nurturing of the exciting physical growth and joy that happens at Now I Can!"
    },
    {
      name: 'MELISSA CHALK',
      bio: "Melissa Chalk grew up in Vista, CA. She moved to Utah to attend BYU and stayed. She loves to read, travel, cook, sing in the car, sit on the beach, and spend time with family and friends. She is happy to be a part of the Now I Can team!"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom mx-auto px-4">
        <h1 className="text-4xl font-bold font-heading mb-6">Board of Directors</h1>
        <p className="text-lg mb-8">
          Meet the dedicated individuals who guide our organization and help us fulfill our mission of helping children with disabilities reach their full potential.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-xl font-bold mb-4">{member.name}</h2>
                    <div className="bg-gray-100 w-full h-48 rounded-lg flex items-center justify-center text-gray-400 mb-4">
                      Board Member Photo
                    </div>
                    <p className="text-gray-700">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-6">
            Our board members volunteer their time and expertise to help Now I Can Foundation fulfill its mission. We are grateful for their dedication and service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;