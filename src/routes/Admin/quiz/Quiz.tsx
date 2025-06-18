'use client'
import Quizheader from '@/component/Admin/quiz/quizheader'
import QuizTable from '@/component/Admin/quiz/quiztable'
import Pagination from '@/component/Pagination/pagination'
import React, { useState } from 'react'
import AddQuizModal from './AddQuiz'
import { useGetQuizDetailsQuery } from '../../../../slices/admin/QuizSlice'

const AdminQuiz = () => {
  const [page, setPage] = useState(1);
  const { data: getQuizDetails } = useGetQuizDetailsQuery({
    offset: page,
    limit: '10'
  })

  const [query, setQuery] = useState("");
  const [addQuizModal, setAddQuizModal] = useState(false)

  return (
    <div className='py-2'>
      <Quizheader query={query} setQuery={setQuery} setAddQuizModal={setAddQuizModal} />
      <QuizTable getQuizDetails={getQuizDetails} />
      <Pagination
        currentPage={page}
        totalPages={getQuizDetails?.data?.total ? Math.ceil(getQuizDetails.data.total / 10) : 1}
        onPageChange={(newPage) => setPage(newPage)}
        totalRecords={getQuizDetails?.data?.total || 0}
      />

      {addQuizModal && <AddQuizModal setAddQuizModal={setAddQuizModal}
      //  quizId='e329ac7f-68e2-4e7a-a5e8-2c7c5409c7f4'
      />}
    </div>
  )
}

export default AdminQuiz