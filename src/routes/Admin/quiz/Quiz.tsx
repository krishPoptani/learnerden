'use client'
import Quizheader from '@/component/Admin/quiz/quizheader'
import QuizTable from '@/component/Admin/quiz/quiztable'
import Pagination from '@/component/Pagination/pagination'
import React, { useState } from 'react'
import AddQuizModal from './AddQuiz'

const AdminQuiz = () => {
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const totalRecords = 95;
  const [query, setQuery] = useState(""); 
  const [addQuizModal , setAddQuizModal]  = useState(false)
  return (
    <div className='py-2'>
      <Quizheader query={query} setQuery={setQuery} setAddQuizModal={setAddQuizModal} />
      <QuizTable  />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
        totalRecords={totalRecords}
      />
      {addQuizModal && <AddQuizModal setAddQuizModal={setAddQuizModal}/>}
    </div>
  )
}

export default AdminQuiz