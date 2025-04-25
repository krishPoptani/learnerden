import { useState } from "react";

type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
};

type QuestionReview = {
  id: number;
  question: string;
  options: Option[];
  explanation: string;
};

const sampleReview: QuestionReview[] = [

  {
    id: 1,
    question: "Forming a hypothesis is the _____ step in the scientific method.",
    explanation: "Forming a hypothesis is typically the second step in the scientific method after making observations.",
    options: [
      { label: "A", text: "Third", isCorrect: false, isSelected: false },
      { label: "B", text: "Second", isCorrect: true, isSelected: false },
      { label: "C", text: "First", isCorrect: false, isSelected: true },
      { label: "D", text: "Final", isCorrect: false, isSelected: false },
    ]
  },
  {
    id: 2,
    question: "What is the first step in the scientific method?",
    explanation: "Making observations is the initial step in the scientific method, as it leads to the formation of questions.",
    options: [
      { label: "A", text: "Forming a hypothesis", isCorrect: false, isSelected: false },
      { label: "B", text: "Drawing a conclusion", isCorrect: false, isSelected: false },
      { label: "C", text: "Making observations", isCorrect: true, isSelected: true },
      { label: "D", text: "Conducting an experiment", isCorrect: false, isSelected: false },
    ]
  },
  {
    id: 3,
    question: "Which step comes after forming a hypothesis in the scientific method?",
    explanation: "After forming a hypothesis, the next step is to test it by conducting an experiment.",
    options: [
      { label: "A", text: "Analyzing data", isCorrect: false, isSelected: false },
      { label: "B", text: "Conducting an experiment", isCorrect: true, isSelected: false },
      { label: "C", text: "Publishing results", isCorrect: false, isSelected: true },
      { label: "D", text: "Making observations", isCorrect: false, isSelected: false },
    ]
  },
  {
    id: 4,
    question: "Why is it important to analyze data in the scientific method?",
    explanation: "Analyzing data helps identify patterns, test the hypothesis, and draw meaningful conclusions.",
    options: [
      { label: "A", text: "To guess the result", isCorrect: false, isSelected: false },
      { label: "B", text: "To identify patterns and support conclusions", isCorrect: true, isSelected: true },
      { label: "C", text: "To skip steps", isCorrect: false, isSelected: false },
      { label: "D", text: "To change the hypothesis randomly", isCorrect: false, isSelected: false },
    ]
  },
  {
    id: 5,
    question: "What is the final step of the scientific method?",
    explanation: "Sharing or publishing results is considered the final step in the scientific method to inform others and contribute to scientific knowledge.",
    options: [
      { label: "A", text: "Forming a hypothesis", isCorrect: false, isSelected: false },
      { label: "B", text: "Sharing results", isCorrect: true, isSelected: false },
      { label: "C", text: "Making observations", isCorrect: false, isSelected: false },
      { label: "D", text: "Testing again", isCorrect: false, isSelected: true },
    ]
  }
];

export default function QuizResult() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const current = sampleReview[currentQuestionIndex];

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, sampleReview.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <div className="fixed top-0 mx-auto left-0 right-0">
        <div className="bg-f4a text-2xl text-white ">
          <div className="max-w-7xl mx-auto flex justify-between py-5">
            <h2>Global Learner Den</h2>
            <p>x</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-5">
          <h2 className="text-f4a text-2xl font-semibold mb-6 text-center">Algebra and Functions Quiz Result</h2>
          <div className="bg-whitefit-content shadow rounded-lg p-6 mb-6 border border-[#A0A0A066]">
            <h3 className="text-center text-3xl font-bold text-f4a mb-2">Your Result</h3>
            <div className="flex justify-center items-center gap-6 font-medium text-3xl">
              <span className="text-[#292929]">😟 40.7%</span>
              <span className="text-[#292929] ">✅ 2</span>
              <span className="text-[#292929] ">❌ 3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl py-5 mx-auto" style={{ paddingTop: '300px' }}>
        <h4 className="text-xl font-semibold text-f4a mb-4">Your Quiz Review</h4>
        <div className="bg-white p-6 border border-[#A0A0A066] shadow rounded-lg space-y-4">
          <p className="font-medium">
            {currentQuestionIndex + 1}. {current.question}
          </p>
          <div className="">
            {current.options.map((opt) => {
              const { isCorrect, isSelected } = opt;
              let textColour = "text-[#4E4E4E] border-gray-300";
              let labelClasses = "text-[#D9D9D9] border border-[#D9D9D9]";
              if (isCorrect && isSelected) {
                textColour = "text-green-400";
                labelClasses = "bg-green-600 text-white border-green-600";
              } else if (isCorrect) {
                textColour = "text-green-400";
                labelClasses = "text-green-600 border border-green-600";
              } else if (isSelected) {
                textColour = "text-red-400";
                labelClasses = "bg-red-500 text-white border-red-500";
              }
              return (
                <div
                  key={opt.label}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md `}
                >
                  <span
                    className={`text-sm px-5 w-6 h-6 rounded-full flex items-center justify-center font-bold ${labelClasses}`}
                  >
                    {opt.label}
                  </span>
                  <span className={`text-sm px-5 font-medium ${textColour}`}>{opt.text}</span>
                </div>
              );
            })}
          </div>

          {/* Explanation if wrong */}
          {/* {current.options.some((opt) => opt.isSelected && !opt.isCorrect) && (
            <div className="bg-red-100 text-sm text-red-800 rounded px-4 py-2 mt-2">
              <p className="font-semibold">Reason Behind this Incorrect Answer</p>
              <p>{current.explanation}</p>
            </div>
          )} */}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">

            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              disabled={currentQuestionIndex === 0}
            >
              &laquo;
            </button>
            <div className="flex gap-1 items-center">
              {[...Array(5)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-8 h-8 rounded-lg border ${idx === currentQuestionIndex
                    ? "bg-f4a text-white"
                    : " hover:bg-purple-100 border border-[#F1F1F1]"
                    }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              disabled={currentQuestionIndex === sampleReview.length - 1}
            >
               &raquo;
            </button>
          </div>
          <button
            onClick={handleNext}
            className="px-9 py-2 rounded-full bg-f4a text-white disabled:opacity-50"
            disabled={currentQuestionIndex === sampleReview.length - 1}
          >
            Next c
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button className="border border-f4a text-f4a px-5 py-2 rounded-full hover:bg-purple-50">
            Explore More Quizzes
          </button>
          <button className="bg-gradient-to-r from-[#3E4FBB] to-[#C32E6B] text-white px-5 py-2 rounded-full">
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
