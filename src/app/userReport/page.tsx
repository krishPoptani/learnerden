import Location from '@/component/Location';
import UserDashboard from '@/routes/userside/page';
import React from 'react';

const UserReport = () => {

    return (
        <UserDashboard>

        <div className="py-6 bg-gray-50">
            <h1 className="text-4xl text-center py-8 font-bold text-secondary">My Reports</h1>
            <div className="container max-w-7xl mx-auto px-4 pt-6">
                <div className="flex flex-wrap gap-4 mb-6">
                    {[
                        { title: 'Total Quiz Taken', value: '20' },
                        { title: 'Average Score', value: '75%' },
                        { title: 'Pass Rate', value: '80%' },
                        { title: 'Average Time Taken', value: '20 mins', color: 'text-[#4E4E4E]' },
                    ].map((box, index) => (
                        <div
                            key={index}
                            className="flex-1 min-w-[200px] bg-white border border-indigo-200 rounded-lg p-4 shadow-sm"
                        >
                            <div className="text-sm text-gray-700 mb-1">{box.title}</div>
                            <div className={`text-xl font-bold ${box.color || 'text-f4a'}`}>{box.value}</div>
                        </div>
                    ))}
                </div>

                {/* Table */}
                <div className="relative overflow-auto max-h-[calc(100vh-302px)] bg-white">
                    <table className="min-w-full border-collapse">
                        <thead className="  sticky top-0">
                            <tr className='bg-[#dcdbef] '>
                                <th className='text-f4a font-semibold px-4 py-3 text-sm whitespace-nowrap text-center'>Sr. no</th>
                                <th className='text-f4a font-semibold px-4 py-3 text-sm whitespace-nowrap text-start'>Quiz Title</th>
                                <th className='text-f4a font-semibold px-4 py-3 text-sm whitespace-nowrap text-start'>Syllabus - Subject</th>
                                <th className='text-f4a font-semibold px-4 py-3 text-sm whitespace-nowrap text-center'>Total Questions</th>
                                <th className='text-f4a font-semibold px-4 py-3 text-sm whitespace-nowrap text-center'>Attempts</th>
                                <th className='text-f4a font-semibold px-4 py-3 text-sm whitespace-nowrap text-center'>Average Score</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr
                                className="border-b border-[#A0A0A0] text-center text-sm text-[#4E4E4E]"
                            >
                                <td className="px-4 py-3">1</td>
                                <td className="px-4 py-3 font-semibold text-start">Probability and Statistics Quiz</td>
                                <td className={`px-4 py-3 font-semibold text-start`} >
                                    Grade 2 - Maths
                                </td>
                                <td className={`px-4 py-3`} >
                                    10
                                </td>
                                <td className={`px-4 py-3`} >
                                    1
                                </td>
                                <td className={`px-4 py-3`} >
                                    85%
                                </td>
                            </tr>
                           
                            <tr
                                className="border-b border-[#A0A0A0] text-center text-sm text-[#4E4E4E]"
                            >
                                <td className="px-4 py-3">2</td>
                                <td className="px-4 py-3 font-semibold text-start">Trigonometry and Geometry Quiz</td>
                                <td className={`px-4 py-3 font-semibold text-start`} >
                                    Grade 2 - Maths
                                </td>
                                <td className={`px-4 py-3`} >
                                    15
                                </td>
                                <td className={`px-4 py-3`} >
                                    2
                                </td>
                                <td className={`px-4 py-3`} >
                                    60%
                                </td>
                            </tr>
                            <tr
                                className="border-b border-[#A0A0A0] text-center text-sm text-[#4E4E4E]"
                            >
                                <td className="px-4 py-3">3</td>
                                <td className="px-4 py-3 font-semibold text-start">Cell Structure and Functions Quizz</td>
                                <td className={`px-4 py-3 font-semibold text-start`} >
                                    Grade 2 - Biology
                                </td>
                                <td className={`px-4 py-3`} >
                                    10
                                </td>
                                <td className={`px-4 py-3`} >
                                    1
                                </td>
                                <td className={`px-4 py-3`} >
                                    30%
                                </td>
                            </tr>
                           
                            <tr
                                className="border-b border-[#A0A0A0] text-center text-sm text-[#4E4E4E]"
                            >
                                <td className="px-4 py-3">4</td>
                                <td className="px-4 py-3 font-semibold text-start">Algebra and Functions Quiz</td>
                                <td className={`px-4 py-3 font-semibold text-start`} >
                                    Grade 2 - Maths
                                </td>
                                <td className={`px-4 py-3`} >
                                    15
                                </td>
                                <td className={`px-4 py-3`} >
                                    1
                                </td>
                                <td className={`px-4 py-3`} >
                                    50%
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Location/>
        </UserDashboard>
    );
};

export default UserReport;
