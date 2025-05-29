"use client";

import React, { useState } from "react";
import QuestionWrapper from "@/component/Admin/quiz/Question/QuestionWrapper/QuestionWrapper";
import QuestionStatWrapper from "@/component/Admin/quiz/Question/QuestionStatsWrapper/QuestionStatsWrapper";
import QuizInfoCard from "@/component/Admin/quiz/Question/QuizInfoCard/QuizInfoCard";
import Pagination from "@/component/Pagination/pagination";
import Modal from "@/component/Modal/Modal";
import QuestionEditor from "./QuestionEditor";
import { useGetOneQuizQuery, useGetQuizByIdQuery } from "../../../../slices/QuizSlice";

const backBtn = `/icons/backbtn.svg`;

export default function QuizCreationTab() {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const totalRecords = 95;
  const { data, isLoading, error, refetch } = useGetQuizByIdQuery('e329ac7f-68e2-4e7a-a5e8-2c7c5409c7f4');
  const { data : quizCourseData, error : quizCourseError, isLoading : quizCourseLoading } = useGetOneQuizQuery({
    id : 'e329ac7f-68e2-4e7a-a5e8-2c7c5409c7f4',
    offset: 1,
    limit: 10,
  });

  const [modal, setModal] = useState<Boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);



  return (
    <div className="bg-white flex flex-col h-screen z-[9999]">
      {/* Sticky Header */}
      <div
        className="w-full py-7 flex-shrink-0 text-white"
        style={{ background: "linear-gradient(to right, #3E4FBB, #C32E6B)" }}
      >
        <div className="max-w-7xl w-full mx-auto flex items-center justify-start px-4 text-2xl">
          <span className="mr-4 cursor-pointer">
            <img src={backBtn} alt="Back Btn" />
          </span>
          Add Quiz
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mt-6 w-full mx-auto flex flex-col gap-6">
        {/* <div className="flex justify-end gap-5">
          <button className="border-none cursor-pointer min-w-[160px] text-white bg-[#981C51] rounded-full py-2">
            Quiz Verification
          </button>
          <button className="border-none cursor-pointer min-w-[160px] text-white bg-[#4F4AB0] rounded-full py-2">
            Publish
          </button>
        </div> */}
        <QuizInfoCard quizCourseData={quizCourseData} />
        <div className="max-w-7xl flex flex-col shadow-xl gap-6 rounded-xl pb-2">
          {/* <QuestionStatWrapper /> */}
          <div className="pb-2">
            <QuestionWrapper setModal={setModal} questions={data?.data?.result} setSelectedQuestion={setSelectedQuestion} refetch={refetch}/>
            {/* <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => setPage(newPage)}
              totalRecords={totalRecords}
            /> */}
          </div>
        </div>

        {/* Pagination outside of mx-auto */}
      </div>
      {modal && (
        <Modal
          header="Edit Question 1"
          width="720px"
          onClose={() => setModal(false)}
        >
          <QuestionEditor selectedQuestion={selectedQuestion} refetch={refetch}/>
        </Modal>
      )}
    </div>
  );
}
