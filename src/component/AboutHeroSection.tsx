import React from 'react'

const coolKid = "/images/cool-kid2.png"
const AboutHeroSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
      {/* Left Container */}
      <div className='max-w-xl translate-y-8'>
        <h4 className='font-sen text-[#34364A] text-xl lg:text-3xl font-semibold'>Begin Your Learning Journey with Global Learner Den</h4>
        <p className='text-[#34364A] mt-2 lg:mt-3 '>Welcome to Global Learner Den, where every student’s potential is nurtured to shine. Co-founded by Hemant Kumar Setya and Saransh Rai, our mission is to redefine education by fostering a community that inspires confidence, resilience, and a lifelong love for learning.In collaboration with Global Learner Den, we’ve created more than just a coaching center—we’ve built a place where students can thrive academically and personally. Specializing in the IB (MYP/DP) and Cambridge (IGCSE) curricula, we take a personalized approach to education that goes beyond textbooks and exams.Our goal is to help students excel academically while equipping them with the critical thinking skills and global perspective needed to succeed in today’s fast-changing world. At Global Learner Den, we’re not just preparing students for exams; we’re preparing them for life.Join us on this journey to unlock potential, ignite curiosity, and shape the leaders of tomorrow.</p>
      </div>
      <div className='my-8 lg:my-0'>
      <img className="h-100 object-contain" src={coolKid} alt="Cool Kid" />
      </div>
    </div>
  )
}

export default AboutHeroSection