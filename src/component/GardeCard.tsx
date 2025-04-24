type GradeCardProps = {
    title: string;
    subjects: string[];
    stream: string;
};
const tickBlue = "/icons/tick_blue.svg";
import { useRouter } from "next/navigation";

export default function GradeCard({ title, subjects, stream }: GradeCardProps) {
    const router = useRouter();

    const handleGradeClick = (grade: string) => {
        router.push(`/quiz/${grade}`);
    };
    return (
        <div className="bg-white p-5 rounded-xl border border-[#D9D9D9]"  onClick={() => handleGradeClick(title)}>
            <h3 className="text-2xl font-medium">{title}</h3>
            <div className="flex gap-2 mt-2 flex-wrap text-sm text-gray-600">
                <span className="border  border-[#EDEEF0] px-3 py-1 rounded-full text-[#323C4B]">CBSE</span>
                <span className="border border-[#EDEEF0] px-3 py-1 rounded-full text-[#323C4B]">ICSE</span>
                <span className="border border-[#EDEEF0] px-3 py-1 rounded-full text-[#323C4B]">International Standards</span>
            </div>
            <p className="font-medium text-[#34364A] mt-4 mb-2">{stream} {stream && '-'} Subjects Included:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 text-xs text-gray-700">
                {subjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-2">
                        <img src={tickBlue} alt="tickBlue" />
                        {subject}
                    </li>
                ))}
            </ul>
        </div>
    );
}
