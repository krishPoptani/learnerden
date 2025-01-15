import React from 'react'
import TestimonialCard from './TestimonialCard'


const testimonialData = [
  {
    name : "Vidhushi",
    position : "Student",
    testimony : "Studying with Mrs. Sonia  has been a game-changer for me. Their ability to simplify complex concepts and explain them in a way that sticks is incredible. My grades have improved significantly, and I feel much more confident in my abilities!",
    rating : 4,
  },
    {
    name : "Mukesh Roy",
    position : "Parents",
    testimony : "What sets Mr. Mukesh Sethi apart is the personalized attention they give to each student. They took the time to understand my strengths and weaknesses and tailored their teaching methods accordingly. I am so grateful for their support and guidance!",
    rating : 4,
  },
    {
    name : "Aryan Nalwa",
    position : "Student",
    testimony : "Before joining Saransh’s classes, I struggled with Maths. Thanks to their patient teaching and encouragement, I not only improved my grades but also started enjoying the subject. Highly recommend them!",
    rating : 4,
  },
    {
    name : "Uttkarsh Mittal",
    position : "Parents",
    testimony : `"Sonia” is not just a tutor but a mentor. They teach life skills along with academic knowledge, which has made a huge difference in my child's attitude toward learning and problem-solving.`  ,
    rating : 4,
  },
    {
    name : "Kanika Shukla",
    position : "Student",
    testimony : "Thanks to Mrs.Sonia I scored 95% in my recent exams. Their dedication and structured approach helped me stay on track and achieve my goals. I couldn't have done it without them!",
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