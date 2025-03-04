import React, { useContext, useEffect, useState } from 'react'
import InfobarDashboard from './sidebar/dashboardPage/InfobarDashboard'
import UserNav from './UserNav'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => { 
  const navigate = useNavigate()

  

  // COMPONENT
  return (
    <section className='flex'>
      <section className='w-16 h-screen bg-4 flex flex-col p-2'>
        <div className='p-2 bg-amber-600 rounded-2xl'><img src="/huddle.png" alt="" /></div>
      </section>

      <section className='w-64 h-screen bg-3 relative'>
        <InfobarDashboard/>
        
        <div className='pl-2'>
          <button
            className='w-full p-4 rounded-l-md text-md font-semibold text-start hover:cursor-pointer hover:bg-[#2f3338] flex items-center gap-4 opacity-70 hover:opacity-100'
            onClick={() => navigate('/')}
          >
            <div className='w-7 invert'><img className='w-full' src="/icon/icon_friends.png" alt="" /></div>
            <p>Friends</p>
          </button>
        </div>

        <UserNav />
      </section>
    </section>
  )
}

export default Sidebar