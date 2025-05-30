'use client';

import Location from '@/component/Location';
import UserDashboard from '@/routes/userside/page';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useGetOneUserViewQuizDetailsQuery } from '../../../../../slices/user/quizSliceUser';
import { getUserInfo } from '@/utils/user.util';

// Icons
const questionIcon = '/icons/question.svg';
const bookIcon = '/icons/book.svg';
const clockIcon = '/icons/clock.svg';
const gradeIcon = '/icons/grade.svg';
const verifiedIcon = '/icons/verified.svg';
const healthiqIcon = '/icons/healthiq_logo.svg';

interface Survey {
    id: string;
    question: string;
    answer: string[];
    correctAnswer: string;
}

export default function QuizPage() {
    const params = useParams();
    const user = getUserInfo()
    const { data: getOneUserViewQuizDetails } = useGetOneUserViewQuizDetailsQuery({
        id: params?.subject,
    });

    const surveys: Survey[] = getOneUserViewQuizDetails?.data?.result?.surveys || [];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const currentSurvey = surveys[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (currentQuestionIndex < surveys.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setShowAnswer(false);
            setSelectedOption(null);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
            setShowAnswer(false);
            setSelectedOption(null);
        }
    };
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
    return (
        <UserDashboard>
            <div className="p-6 max-w-6xl mx-auto text-gray-800">
                <h1 className="text-2xl sm:text-4xl font-bold text-secondary text-center mb-3">
                    {getOneUserViewQuizDetails?.data?.result?.gradeBoards?.name}
                </h1>
                <p className="text-center text-[#717171] text-sm sm:text-base">
                    Explore fun and interactive quizzes across various topics.
                </p>

                <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6">
                    <h2 className="text-xl sm:text-2xl text-[#2E2E48] font-semibold mb-2">
                        {getOneUserViewQuizDetails?.data?.result?.topic}
                    </h2>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-2 text-[#595959]">
                            <img src={bookIcon} alt="book" className="w-4 sm:w-5" />
                            Science
                        </span>
                        <span className="flex items-center gap-2 text-[#595959]">
                            <img src={questionIcon} alt="questionIcon" className="w-4 sm:w-5" />
                            {surveys?.length} Questions
                        </span>
                        <span className="flex items-center gap-2 text-[#595959]">
                            <img src={clockIcon} alt="clockIcon" className="w-4 sm:w-5" />
                            30 minutes
                        </span>
                        <span className="text-secondary flex items-center gap-2">
                            Created By:
                            <img className="w-[35px] sm:w-[50px]" src={healthiqIcon} alt="healthiq" />
                        </span>
                        <span className="text-secondary flex items-center gap-2">
                            <img className="w-4 sm:w-[17px]" src={verifiedIcon} alt="verifiedIcon" />
                            Verified By:
                            <span className="text-black">Mukesh Sethi</span>
                        </span>
                    </div>

                    <p className="text-[#626279] text-sm sm:text-base font-normal mb-6 leading-relaxed">
                        {getOneUserViewQuizDetails?.data?.result?.description}
                    </p>

                    {/* Survey Question */}
                    {/* If user is logged in, show question; else show locked screen */}
                    {currentSurvey && (user || currentQuestionIndex === 0) ? (
                        <div className="border rounded-sm border-[#E3E3E3] mb-4">
                            <div className="rounded-t px-4 py-2 bg-[#E3E3E3] font-semibold text-lg text-[#4E4E4E]">
                                {currentQuestionIndex + 1}. {currentSurvey.question}
                            </div>
                            <div className="text-sm mt-2 px-4">
                                {currentSurvey.answer.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(option)}
                                        className={`w-full text-left rounded px-3 py-2 flex items-center gap-2 text-[#4E4E4E] ${selectedOption === option ? 'bg-purple-100' : ''
                                            }`}
                                    >
                                        <span className="font-bold border border-[#D9D9D9] text-[#D9D9D9] rounded-full px-3 py-1">
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <div className="px-4 py-2">
                                <button
                                    onClick={() => setShowAnswer(!showAnswer)}
                                    className="text-sm sm:text-base text-[#4A3AFF] font-medium"
                                >
                                    {showAnswer ? 'Hide Answer' : 'Click to View Answer'}
                                </button>
                                {showAnswer && (
                                    <p className="mt-2 text-green-600 font-semibold">
                                        Correct Answer: {currentSurvey.correctAnswer}
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        // 🔒 Locked screen for questions 2+
                        <div className="bg-[#343434] text-white rounded-md p-6 mb-6 text-center">
                            <h2 className="text-2xl font-bold mb-2">Unlock More Quizzes!</h2>
                            <p className="text-sm mb-4">
                                Explore more quizzes and enhance your learning—upgrade your plan today!
                            </p>
                            <div className="flex justify-center gap-4">
                                {/* <button className="px-6 py-2 rounded-full bg-gray-400 hover:bg-gray-500 text-white">
                                    Cancel
                                </button>
                                <button className="px-6 py-2 rounded-full bg-[#4A3AFF] hover:bg-[#372ecc] text-white">
                                    Buy Plan
                                </button> */}
                                <a href='/login' className="px-6 py-2 rounded-full bg-[#4A3AFF] hover:bg-[#372ecc] text-white">
                                    Login
                                </a>
                            </div>
                        </div>
                    )}


                    {/* Custom Pagination Style */}
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            <button
                                onClick={handlePrev}
                                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                                disabled={currentQuestionIndex === 0}
                            >
                                &laquo;
                            </button>
                            <div className="flex gap-1 items-center mx-2">
                                {surveys.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => { setCurrentQuestionIndex(idx), setShowAnswer(false) }}
                                        className={`w-8 h-8 rounded-lg border ${idx === currentQuestionIndex
                                            ? 'bg-[#2A497C] text-white'
                                            : 'hover:bg-purple-100 border-[#F1F1F1]'
                                            }`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                                disabled={currentQuestionIndex === surveys.length - 1}
                            >
                                &raquo;
                            </button>
                        </div>

                        <button
                            onClick={handleNext}
                            className="px-9 py-2 rounded-full bg-f4a text-white disabled:opacity-50"
                            disabled={currentQuestionIndex === surveys.length - 1}
                        >
                            Next
                        </button>
                    </div>
                    {/* <h3 className="text-xl font-semibold mb-4">Next Quiz</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {subjectData.map((value, i) => (
                            <div key={i} className="p-3 sm:p-4 border border-[#D9D9D9] rounded-xl shadow cursor-pointer">
                                <h2
                                    className="text-[#2E2E48] text-sm sm:text-base font-medium mb-2"
                                // onClick={() => handleGradeClick(value?.title)}
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
                                            // onClick={() => handleMockTestClick(value?.title)}
                                            className="px-3 sm:px-4 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded-full"
                                        >
                                            Take as Mock Test
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
            <Location />
        </UserDashboard>
    );
}
