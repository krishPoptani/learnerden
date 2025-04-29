"use client";
import React, { FC } from "react";

const quizData = [
  {
    quizId: "Q6038",
    quizTitle: "Fun with Numbers: Grade 1 Math Quiz",
    grade: "Grade 10",
    subject: "Maths",
    quizTaken: 120,
    avgScore: "85%",
    passPercentage: "80%",
  },
  {
    quizId: "Q1542",
    quizTitle: "Exploring Science: Grade 2 Quiz",
    grade: "Grade 9",
    subject: "Science",
    quizTaken: 200,
    avgScore: "65%",
    passPercentage: "83%",
  },
  {
    quizId: "Q4256",
    quizTitle: "English Adventures: Grade 3 Quiz",
    grade: "Grade 10",
    subject: "English",
    quizTaken: 240,
    avgScore: "50%",
    passPercentage: "92%",
  },
  {
    quizId: "Q4348",
    quizTitle: "Fun Mathematics in Algebra",
    grade: "Grade 8",
    subject: "Maths",
    quizTaken: 345,
    avgScore: "60%",
    passPercentage: "45%",
  },
  {
    quizId: "Q1594",
    quizTitle: "Adventures History",
    grade: "Grade 9",
    subject: "History",
    quizTaken: 412,
    avgScore: "66%",
    passPercentage: "90%",
  },
  {
    quizId: "Q6032",
    quizTitle: "Ultimate Practice Quiz",
    grade: "Grade 10",
    subject: "English",
    quizTaken: 223,
    avgScore: "70%",
    passPercentage: "70%",
  },
  {
    quizId: "Q6027",
    quizTitle: "Grammar",
    grade: "Grade 11",
    subject: "English",
    quizTaken: 198,
    avgScore: "80%",
    passPercentage: "85%",
  },
];

const ViewIcon = "/icons/view_eye.svg";

const CategoryWiseTable = ({}) => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow mt-2">
      <div className="max-h-[calc(100vh-400px)] overflow-y-auto scrollbar-hide">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="sticky top-0 bg-[#DAD9F0] text-[16px] text-[#4F4AB0] z-[2]">
            <tr>
              <th className="px-4 py-3 text-center">Quiz ID</th>
              <th className="px-4 py-3">Quiz Set Title</th>
              <th className="px-4 py-3">Grade</th>
              <th className="px-4 py-3">Quiz Subject</th>
              <th className="px-4 py-3 text-center">Quiz Taken</th>
              <th className="px-4 py-3 text-center">Avg. Score</th>
              <th className="px-4 py-3 text-center">Pass %</th>
              <th className="px-4 py-3 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {quizData.map((quiz, idx) => (
              <tr
                key={idx}
                className="text-[#4E4E4E] border-b border-[rgba(160,160,160,0.3)]"
              >
                <td className="px-4 py-3 text-center">{quiz.quizId}</td>
                <td className="px-4 py-3">{quiz.quizTitle}</td>
                <td className="px-4 py-3">{quiz.grade}</td>
                <td className="px-4 py-3">{quiz.subject}</td>
                <td className="px-4 py-3 text-center">{quiz.quizTaken}</td>
                <td className="px-4 py-3 text-center">{quiz.avgScore}</td>
                <td className="px-4 py-3 text-center">{quiz.passPercentage}</td>
                <td className="px-4 py-3 text-center">
                  <img
                    src={ViewIcon}
                    alt="View"
                    className="w-6 h-6 cursor-pointer inline-block"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryWiseTable;
