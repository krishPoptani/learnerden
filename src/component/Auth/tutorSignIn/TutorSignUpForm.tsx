export default function TutorSignUpForm() {
    return (
        <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-3">
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
                    <label className='text-[#4E4E4E] font-semibold text-sm mb-1'>Phone Number</label>
                    <input type='tel'
                        className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm" placeholder="Phone Number" />
                </div>

            </div>
            <div className="mb-3">
                <label className="block text-sm text-[#8D8D8D] mb-1">Enter OTP</label>
                <input
                    type="password"
                    placeholder="Enter your OTP"
                    className="w-full py-2 px-2 border-b border-[#8D8D8D]  text-sm"
                />
            </div>
            <div className="mb-3">
                <label className="block text-sm text-[#8D8D8D] mb-1">Set Password</label>
                <input
                    type="password"
                    placeholder="Enter your Password"
                    className="w-full py-2 px-2 border-b border-[#8D8D8D]  text-sm"
                />
            </div>
            <div  className="mb-3">
                <label className="block text-sm text-[#8D8D8D] mb-1">Confirm Password</label>
                <input
                    type="password"
                    placeholder="Enter your Password"
                    className="w-full py-2 px-2 border-b border-[#8D8D8D] text-sm"
                />
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
