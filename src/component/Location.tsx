import React from 'react'

const Location = () => {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13999.933624792126!2d77.16943344718064!3d28.690142983544835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d026a7df4da43%3A0xc682f58f03fc2507!2sSFS%20Flats!5e0!3m2!1sen!2sin!4v1737033596654!5m2!1sen!2sin"
    loading="lazy"
  ></iframe>
</div>
  )
}

export default Location
