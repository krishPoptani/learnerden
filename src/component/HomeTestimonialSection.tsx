import { Carousel, CarouselContent, CarouselItem,   CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import Card from './Card'
import HomeTestimonialCard from './HomeTestimonialCard'

const avatar = "/images/Avatar.png"
const avatar1 = "/images/Avatar_1.png"
const avatar2 = "/images/Avatar_2.png"
const avatar3 = "/images/Avatar_3.png"
const avatar4 = "/images/Avatar_4.png"

const testimonials = [
  {
    avatar: avatar4,
    name: 'John Doe',
    bio: 'Web Developer at Tech Company',
    testimony : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident"
  },
  {
    avatar: avatar4,
    name: 'Jane Smith',
    bio: 'Graphic Designer and Illustrator',
    testimony :"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident"
  },
    {
    avatar: avatar4,
    name: 'Jane Smith',
    bio: 'Graphic Designer and Illustrator',
    testimony : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident"
  },
      {
    avatar: avatar4,
    name: 'Jane Smith',
    bio: 'Graphic Designer and Illustrator',
    testimony : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident"
  },
];

const HomeTestimonialSection = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      {/* Testimonial Header */}
      <div className="">
        <h3 className='mt-6 text-secondary font-[500]'>- TESTIMONIALS</h3>
        <p className='mt-2 text-2xl font-semibold'>Don't take our word for it</p>
      </div>
      <Carousel>
        <CarouselContent className='py-8 my-8'>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="basis-1/3"><HomeTestimonialCard  {...testimonial} /></CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default HomeTestimonialSection