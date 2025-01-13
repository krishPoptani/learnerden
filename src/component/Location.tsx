import React from 'react'

const Location = () => {
  return (
    <div className="w-full h-48 border border-gray-300 rounded-lg overflow-hidden">
  <iframe
    className="w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345094106!2d-122.42005878468358!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e3b1e7%3A0x3ed9b3f4c6e43573!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1697392176478!5m2!1sen!2sus"
    loading="lazy"
  ></iframe>
</div>
  )
}

export default Location
