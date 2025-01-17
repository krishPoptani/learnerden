import Link from 'next/link'
import React from 'react'
const mobileIcon ="/icons/mobileIcon.svg";
const facebookIcon = "/icons/facebook.svg";
const linkedinIcon = "/icons/linkedInIcon.svg"
const twitterIcon = "/icons/twitterIcon.svg";

const Footer = () => {
  return (
    // Footer Container for background Color
    <div className='bg-[#0A142F]'>
      {/* Footer Content Container */}
        <div className='max-w-6xl mx-auto text-sm px-4'>
          <div className='text-white py-12 lg:py-20 lg:pb:8 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className="">
            <h3 className="font-sen font-semibold">Quick Links</h3>
          <div className="flex flex-col gap-2 mt-3 lg:mt-5">
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/testimonials" className="hover:text-gray-300">
              Testimonials
            </Link>
          </div>
          </div>
          <div className="">
            <h3 className='font-sen font-semibold'>Contact</h3>
            <p className="font-lato mt-3 lg:mt-5"> 105 SFS Flats Ashok Vihar Phase-3</p> 
            <p className="font-lato">New Delhi - 110054</p>
            <p className="font-lato">India</p>
            <div>

            </div>
          </div>
          <div className="lg:mt-10">
            <div className='font-lato flex flex-col gap-5'>
              <div className='flex'>
                <img src={mobileIcon} alt="Mobile Icon" />
                <span className='ml-5'>Office : 9999212132</span>
              </div>
              <div className='flex'>
                <img src={mobileIcon} alt="Mobile Icon" />
                <span className='ml-5'>Office:  9871488008</span>
              </div>
            </div>
          </div>
          </div>
            <div className="border-t border-white pb-8 lg:pb-8 max-w-5xl"></div>
            {/* Content below the line */}
            <div className='text-white py-4 lg:py-4 lg:pb-20 grid grid-cols-1 md:grid-cols-3 gap-8 lg:items-center'>
              <div className='text-2xl'>
                Global Learner Den
              </div>
              <div>
                © 2025 Developed by HealthIQ+. 
              </div>
              <div className='flex gap-3'>
                <img className='hover:cursor-pointer' src={facebookIcon} alt="Facebook Icon" />
                <img className='hover:cursor-pointer' src={linkedinIcon} alt="Linkedin Icon" />
                <img className='hover:cursor-pointer' src={twitterIcon} alt="Twitter Icon" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer