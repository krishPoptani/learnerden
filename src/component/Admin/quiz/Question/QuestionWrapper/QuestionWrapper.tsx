import React from "react";
import QuizQuestionCard from "../QuestionCard/QuestionCard";

type QuizQuestion = {
  id: string;
  number: number;
  question: string;
  options: string[];
  correctAnswer: string;
  level: "Beginner" | "Intermediate" | "Advanced";
};

const QuestionWrapper = () => {

  const quizData: QuizQuestion[] = [
  {
    id: "q1",
    number: 1,
    question:
      "What is 2 + 3",
    options: ["4", "5", "6", "3"],
    correctAnswer: "5",
    level: "Beginner",
  },
  {
    id: "q2",
    number: 2,
    question: "What is 2 + 3?",
    options: ["4", "5", "6", "3"],
    correctAnswer: "5",
    level: "Beginner",
  },
];


  return (
   <div className="max-w-7xl mx-auto w-full flex flex-col gap-4 px-4">
      {quizData.map((quiz) => (
        <QuizQuestionCard
          key={quiz.id}
          {...quiz}
          onLevelChange={(val) => console.log(`Level for ${quiz.id}:`, val)}
          onEdit={() => console.log(`Edit clicked for ${quiz.id}`)}
          onDelete={() => console.log(`Delete clicked for ${quiz.id}`)}
          onAdd={() => console.log(`Add clicked for ${quiz.id}`)}
        />
      ))}
    </div>
  );
};

export default QuestionWrapper;
