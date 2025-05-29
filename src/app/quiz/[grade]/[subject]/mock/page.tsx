'use client';

import UserDashboard from '@/routes/userside/page';
import { useParams, useRouter } from 'next/navigation';
import { useGetQuizInstructionQuery, usePostQuizStartMutation } from '../../../../../../slices/user/quizSliceUser';
import { getUserInfo } from '@/utils/user.util';

export default function MockTestPage() {
  const params = useParams();
  const grade = decodeURIComponent(params?.grade as string);
  const subject = decodeURIComponent(params?.subject as string);
  const questionIcon = '/icons/question.svg';
  const bookIcon = '/icons/book.svg';
  const clockIcon = '/icons/clock.svg';
  const gradeIcon = '/icons/grade.svg';
  const verifiedIcon = '/icons/verified.svg';
  const healthiqIcon = '/icons/healthiq_logo.svg';
  const ManThinkIcon = '/images/man_thinking.png';
  const router = useRouter();
  console.log(params?.grade, "router");

  const [postQuizStart] = usePostQuizStartMutation()
  const user = getUserInfo()
  const handleTakeTestClick = async () => {
    try {
      const payload = {
        quizId: subject,
        userId: user?.id,
        duration: 30,
      };
      const res = await postQuizStart(payload);
      console.log(res, "eeeeee");
      const attemptId = res?.data?.data?.attemptId;
      if (attemptId) {
        router.push(`/quiz/${grade}/${subject}/mock/${attemptId}`);
      } else {
        console.error("Attempt ID not found in response.");
      }
    } catch (error) {
      console.error("Failed to start quiz attempt:", error);
    }
  };

  const { data: getQuizInstruction } = useGetQuizInstructionQuery({
    quizId: subject
  })

  return (
    <UserDashboard>
      {/* <div className="container max-w-7xl mx-auto py-7"> */}
      <div className="container mx-auto px-4 py-7 max-w-7xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-secondary text-center mb-3 sm:mb-4">
          {getQuizInstruction?.data?.gradeName}
        </h1>
        <p className='text-center text-[#717171] text-sm sm:text-base'>
          Explore fun and interactive quizzes across various topics.
        </p>
        <div className="">
          <div className='flex justify-between items-center my-3 border-b border-dashed pb-5'>
            <h2 className="text-xl sm:text-2xl text-[#2E2E48] font-semibold">
              {getQuizInstruction?.data?.quizTopic}
            </h2>
            <button onClick={() => handleTakeTestClick()} className='bg-[#4A3AFF] text-white px-5 py-2 rounded-full'>Take into test</button>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
            <span className='flex items-center gap-1 sm:gap-2 text-[#595959]'>
              <img src={bookIcon} alt='book' className="w-4 sm:w-5" />
              {getQuizInstruction?.data?.subjectName}
            </span>
            <span className='flex items-center gap-1 sm:gap-2 text-[#595959]'>
              <img src={questionIcon} alt='questionIcon' className="w-4 sm:w-5" />
              {getQuizInstruction?.data?.surveySortCount} Questions
            </span>
            <span className='flex items-center gap-1 sm:gap-2 text-[#595959]'>
              <img src={clockIcon} alt='clockIcon' className="w-4 sm:w-5" />
              30 minutes
            </span>
            <span className='text-secondary flex items-center gap-2'>
              Created By:  <span className='text-black'>Admin</span>
              {/* <img className='w-[35px] sm:w-[50px]' src={healthiqIcon} alt='healthiq' /> */}
            </span>
            <span className='text-secondary flex items-center gap-2'>
              <img className='w-4 sm:w-[17px]' src={verifiedIcon} alt='verifiedIcon' />
              Verified By:
              <span className='text-black'>Admin</span>
            </span>
          </div>
        </div>
        {/* <div className='grid grid-col lg:grid-row justify-between items-start gap-8'> */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_0.3fr] justify-between items-start gap-8">
          <div>
            <p className="text-[#626279] text-sm sm:text-base font-normal mb-4 sm:mb-6 leading-relaxed">
              {getQuizInstruction?.data?.quizDescription}
            </p>

            <h4 className="text-xl font-semibold mb-2 text-[#2E2E48]">Instruction</h4>
            <ul className=" ml-5 text-lg text-[#626279]">
              {getQuizInstruction?.data?.result?.instructions?.map((value: string, index: number) => (
                <li key={index} className='relative pl-6'>
                  <span
                    className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full"
                    style={{
                      background: 'linear-gradient(to right, #3E4FBB, #C32E6B)',
                    }}
                  ></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col items-center">
            <img
              src={ManThinkIcon}
              alt="Student"
              // className="w-32 mb-4"
              style={{ width: '320px', height: '380px', maxWidth: '320px' }}
            />
            <div style={{
              background: 'linear-gradient(to right, #3E4FBB, #C32E6B)',
            }} className="text-3xl font-bold  text-white px-6 py-3 mt-9 rounded-lg">
              00 : 30 : 00
            </div>

          </div>
        </div>

      </div>
    </UserDashboard>
  );
}
