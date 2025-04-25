import React from 'react';

const PreferencesForm: React.FC = () => {
  return (
    <>
      <div className=''>
        <h2 className="text-sm font-semibold text-[#011C2A]">Short Bio (Interests & Study Goals)</h2>
        <textarea className='h-[140px] w-full border border-[#E3E3E3] mt-5 rounded-lg'></textarea>
      </div>

      <div className='py-4'>Preferred Learning Mode</div>
      <div className='flex justify-between pb-3'>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> Live Session
        </div>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> Recorded Sessions
        </div>
        <div className='flex items-center gap-3'>
          <input name='gender' type='radio' /> Both
        </div>
      </div>
      <div className='py-4'>Time Avilabilty</div>
      <div className='flex gap-5'>
        <div className='flex justify-between gap-5 pb-3'>
          <div className='flex items-center gap-3'>
            <input name='gender' type='radio' /> Morning
          </div>
          <div className='flex items-center gap-3'>
            <input name='gender' type='radio' />Evening
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <label className='text-[#8D8D8D] text-sm'>Student Last Name</label>
          <input type='text' className="border-b border-[#8D8D8D] p-2 text-sm" placeholder="Last Name" />
        </div>
      </div>
    </>
  );
};

export default PreferencesForm;
