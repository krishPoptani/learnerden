import React from 'react';

const Card = () => {
  const bookIcon = '/icons/bookIcon.svg';
  const bookIcon2 = '/icons/bookIcon2.svg';
  const coachingIcon = '/icons/coachingIcon.svg';

  return (
    <div className="absolute w-60 h-52 bg-white top-[55%] right-[10%] rounded-sm flex flex-col justify-between py-4">
      {/* Subjects */}
      <div className='px-4 flex  items-center'>
        <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF9E8' }}>
          <img src={bookIcon} alt="Book Icon" />
        </div>
        <div className='mx-2' >
          <h3 className='text-sm' style={{color : "#5F5B53"}}>20 Subjects</h3>
          <p className='font-semibold text-md'>CBSE Syllabus</p>
        </div>
      </div>
      <div className='px-4 flex items-center'>
        <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCEFFF' }}>
          <img src={bookIcon2} alt="Book Icon 2" />
        </div>
        <div className='mx-2' >
          <h3 className='text-sm' style={{color : "#5F5B53"}}>6 Groups of Subjects</h3>
          <p className='font-semibold text-md'>IB Board</p>
        </div>
      </div>
      <div className='px-4 flex items-center'>
        <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#EBEAFF' }}>
          <img src={coachingIcon} alt="Coaching Icon" />
        </div>
          <div className='mx-2' >
          <h3 className='text-sm' style={{color : "#5F5B53"}}>10 Staffs</h3>
          <p className='font-semibold text-md'>Teachers</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

