"use client";

import ContentHeader from "@/component/Admin/contentHeader/contentHeader";
import StudentTable from "@/component/Admin/studentTable/studentTable";
import Pagination from "@/component/Pagination/pagination";
import AdminSide from "@/routes/adminside/page";
import React, { useState } from "react";

const Student = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
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
          title="Registered User(Students)"
          query={query}
          setQuery={setQuery}
          buttonLabel="Add Student"
          onButtonClick={handleAddQuiz}
        />
        <StudentTable role={"student"}/>
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
