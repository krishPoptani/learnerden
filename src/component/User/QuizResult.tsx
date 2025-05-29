import { useState } from "react";

type APIQuestion = {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  reason: string;
  number: number;
  userAnswer: string | null;
  type: string;
};

type QuizAPIResponse = {
  data: {
    questions: APIQuestion[];
    timeRemaining: number;
    correctCount: number;
    wrongCount: number;
    totalQuestions: number;
    resultPercentage: number;
  };
};

type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
};

type QuestionReview = {
  id: number;
  question: string;
  explanation: string;
  options: Option[];
  notAnswered: boolean;
};

export default function QuizResult({ quizQuestionAnswer }: { quizQuestionAnswer: QuizAPIResponse }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const reviewData: QuestionReview[] =
    quizQuestionAnswer?.data?.questions.map((q, index) => {
      return {
        id: index + 1,
        question: q.question,
        explanation: q.reason,
        notAnswered: q.userAnswer === null,
        options: q.options.map((opt, i) => ({
          label: String.fromCharCode(65 + i),
          text: opt,
          isCorrect: opt === q.correctAnswer,
          isSelected: opt === q.userAnswer,
        })),
      };
    }) || [];

  const current = reviewData[currentQuestionIndex];

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => Math.min(prev + 1, reviewData.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      {/* Header */}
      <div className="fixed top-0 mx-auto left-0 right-0">
        <div className="bg-f4a text-2xl text-white">
          <div className="max-w-7xl mx-auto flex justify-between py-5">
            <h2>Global Learner Den</h2>
            <a href="http://localhost:5000/quiz/Grade%201%20-%205%20(Primary%20School)/Trigonometry%20and%20Geometry%20Quiz/mock/">X</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-5 bg-white">
          <h2 className="text-f4a text-2xl font-semibold mb-6 text-center">Quiz Result</h2>
          <div className="bg-whitefit-content shadow rounded-lg p-6 mb-6 border border-[#A0A0A066]">
            <h3 className="text-center text-3xl font-bold text-f4a mb-2">Your Result</h3>
            <div className="flex justify-center items-center gap-6 font-medium text-3xl">
              <span className="text-[#292929]">
                😟 {(quizQuestionAnswer?.data?.resultPercentage)?.toFixed(2)}%
              </span>
              <span className="text-[#292929]">✅ {quizQuestionAnswer?.data?.correctCount}</span>
              <span className="text-[#292929]">❌ {quizQuestionAnswer?.data?.wrongCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="max-w-7xl py-5 mx-auto" style={{ paddingTop: "300px" }}>
        <h4 className="text-xl font-semibold text-f4a mb-4">Your Quiz Review</h4>
        <div className="bg-white p-6 border border-[#A0A0A066] shadow rounded-lg space-y-4">
          <p className="font-medium">
            {currentQuestionIndex + 1}. {current?.question}
          </p>

          {/* Options */}
          {current?.options.map((opt) => {
            const { isCorrect, isSelected } = opt;
            let textColour = "text-[#4E4E4E]";
            let labelClasses = "text-[#D9D9D9] border border-[#D9D9D9]";

            if (isCorrect && isSelected) {
              // ✅ User selected and it's correct
              textColour = "text-green-400";
              labelClasses = "bg-green-600 text-white border-green-600";
            } else if (isCorrect && !isSelected) {
              // ✅ Correct answer, but not selected
              textColour = "text-green-400";
              labelClasses = "text-green-600 border border-green-600";
            } else if (!isCorrect && isSelected) {
              // ❌ User selected this, but it's wrong
              textColour = "text-red-400";
              labelClasses = "bg-red-500 text-white border-red-500";
            }
            console.log(isCorrect, "opt.label", isSelected);

            return (
              <div key={opt.label} className="flex items-center gap-3 px-4 py-2 rounded-md">
                <span className={`text-sm px-5 w-6 h-6 rounded-full flex items-center justify-center font-bold ${labelClasses}`}>
                  {opt.label}
                </span>
                <span className={`text-sm px-5 font-medium ${textColour}`}>{opt.text}</span>
              </div>
            );
          })}

          {/* Explanation */}
          {(current?.options.some((opt) => opt?.isSelected && !opt?.isCorrect) || current?.notAnswered) && (
            <div className="bg-red-100 text-sm text-red-800 rounded px-4 py-2 mt-2">
              <p className="font-semibold">
                {current.notAnswered && "You did not answer this question."}
              </p>
              {/* <p>{current.explanation}</p> */}
            </div>
          )}
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
            <div className="flex gap-1 items-center mx-2">
              {reviewData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-8 h-8 rounded-lg border ${idx === currentQuestionIndex ? "bg-f4a text-white" : "hover:bg-purple-100 border-[#F1F1F1]"
                    }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              disabled={currentQuestionIndex === reviewData.length - 1}
            >
              &raquo;
            </button>
          </div>
          <button
            onClick={handleNext}
            className="px-9 py-2 rounded-full bg-f4a text-white disabled:opacity-50"
            disabled={currentQuestionIndex === reviewData.length - 1}
          >
            Next
          </button>
        </div>

        {/* Footer Buttons */}
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
