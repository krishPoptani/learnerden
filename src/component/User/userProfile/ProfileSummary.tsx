import React from 'react';
const profileIcon='/images/profile_icon.png'

const ProfileSummary: React.FC = () => (
  <div className="bg-[#F6F6F6] mb-4 p-6 rounded-xl shadow-md flex items-center gap-6">
    <div className="relative">
    <img className='w-24 h-24 rounded-full' src={profileIcon} alt='profileIcon'/>
      <button className="absolute bottom-0 right-0 bg-purple-500 p-1 rounded-full text-white text-xs">✏️</button>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {[
        { label: 'Total Credits Earned', value: '2000' },
        { label: 'Total Course Enrolled', value: '15' },
        { label: 'Total Course Completed', value: '05' },
        { label: 'Total Tutors Connected', value: '05' }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg border border-[#006EE90F] shadow text-center">
          <p className="text-xs font-semibold text-[#474747]">{item.label}</p>
          <h2 className="text-3xl ">{item.value}</h2>
        </div>
      ))}
    </div>
  </div>
);

export default ProfileSummary;
