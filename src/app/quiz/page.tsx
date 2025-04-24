'use client';
import Location from "@/component/Location";
import QuizGrade from "@/component/QuizGrade";
import SubscriptionPlans from "@/component/SubscriptionPlans";
import UserDashboard from "@/routes/userside/page";
import React, { useState } from "react";
const searchIcon = "/icons/search_icon.svg";
const Quiz = () => {
    const tabs = ["Syllabus", "Competitive Exam", "Foreign Language"];
    const [activeTab, setActiveTab] = useState("Syllabus");
    return (
        <UserDashboard>

            <main className="container  max-w-7xl m-auto min-h-screen bg-white p-6">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-[#4A3AFF] ">Challenge Yourself!</h1>
                    <h1 className="text-4xl font-bold text-[#4A3AFF] ">Take a Quiz & Test Your Knowledge</h1>
                    <p className="text-gray-600 text-[#717171] ">Explore fun and interactive quizzes across various topics.</p>
                    <div className=" relative max-w-md mx-auto mt-4">
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                           <img src={searchIcon} alt="search "/>
                        </span>
                        <input
                            type="text"
                            placeholder="Search by Grade, Syllabus, Exam type, Subject"
                            className="w-full border rounded-xl px-5 py-2 shadow-sm focus:outline-none text-[12px] border-[#E3E3E3]"
                        />
                    </div>
                </div>

                <QuizGrade />
                <SubscriptionPlans/>
            </main>
            <Location/>
        </UserDashboard>
    )
}
export default Quiz