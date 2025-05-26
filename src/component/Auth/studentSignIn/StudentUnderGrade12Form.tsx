import { useState } from "react";
interface Props {
    setGrade: React.Dispatch<React.SetStateAction<boolean>>;
  }
export default function StudentUnderGrade12Form(setGrade:Props) {
    const [parentstudent, setParentStudent] = useState<string>('parent')
    return (
        <form className="space-y-4" >
            {parentstudent == 'parent' ? <>
                <div className="flex justify-between">
                    <h5>Parent’s Details</h5>
                    <span>Have you completed <span>Grade 12?</span></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm text-[#8D8D8D] mb-1">First Name</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Last Name</label>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-[#8D8D8D] mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                        />
                    </div>
                    <div>
                        <label className='text-[#4E4E4E] font-semibold text-sm'>Phone Number <span className='font-medium'>(Any one)</span></label>
                        <input type='tel'
                            className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm" placeholder="Phone Number" />
                    </div>

                </div>
                <div>
                    <label className="block text-sm text-[#8D8D8D] mb-1">Set Password</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="w-full py-2 px-2 border-b border-[#8D8D8D]  text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm text-[#8D8D8D] mb-1">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                    />
                </div>


                <button
                    type="button"
                    onClick={() => setParentStudent('student')}
                    className="w-full py-3 bg-[#4A3AFF] text-white rounded-full mt-4 hover:bg-[#4c32c4]"
                >
                    Next
                </button>
            </> : 
            <>
                <div className="flex justify-between">
                    <h5>Student’s 1 Details</h5>
                    <span>+ Add Student</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm text-[#8D8D8D] mb-1">Student First Name</label>
                        <input
                            type="text"
                            placeholder="Student First Name"
                            className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Student Last Name</label>
                        <input
                            type="text"
                            placeholder="Student Last Name"
                            className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                        />
                    </div>

                </div>
                <div>
                    <h4>Select Syllabus?</h4>
                    <div className="flex justify-between">
                        <input type="radio" /><label>CBSE</label>
                        <input type="radio" /><label>IB Board</label>
                        <input type="radio" /><label>Cambridge (IGCSE)</label>
                    </div>
                </div>
                <div>
                    <label className="block text-sm text-[#8D8D8D] mb-1">Grade/Class</label>
                    <input
                        type="text"
                        placeholder="Enter your Class"
                        className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm text-[#8D8D8D] mb-1">Email ID</label>
                    <input
                        type="email"
                        placeholder="Enter Student email Id"
                        className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm text-[#8D8D8D] mb-1">Set Password</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="w-full py-2 px-2 border-b border-[#8D8D8D]  text-sm"
                    />
                </div>
                <div className="flex justify-between">

                <button
                    type="button"
                    onClick={() => setParentStudent('parent')}
                    className="w-[40%] py-3 bg-[#2A497C] text-white rounded-full mt-4 hover:bg-[#4c32c4]"
                >
                    Back
                </button>
                <button
                    type="submit"
                
                    className="w-[40%] py-3 bg-[#4A3AFF] text-white rounded-full mt-4 hover:bg-[#4c32c4]"
                >
                    Create Account
                </button>
                </div>
            </>
            }
            <div className="text-center text-sm mt-4">
                <span className='text-[#8D8D8D]'>Have an Account ? </span> <a href="/login" className="text-[#0089ED] font-medium hover:underline">Login</a>
            </div>
        </form>
    );
}
