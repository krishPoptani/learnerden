'use client';

import { useRouter } from "next/navigation";

type subjectResponse = {
    id: string;
    name: string;
    boardCount: number;
};
type boardResponse = {
    id: string;
    name: string;
};

type GradeCardProps = {
    gradeId: string
    title: string;
    subjects: subjectResponse[];
    stream: string;
    boards: boardResponse[]
};

const tickBlue = "/icons/tick_blue.svg";

export default function GradeCard({ gradeId, title, subjects, stream, boards }: GradeCardProps) {
    const router = useRouter();

    const handleGradeClick = (gradeId: string) => {
        router.push(`/quiz/${gradeId}`);
    };

    return (
        <div className="bg-white p-5 rounded-xl border border-[#D9D9D9]" onClick={() => handleGradeClick(gradeId)}>
            <h3 className="text-2xl font-medium">{title}</h3>

            <div className="flex gap-2 mt-2 flex-wrap text-sm text-gray-600">
                {boards?.map((value, index) => (
                    <span key={index} className="border border-[#EDEEF0 ] px-3 py-1 rounded-full text-[#323C4B]">{value?.name}</span>
                ))}

            </div>

            <p className="font-medium text-[#34364A] mt-4 mb-2">
                {stream} {stream && "-"} Subjects Included:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2 text-xs text-gray-700">
                {subjects?.map((subject) => (
                    <li key={subject?.id} className="flex items-center gap-2">
                        <img src={tickBlue} alt="tick" />
                        {subject.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
