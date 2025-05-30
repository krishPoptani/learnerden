'use client';

import { useState } from "react";
import GradeCard from "./GardeCard";

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

    const getGradeQuizDetails: GradeData[] = [
        {
            gradeId: "e03548ee-c7f8-40db-bf8d-746af24db355",
            gradeName: "Grade-1",
            boards: [{ id: "4c14fdab-f07e-4677-a083-79a5fbf43f83", name: "CBSE" }],
            subjects: [
                { id: "3dae1de6-f67c-4629-9ef3-5fe989f50973", name: "Maths", boardCount: 1 },
                { id: "74aa96ea-6986-4da6-b769-c0e4a7dc23c0", name: "Science", boardCount: 1 },
            ],
        },
        {
            gradeId: "e03548ee-c7f8-40db-bf8d-746af24db356",
            gradeName: "Grade-2",
            boards: [{ id: "4c14fdab-f07e-4677-a083-79a5fbf43f83", name: "CBSE" }],
            subjects: [{ id: "3dae1de6-f67c-4629-9ef3-5fe989f50973", name: "Maths", boardCount: 1 }],
        },
        {
            gradeId: "36222696-f0ae-459e-8485-fbc82ae70fa3",
            gradeName: "Grade-12",
            boards: [{ id: "8365aaf5-33c2-49c9-99de-e539411e5335", name: "ICSE" }],
            subjects: [
                { id: "3dae1de6-f67c-4629-9ef3-5fe989f50973", name: "Maths", boardCount: 1 },
                { id: "74aa96ea-6986-4da6-b769-c0e4a7dc23c0", name: "Science", boardCount: 1 },
            ],
        },
        {
            gradeId: "21807ee8-6cde-45d2-b2cc-eff1b1c39b15",
            gradeName: "Grade-6",
            boards: [{ id: "93bd1ddc-8d93-4643-92a2-ab17d4345483", name: "State Board" }],
            subjects: [{ id: "74aa96ea-6986-4da6-b769-c0e4a7dc23c0", name: "Science", boardCount: 1 }],
        },
    ];
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
                    {getGradeQuizDetails?.map((value, index) => (
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
