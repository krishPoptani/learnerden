"use client"
import React from "react";

const MockQuestionAnswer = ({
    question,
    currentAnswer,
    onAnswer
}: {
    question: { id: number, text: string, options: string[] },
    currentAnswer?: string,
    onAnswer: (option: string) => void
}) => {

    return (
        <div className="w-3/4  mx-auto my-6 p-4 " >
            <div className="shadow-md rounded-xl p-7">
                <h2 className="text-base font-medium text-[#BEBDBD] mb-2">Question {question?.id} </h2>
                <p className="font-normal text-lg text-[#707070]">{question.text}</p>
            </div>
            <div className="mt-4">
                {question.options.map((opt, idx) => (
                    <label
                        key={idx}
                        className={`flex items-center justify-between gap-3 border border-[#939393] px-4 py-3 my-9 rounded-lg cursor-pointer transition-all 
            ${currentAnswer === opt ? 'shadow-[0_0_50px_rgba(104,74,223,0.5)]' : ''}`}
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
