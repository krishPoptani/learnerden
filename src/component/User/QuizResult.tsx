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
    <div className="min-h-screen bg-white p-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-purple-800 text-xl font-bold mb-6">Algebra and Functions Quiz Result</h2>

        <div className="bg-white shadow rounded-lg p-6 mb-6 border">
          <h3 className="text-center text-lg font-semibold text-purple-600 mb-2">Your Result</h3>
          <div className="flex justify-center items-center gap-6 text-lg font-semibold">
            <span className="text-yellow-500 text-2xl">😟 40.7%</span>
            <span className="text-green-600 flex items-center gap-1">✅2</span>
            <span className="text-red-500 flex items-center gap-1">❌ 3</span>
          </div>
        </div>

        <h4 className="text-lg font-semibold text-purple-800 mb-4">Your Quiz Review</h4>
        <div className="bg-white p-6 border shadow rounded-lg space-y-4">
          <p className="font-medium">
            {currentQuestionIndex + 1}. {current.question}
          </p>

          <div className="space-y-3">
            {current.options.map((opt) => {
              const isCorrect = opt.isCorrect;
              const isSelected = opt.isSelected;

              let bgColor = "bg-white";
              let borderColor = "border-gray-300";

              if (isCorrect) {
                bgColor = "bg-green-50";
                borderColor = "border-green-400";
              }

              if (!isCorrect && isSelected) {
                bgColor = "bg-red-50";
                borderColor = "border-red-400";
              }

              return (
                <div
                  key={opt.label}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md`}
                >
                  <span
                    className={`text-sm px-5 border border-[#D9D9D9] text-[#D9D9D9] w-6 h-6 rounded-full border flex items-center justify-center font-bold ${
                      isCorrect ? " text-[#01A63E] border border-[#01A63E]" : isSelected ? "bg-red-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span className="text-sm">{opt.text}</span>
                </div>
              );
            })}
          </div>

          {/* Explanation if wrong */}
          {current.options.some((opt) => opt.isSelected && !opt.isCorrect) && (
            <div className="bg-red-100 text-sm text-red-800 rounded px-4 py-2 mt-2">
              <p className="font-semibold">Reason Behind this Incorrect Answer</p>
              <p>{current.explanation}</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            disabled={currentQuestionIndex === 0}
          >
            &laquo; Previous
          </button>
          <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-8 h-8 rounded-full border ${
                  idx === currentQuestionIndex
                    ? "bg-purple-600 text-white"
                    : "bg-white hover:bg-purple-100 text-gray-600"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50"
            disabled={currentQuestionIndex === sampleReview.length - 1}
          >
            Next &raquo;
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button className="border border-purple-600 text-purple-600 px-5 py-2 rounded hover:bg-purple-50">
            Explore More Quizzes
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded">
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
