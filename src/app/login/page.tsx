"use client"
import UserDashboard from '@/routes/userside/page';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Login() {
  const [activeTab, setActiveTab] = useState<'student' | 'tutor'>('student');
  const router = useRouter()
  const loginSubmit = () => {
    localStorage.setItem('login', 'true');
    router.push('/profile')
  }
  return (
    <UserDashboard>

      <div className="min-h-screen relative  bg-white">
        {/* Left Section */}
        <div className="flex-1 bg-[#5D5FEF] text-white p-14 flex flex-col justify-center items-start">
          <h1 className="text-4xl font-bold leading-snug">
            Empower Your<br />
            Learning Journey –<br />
            Sign in to Connect<br />
            & Grow!
          </h1>
          {/* <div className="mt-10">
          <img
            src="/rocket-girl.png"
            alt="Rocket Girl"
            className="max-w-xs"
          />
        </div> */}
        </div>

        {/* Right Section */}
        <div className='absolute' style={{ right: '70px', top: '70px' }}>

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

              {/* Form */}
              <form className="space-y-4" onSubmit={loginSubmit}>
                <div>
                  <label className="block text-sm text-[#8D8D8D] mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Email Address"
                    className="w-full py-2 px-2 border-b border-[#8D8D8D]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#8D8D8D] mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="w-full py-2 px-2 border-b border-[#8D8D8D] text-[#A7A7A7]"
                  />
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 accent-[#5F3FF8]" /> Remember me
                  </label>
                  <a href="#" className="text-[#5F3FF8] hover:underline">Forgot Password ?</a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4A3AFF] text-white rounded-full mt-4 hover:bg-[#4c32c4]"
                >
                  Login
                </button>

                <div className="text-center text-sm mt-4">
                  <span className='text-[#8D8D8D]'> No Account ?</span> <a href="/signup" className="text-[#0089ED] font-medium hover:underline">Sign up</a>
                </div>
              </form>
            </div>

            {/* Footer Links */}
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
