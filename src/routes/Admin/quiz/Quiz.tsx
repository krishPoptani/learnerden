'use client'
import Quizheader from '@/component/Admin/quiz/quizheader'
import QuizTable from '@/component/Admin/quiz/quiztable'
import Pagination from '@/component/Pagination/pagination'
import React, { useState } from 'react'

const AdminQuiz = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const totalRecords = 95;
  const [query, setQuery] = useState(""); 
  return (
    <div className='py-2'>
      <Quizheader query={query} setQuery={setQuery} />
      <QuizTable  />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
        totalRecords={totalRecords}
      />
    </div>
  )
}

export default AdminQuiz