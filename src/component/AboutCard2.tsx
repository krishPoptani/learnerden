import React from 'react';

interface AboutCardProp {
  icon?: string;
  title?: string;
  description?: string;
}

const AboutCard2: React.FC<AboutCardProp> = ({ icon, title, description }) => {
  return (
    <div className="py-4 px-4 bg-white text-white shadow-lg rounded-lg  lg:px-8 lg:py-8"
      style={{
      background: "linear-gradient(to bottom, #0C195E, #0F2592)"
      }}
    >
      {icon && <img src={icon} alt={title} className="w-12 h-12 mb-4 " />}
      {title && <h3 className="font-sen text-xl font-semibold  mb-2 lg:mb-3 lg:text-2xl">{title}</h3>}
      {description && <p className='text-sm'>{description}</p>}
    </div>
  );
};

export default AboutCard2;