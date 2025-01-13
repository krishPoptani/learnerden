import React from 'react'
import AboutCard2 from './AboutCard2';

const experienceIcon = "/icons/experienceIcon.svg";
const educationIcon = "/icons/educationIcon.svg";
const certificateIcon = "/icons/certificateIcon.svg";

const aboutPageData = [
  {
    icon: experienceIcon,
    title: "Experience",
    description: "While books and friends can be helpful, they don't always offer the depth and clarity that experienced tutors can. With Edmate’s expert tutors, you gain in-depth knowledge and a strong understanding. Our skilled teachers provide invaluable support, ensuring a richer learning experience for students."
  },
  {
    icon: educationIcon,
    title: "Education",
    description: "Many students face challenges while studying. Our tutors at Edmate bring effective teaching styles, deep knowledge, engaging methods, and patience. Moreover, experienced tutors foster strong relationships with their students, ensuring a positive and productive learning experience."
  },
    {
    icon: certificateIcon,
    title: "Certificate",
    description: "We’ve created a more comprehensive learning experience for both students and tutors. Along with gaining knowledge, you’ll receive certificates for completed courses or teaching sessions with Edmate, helping to boost your growth and enhance your career prospects."
  },
];


const AboutWhyChoose = () => {
  return (
    <div className='bg-[#2447F9]'>
      <div className='mx-auto max-w-7xl px-4 pt-4 lg:pt-8'>
        <h4 className='font-sen pt-4 lg:pt-8 text-center text-white lg:text-4xl font-medium '>Why Choose Edmate for Learning?</h4>
      </div>
      <div className="mx-auto max-w-7xl pt-6 lg:pt-10 px-4 pb-16 lg:pb-20 flex items-stretch gap-4">
      {aboutPageData?.map((card, ind) => (
            <AboutCard2
              key={ind}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
      </div>
    </div>
  )
}

export default AboutWhyChoose