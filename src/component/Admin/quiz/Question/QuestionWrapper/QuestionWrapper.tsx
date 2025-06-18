import React from "react";
import QuizQuestionCard from "../QuestionCard/QuestionCard";
import { useDeleteQuizSurveyMutation } from "../../../../../../slices/admin/QuizSlice";

type QuestionWrapperProps = {
  setModal: (value: boolean) => void;
  questions: any[]; // using `any` for dynamic structure
  setSelectedQuestion : any
  refetch : any
};

const QuestionWrapper: React.FC<QuestionWrapperProps> = ({ setModal, questions, setSelectedQuestion, refetch }) => {
  const [deleteQuizSurvey, { isLoading: isDeleting }] = useDeleteQuizSurveyMutation();

  return (
    <div className="max-w-7xl mx-auto w-full flex flex-col gap-4 px-4">
      {questions?.map((quiz: any, ind) => (
        <QuizQuestionCard
          key={quiz?.id}
          id={quiz?.id}
          number={quiz?.number}
          index = {ind}
          question={quiz?.question}
          options={quiz?.answer}
          correctAnswer={quiz?.correctAnswer}
          level={"Beginner"} // Static fallback until real level is available
          onLevelChange={(val) => console.log(`Level for ${quiz?.id}:`, val)}
          onEdit={() => {setModal(true); setSelectedQuestion({...quiz, ind})}}
          onDelete={async () => {
            setSelectedQuestion({ ...quiz, ind });
            try {
              await deleteQuizSurvey({ id: quiz?.id }).unwrap();
              console.log(`Deleted quiz with id: ${quiz?.id}`);
              // Optionally: Refetch or remove from local state here
              setSelectedQuestion(null);
              refetch()
            } catch (err) {
              console.error("Delete failed:", err);
            }
          }}
          onAdd={() => {
            setModal(true);
            setSelectedQuestion({
              number: ind+1,
              quizId: quiz?.quizId, // Ensure this is passed
              question: "",
              answer: ["Dummy Option-1", "Dummy Option-2", "Dummy Option-3", "Dummy Option-4"],
              correctAnswer: "",
              image: "",
              type: "MCQ", // or appropriate
            });
          }}
          setModal={setModal}
          image={quiz?.image}
        />
      ))}
    </div>
  );
};

export default QuestionWrapper;
