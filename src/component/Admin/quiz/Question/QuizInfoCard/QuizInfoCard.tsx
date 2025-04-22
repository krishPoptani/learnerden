import { FileText } from "lucide-react";

const pdfFileIcon = `/icons/pdf-file.png`

export default function QuizInfoCard() {
  return (
    <div className="relative rounded-2xl border-[2px] bg-white bg-clip-padding border-transparent shadow-md p-6"
         style={{
           backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #8B5CF6, #EC4899)',
           backgroundOrigin: 'border-box',
           backgroundClip: 'padding-box, border-box',
        }}>

      {/* Actual Content */}
      <div className="relative z-10">
        {/* Top right PDF button */}
        <div className="absolute flex justify-end mb-4 right-10 top-0">
          <button className="flex items-center text-sm text-[#4F4AB0] hover:underline">
            <img src={pdfFileIcon} alt={"PDF Icon"} width={20} height={20} className="mr-1" />
            View Upload PDF
          </button>
        </div>

        {/* Grid-based Info */}
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-[150px_20px_1fr]">
            <span className="font-medium">Quiz Id</span>
            <span>:</span>
            <span>Q6038</span>
          </div>
          <div className="grid grid-cols-[150px_20px_1fr]">
            <span className="font-medium">Quiz Name</span>
            <span>:</span>
            <span>Fun with Numbers: Grade 1 Math Quiz!</span>
          </div>
          <div className="grid grid-cols-[150px_20px_1fr]">
            <span className="font-medium">Quiz for</span>
            <span>:</span>
            <span>Syllabus</span>
          </div>
          <div className="grid grid-cols-[150px_20px_1fr]">
            <span className="font-medium">Board & Subject</span>
            <span>:</span>
            <span>CBSE & Mathematics</span>
          </div>
          <div className="grid grid-cols-[150px_20px_1fr]">
            <span className="font-medium">Description</span>
            <span>:</span>
            <span>
              Get ready to explore the world of numbers with this exciting quiz!
              Designed for young learners, this quiz covers basic counting,
              addition, subtraction, and number patterns. Perfect for building a
              strong math foundation while having fun!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

