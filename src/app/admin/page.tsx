'use client'
import CustomButton from '@/component/Button';
import Input from '@/component/Input';
import Login from '@/component/Login';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    phone: '',
    email: '',
    address: '',
    facebookLink: '',
    twitterLink: '',
    linkedinLink: '',
    instagramLink: '',
  });

  const contactUsData = useSelector((state: any) => state?.contact);

  // Prefill contactInfo state when contactUsData changes
  useEffect(() => {
    if (contactUsData) {
      setContactInfo({
        phone: contactUsData?.phone || '',
        email: contactUsData?.email || '',
        address: contactUsData?.address || '',
        facebookLink: contactUsData?.facebookLink || '',
        twitterLink: contactUsData?.twitterLink || '',
        linkedinLink: contactUsData?.linkedinLink || '',
        instagramLink: contactUsData?.instagramLink || '',
      });
    }
  }, [contactUsData]);

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Contact Info', contactInfo);
  };

  return (
    <div>
      {/* {!isLogin ? <Login setIsLogin={setIsLogin}/> :( */}
      <div className="max-w-7xl mx-auto h-screen">
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-4 mb-8 lg:gap-8">
            <Input
              label="Phone"
              name="phone"
              placeholder="Enter your phone number comma separated"
              value={contactInfo.phone}
              onChange={handleContactInfoChange}
              required
            />
            <Input
              label="Email"
              name="email"
              placeholder="Enter your email"
              value={contactInfo.email}
              onChange={handleContactInfoChange}
              required
            />
            <Input
              label="Address"
              name="address"
              placeholder="Enter your address"
              value={contactInfo.address}
              onChange={handleContactInfoChange}
              required
            />
            <Input
              label="Facebook Link"
              name="facebookLink"
              placeholder="Enter your Facebook link"
              value={contactInfo.facebookLink}
              onChange={handleContactInfoChange}
            />
            <Input
              label="Twitter Link"
              name="twitterLink"
              placeholder="Enter your Twitter link"
              value={contactInfo.twitterLink}
              onChange={handleContactInfoChange}
            />
            <Input
              label="LinkedIn Link"
              name="linkedinLink"
              placeholder="Enter your LinkedIn link"
              value={contactInfo.linkedinLink}
              onChange={handleContactInfoChange}
            />
            <Input
              label="Instagram Link"
              name="instagramLink"
              placeholder="Enter your Instagram link"
              value={contactInfo.instagramLink}
              onChange={handleContactInfoChange}
              required
            />
          </div>
          <CustomButton
            label="Update Contact"
            color="#fff"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
          />
        </form>
      </div>
      {/* )} */}
    </div>
  );
};

export default Admin;
