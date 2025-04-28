import React from 'react'

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex justify-center items-center">
        <div className="w-16 h-16 border-4 border-dashed border-[#2B3990] rounded-full animate-spin" />
      </div>
    </div>
  )
}

export default Loader
