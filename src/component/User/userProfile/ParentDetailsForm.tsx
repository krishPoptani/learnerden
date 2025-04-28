import React from 'react';

const ParentDetailsForm: React.FC = () => {
  return (
    <>
      <div className=''>
        <h2 className="text-sm font-semibold text-[#011C2A]">Parent’s Details</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Father’s Name</label>
          <input type='text' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Father’s Name" />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Mother’s Name</label>
          <input type='text' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Mother’s Name" />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Father/Mother's Email ID</label>
          <input type='email' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Email" />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#4E4E4E] font-semibold text-sm'>Phone Number <span className='font-medium'>(Any one)</span></label>
          <input type='tel'
            className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Phone Number" />
        </div>
      </div>
      <div className='grid' style={{gridTemplateColumns:'30px 1fr'}}>
        <input className='w-5 h-5 ' type='checkbox' /> <span>Would you like to share learning progress, course details, and promotional updates with your parents?
        </span>
      </div>
    </>
  );
};

export default ParentDetailsForm;
