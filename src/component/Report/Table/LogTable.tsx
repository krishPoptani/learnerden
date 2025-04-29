"use client";

import React from "react";

interface LogData {
  id: number;
  name: string;
  avatar: string;
  type: string;
  typeColor: string;
  description: string;
  date: string;
}

const logsData: LogData[] = [
  {
    id: 1,
    name: "Abram Calzoni",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    type: "Quiz Created",
    typeColor: "bg-green-600",
    description: "Created new Question",
    date: "2024-09-27 14:01",
  },
  {
    id: 2,
    name: "Angel Bergson",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    type: "Completed",
    typeColor: "bg-pink-700",
    description: "Quiz Taken",
    date: "2024-09-27 14:01",
  },
  {
    id: 3,
    name: "Abram Calzoni",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    type: "Question Edited",
    typeColor: "bg-orange-400",
    description: "Added new Question",
    date: "2024-09-27 14:01",
  },
  {
    id: 4,
    name: "Abram Calzoni",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    type: "New Quiz Created",
    typeColor: "bg-blue-600",
    description: "Created new Question",
    date: "2024-09-27 14:01",
  },
];

const LogTable: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto w-full bg-white shadow mt-6 rounded-lg overflow-hidden">
      <div className="max-h-[calc(100vh-325px)]  overflow-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="sticky top-0 bg-[#DAD9F0] text-[16px] text-[#4F4AB0] z-[2]">
            <tr>
              <th className="px-4 py-3 text-center">Sr. no</th>
              <th className="px-4 py-3">User Detail</th>
              <th className="px-4 py-3 text-center">Type</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {logsData.map((log, idx) => (
              <tr
                key={log.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-4 text-center">{idx + 1}</td>
                <td className="px-4 py-4 flex items-center gap-3">
                  <img
                    src={log.avatar}
                    alt={log.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{log.name}</span>
                </td>
                <td className="px-4 py-4 text-center">
                  <span
                    className={`text-white text-xs font-semibold px-3 py-1 rounded-full text-center ${log.typeColor}`}
                  >
                    {log.type}
                  </span>
                </td>
                <td className="px-4 py-4">{log.description}</td>
                <td className="px-4 py-4 text-center">{log.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogTable;
