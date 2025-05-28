"use client"
import React from "react";

const MockQuestionNavigator = ({
    questions,
    currentQuestion,
    answers,
    reviewed,
    setCurrentQuestion
}: {
    questions: any[],
    currentQuestion: number,
    answers: { [key: number]: string },
    reviewed: number[],
    setCurrentQuestion: (index: number) => void
}) => {
    return (
        <div className="flex justify-center gap-2 mt-3">
            {questions?.map((_, i) => {
                let bg = 'border border-[#AAAAAA] text-[#707070]';

                if (reviewed.includes(i)) bg = 'bg-[#AAAAAA] text-[#707070]';
                if (answers[i] && !reviewed.includes(i)) bg = 'bg-[#01A63E] text-white';
                if (i === currentQuestion) bg = 'bg-[#4F4AB0] text-white';

                return (
                    <button
                        key={i}
                        className={`w-8 h-8 rounded-full ${bg}`}
                        onClick={() => setCurrentQuestion(i)}
                    >
                        {i + 1}
                    </button>
                );
            })}
        </div>
    );
};

export default MockQuestionNavigator;
