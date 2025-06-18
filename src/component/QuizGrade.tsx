'use client';

import { useState } from "react";
import GradeCard from "./GardeCard";
import { useGetGradeQuizDetailsQuery } from "../../slices/user/quizSliceUser";

const tabs = ["Syllabus", "Competitive Exam", "Foreign Language"] as const;
type TabType = typeof tabs[number];

type subjectResponse = {
    id: string;
    name: string;
    boardCount: number;
};

type boardResponse = {
    id: string;
    name: string;
};

type GradeData = {
    gradeId: string;
    gradeName: string;
    boards: boardResponse[];
    subjects: subjectResponse[];
};

export default function QuizGrade() {
    const [activeTab, setActiveTab] = useState<TabType>("Syllabus");
    const { data: getGradeQuizDetails } = useGetGradeQuizDetailsQuery({})
   
    return (
        <div className="mt-10">
            <div className="flex space-between ">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2  w-full ${activeTab === tab ? "bg-[linear-gradient(180deg,_rgb(255,255,255)_20%,_rgba(230,240,255,1)_80%)] border-b-2 border-blue-500 font-medium text-[#4A3AFF]"
                            : "border-b-2 font-normal text-[#6C7787]"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {activeTab === "Syllabus" && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    {getGradeQuizDetails?.data?.result?.map((value:any, index:number) => (
                        <GradeCard
                            key={value.gradeId}
                            gradeId={value?.gradeId}
                            title={value?.gradeName}
                            stream=""
                            subjects={value?.subjects}
                            boards={value?.boards}
                        />
                    ))}
                    {/* <GradeCard
                        title="Grade 1 - 5 (Primary School)"
                        stream=""
                        subjects={[
                            "English",
                            "Mathematics",
                            "Science",
                            "Computer Science",
                            "Physical Education",
                            "Moral Science",
                        ]}
                    />
                    <GradeCard
                        title="Grade 6 - 8 (Middle School)"
                        stream=""
                        subjects={[
                            "English",
                            "Mathematics",
                            "Science",
                            "History",
                            "Geography",
                            "Civics",
                            "Computer Science",
                            "Environmental Science",
                            "Arts & Music",
                            "Physical Education",
                        ]}
                    />
                    <GradeCard
                        title="Grade 9 - 10 (High School)"
                        stream=""
                        subjects={[
                            "English",
                            "Mathematics",
                            "Science",
                            "History",
                            "Geography",
                            "Civics",
                            "Computer Science",
                            "Environmental Science",
                            "Arts & Music",
                            "Physical Education",
                        ]}
                    />
                    <GradeCard
                        title="Grade 11 - 12 (Senior Secondary)"
                        stream="Science Stream "
                        subjects={[
                            "English",
                            "Mathematics",
                            "Science",
                            "Biology",
                            "Geography",
                            "Civics",
                            "Psychology",
                            "Computer Science",
                            "Environmental Science",
                            "Arts & Music",
                            "Physical Education",
                        ]} 
                    />
                    */}
                </div>
            )}
        </div>
    );
}
