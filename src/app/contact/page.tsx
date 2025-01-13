import ContactForm from '@/component/ContactForm'
import ContactLeftContainer from '@/component/ContactLeftContainer'
import React from 'react'

const Contact = () => {
  return (
      <div className="py-8 bg-[#FAFAFA]">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <h2 className="mx-auto font-sen text-secondary text-center font-bold text-xl lg:text-4xl">Contact Us</h2>
          <p className="max-auto text-center mt-2 text-[#717171]">Ready to book a demo? Simply fill out the form!</p>
          <div className='grid grid-cols-1 mt-20 sm:grid-cols-1 md:grid-cols-[minmax(50%,1fr)] lg:grid-cols-[500px,1fr] gap-2 lg:gap-12 items-stretch bg-white py-2'>
            {/* Left side */}
            <ContactLeftContainer />        
            {/* Right side */}
            <ContactForm />
          </div>
        </div>
      </div>
  )
}

export default Contact