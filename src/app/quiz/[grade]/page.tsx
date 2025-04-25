// app/quiz/[grade]/page.tsx
"use client"
import UserDashboard from '@/routes/userside/page';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
const questionIcon = '/icons/question.svg';
const bookIcon = '/icons/book.svg';
const clockIcon = '/icons/clock.svg';
const gradeIcon = '/icons/grade.svg';
const verifiedIcon = '/icons/verified.svg';
const healthiqIcon = '/icons/healthiq_logo.svg';
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const grade = decodeURIComponent(params.grade as string);
  const handleGradeClick = (value: string) => {
   router .push(`/quiz/${grade}/${value}`);
  };

  // Populate state from URL or use default
  const [subject, setSubject] = useState(searchParams.get('subject') || 'Mathematics');
  const [syllabus, setSyllabus] = useState(searchParams.get('syllabus') || 'CBSE');
  const [gradeLevel, setGradeLevel] = useState(searchParams.get('gradeLevel') || 'Grade 1');
  const [sort, setSort] = useState(searchParams.get('sort') || 'Newest');

  const handleSearch = () => {
    const query = new URLSearchParams({
      subject,
      syllabus,
      gradeLevel,
      sort,
    });

    router.push(`/quiz/${grade}?${query.toString()}`);
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
  // Optional: Sync state when URL changes (e.g., back/forward browser buttons)
  useEffect(() => {
    setSubject(searchParams.get('subject') || 'Mathematics');
    setSyllabus(searchParams.get('syllabus') || 'CBSE');
    setGradeLevel(searchParams.get('gradeLevel') || 'Grade 1');
    setSort(searchParams.get('sort') || 'Newest');
  }, [searchParams]);
  const handleMockTestClick = (value: string) => {
    router.push(`/quiz/${grade}/${value}/mock`);
  };

  return (
    <UserDashboard>
      <div className="container max-w-7xl mx-auto py-7">
        <h1 className="text-4xl font-bold text-secondary text-center mb-4">
          {grade}
        </h1>
        <p className='text-center text-[#717171]'>Explore fun and interactive quizzes across various topics.</p>

        {/* Filter Box */}
        <div className="bg-white border border-[#D9D9D9] p-5 rounded-xl shadow my-8">
          <p className='text-[#34364A] font-medium mb-3'>Filter By:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className='grid'>
              <label className='text-[#4E4E4E] text-sm mb-2'>Subject</label>
              <select className="border text-[#4E4E4E] text-sm p-2 rounded-xl" value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
              </select>
            </div>
            <div className='grid'>
              <label className='text-[#4E4E4E] text-sm mb-2'>Syllabus</label>
              <select className="border text-[#4E4E4E] text-sm p-2 rounded-xl" value={syllabus} onChange={(e) => setSyllabus(e.target.value)}>
                <option>CBSE</option>
                <option>ICSE</option>
              </select>
            </div>
            <div className='grid'>
              <label className='text-[#4E4E4E] text-sm mb-2'>Grade</label>
              <select className="border text-[#4E4E4E] text-sm p-2 rounded-xl" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)}>
                <option>Grade 1</option>
                <option>Grade 2</option>
              </select>
            </div>
            <div className='grid'>
              <label className='text-[#4E4E4E] text-sm mb-2'>Sort by</label>
              <select className="border text-[#4E4E4E] text-sm p-2 rounded-xl" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="mt-4 py-2 bg-[#4A3AFF] font-semibold rounded-full text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </div>


        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjectData.map((value, i) => (
            <div key={i} className="p-4  border border-[#D9D9D9]  rounded-xl shadow cursor-pointer">
              <h2 className="text-[#2E2E48] text-base font-medium mb-2" onClick={() => handleGradeClick(value?.title)}>{value?.title}</h2>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-4 grid-cols-2 py-1 border-b border-dashed mb-2'>
                <div className='flex items-center gap-2'>
                  <img src={gradeIcon} alt='gradeIcon' />
                  <span className='text-sm text-[#595959] font-normal'>{value?.grade}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={bookIcon} alt='book' />
                  <span className='text-sm text-[#595959] font-normal'>{value?.subject}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={questionIcon} alt='questionIcon' />
                  <span className='text-sm text-[#595959] font-normal'>{value?.question}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={clockIcon} alt='clockIcon' />
                  <span className='text-sm text-[#595959] font-normal'>{value?.time}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className='text-secondary text-xs font-medium flex items-center gap-2'>Created By: <span><img className='w-[50px]' src={healthiqIcon} alt='healthiq' /></span></p>
                  <p className='text-secondary text-xs font-normal flex items-center gap-2'><img className='w-[17px]' src={verifiedIcon} alt='verifiedIcon' /> Verified By: <span className='text-black '>Mukesh Sethi</span></p>
                </div>
                <div>
                  <button className="text-blue-600 px-2">Download as PDF</button>
                  <button onClick={()=>handleMockTestClick(value?.title)} className="px-4 py-1 text-sm bg-blue-600 text-white rounded-full">Take as Mock Test</button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjectData.map((value, i) => (
            <div key={i} className="p-3 sm:p-4 border border-[#D9D9D9] rounded-xl shadow cursor-pointer">
              <h2
                className="text-[#2E2E48] text-sm sm:text-base font-medium mb-2"
                onClick={() => handleGradeClick(value?.title)}
              >
                {value?.title}
              </h2>

              <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-y-2 py-1 border-b border-dashed mb-2'>
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

        <div className="mt-6 flex justify-end">
          <button className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300">Next</button>
        </div>
      </div>
    </UserDashboard >

  );
}
