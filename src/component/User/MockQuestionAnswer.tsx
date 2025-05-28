"use client";
import React from "react";

const MockQuestionAnswer = ({
  question,
  currentAnswer,
  onAnswer
}: {
  question: {
    questionId: string;
    question: string;
    options: string[];
    number: number;
  };
  currentAnswer?: string;
  onAnswer: (option: string) => void;
}) => {
  return (
    <div className="w-3/4 mx-auto my-2 p-3">
      <div className="shadow-md rounded-xl p-5">
        <h2 className="text-base font-medium text-[#BEBDBD] mb-2">
          Question {question?.number}
        </h2>
        <p className="font-normal text-lg text-[#707070]">
          {question?.question}
        </p>
      </div>
      <div className="mt-4">
        {question?.options.map((opt, idx) => (
          <label
            key={idx}
            className={`flex items-center justify-between gap-3 border border-[#939393] px-4 py-3 my-4 rounded-lg cursor-pointer transition-all 
            ${currentAnswer === opt ? "border border-f4a" : ""}`}
            onClick={() => onAnswer(opt)}
          >
            <span className="text-lg font-medium text-[#707070]">{opt}</span>
            <input
              type="radio"
              name="option"
              value={opt}
              checked={currentAnswer === opt}
              readOnly
              className="w-4 h-4 text-purple-600 focus:ring-purple-400"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default MockQuestionAnswer;
