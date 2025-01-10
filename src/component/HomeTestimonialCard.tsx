import React from 'react';

interface HomeTestimonialCardProps {
  testimony ?: string,
  avatar: string;
  name: string;
  bio: string;
}

const HomeTestimonialCard: React.FC<HomeTestimonialCardProps> = ({ avatar, name, bio, testimony }) => {
  return (
    <div className="border border-[#EFF0F6] bg-white rounded-lg shadow-lg p-10 max-w-sm overflow-visible">
      {/* Testimonial Avatar */}
      <p className='text-[#6F6C90]'>{testimony}</p>
      <div className="flex items-center space-x-4 mt-5">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 object-cover rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-[#170F49]">{name}</h3>
          <p className="text-sm text-gray-500 text-[#6F6C90]">{bio}</p>
        </div>
      </div>
      {/* Testimonial Content */}
      {/* <div className="mt-4">
        <p className="text-gray-700 text-sm italic">"This is a testimonial text. It's great!"</p>
      </div> */}
    </div>
  );
};

export default HomeTestimonialCard;
