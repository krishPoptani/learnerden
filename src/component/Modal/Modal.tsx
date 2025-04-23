import React, { useEffect } from 'react'

interface ModalProps {
  onClose: () => void
  header: string
  width?: string
  height?: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ onClose, header, width, height, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const handleClose = () => onClose()

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999999]"
    >
      <div
        className="bg-white rounded-lg overflow-hidden relative scrollbar-hide"
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between text-white px-6 py-4" style={{ background: 'linear-gradient(96deg, #3e4fbb -14.71%, #c32e6b 100%)' }}  >
          <span className="text-lg font-semibold truncate">{header}</span>
          <button
            onClick={handleClose}
            className="text-2xl leading-none hover:opacity-80 focus:outline-none"
          >
            ×
          </button>
        </div>
        <div className="p-6 max-h-[calc(100vh-150px)] overflow-y-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal

