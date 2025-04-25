import React from 'react';

const BasicDetailsForm: React.FC = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className="text-sm font-semibold text-[#011C2A]">Basic Student’s Details</h2>
        <button className='bg-f4a text-white px-6 py-1 rounded-full '>Edit Details</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Student First Name</label>
          <input type='text' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Full Name" />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Student Last Name</label>
          <input type='text' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Last Name" />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Email</label>
          <input type='email' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Email" />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Date of Birth</label>
          <input type='date'
            max={new Date(Date.now() - 86400000).toISOString().split('T')[0]}
            className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="DOB" />
        </div>
      </div>
      <div className='py-4'>Gender</div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> Male
        </div>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> Female
        </div>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> Others
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsForm;
