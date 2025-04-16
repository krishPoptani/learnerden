import AdminHeader from '@/component/Admin/header/Header'
import React, { ReactNode } from 'react'

interface AdminDashboardProps{
  children: ReactNode
}

const AdminSide = ({children} : AdminDashboardProps) => {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  )
}

export default AdminSide