import Location from '@/component/Location'
import TestimonialSection from '@/component/TestimonialSection'
import React from 'react'

const Testimonial = () => {
  return (
        <div className="pt-8">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="mx-auto font-sen text-secondary text-center font-bold text-xl lg:text-4xl">Testimonials</h2>
        <p className="max-auto text-center mt-2 text-[#717171]">Real Stories, Real Success.</p>
        <TestimonialSection />
        </div>
        <Location />
        </div>
  )
}

export default Testimonial