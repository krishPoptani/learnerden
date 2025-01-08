import { Button } from '@/components/ui/button';
import React from 'react';
import Card from './Card';
import CustomButton from './Button';

const Herobanner = () => {
  const teacherImg = '/images/teacherImg.png';

  return (
    <div style={{backgroundColor : "#F8FBFF"}}>
    <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-10" >
      {/* Two Column Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="flex lg:px-12 relative">
          <img
            src={teacherImg}
            alt="Teacher"
            className="w-full max-w-xs md:max-w-sm lg:max-w-sm rounded-md shadow-md"
          />
          <Card />
        </div>

        {/* Right Column - Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4 lg:leading-tight lg:tracking-tight">
            Join the Excellence Journey with Us
          </h1>
          <p className="text-lg  mb-6 md:leading-normal" style={{color :"#5F5B53"}}>
            Edmate is an online platform offering tools and courses for all ages, covering subjects like languages, mathematics, and more.
          </p>
          {/* Buttons for */}
          <div className='lg:flex lg:gap-4'>
          <CustomButton label='Are you a Tutor?' bgColor='#4A3AFF' color='#fff'></CustomButton>
          <CustomButton label='Looking for a Tutor?' bgColor='#2A497C' color='#fff'></CustomButton>
          </div>
          {/* Recent Engagement Text */}
          <div className='mt-7'>
            <h3 className='' style={{color : "#5F5B53"}}>Recent Engagement</h3>
            {/* Engagement Info */}
            <div className='lg:mt-2 flex items-center gap-10'>
              <div ><span className='lg:text-3xl font-semibold lg:mr-2'>50K</span><span style={{color : "#5F5B53"}}>Students</span></div>
              <div><span className='lg:text-3xl font-semibold lg:mr-2'>20+</span><span style={{color : "#5F5B53"}}>Subjects</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Herobanner;
