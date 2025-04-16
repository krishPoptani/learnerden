import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import React, { ReactNode } from 'react'

interface UserDashboardProps{
  children: ReactNode
}

const UserDashboard = ({ children }: UserDashboardProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default UserDashboard
