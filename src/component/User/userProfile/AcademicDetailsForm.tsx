import React from 'react';

const AcademicDetailsForm: React.FC = () => {
  return (
    <div className="">
      <div className=''>
        <h2 className="text-sm font-semibold text-[#011C2A]">Academic Details</h2>
      </div>
      <div className='py-4'>Select Syllabus?</div>
      <div className='flex justify-between pb-3'>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> CBSE
        </div>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> IB Board
        </div>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> Cambridge (IGCSE)
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='flex flex-col gap-1'>
          <label className='text-[#8D8D8D] text-sm'>Grade/Class</label>
          <input type='text' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Enter your Class" />
        </div>
        <div className='flex flex-col gap-1'>
          <label className=' text-sm'>Academic Duration</label>
          <input type='text' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Feb 2024- Feb 2025" />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-[#8D8D8D] text-sm'>Subjects of Interest</label>
          <input type='email' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Enter your interest" />
        </div>
        <div className='flex flex-col gap-1'>
          <label className=' font-semibold text-sm'>Learning Goals</label>
          <input type='text'
            className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Feb 2024- Feb 2025" />
        </div>
      </div>
    </div>
  );
};

export default AcademicDetailsForm;
