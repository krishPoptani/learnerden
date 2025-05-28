import { FC } from "react";

type Option = string;

export interface QuizQuestionProps {
  id: string;
  number: number;
  question: string;
  index : number
  options: Option[];
  correctAnswer: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  setModal: (value: boolean) => void;
  onLevelChange?: (level: string) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onAdd?: () => void;
}

const addIcon = `/icons/addIcon.png`;
const editIcon = `/icons/blueEditIcon.png`;
const deleteIcon = `/icons/redDeleteIcon.png`;

const QuizQuestionCard: FC<QuizQuestionProps> = ({
  id,
  number,
  question,
  options,
  correctAnswer,
  level,
  index,
  onLevelChange,
  onEdit,
  onDelete,
  onAdd,
  setModal,
}) => {
  return (
    <div className="border rounded-xl px-4 py-8 shadow-sm bg-white">
      <div className="flex justify-between items-start">
        <p className="font-semibold text-lg break-words max-w-[calc(100%-150px)]">
          {index+1}. {question}
        </p>

        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          {/* <select
            value={level}
            onChange={(e) => onLevelChange?.(e.target.value)}
            className="bg-[#E3E6FD] text-[#4F4AB0] px-2 py-1 rounded"
          >
            <option className="bg-[#FFFFFF]">Beginner</option>
            <option className="bg-[#FFFFFF]">Intermediate</option>
            <option className="bg-[#FFFFFF]">Advanced</option>
          </select> */}
          <div
            onClick={onEdit}
            className="cursor-pointer bg-[#F3F4FD] border border-[#E1E3F9] rounded-md py-1.5 px-2 flex items-center justify-center"
          >
            <img src={editIcon} alt="edit" width={12} height={12} />
          </div>
          <div
            onClick={onDelete}
            className="cursor-pointer bg-[#FFF0F0] border border-[#FFD7D7] rounded-md py-1.5 px-2 flex items-center justify-center"
          >
            <img src={deleteIcon} alt="delete" width={12} height={12} />
          </div>
          <img
            src={addIcon}
            alt="add"
            width={24}
            height={24}
            onClick={onAdd}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-2">
        {options.map((opt, i) => {
          const isCorrect = opt === correctAnswer;
          return (
            <label key={i} className="flex items-center text-lg gap-2 break-words">
              <input
                type="radio"
                className="w-5 h-5 accent-green-600"
                name={`quiz-${id}`}
                value={opt}
                checked={isCorrect}
                readOnly
              />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestionCard;
