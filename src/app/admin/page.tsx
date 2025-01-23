'use client'
import CustomButton from '@/component/Button';
import Input from '@/component/Input';
import Login from '@/component/Login'
import React, {useState} from 'react'

const Admin = () => {
  const [isLogin, setIsLogin] = useState(false);

    const [contactInfo, setContactInfo] = useState({
    phone: '',
    email: '',
    address : '',
    facebookLink : '',
    twitterLink: '',
    linkedinLink : '',
    instagramLink : ''
  });


    const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setContactInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      console.log("Contact Info", contactInfo);
    }
  
  return (
    <div>
      {/* {!isLogin ? <Login setIsLogin={setIsLogin}/> :( */}
      <div className='max-w-7xl mx-auto h-screen'>
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-4 mb-8 lg:gap-8">
            <Input
              label="Phone"
              name="phone"
              placeholder="Enter your phone number comma seprated"
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
              placeholder="Enter your facebook"
              value={contactInfo.facebookLink}
              onChange={handleContactInfoChange}
            />
            <Input
              label="Twitter Link"
              name="twitterLink"
              placeholder="Enter your twitter"
              value={contactInfo.twitterLink}
              onChange={handleContactInfoChange}
            />
            <Input
              label="LinkedIn Link"
              name="linkedinLink"
              placeholder="Enter your LinkedIn"
              value={contactInfo.linkedinLink}
              onChange={handleContactInfoChange}
            />
            <Input
              label="Instagram Link"
              name="instagramLink"
              placeholder="Enter your Instagram"
              value={contactInfo.instagramLink}
              onChange={handleContactInfoChange}
              required
            />
          </div>
          <CustomButton label='Update Contact' color="#fff" onClick={(e : React.MouseEvent<HTMLButtonElement> ) =>{handleClick(e)}}></CustomButton>
        </form>
      </div>
      {/* )} */}
    </div>
  )
}

export default Admin