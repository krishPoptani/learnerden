import { FileText } from "lucide-react";

const pdfFileIcon = `/icons/pdf-file.png`;

export default function QuizInfoCard({ quizCourseData }: { quizCourseData: any }) {
  if (!quizCourseData) return null;

  const {
    quizId,
    topic,
    quizCreationType,
    boardTypeDetails,
    subjectDetails,
    description,
  } = quizCourseData?.data?.result?.[0];

  const boardName = boardTypeDetails?.name || "N/A";
  const subjectName = subjectDetails?.name || "N/A";
  const formattedDescription = description || "No description provided.";

  return (
    <div
      className="relative rounded-2xl border-[2px] bg-white bg-clip-padding border-transparent shadow-md p-6"
      style={{
        backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #8B5CF6, #EC4899)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      {/* Top right PDF button */}
      <div className="absolute flex justify-end mb-4 right-10 top-0">
        {/* <button className="flex items-center text-sm text-[#4F4AB0] hover:underline">
          <img src={pdfFileIcon} alt="PDF Icon" width={20} height={20} className="mr-1" />
          View Upload PDF
        </button> */}
      </div>

      {/* Grid-based Info */}
      <div className="space-y-3 text-sm">
        <div className="grid grid-cols-[150px_20px_1fr]">
          <span className="font-medium">Quiz Id</span>
          <span>:</span>
          <span>{quizId}</span>
        </div>
        <div className="grid grid-cols-[150px_20px_1fr]">
          <span className="font-medium">Quiz Name</span>
          <span>:</span>
          <span>{topic}</span>
        </div>
        <div className="grid grid-cols-[150px_20px_1fr]">
          <span className="font-medium">Quiz for</span>
          <span>:</span>
          <span>{quizCreationType}</span>
        </div>
        <div className="grid grid-cols-[150px_20px_1fr]">
          <span className="font-medium">Board & Subject</span>
          <span>:</span>
          <span>{boardName} & {subjectName}</span>
        </div>
        <div className="grid grid-cols-[150px_20px_1fr]">
          <span className="font-medium">Description</span>
          <span>:</span>
          <span>{formattedDescription}</span>
        </div>
      </div>
    </div>
  );
}
