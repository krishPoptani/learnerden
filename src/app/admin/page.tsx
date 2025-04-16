'use client';

import React, { useEffect, useState } from 'react';
import { useGetContactUsQuery, useUpdateContactUsMutation } from '../../../slices/contactForm'; // Adjust the path based on your project structure
import Input from '@/component/Input';
import { toast } from 'react-hot-toast';
import Login from '@/component/Login';
import UserDashboard from '@/routes/userside/page';

const UpdateContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: '',
    email: '',
    address: '',
    facebookLink: '',
    twitterLink: '',
    linkedinLink: '',
    instagramLink: '',
  });

  const { data: existingContact, isLoading: isFetching } = useGetContactUsQuery(); // Fetch existing data
  const [updateContactUs, { isLoading, isSuccess, isError }] = useUpdateContactUsMutation();

  // Prefill the form when existingContact data is available
  useEffect(() => {
    if (existingContact) {
      setContactInfo({
        phone: existingContact.phone?.join(', ') || '', // Convert array to comma-separated string
        email: existingContact.email?.join(', ') || '',
        address: existingContact.address || '',
        facebookLink: existingContact.facebookLink || '',
        twitterLink: existingContact.twitterLink || '',
        linkedinLink: existingContact.linkedinLink || '',
        instagramLink: existingContact.instagramLink || '',
      });
    }
  }, [existingContact]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateContactUs({
        phone: contactInfo.phone.split(',').map((num) => num.trim()), // Convert back to array
        email: contactInfo.email.split(',').map((email) => email.trim()),
        address: contactInfo.address,
        facebookLink: contactInfo.facebookLink || undefined,
        twitterLink: contactInfo.twitterLink || undefined,
        linkedinLink: contactInfo.linkedinLink || undefined,
        instagramLink: contactInfo.instagramLink || undefined,
      }).unwrap();
      toast.success('Form Submitted Successfully!');
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const [islogin, setIsLogin] = useState(false);

  if (isFetching) {
    return <p>Loading contact information...</p>;
  }

  return (
    <UserDashboard>
    <div>
          {islogin ? (<div className="py-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="mx-auto font-sen text-secondary text-center font-bold text-3xl lg:text-4xl">Update Contact Information</h2>
        <div className='mt-10 lg:mt-20  bg-white py-2 shadow-md mx-auto max-w-5xl rounded-6xl'>
      <form onSubmit={handleUpdate} className="max-w-4xl mx-auto px-4 pt-4 pb-4 lg:pt-8 lg:px-8 ">
        <div className='space-y-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <Input
          type="text"
          name="email"
          placeholder="Enter email ID (comma-separated)"
          value={contactInfo.email}
          onChange={handleInputChange}
          label="Email"
          required
        />
        <Input
          type="text"
          name="phone"
          placeholder="Enter phone numbers (comma-separated)"
          value={contactInfo.phone}
          label="Phone"
          onChange={handleInputChange}
          required
        />
        </div>

        <Input
          type="text"
          name="address"
          placeholder="Enter address"
          value={contactInfo.address}
          onChange={handleInputChange}
          label="Address"
          required
        />
        </div>
        <div className='relative'>
        <h2 className='text-2xl text-[#4A3AFF] mt-10 mb-3'>Social Platforms</h2>
          <div className="absolute top-10 lg:top-7 left-0 bg-primary h-0.5" style={{ width: '2%' }}></div>
        </div>
        <div className='space-y-10'>
        <Input
          type="text"
          name="facebookLink"
          placeholder="Facebook link"
          value={contactInfo.facebookLink}
          onChange={handleInputChange}
          label="Facebook"
        />
        <Input
          type="text"
          name="twitterLink"
          placeholder="Twitter link"
          value={contactInfo.twitterLink}
          onChange={handleInputChange}
          label="Twitter"
        />
        <Input
          type="text"
          name="linkedinLink"
          placeholder="LinkedIn link"
          value={contactInfo.linkedinLink}
          onChange={handleInputChange}
          label="LinkedIn"
        />
        {/* <input
          type="text"
          name="instagramLink"
          placeholder="Instagram link"
          value={contactInfo.instagramLink}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        /> */}
        <div className='flex justify-end'>
        <button
          type="submit"
          className="bg-[#4A3AFF] px-6 lg:px-10 py-4 font-medium transition duration-300 ease-in-out text-white rounded-3xl"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Contact'}
        </button>
        </div>
        </div>
      </form>
      </div>
    </div>
    </div>) : <Login setIsLogin={setIsLogin}/>}
    </div>
    </UserDashboard>
  );
};

export default UpdateContactForm;
