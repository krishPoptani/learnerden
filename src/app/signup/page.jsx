"use client"
import StudentSignUpForm from "@/component/Auth/studentSignIn/StudentSignUpForm";
import TutorSignUpForm from "@/component/Auth/tutorSignIn/TutorSignUpForm";
import UserDashboard from "@/routes/userside/page";
import React, { useState } from "react";
const LoginImgIcon = '/icons/login_img.svg'
const SignUp = () => {
    const [activeTab, setActiveTab] = useState('student');
    return (
        <UserDashboard>

            <div className="min-h-screen relative  bg-white">
                {/* Left Section */}
                <div className="flex-1 bg-[#5D5FEF] text-white p-14 flex flex-col justify-center fit-content items-start relative">
                    <h1 className="text-4xl font-bold leading-snug">
                        Empower Your<br />
                        Learning Journey –<br />
                        Sign in to Connect<br />
                        & Grow!
                    </h1>
                    <div className="absolute" style={{ left: '180px', top: '70px' }}>
                        <img
                            src={LoginImgIcon}
                            alt="Rocket Girl"
                            className="max-w-xs"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className='absolute' style={{ right: '50px', top: '70px' }}>


                    <div className=" bg-white rounded-xl shadow" style={{ width: '540px' }}>
                        <div className="w-full  p-8">
                            <h2 className="text-center text-gray-700 mb-6 text-lg font-medium">
                                Welcome Back!
                            </h2>

                            {/* Tabs */}
                            <div className="flex justify-center mb-6 rounded-full bg-[#E4E1FF] w-fit mx-auto p-2">
                                <button
                                    className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === 'student' ? 'bg-[#5F3FF8] text-white' : ''}`}
                                    onClick={() => setActiveTab('student')}
                                >
                                    Students
                                </button>
                                <button
                                    className={`px-6 py-2 rounded-full text-sm font-medium ml-2 ${activeTab === 'tutor' ? 'bg-[#5F3FF8] text-white' : ''}`}
                                    onClick={() => setActiveTab('tutor')}
                                >
                                    Tutors
                                </button>
                            </div>

                            {activeTab === 'student' ? <StudentSignUpForm /> : <TutorSignUpForm />}
                            {/* Footer Links */}
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-center gap-7 text-xs text-gray-500 absolute left-10 bottom-10">
                    <a href="#" className="hover:underline">Admin Login</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms and Conditions</a>
                </div>
            </div>
        </UserDashboard>
    );
}
export default SignUp