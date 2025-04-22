"use client";
import React, { useState } from "react";
import { Eye, Pencil, Share2, Trash, MoreHorizontal } from "lucide-react";

import { Tooltip } from "react-tooltip";

const quizData = [
  {
    id: "Q6038",
    title: "Fun with Numbers: Grade 1 Math Quiz!",
    syllabus: "Syllabus-Maths",
    grade: "Grade 1",
    quizCount: 6,
    createdAt: "Apr 27, 2024",
    updatedAt: "Apr 27, 2024",
    createdBy: "John Mark",
    updatedBy: "HealthIQ-Admin",
    status: "Completed",
  },
  {
    id: "Q1542",
    title: "Exploring Science: Grade 2 Quiz!",
    syllabus: "Syllabus-Science",
    grade: "Grade 2",
    quizCount: 10,
    createdAt: "Apr 27, 2024",
    updatedAt: "Oct 27, 2023",
    createdBy: "Ragul",
    updatedBy: "HealthIQ-Admin",
    status: "Generating",
  },
  {
    id: "Q4256",
    title: "English Adventures: Grade 3 Quiz!",
    syllabus: "Syllabus-English",
    grade: "Grade 3",
    quizCount: 6,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Completed",
  },
  {
    id: "Q4348",
    title: "Fun Mathematics in Algebra",
    syllabus: "Syllabus-Maths",
    grade: "Grade 4",
    quizCount: 10,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Published",
  },
  {
    id: "Q1594",
    title: "Adventures History",
    syllabus: "Syllabus-History",
    grade: "Grade 5",
    quizCount: 7,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Completed",
  },
  {
    id: "Q6032",
    title: "Ultimate Practice Quiz",
    syllabus: "CE - JEE Main & Advance",
    grade: "-",
    quizCount: 8,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Published",
  },
  {
    id: "Q60561",
    title: "Fun with Numbers: Grade 1 Math Quiz!",
    syllabus: "Syllabus-Maths",
    grade: "Grade 1",
    quizCount: 6,
    createdAt: "Apr 27, 2024",
    updatedAt: "Apr 27, 2024",
    createdBy: "John Mark",
    updatedBy: "HealthIQ-Admin",
    status: "Completed",
  },
  {
    id: "Q154x2",
    title: "Exploring Science: Grade 2 Quiz!",
    syllabus: "Syllabus-Science",
    grade: "Grade 2",
    quizCount: 10,
    createdAt: "Apr 27, 2024",
    updatedAt: "Oct 27, 2023",
    createdBy: "Ragul",
    updatedBy: "HealthIQ-Admin",
    status: "Generating",
  },
  {
    id: "Q42d56",
    title: "English Adventures: Grade 3 Quiz!",
    syllabus: "Syllabus-English",
    grade: "Grade 3",
    quizCount: 6,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Completed",
  },
  {
    id: "Q434d8",
    title: "Fun Mathematics in Algebra",
    syllabus: "Syllabus-Maths",
    grade: "Grade 4",
    quizCount: 10,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Published",
  },
  {
    id: "Q15d94",
    title: "Adventures History",
    syllabus: "Syllabus-History",
    grade: "Grade 5",
    quizCount: 7,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Completed",
  },
  {
    id: "Q603d2",
    title: "Ultimate Practice Quiz",
    syllabus: "CE - JEE Main & Advance",
    grade: "-",
    quizCount: 8,
    createdAt: "Oct 27, 2023",
    updatedAt: "Oct 27, 2023",
    createdBy: "HealthIQ-Admin",
    updatedBy: "HealthIQ-Admin",
    status: "Published",
  },
];

const statusColors: Record<string, string> = {
  Completed: "text-green-500",
  Generating: "text-[#CF8900]",
  Published: "text-[#4F4AB0]",
};

const ViewIcon = '/icons/view_eye.svg'
const ModifyIcon = '/icons/editlis.svg'

const QuizTable = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-7xl mx-auto bg-white shadow mt-2">
      <div className="max-h-[calc(100vh-325px)] overflow-y-auto">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="sticky top-0 bg-[#DAD9F0] text-[16px] text-[#4F4AB0] z-[2]">
            <tr>
              <th className="p-4">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3 text-center">Sr. no</th>
              <th className="px-4 py-3 text-center">Quiz ID</th>
              <th className="px-4 py-3">Quiz Set Title</th>
              <th className="px-4 py-3">Quiz For</th>
              <th className="px-4 py-3 text-center">Grade</th>
              <th className="px-4 py-3 text-center">No.of.Quiz</th>
              <th className="px-4 py-3 text-center">Created</th>
              <th className="px-4 py-3 text-center">Last Updated</th>
              <th className="px-4 py-3 text-center">Created By</th>
              <th className="px-4 py-3 text-center">Updated By</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {quizData.map((quiz, idx) => (
              <tr
                key={quiz.id}
                className={`text-[#4E4E4E] border-b border-[rgba(160,160,160,0.3)]`}
              >
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 text-center">{idx + 1}</td>
                <td className="px-4 py-3 text-[#4F4AB0] font-medium text-center">
                  {quiz.id}
                </td>
                <td className="px-4 py-3 max-w-[320px]">
                  <div
                    id={`quiz-title-${quiz.id}`}
                    className="line-clamp-2 overflow-hidden text-ellipsis"
                  >
                    {quiz.title}
                  </div>
                  <Tooltip
                    anchorId={`quiz-title-${quiz.id}`}
                    content={quiz.title}
                    place="bottom"
                    style={{
                      width: "380px",
                      backgroundColor: "white",
                      color: "#000",
                      boxShadow: "0px 4px 8px #D9D9D9",
                      borderRadius: "5px",
                      zIndex: "99",
                    }}
                  />
                </td>

                <td className="px-4 py-3">{quiz.syllabus}</td>
                <td className="px-4 py-3 text-center">{quiz.grade}</td>
                <td className="px-4 py-3 text-center">{quiz.quizCount}</td>
                <td className="px-4 py-3 text-center">{quiz.createdAt}</td>
                <td className="px-4 py-3 text-center">{quiz.updatedAt}</td>
                <td className="px-4 py-3 text-center">{quiz.createdBy}</td>
                <td className="px-4 py-3 text-center">{quiz.updatedBy}</td>
                <td
                  className={`px-4 py-3 font-semibold ${
                    statusColors[quiz.status]
                  } text-center`}
                >
                  {quiz.status}
                </td>
                <td className="px-4 py-3 relative text-center">
                  <button className="text-gray-500 hover:text-gray-800 ">
                    <MoreHorizontal
                      size={18}
                      onClick={() => toggleDropdown(quiz.id)}
                    />
                  </button>
                  {openDropdownId === quiz.id && (
                    <div className="absolute right-0 top-full w-[120px] bg-white border border-[#A0A0A0] rounded-lg shadow-lg z-[2]">
                      {[
                        {
                          label: "View",
                          icon: ViewIcon,
                        },
                        {
                          label: "Edit",
                          icon: ModifyIcon,
                        },
                      ].map((action, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 border-b border-[#A0A0A0] last:border-b-0 cursor-pointer"
                        >
                          <div className="p-1 rounded-md"> 
                            <img src={action.icon} width={24} height={24} alt={action.label} />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {action.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizTable;
