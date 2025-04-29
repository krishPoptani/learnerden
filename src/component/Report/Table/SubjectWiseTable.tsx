"use client";
import React, { FC } from "react";

const subjectWiseData = [
  {
    studentId: "ST001",
    name: "Emery Kenter",
    email: "thall@gmail.com",
    category: "Syllabus",
    quizTitle: "Grade 10- Science",
    subject: "Biology",
    score: "85%",
    attempt: 2,
  },
  {
    studentId: "ST002",
    name: "Roger Philips",
    email: "wnelson@icloud.com",
    category: "Competitive Exam",
    quizTitle: "NEET Practice",
    subject: "Physics",
    score: "65%",
    attempt: 1,
  },
  {
    studentId: "ST003",
    name: "Cristofer Saris",
    email: "llewis@aol.com",
    category: "Syllabus",
    quizTitle: "Grade 10",
    subject: "Maths",
    score: "50%",
    attempt: 2,
  },
  {
    studentId: "ST004",
    name: "Marilyn Bergson",
    email: "bramirez@gmail.com",
    category: "Competitive Exam",
    quizTitle: "Defense - NDA",
    subject: "English",
    score: "60%",
    attempt: 3,
  },
  {
    studentId: "ST005",
    name: "Kaviya Suresh",
    email: "kaviyasuresh@gmail.com",
    category: "Syllabus",
    quizTitle: "Grade 9",
    subject: "English",
    score: "66%",
    attempt: 4,
  },
  {
    studentId: "ST006",
    name: "Ragul Kanna",
    email: "ragulkanna@gmail.com",
    category: "Competitive Exam",
    quizTitle: "Engineering - JEE Main",
    subject: "Computer Science",
    score: "70%",
    attempt: 2,
  },
  {
    studentId: "ST007",
    name: "Marilyn Bergson",
    email: "bramirez@gmail.com",
    category: "Foreign Languages",
    quizTitle: "French",
    subject: "Writing",
    score: "80%",
    attempt: 1,
  },
];

const ViewIcon = "/icons/view_eye.svg";

const SubjectWiseTable= ({  }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow mt-2">
      <div className="max-h-[calc(100vh-350px)] overflow-y-auto scrollbar-hide">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="sticky top-0 bg-[#DAD9F0] text-[16px] text-[#4F4AB0] z-[2]">
            <tr>
              <th className="px-4 py-3 text-center">StudentID</th>
              <th className="px-4 py-3">Student Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Quiz Title</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3 text-center">Score</th>
              <th className="px-4 py-3 text-center">Attempt</th>
              <th className="px-4 py-3 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {subjectWiseData.map((student, idx) => (
              <tr
                key={idx}
                className="text-[#4E4E4E] border-b border-[rgba(160,160,160,0.3)]"
              >
                <td className="px-4 py-3 text-center">{student.studentId}</td>
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3">{student.email}</td>
                <td className="px-4 py-3">{student.category}</td>
                <td className="px-4 py-3">{student.quizTitle}</td>
                <td className="px-4 py-3">{student.subject}</td>
                <td className="px-4 py-3 text-center">{student.score}</td>
                <td className="px-4 py-3 text-center">{student.attempt}</td>
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

export default SubjectWiseTable;
