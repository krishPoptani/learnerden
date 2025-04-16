'use client'
import AdminDashboard from '@/routes/Admin/dashboard/Dashboard'
import AdminSide from '@/routes/adminside/page'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <AdminSide>
        <AdminDashboard />
      </AdminSide>
    </div>
  )
}

export default Dashboard