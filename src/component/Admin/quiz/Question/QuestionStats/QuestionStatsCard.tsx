import React from "react";
import clsx from "clsx";

type Props = {
  bgColor: string;
  level: string;
  numOfQues: number|string;
  score?: number;
};

const QuestionStatCard = ({ bgColor, level, numOfQues, score }: Props) => {
  return (
    <div className={clsx("rounded-md px-4 py-3 min-w-[250px]", bgColor)}>
      <p className="text-[#1F2A37]">{level}</p>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-[#1F2A37]">{numOfQues}</p>
        {score && (
          <div className="border border-gray-300 rounded px-2 py-0.5 font-semibold text-2xl text-[#1F2A37]">
            {score} <span className="text-xs font-normal">Score</span>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionStatCard;
