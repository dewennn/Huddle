import React, { useEffect, useState } from 'react'
import InfobarDashboard from './sidebar/dashboardPage/InfobarDashboard'
import UserNav from './UserNav'
import FriendChat from './sidebar/dashboardPage/FriendChat'
import { serverAddress } from '../data'

const Sidebar = () => {
  const[friends, setFriends] = useState([])

  const getFriends = async () => {
    try {
      const response = await fetch(serverAddress + '/api/user/friends', {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(!response.ok) throw new Error("Failed to fetch user friends")

      const data = await response.json()

      setFriends(data)
    } catch (error) {
      console.error("Error fetching user data: ", error)
    }
  }

  useEffect(() => {
      getFriends()
    }, [])
  
  // Component
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