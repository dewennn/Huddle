import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
    <div className="flex manrope text-gray-200">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Layout