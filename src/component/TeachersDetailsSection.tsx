import React from 'react'


import TeacherCard from './TeacherCard';

const avatar = "/images/Avatar.png"
const avatar1 = "/images/Avatar_1.png"
const avatar2 = "/images/Avatar_2.png"
const avatar3 = "/images/Avatar_3.png"

const teachers = [
  {
    teacherImg: avatar,
    rating: 4,
    numOfRatings: 120,
    teacherName: 'John Doe',
    bio: 'Teacher - upto 10th Std',
    subjects: ['JavaScript', 'React', 'Node.js'],
  },
  {
    teacherImg: avatar1,
    rating: 4,
    numOfRatings: 200,
    teacherName: 'Jane Smith',
    bio: 'Teacher - upto 10th Std',
    subjects: ['Mathematics', 'Physics'],
  },
    {
    teacherImg: avatar2,
    rating: 4,
    numOfRatings: 200,
    teacherName: 'Jane Smith',
    bio: 'Teacher - upto 10th Std',
    subjects: ['Mathematics', 'Physics'],
  },  {
    teacherImg: avatar2,
    rating: 4,
    numOfRatings: 200,
    teacherName: 'Timothy Baker',
    bio: 'Teacher - upto 10th Std',
    subjects: ['Mathematics', 'Physics'],
  },  {
    teacherImg: avatar3,
    rating: 4,
    numOfRatings: 200,
    teacherName: 'Shane Pratt',
    bio: 'Teacher - upto 10th Std',
    subjects: ['Mathematics', 'Physics'],
  },  {
    teacherImg: avatar1,
    rating: 4,
    numOfRatings: 200,
    teacherName: 'Jane Smith',
    bio: 'Teacher - upto 10th Std',
    subjects: ['Mathematics', 'Physics'],
  },  {
    teacherImg: avatar1,
    rating: 4,
    numOfRatings: 200,
    teacherName: 'Jane Smith',
    bio: 'Teacher - upto 10th Std',
    subjects: ['Mathematics', 'Physics'],
  },  {
    teacherImg: avatar1,
    rating: 4,
    numOfRatings: 200,
    teacherName: 'Jane Smith',
    bio: 'Teacher - upto 10th Std',
    subjects: ['Mathematics', 'Physics'],
  }, 
];


const TeachersDetailsSection = () => {
  return (
    <div className='bg-[#FAFAFA]'>
      <div className='mx-auto max-w-7xl py-8 px-4'>
        {/* Sections Details Page */}
        <div className='text-[#1E242C] text-center max-w-md mx-auto text-5xl leading-tight font-sen font-semibold'>Discover the Emerging Masters</div>
        <p className='text-[#414D60] mt-2 text-center max-w-lg mx-auto'>Whether you're a tutor seeking students or a learner searching for the perfect tutor, Edmate is your ultimate destination.</p>
      </div>
      <div className="mx-auto max-w-7xl pt-5 pb-20 justify-center lg:justify-start flex flex-wrap gap-6 px-4">
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} {...teacher} />
      ))}
    </div>
    </div>
  )
}

export default TeachersDetailsSection