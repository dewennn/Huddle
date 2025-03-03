import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { serverAddress } from '../data'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/User'
import AddFriend from '../components/dashboard/AddFriend'
import FriendList from '../components/dashboard/FriendList'
import FriendRequests from '../components/dashboard/FriendRequests'
import FetchFriendListProvider from '../Context/FriendListContext'
import FriendRequestsContextProvider from '../Context/FriendRequestsContext'

const DashboardHeaderButton = ({section, title, activeStyle, hoverStyle, onClickFunc, filter, defaultStyle = ''}) => {
  return  <button
    className={`font-semibold px-2 py-1 rounded-sm
    ${section == filter ? activeStyle : 'hover:cursor-pointer ' + hoverStyle} ${defaultStyle}`}
    onClick={onClickFunc}
  >
    {title}
  </button>
}

const Dashboard = () => {
  // MISC HOOKS
    const navigate = useNavigate()

  // HEADER NAVIGATION
    const[section, setSection] = useState('online')

  // COMPONENT
  return (
    <div className="w-full bg-2">
      <header>
        {/* LEFT */}
          <div className='flex items-center gap-4 p-2 shadow-lg border-black h-14 text-sm'>
            <h1 className='font-semibold px-6'>Friends</h1>
            <div className='h-5 w-[1px] mr-6 bg-gray-400'></div>

            <DashboardHeaderButton title={'Online'} activeStyle={'bg-[#424549]'} hoverStyle={'hover:bg-[#424549]'} onClickFunc={() => setSection('online')} section={section} filter={'online'}/>

            <DashboardHeaderButton title={'All'} activeStyle={'bg-[#424549]'} hoverStyle={'hover:bg-[#424549]'} onClickFunc={() => setSection('all')} section={section} filter={'all'}/>

            <DashboardHeaderButton title={'Pending'} activeStyle={'bg-[#424549]'} hoverStyle={'hover:bg-[#424549]'} onClickFunc={() => setSection('pending')} section={section} filter={'pending'}/>

            <DashboardHeaderButton title={'Add Friend'} activeStyle={'text-emerald-400 bg-transparent'} hoverStyle={''} onClickFunc={() => setSection('addFriend')} section={section} filter={'addFriend'} defaultStyle='bg-emerald-700'/>                
          </div>

        {/* RIGHT */}
          <div>
            
          </div>
      </header>

      <main className='flex'>
        <section className='w-full'>
          {section == 'online' || section == 'all' ? <FriendList filter={section}/> : <></>}
          {section == 'pending' ? <FriendRequests/> : <></>}
          {section == 'addFriend' ? <AddFriend/> : <></>}
        </section>
        
        <section className='w-[500px] border-l border-gray-500 p-5' style={{height: 'calc(-64px + 100vh)'}}>
          <h1 className='font-semibold text-lg'>Active Now</h1>
        </section>
      </main>
    </div>
  )
}

export default Dashboard