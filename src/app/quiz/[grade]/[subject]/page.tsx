'use client';

import Location from '@/component/Location';
import Pagination from '@/component/User/pagination';
import UserDashboard from '@/routes/userside/page';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useGetOneUserViewQuizDetailsQuery } from '../../../../../slices/user/quizSliceUser';
const questionIcon = '/icons/question.svg';
const bookIcon = '/icons/book.svg';
const clockIcon = '/icons/clock.svg';
const gradeIcon = '/icons/grade.svg';
const verifiedIcon = '/icons/verified.svg';
const healthiqIcon = '/icons/healthiq_logo.svg';
// type QuizPageProps = {
//     params: {
//         grade: string;
//     };
// };

export default function QuizPage() {
    const params = useParams();
    const grade = decodeURIComponent(params.grade as string);
    const subject = decodeURIComponent(params.subject as string);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const router = useRouter();
    // const [searchParams] = useSearchParams();
    // const page = parseInt(searchParams.get('page') || '1', 10);
    const searchParams = useSearchParams();
    
    const { data: getOneUserViewQuizDetails } = useGetOneUserViewQuizDetailsQuery({
        id: params?.subject
    })
    console.log(getOneUserViewQuizDetails,"getOneUserViewQuizDetails");
    
    // ✅ Correct usage - no destructuring!
    const page = parseInt(searchParams.get('page') || '1', 10);
    const totalPages = 10; // example, can be dynamic
    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };
    console.log(params, "params");
    const subjectData: {
        title: string,
        grade: string,
        subject: string,
        question: string,
        time: string
    }[] = [

            {
                title: 'Trigonometry and Geometry Quiz',
                grade: 'Grade 1',
                subject: 'Mathematics',
                question: '15 Questions',
                time: '40 minutes'
            },
            {
                title: 'Motion and Kinematics Quiz',
                grade: 'Grade 1',
                subject: 'Physics',
                question: '10 Questions',
                time: '30 minutes'
            },
            {
                title: 'Atomic Structure and Periodic Table Quiz',
                grade: 'Grade 1',
                subject: 'Chemistry',
                question: '10 Questions',
                time: '30 minutes'
            },
            {
                title: 'Probability and Statistics Quiz',
                grade: 'Grade 1',
                subject: 'Mathematics',
                question: '10 Questions',
                time: '30 minutes'
            }
        ]
    const handleGradeClick = (value: string) => {
        router.push(`/quiz/${grade}/${value}`);
    };
    const handleMockTestClick = (value: string) => {
        router.push(`/quiz/${grade}/${value}/mock`);
    }
    return (
        <UserDashboard>
            <div className="p-6 max-w-6xl mx-auto text-gray-800">
                <h1 className="text-2xl sm:text-4xl font-bold text-secondary text-center mb-3 sm:mb-4">
                    {grade}
                </h1>
                <p className='text-center text-[#717171] text-sm sm:text-base'>
                    Explore fun and interactive quizzes across various topics.
                </p>
                <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl text-[#2E2E48] font-semibold mb-2">
                        {subject}
                    </h2>

                    <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                        <span className='flex items-center gap-1 sm:gap-2 text-[#595959]'>
                            <img src={bookIcon} alt='book' className="w-4 sm:w-5" />
                            Mathematics
                        </span>
                        <span className='flex items-center gap-1 sm:gap-2 text-[#595959]'>
                            <img src={questionIcon} alt='questionIcon' className="w-4 sm:w-5" />
                            10 Questions
                        </span>
                        <span className='flex items-center gap-1 sm:gap-2 text-[#595959]'>
                            <img src={clockIcon} alt='clockIcon' className="w-4 sm:w-5" />
                            30 minutes
                        </span>
                        <span className='text-secondary flex items-center gap-2'>
                            Created By:
                            <img className='w-[35px] sm:w-[50px]' src={healthiqIcon} alt='healthiq' />
                        </span>
                        <span className='text-secondary flex items-center gap-2'>
                            <img className='w-4 sm:w-[17px]' src={verifiedIcon} alt='verifiedIcon' />
                            Verified By:
                            <span className='text-black'>Mukesh Sethi</span>
                        </span>
                    </div>
                    <p className="text-[#626279] text-sm sm:text-base font-normal mb-4 sm:mb-6 leading-relaxed">
                        This quiz assesses your understanding of fundamental algebraic concepts, including linear and quadratic equations, inequalities, polynomials, and rational expressions. You will also encounter problems related to functions, their properties, transformations, and graphical representations. Mastering these topics is essential for solving complex mathematical problems and building a strong foundation for advanced studies. Questions will test your problem-solving abilities, critical thinking, and application of algebraic principles. Whether you're reviewing for an exam or reinforcing your skills, this quiz is designed to challenge and enhance your mathematical proficiency. Prepare to tackle equations, analyze functions, and improve your algebraic fluency!
                    </p>
                    <div className="border rounded-sm border-[#E3E3E3] mb-3 sm:mb-4">
                        <div className="rounded-t px-3 py-2 sm:px-4 sm:py-2 bg-[#E3E3E3] font-semibold text-base sm:text-lg text-[#4E4E4E]">
                            1. What is the solution to the equation 2x + 5 = 15?
                        </div>
                        <div className="text-sm mt-2">
                            {['3', '5', '7', '10'].map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionSelect(option)}
                                    className='rounded px-3 py-2 flex items-center gap-2 text-[#4E4E4E]'>
                                    <span className="font-bold border border-[#D9D9D9] text-[#D9D9D9] rounded-full px-3 sm:px-4 py-1">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className="px-3 sm:px-4 py-2">
                            <button className="text-sm sm:text-base text-[#4A3AFF] font-medium">
                                Click to View Answer
                            </button>
                        </div>
                    </div>
                    {/* <Pagination currentPage={page} totalPages={totalPages} /> */}
                </div>

                <h3 className="text-xl font-semibold mb-4">Next Quiz</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subjectData.map((value, i) => (
                        <div key={i} className="p-3 sm:p-4 border border-[#D9D9D9] rounded-xl shadow cursor-pointer">
                            <h2
                                className="text-[#2E2E48] text-sm sm:text-base font-medium mb-2"
                                onClick={() => handleGradeClick(value?.title)}
                            >
                                {value?.title}
                            </h2>

                            <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-4 gap-y-2 py-1 border-b border-dashed mb-2'>
                                <div className='flex items-center gap-1 sm:gap-2'>
                                    <img className='w-4 sm:w-5' src={gradeIcon} alt='gradeIcon' />
                                    <span className='text-xs sm:text-sm text-[#595959]'>{value?.grade}</span>
                                </div>
                                <div className='flex items-center gap-1 sm:gap-2'>
                                    <img className='w-4 sm:w-5' src={bookIcon} alt='book' />
                                    <span className='text-xs sm:text-sm text-[#595959]'>{value?.subject}</span>
                                </div>
                                <div className='flex items-center gap-1 sm:gap-2'>
                                    <img className='w-4 sm:w-5' src={questionIcon} alt='questionIcon' />
                                    <span className='text-xs sm:text-sm text-[#595959]'>{value?.question}</span>
                                </div>
                                <div className='flex items-center gap-1 sm:gap-2'>
                                    <img className='w-4 sm:w-5' src={clockIcon} alt='clockIcon' />
                                    <span className='text-xs sm:text-sm text-[#595959]'>{value?.time}</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-start sm:items-center md:items-start lg:items-center mt-3 sm:mt-4 gap-3">
                                <div>
                                    <p className='text-secondary text-[10px] sm:text-xs font-medium flex items-center gap-1'>
                                        Created By: <span><img className='w-8 sm:w-[50px]' src={healthiqIcon} alt='healthiq' /></span>
                                    </p>
                                    <p className='text-secondary text-[10px] sm:text-xs font-normal flex items-center gap-1'>
                                        <img className='w-4' src={verifiedIcon} alt='verifiedIcon' />
                                        Verified By: <span className='text-black'>Mukesh Sethi</span>
                                    </p>
                                </div>
                                <div className="flex gap-2 ">
                                    <button className="text-blue-600 text-xs sm:text-sm ">Download as PDF</button>
                                    <button
                                        onClick={() => handleMockTestClick(value?.title)}
                                        className="px-3 sm:px-4 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded-full"
                                    >
                                        Take as Mock Test
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Location />
        </UserDashboard>
    );
}
