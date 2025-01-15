import React from 'react'

const coolKid = "/images/cool-kid2.png"
const AboutHeroSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
      {/* Left Container */}
      <div className='max-w-xl translate-y-8'>
        <h4 className='font-sen text-[#34364A] text-xl lg:text-3xl font-semibold'>Begin Your Learning Journey with Global Learner Den</h4>
        <p className='text-[#34364A] mt-2 lg:mt-3 '>In today’s digital age, online learning has become the standard, offering instant access to a wealth of knowledge once limited to libraries and traditional classrooms.Global Learner Den is the ideal platform for both students and tutors. Tutors can set their own rates, create flexible schedules, and teach as many or as few students as they prefer. Getting started is quick, simple, and convenient.For students, Global Learner Den offers access to expert tutors in various subjects, ensuring personalized support for your learning needs.As a trusted online learning and teaching platform, Global Learner Den connects tutors and learners across India in a secure and supportive environment, delivering the highest quality education and training.</p>
      </div>
      <div className='my-8 lg:my-0'>
      <img className="h-100 object-contain" src={coolKid} alt="Cool Kid" />
      </div>
    </div>
  )
}

export default AboutHeroSection