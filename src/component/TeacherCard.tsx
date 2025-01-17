import React from 'react';

interface TeacherCardProps {
  teacherImg: string;
  rating: number;
  numOfRatings: number;
  teacherName: string;
  bio: string;
  subjects: string[];
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  teacherImg,
  rating,
  numOfRatings,
  teacherName,
  bio,
  subjects,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-72 text-center">
      {/* Teacher Image */}
      <img
        src={teacherImg}
        alt={teacherName}
        className="w-16 h-16 object-cover rounded-full mx-auto"
      />
      {/* Teacher Name */}
      {/* Teacher Rating and Number of Ratings */}
      {/* <div className="flex items-center justify-center mt-2">
        <span className="text-yellow-500 text-sm">
          {'⭐'}
        </span>
        <span className="text-gray-500 ml-2 text-sm text-semibold">{rating}</span> <span className="text-gray-500 ml-2 text-xs">({numOfRatings})</span>
      </div> */}
      <h3 className="text-xl font-semibold text-center mt-2">{teacherName}</h3>
      {/* Teacher Bio */}
      <p className="text-gray-700 text-sm mt-1 text-[#475569]">{bio}</p>
      {/* Teacher Subjects */}
      <div className="mt-4 flex gap-2 justify-center items-center">
          {subjects.map((subject, index) => (
          <div className="border border-1 border-[#323C4B] rounded-2xl px-2 py-1 text-xs text-[#323C4B]" key={index}>
            {subject}
          </div>
          ))}
      </div>
    </div>
  );
};

export default TeacherCard;
