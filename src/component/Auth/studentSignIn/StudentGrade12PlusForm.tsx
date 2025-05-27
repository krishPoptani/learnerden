interface Props {
    setGrade: React.Dispatch<React.SetStateAction<boolean>>;
  }
export default function StudentGrade12PlusForm({setGrade}:Props) {
    return (
        <form className="space-y-4">
            <div className="flex justify-between items-center">
                <h5>Student’s Details</h5>
                <span  onClick={() => setGrade(true)} className="text-[13px]">Have you completed <span>not yet completed Grade 12?</span></span>
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
            <div className="flex gap-9">
                <div className="flex gap-3 items-center">
                    <input
                        type="checkbox"
                    />
                    <label className="block text-sm text-[#8D8D8D] mb-1">Exam Preparation</label>

                </div>
                <div className="flex gap-3 items-center">
                    <input
                        type="checkbox"
                    />
                    <label className="block text-sm text-[#8D8D8D] mb-1">Foreign Languages</label>

                </div>
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-[#4A3AFF] text-white rounded-full mt-4 hover:bg-[#4c32c4]"
            >
                Create Account
            </button>
            <div className="text-center text-sm mt-4">
                <span className='text-[#8D8D8D]'>Have an Account ? </span> <a href="/login" className="text-[#0089ED] font-medium hover:underline">Login</a>
            </div>
        </form>
    );
}
