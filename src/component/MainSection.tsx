import React from 'react'
import CustomButton from './Button'

const coolKid="/images/cool-kid.png"
const openBookImg = '/images/Open-Book.png';
const paperAeroplane = "/images/paper-Aeroplane.png";
const MainSection = () => {
  return (
    <div className='container max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-10'>
      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Container */}
        <div className='max-w-lg mx-auto'>
          <h3 className='text-primary text-xl my-2 lg:my-4'>About Global Learner Den</h3>
          <h2 className='font-sen text-3xl font-semibold my-2 lg:my-5 max-w-sm'>Inspiring Growth Through Knowledge and Connection.</h2>
          <p className='text-gray mb-5'>Welcome to Global Learner Den, where we believe every student has the potential to shine. More than just a coaching centre, we are a community dedicated to nurturing confidence, resilience, and a lifelong love for learning.
Specializing in IB (MYP/ DP) and Cambridge (IGCSE) curricula, we offer a personalized approach that helps students not only excel academically but also develop the critical thinking and global perspective needed to succeed in today’s dynamic world.
</p>
          <CustomButton label="Learn More" bgColor='secondary' color='#fff' />  
        </div>
        {/* Right Container */}
        <div className='relative'>
          <img src={coolKid} alt="Student Image" />
          <img className="absolute top-[20%] right-[20%]" src={openBookImg} alt="Book Image" />
          <img className="absolute top-[75%] left-[18%]" src={paperAeroplane} alt="Paper Aeroplane" />
        </div>
      </div>
    </div>
  )
}

export default MainSection