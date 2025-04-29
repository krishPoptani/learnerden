"use client";
import React, { FC, useState } from "react";

const studentsData = [
  {
    name: "Emery Kenter",
    email: "thall@gmail.com",
    createdAt: "Jun 10, 2024",
    lastLogin: "Oct 16, 2024",
    accountCreatedBy: "Self Created",
    status: "Active",
  },
  {
    name: "Roger Philips",
    email: "wnelson@icloud.com",
    createdAt: "Jun 10, 2024",
    lastLogin: "Oct 16, 2024",
    accountCreatedBy: "Parents",
    status: "Active",
  },
  {
    name: "Cristofer Saris",
    email: "llewis@aol.com",
    createdAt: "Apr 3, 2024",
    lastLogin: "Oct 16, 2024",
    accountCreatedBy: "Self Created",
    status: "Active",
  },
  {
    name: "Marilyn Bergson",
    email: "bramirez@gmail.com",
    createdAt: "Mar 28, 2024",
    lastLogin: "Oct 16, 2024",
    accountCreatedBy: "Self Created",
    status: "Active",
  },
  {
    name: "Kaviya Suresh",
    email: "kaviyasuresh@gmail.com",
    createdAt: "Mar 20, 2024",
    lastLogin: "Oct 16, 2024",
    accountCreatedBy: "Self Created",
    status: "Active",
  },
  {
    name: "Ragul Kanna",
    email: "ragulkanna@gmail.com",
    createdAt: "Mar 28, 2024",
    lastLogin: "Oct 16, 2024",
    accountCreatedBy: "Parents",
    status: "Active",
  },
  {
    name: "Marilyn Bergson",
    email: "bramirez@gmail.com",
    createdAt: "Mar 28, 2024",
    lastLogin: "Oct 16, 2024",
    accountCreatedBy: "Self Created",
    status: "Active",
  },
];

const ViewIcon = "/icons/view_eye.svg";

interface StudentTableProps {
  role : string
}

const StudentTable: FC<StudentTableProps> = ({role}) => {
  const [status, setStatus] = useState<boolean[]>(studentsData.map(() => true));

  const toggleStatus = (index: number) => {
    setStatus((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
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
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3 text-center">Created Date</th>
              <th className="px-4 py-3 text-center">Last Login</th>
              {role==="student" && <th className="px-4 py-3 text-center">Account Created By</th>}
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
              <th className="px-4 py-3 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student, idx) => (
              <tr
                key={idx}
                className="text-[#4E4E4E] border-b border-[rgba(160,160,160,0.3)]"
              >
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 text-center">{idx + 1}</td>
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3">{student.email}</td>
                <td className="px-4 py-3 text-center">{student.createdAt}</td>
                <td className="px-4 py-3 text-center">{student.lastLogin}</td>
                {role=="student" && <td className="px-4 py-3 text-center">
                  {student.accountCreatedBy}
                </td>}
                <td className="px-4 py-3 text-center">
                  <span className="inline-block bg-[#4F4AB0] text-white text-xs font-medium px-4 py-1 rounded">
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => toggleStatus(idx)}
                    className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-colors mx-auto ${
                      status[idx] ? "bg-[#4F4AB0]" : "bg-[#B4B4B4]"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                        status[idx] ? "translate-x-6" : ""
                      }`}
                    />
                  </button>
                </td>
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

export default StudentTable;