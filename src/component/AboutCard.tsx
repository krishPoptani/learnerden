import React from 'react';

interface AboutCardProp {
  icon?: string;
  title?: string;
  description?: string;
}

const AboutCard: React.FC<AboutCardProp> = ({ icon, title, description }) => {
  return (
    <div className="py-4 bg-white  border border-[#D9D9D9] shadow-lg rounded-lg px-4 lg:px-8">
      {icon && <img src={icon} alt={title} className="w-12 h-12 mb-4 " />}
      {title && <h3 className="text-sm lg:text-xl font-semibold  mb-2">{title}</h3>}
      {description && <p className="text-sm lg:text-base text-[#34364A]">{description}</p>}
    </div>
  );
};

export default AboutCard;
