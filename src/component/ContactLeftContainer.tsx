import React from 'react'

const telephoneIcon = '/icons/telephoneIcon.svg';
const emailIcon = '/icons/emailIcon.svg';
const mapIcon = '/icons/mapIcon.svg';
const twitterIcon = '/icons/twitterIcon.svg';
const instagramIcon ='/icons/instagramIcon.svg';
const discordIcon = '/icons/discordIcon.svg'

const ContactLeftContainer = () => {
  return (
    <div className='bg-[#09132D] rounded-xl'>
      <div className='px-4 pt-4 pb-4 lg:pb-4 lg:pt-8 lg:px-8 text-white'>
        <h2 className='text-xl lg:text-2xl'>Contact Information</h2>
        <p className='mt-1 lg:text-xl  text-[#C9C9C9]'>Say something to start a live chat!</p>
        <div className='flex flex-col gap-5 mt-10 lg:mt-20 lg:gap-10'>
          <div className='flex gap-4 items-start'>
            <img src={telephoneIcon} alt="Telephone Icon" />
            <span className='text-sm lg:text-base'>+1012 3456 789</span>
          </div>
          <div className='flex gap-4 items-start'>
            <img src={emailIcon} alt="Email Icon" />
            <span className='text-sm lg:text-base'>demo@gmail.com</span>
          </div>
          <div className='flex gap-4 items-start'>
            <img src={mapIcon} alt="Map Icon" />
            <span className='text-sm lg:text-base'>132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
          </div>
        </div>
        <div className='pt-8 lg:pt-20 pb-6 gap-6 flex'>
          <img src={twitterIcon} alt="TwitterIcon" />
          <img src={instagramIcon} alt="Instagram Icon" />
          <img src={discordIcon} alt="Discord Icon" />
        </div>
      </div>
    </div>
  )
}

export default ContactLeftContainer