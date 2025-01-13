import React from 'react'
import TestimonialCard from './TestimonialCard'


const testimonialData = [
  {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },
    {
    name : "Maxin Will",
    position : "Parents",
    testimony : "Excellent Tutions has been a game-changer for my daughter’s education. The platform has a wide range of subjects and teachers to choose from, and the classes are interactive and engaging. Highly recommended!",
    rating : 4,
  },

]

const TestimonialSection = () => {
  return (
    <div className="flex justify-center flex-wrap gap-6 p-4 lg:gap-10 mt-5 lg:mt-7">
      {testimonialData.map((testimony, ind) => (
        <TestimonialCard
          key={ind}
          name={testimony.name}
          position={testimony.position}
          testimony={testimony.testimony}
          rating={testimony.rating}
        />
      ))}
    </div>
  )
}

export default TestimonialSection