"use client";

import React, { useState } from "react";
import QuestionWrapper from "@/component/Admin/quiz/Question/QuestionWrapper/QuestionWrapper";
import QuestionStatWrapper from "@/component/Admin/quiz/Question/QuestionStatsWrapper/QuestionStatsWrapper";
import QuizInfoCard from "@/component/Admin/quiz/Question/QuizInfoCard/QuizInfoCard";
import Pagination from "@/component/Pagination/pagination";
import Modal from "@/component/Modal/Modal";
import QuestionEditor from "./QuestionEditor";
import ViewQuestionStatWrapper from "@/component/Admin/quiz/Question/ViewQuestionStatsWrapper/ViewQuestionStatsWrapper";
import ViewQuizCardWrapper from "@/component/Admin/quiz/Question/ViewQuizWrapper/ViewQuizWrapper";
import Tabs from "@/component/Tab/tab";
import UserTable from "@/component/Report/Table/UserTable";
import LogTable from "@/component/Report/Table/LogTable";

const backBtn = `/icons/backbtn.svg`;

export default function ViewQuizTab() {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const totalRecords = 95;
  const [modal, setModal] = useState<Boolean>(false);
  const [activeTab, setActiveTab] = useState("overview");
  const tabItems = [
    { label: "Overview", value: "overview" },
    { label: "User", value: "user" },
    { label: "Log", value: "log" },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

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
          Fun with Numbers: Grade 1 Math Quiz!
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mt-6 w-full mx-auto flex flex-col gap-6">
        <div className="flex justify-end gap-5">
          <Tabs
            tabs={tabItems}
            defaultActive="overview"
            onTabChange={handleTabChange}
          />
        </div>
        {activeTab === "overview" && (
          <>
            <QuizInfoCard />
            <div className="max-w-7xl flex flex-col shadow-xl gap-6 rounded-xl">
              <ViewQuestionStatWrapper />
              <div className="pb-2">
                <ViewQuizCardWrapper />
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={(newPage) => setPage(newPage)}
                  totalRecords={totalRecords}
                />
              </div>
            </div>
          </>
        )}
        {activeTab === "user" && (
          <>
            <UserTable />
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => setPage(newPage)}
              totalRecords={totalRecords}
            />
          </>
        )}

        {activeTab === "log" && (
          <>
            <LogTable />
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => setPage(newPage)}
              totalRecords={totalRecords}
            />
          </>
        )}

        {/* Pagination outside of mx-auto */}
      </div>
    </div>
  );
}
