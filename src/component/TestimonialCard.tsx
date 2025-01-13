import React, { FC } from 'react';

type TestimonialCardProps = {
  name?: string;
  position?: string;
  testimony?: string;
  rating?: number;
};

const TestimonialCard: FC<TestimonialCardProps> = ({ name, position, testimony, rating }) => {

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push('★');  // Full star
      } else {
        stars.push('☆');  // Empty star
      }
    }
    return stars.join('');
  };
  
  return (
    <div className="flex flex-col items-start p-6 border border-[#D9D9D9] rounded-lg bg-white w-full sm:w-80 lg:size-5/12">
      {rating !== undefined && (
        <p className="text-sm text-yellow-500 font-medium">
          {renderStars(rating).split('').map((star, index) => (
            <span key={index} className="mr-1">{star}</span>
          ))}
        </p>
      )}
      <h3 className="font-sen text-xl font-semibold lg:mt-2">{name || 'Anonymous'}</h3>
      <p className="text-sm  text-[#8B8B8B]">{position || 'Position not provided'}</p>
      <blockquote className="text-[#34364A] text-sm pt-4">{testimony || 'No testimony available.'}</blockquote>
    </div>
  );
};

export default TestimonialCard;
