import React, { useContext, useEffect, useState } from 'react'
import InfobarDashboard from './sidebar/dashboardPage/InfobarDashboard'
import UserNav from './UserNav'
import FriendChat from './sidebar/dashboardPage/FriendChat'
import { serverAddress } from '../data'
import { FetchFriendList } from '../Context/FetchFriendList'

const Sidebar = () => {
  // FETCH FRIEND LIST
    const {friends, fetchFriends} = useContext(FetchFriendList)

    // call the fetch function
    useEffect(() => {
        fetchFriends()
      }, [])
  

  // COMPONENT
  return (
    <section className='flex'>
      <section className='w-16 h-screen bg-4 flex flex-col p-2'>
        <div className='p-2 bg-highlight rounded-2xl'><img src="huddle.png" alt="" /></div>
      </section>

      <section className='w-64 h-screen bg-3 relative'>
        <InfobarDashboard/>
        {
          friends.map(f => <FriendChat key={f.id} img={f.profilePictureUrl} username={f.username}/>)
        }
        <UserNav />
      </section>
    </section>
  )
}

export default Sidebar