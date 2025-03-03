import React, { useContext, useEffect, useState } from 'react'
import InfobarDashboard from './sidebar/dashboardPage/InfobarDashboard'
import UserNav from './UserNav'

const Sidebar = () => {  

  // COMPONENT
  return (
    <section className='flex'>
      <section className='w-16 h-screen bg-4 flex flex-col p-2'>
        <div className='p-2 bg-amber-600 rounded-2xl'><img src="/huddle.png" alt="" /></div>
      </section>

      <section className='w-64 h-screen bg-3 relative'>
        <InfobarDashboard/>
        
        <UserNav />
      </section>
    </section>
  )
}

export default Sidebar