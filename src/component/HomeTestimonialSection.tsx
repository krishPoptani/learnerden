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
    name: 'Vidhushi',
    bio: 'Student',
    testimony : "Studying with Mrs. Sonia has been a game-changer for me. Their ability to simplify complex concepts and explain them in a way that sticks is incredible. My grades have improved significantly, and I feel much more confident in my abilities!"
  },
  {
    avatar: avatar4,
    name: 'Mukesh Roy',
    bio: 'Parents',
    testimony :"What sets Mr. Mukesh Sethi apart is the personalized attention they give to each student. They took the time to understand my strengths and weaknesses and tailored their teaching methods accordingly. I am so grateful for their support and guidance!"
  },
    {
    avatar: avatar4,
    name: 'Aryan Nalwa',
    bio: 'Student',
    testimony : "Before joining Saransh’s classes, I struggled with Maths. Thanks to their patient teaching and encouragement, I not only improved my grades but also started enjoying the subject. Highly recommend them!"
  },
      {
    avatar: avatar4,
    name: 'Uttkarsh Mittal',
    bio: 'Parents',
    testimony : `"Sonia” is not just a tutor but a mentor. They teach life skills along with academic knowledge, which has made a huge difference in my child's attitude toward learning and problem-solving.`
  },
];

const HomeTestimonialSection = () => {
  return (
    <div className='max-w-7xl px-4 mx-auto'>
      {/* Testimonial Header */}
      <div className="">
        <h3 className='mt-6 text-secondary font-[500]'>- TESTIMONIALS</h3>
        <p className='mt-2 text-2xl font-semibold'>Don't take our word for it</p>
      </div>
      <Carousel>
        <CarouselContent className='py-8 my-8'>
        {testimonials.map((testimonial, index) => (
          <CarouselItem 
          key={index} 
          className="basis-full sm:basis-1/2 md:basis-1/3"
        >
          <HomeTestimonialCard {...testimonial} />
        </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious className='hidden lg:inline-block'/>
      <CarouselNext className='hidden lg:inline-block' /> */}
    </Carousel>
    </div>
  )
}

export default HomeTestimonialSection