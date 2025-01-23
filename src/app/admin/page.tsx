'use client';

import React, { useEffect, useState } from 'react';
import { useGetContactUsQuery, useUpdateContactUsMutation } from '../../../slices/contactForm'; // Adjust the path based on your project structure
import Input from '@/component/Input';

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
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  if (isFetching) {
    return <p>Loading contact information...</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update Contact Information</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <Input
          type="text"
          name="phone"
          placeholder="Enter phone numbers (comma-separated)"
          value={contactInfo.phone}
          label="Phone"
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="email"
          placeholder="Enter emails (comma-separated)"
          value={contactInfo.email}
          onChange={handleInputChange}
          label="Email"
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Enter address"
          value={contactInfo.address}
          onChange={handleInputChange}
          label="Address"
          required
        />
        <Input
          type="text"
          name="facebookLink"
          placeholder="Facebook link"
          value={contactInfo.facebookLink}
          onChange={handleInputChange}
          label="Facebook Link"
        />
        <Input
          type="text"
          name="twitterLink"
          placeholder="Twitter link"
          value={contactInfo.twitterLink}
          onChange={handleInputChange}
          label="Twitter Link"
        />
        <Input
          type="text"
          name="linkedinLink"
          placeholder="LinkedIn link"
          value={contactInfo.linkedinLink}
          onChange={handleInputChange}
          label="LinkedIn Link"
        />
        {/* <input
          type="text"
          name="instagramLink"
          placeholder="Instagram link"
          value={contactInfo.instagramLink}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        /> */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Contact'}
        </button>
      </form>
      {isSuccess && <p className="text-green-500 mt-2">Contact updated successfully!</p>}
      {isError && <p className="text-red-500 mt-2">Failed to update contact.</p>}
    </div>
  );
};

export default UpdateContactForm;
