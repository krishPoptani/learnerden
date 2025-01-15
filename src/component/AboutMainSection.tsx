import React from 'react'
import AboutCard from './AboutCard';


const acheivementIcon = "/icons/acheivementIcon.svg";
const bookIcon3 = "icons/bookIcon3.svg";

const aboutPageData = [
  {
    icon: acheivementIcon,
    title: "Learn from Certified Tutors Only",
    description: "Some subjects and concepts are best understood through the guidance and expertise of certified tutors. That’s where Global Learner Den makes the difference."
  },
  {
    icon: bookIcon3,
    title: "Learn Anytime, Anywhere – Your Choice, Your Convenience",
    description: "Online learning has no limits. So why wait? Sign up today and start your learning journey with Global Learner Den. Learn from the comfort of your own space, anytime, anywhere!"
  },
];

const AboutMainSection = () => {
  return (
    <>
    <div className='mt-5 lg:mt-10'>
      <div className='mx-auto font-sen text-[#34364A] text-center font-bold text-2xl lg:text-4xl'>
        <h2>Why Choose Global Learner Den for Learning?</h2>
      </div>
    </div>
      <div className="my-5 lg:my-8 flex flex-col lg:flex-row items-stretch gap-4 px-5">
        {aboutPageData?.map((card, ind) => (
          <AboutCard
            key={ind}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  )
}

export default AboutMainSection