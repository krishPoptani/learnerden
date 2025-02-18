'use client';

import React from 'react';
import { useSelector } from 'react-redux';

const telephoneIcon = '/icons/telephoneIcon.svg';
const emailIcon = '/icons/emailIcon.svg';
const mapIcon = '/icons/mapIcon.svg';
const facebookIcon = "/icons/facebook.svg";
const twitterIcon = '/icons/twitterIcon.svg';
const linkedinIcon = '/icons/linkedinIcon.svg';

const ContactLeftContainer = () => {
  // Fetch contact details from Redux state
  const contactUsData = useSelector((state: any) => state?.contact);

  const { phone, email, address, facebookLink, twitterLink, linkedinLink } = contactUsData || {};

  return (
    <div className="bg-[#09132D] bg-cover rounded-2xl" 
      style={{ backgroundImage: 'url(/images/purple-bg.png)' }}
      >
      <div className="px-4 pt-4 pb-4 lg:pb-4 lg:pt-8 lg:px-8 text-white">
        <h2 className="text-xl lg:text-2xl">Contact Information</h2>
        <p className="mt-1 lg:text-xl text-[#C9C9C9]">Say something to start a live chat!</p>
        <div className="flex flex-col gap-5 mt-10 lg:mt-20 lg:gap-10">
          {/* Phone Numbers */}
          {phone && phone.length > 0 && (
            <div className="flex gap-4 items-start">
              <img src={telephoneIcon} alt="Telephone Icon" />
              <span className="text-sm lg:text-base">{phone.join(', ')}</span>
            </div>
          )}

          {/* Email */}
          {email && email.length > 0 && (
            <div className="flex gap-4 items-start">
              <img src={emailIcon} alt="Email Icon" />
              <span className="text-sm lg:text-base">{email.join(', ')}</span>
            </div>
          )}

          {/* Address */}
          {address && (
            <div className="flex gap-4 items-start">
              <img src={mapIcon} alt="Map Icon" />
              <span className="text-sm lg:text-base">{address}</span>
            </div>
          )}
        </div>

        {/* Social Media Links */}
        {/* <div className="pt-8 lg:pt-20 pb-6 gap-6 flex">
          {facebookLink && (
            <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook Icon" />
            </a>
          )}
          {twitterLink && (
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter Icon" />
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ContactLeftContainer;
