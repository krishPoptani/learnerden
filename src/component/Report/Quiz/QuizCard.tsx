"use client";
import * as Progress from "@radix-ui/react-progress";
import React, { FC } from "react";

interface Option {
  id: number;
  text: string;
  percentage: number;
  isCorrect?: boolean;
}

interface QuestionStatsProps {
  question: string;
  totalResponses: number;
  options: Option[];
  index : number;
}

const QuizCard: FC<QuestionStatsProps> = ({ question, totalResponses, options, index }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 space-y-6 max-w-7xl w-full mx-auto border border-[#e5e7eb]">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 max-w-[90%]">{index+1}{". "}{question}</h3>
        <span className="text-sm font-semibold text-[#B11F57]  whitespace-nowrap">{totalResponses} Responses</span>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-5">
        {options.map((option, ind) => (
          <div key={option.id} className="flex items-start gap-3">
            {/* Custom Radio */}
            <div className="flex items-center pt-1">
              <div className="w-4 h-4 flex items-center justify-center">
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    option.isCorrect
                      ? "border-green-600 bg-green-600"
                      : "border-gray-400 bg-white"
                  }`}
                />
              </div>
            </div>

            {/* Option text and Progress bar */}
            <div className="flex items-center w-full gap-3 justify-between">
              {/* Option Text */}
              <div className={`${option.isCorrect ? "text-green-700" : "text-gray-400"} whitespace-nowrap text-wrap flex-1`}>
                {option.text}
              </div>

              {/* Progress Bar and Percentage */}
              <div className="flex items-center gap-2 w-[700px]">
                <Progress.Root
                  className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden"
                  value={option.percentage}
                >
                  <Progress.Indicator
                    className={`h-full ${
                      option.isCorrect ? "bg-green-600" : "bg-[#4F4AB0]"
                    }`}
                    style={{ width: `${option.percentage}%` }}
                  />
                </Progress.Root>

                <div className="text-gray-600 min-w-[32px] text-right">
                  {option.percentage}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
