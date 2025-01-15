'use client';

import React, { useState } from 'react';
import Input from './Input';
import RadioButton from './RadioButton';
import CustomButton from './Button';

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    class: '',
    syllabus: '', // Add syllabus for radio button
  });

  const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    try {
      console.log("Button is Clicked", contactInfo)
    } catch (error : any) {
      console.error(error.message);
    }
  }

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='px-4 pt-4 pb-4 lg:pb-4 lg:pt-8 lg:px-8'>
      <div className="flex flex-col space-y-6">
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-4 mb-8 lg:gap-8">
            <Input
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              value={contactInfo.firstName}
              onChange={handleContactInfoChange}
              required
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              value={contactInfo.lastName}
              onChange={handleContactInfoChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8 lg:gap-8">
            <Input
              label="Email"
              name="email"
              placeholder="Enter your Email"
              type="email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              placeholder="Enter your Phone no."
              value={contactInfo.phone}
              onChange={handleContactInfoChange}
              required
            />
          </div>

          {/* Radio Buttons for syllabus */}
          <div>
            <p className="text-[#011C2A] font-semibold  mb-2">Select Syllabus?</p>
            <div className="flex space-x-6 mb-8">
              <RadioButton
                name="syllabus"
                value="CBSE"
                label="CBSE"
                checked={contactInfo.syllabus === 'CBSE'}
                onChange={handleContactInfoChange}
              />
              <RadioButton
                name="syllabus"
                value="IBBoard"
                label="IB Board"
                checked={contactInfo.syllabus === 'IBBoard'}
                onChange={handleContactInfoChange}
              />
              <RadioButton
                name="syllabus"
                value="GeneralInquiry"
                label="General Inquiry"
                checked={contactInfo.syllabus === 'GeneralInquiry'}
                onChange={handleContactInfoChange}
              />
            </div>
          </div>
          <div className='mb-8'>
          <Input
            label="Class"
            name="class"
            placeholder="Enter your class"
            value={contactInfo.class}
            onChange={handleContactInfoChange}
            required
          />
          </div>
          <div className='mb-8'>
          <Input
            label="Message"
            name="message"
            placeholder="Enter your message..."
            value={contactInfo.message}
            onChange={handleContactInfoChange}
          />
          </div>
          <CustomButton label='Send Message' color="#fff" onClick={(e : React.MouseEvent<HTMLButtonElement> ) =>{handleSubmit(e)}}/>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
