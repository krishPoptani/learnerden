"use client";

import React from "react";

interface UserData {
  id: number;
  name: string;
  avatar: string;
  quizTakenDate: string;
  timeTaken: string;
  score: string;
}

const usersData: UserData[] = [
  {
    id: 1,
    name: "Abram Calzoni",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    quizTakenDate: "May 13, 2024",
    timeTaken: "35s",
    score: "-",
  },
  {
    id: 2,
    name: "Angel Bergson",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    quizTakenDate: "May 13, 2024",
    timeTaken: "9s",
    score: "60%",
  },
  {
    id: 3,
    name: "Jakob Vetrovs",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    quizTakenDate: "May 13, 2024",
    timeTaken: "8s",
    score: "80%",
  },
  {
    id: 4,
    name: "Cristofer Stanton",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    quizTakenDate: "May 13, 2024",
    timeTaken: "10s",
    score: "-",
  },
];

const UserTable: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto w-full bg-white shadow mt-6 rounded-lg overflow-hidden">
      <div className="max-h-[calc(100vh-325px)] overflow-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="sticky top-0 bg-[#DAD9F0] text-[16px] text-[#4F4AB0] z-[2]">
            <tr>
              <th className="px-4 py-3 text-center">Sr. no</th>
              <th className="px-4 py-3">User Detail</th>
              <th className="px-4 py-3 text-center">Quiz Taken</th>
              <th className="px-4 py-3 text-center">Time</th>
              <th className="px-4 py-3 text-center">Score</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, idx) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-4 text-center">{idx + 1}</td>
                <td className="px-4 py-4 flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{user.name}</span>
                </td>
                <td className="px-4 py-4 text-center">{user.quizTakenDate}</td>
                <td className="px-4 py-4 text-center">{user.timeTaken}</td>
                <td className="px-4 py-4 text-center">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
