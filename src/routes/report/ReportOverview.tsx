"use client";

import ContentHeader from "@/component/Admin/contentHeader/contentHeader";
import Pagination from "@/component/Pagination/pagination";
import Tabs from "@/component/Tab/tab";
import AdminSide from "@/routes/adminside/page";
import React, { useState } from "react";
import ActiveUsersChart from "@/component/Report/Overview/Chart/ActiveUsersChart";
import OverallChart from "@/component/Report/Overview/Chart/OverallChart";
import LogReportChart from "@/component/Report/Overview/Chart/LogReportChart";
import AssessmentsChart from "@/component/Report/Overview/Chart/AssessmentChart";
import NuggetReportChart from "@/component/Report/Overview/Chart/NuggetReportChart";

const ReportOverview = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const totalRecords = 95;
  const [activeTab, setActiveTab] = useState("overall");
  const tabItems = [
    { label: "Overall", value: "overall" },
    { label: "Log's", value: "log" },
    { label: "User Report", value: "user" },
    { label: "Content Report", value: "content" },
    { label: "Quiz", value: "quiz" },
  ];
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleAddQuiz = () => {
    console.log("Open Add Quiz Modal");
    // setAddQuizModal(true); // your modal logic here
  };
  return (
    <div>
      <AdminSide>
        <ContentHeader title="Report" showButton={false} showSearch={false} />
        <div className="pl-8">
          <Tabs
            tabs={tabItems}
            defaultActive="overview"
            onTabChange={handleTabChange}
          />
        </div>

        <div className="p-6 grid gap-6 bg-gray-50 min-h-screen max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-6  items-stretch">
            <div className="md:w-[35%]">
              <ActiveUsersChart />
            </div>
            <div className="md:w-[65%]">
              <OverallChart />
            </div>
          </div>

           <div className="flex flex-col md:flex-row gap-6  items-stretch">
            <div className="md:w-[65%]">
              <LogReportChart />
            </div>
            <div className="md:w-[35%]">
              <AssessmentsChart />
            </div>
          </div>

          

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <LogReportChart />
            </div>
            <AssessmentsChart />
          </div> */}
          <NuggetReportChart />
        </div>
      </AdminSide>
    </div>
  );
};

export default ReportOverview;
