"use client";

import React from "react";
import QuizCard from "@/component/Report/Quiz/QuizCard";

interface Option {
  id: number;
  text: string;
  percentage: number;
  isCorrect?: boolean;
}

interface QuizData {
  id: string;
  question: string;
  totalResponses: number;
  options: Option[];
}

const ViewQuizCardWrapper: React.FC = () => {
  const quizData: QuizData[] = [
    {
      id: "q1",
      question: "What is 2 + 3?",
      totalResponses: 80,
      options: [
        { id: 1, text: "4", percentage: 25 },
        { id: 2, text: "5", percentage: 90, isCorrect: true },
        { id: 3, text: "6", percentage: 40 },
        { id: 4, text: "3", percentage: 52 },
      ],
    },
    {
      id: "q2",
      question: "What is 5 + 2?",
      totalResponses: 50,
      options: [
        { id: 1, text: "6", percentage: 10 },
        { id: 2, text: "7", percentage: 85, isCorrect: true },
        { id: 3, text: "8", percentage: 30 },
        { id: 4, text: "5", percentage: 20 },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col gap-6 px-4 py-6">
      {quizData.map((quiz, index) => (
        <QuizCard
          key={quiz.id}
          question={quiz.question}
          totalResponses={quiz.totalResponses}
          options={quiz.options}
          index  = {index}
        />
      ))}
    </div>
  );
};

export default ViewQuizCardWrapper;
