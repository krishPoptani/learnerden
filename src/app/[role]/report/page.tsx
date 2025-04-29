"use client";

import ContentHeader from "@/component/Admin/contentHeader/contentHeader";
import StudentTable from "@/component/Admin/studentTable/studentTable";
import Pagination from "@/component/Pagination/pagination";
import ReportTab from "@/component/Report/reportTab/ReportTab";
import CategoryWiseTable from "@/component/Report/Table/CategoryWiseTable";
import StudentWiseTable from "@/component/Report/Table/StudentWiseTable";
import SubjectWiseTable from "@/component/Report/Table/SubjectWiseTable";
import AdminSide from "@/routes/adminside/page";
import React, { useState } from "react";

const Student = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Student-wise")
  const [categoryActiveTab, setCategoryActiveTab] = useState("Syllabus")
  const totalPages = 10;
  const totalRecords = 95;

  const handleAddQuiz = () => {
    console.log("Open Add Quiz Modal");
    // setAddQuizModal(true); // your modal logic here
  };
  return (
    <div>
      <AdminSide>
        <ContentHeader
          title="Report"
          query={query}
          setQuery={setQuery}
          buttonLabel="Export"
          onButtonClick={handleAddQuiz}
        />
        <ReportTab activeTab={activeTab} setActiveTab={setActiveTab} categoryActiveTab={categoryActiveTab} setCategoryActiveTab={setCategoryActiveTab}/>
        {activeTab==="Student-wise" && <StudentWiseTable />}
        {activeTab==="Category-wise" && <CategoryWiseTable />}
        {activeTab==="Subject-wise" && <SubjectWiseTable />}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
          totalRecords={totalRecords}
        />
      </AdminSide>
    </div>
  );
};

export default Student;