import React from 'react'
import AboutCard2 from './AboutCard2';

const experienceIcon = "/icons/experienceIcon.svg";
const educationIcon = "/icons/educationIcon.svg";
const certificateIcon = "/icons/certificateIcon.svg";



const aboutPageData = [
  {
    icon: experienceIcon, // Replace with the appropriate success icon variable
    title: "Proven Success",
    description: "Our students consistently achieve exceptional results, with a 95% success rate in meeting their academic goals.",
  },
  {
    icon: educationIcon, // Replace with the appropriate tailored learning icon variable
    title: "Tailored Learning",
    description: "Each lesson is customized to the individual, ensuring that every student feels seen, heard, and supported.",
  },
  {
    icon: educationIcon, // Replace with the appropriate holistic development icon variable
    title: "Holistic Development",
    description: "Beyond grades, we focus on fostering essential skills such as creativity, problem-solving, and self-confidence.",
  },
  {
    icon: certificateIcon, // Replace with the appropriate caring environment icon variable
    title: "Caring Environment",
    description: "At Global Learner Den, students are not just learners—they are part of a family that celebrates their growth and achievements.",
  },
];



const AboutWhyChoose = () => {
  return (
    <div className='bg-[#2447F9]'>
      <div className='mx-auto max-w-7xl px-4 pt-4 lg:pt-8'>
        <h4 className='font-sen pt-4 lg:pt-8 text-center text-white text-2xl lg:text-4xl font-medium '>Why Choose Global Learner Den for Learning?</h4>
      </div>
      <div className="mx-auto max-w-7xl pt-6 lg:pt-10 px-4 pb-16 lg:pb-20 flex flex-col lg:flex-row items-stretch gap-4">
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