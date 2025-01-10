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
          <h3 className='text-primary text-xl my-2 lg:my-4'>About Edmate</h3>
          <h2 className='font-sen text-3xl font-semibold my-2 lg:my-5 max-w-sm'>Inspiring Growth Through Knowledge and Connection.</h2>
          <p className='text-gray mb-5'>The rise of online learning has reshaped education, creating a generation of learners who embrace global knowledge without boundaries. Edmate connects tutors and students seamlessly, transcending time and location. Whether learning new skills or finding students, Edmate is the ultimate teaching and learning hub, offering innovative features that make the experience engaging, effective, and accessible for all.</p>
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