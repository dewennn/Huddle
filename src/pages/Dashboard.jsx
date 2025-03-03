import React, { act, useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { serverAddress } from '../data'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/User'
import AddFriend from '../components/dashboard/AddFriend'
import FetchFriendListProvider from '../Context/FetchFriendList'
import FriendList from '../components/dashboard/FriendList'
import TextChat from './TextChat'
import FriendRequests from '../components/dashboard/FriendRequests'
import FetchFriendRequestProvider from '../Context/FetchFriendRequests'

const Dashboard = () => {
  // MISC HOOKS
    const navigate = useNavigate()
    const {setUsername} = useContext(UserContext)

  // FETCH USER DATA
    const fetchUserData = async () => {
      try {
        const response = await fetch(serverAddress + '/api/user/me', {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          }
        })  

        if(!response.ok) throw new Error("Failed to fetch user data")
        
        const data = await response.json()
        setUsername(data["username"])
      }
      catch (error) {
        console.error("Error fetching user data: ", error)
      }
    }

    useEffect(() => {
      fetchUserData()
    }, [])

  // HEADER NAVIGATION
    const[section, setSection] = useState('online')

  // COMPONENT
  return (
    <FetchFriendRequestProvider>
    <FetchFriendListProvider>

      <div className="flex manrope text-gray-200">
        <Sidebar />
        <div className="w-full bg-2">
          <header>
            {/* Left */} <div className='flex items-center gap-4 p-4 shadow-lg border-black h-16'>
              <h1 className='font-semibold px-4'>Friends</h1>

              <div className='h-5 w-[1px] bg-gray-400'></div>

              <button
                className={`font-semibold px-4 py-2 rounded-lg
                ${section == 'online' ? 'bg-[#5a5e63]' : 'hover:cursor-pointer hover:bg-[#424549]'}`}
                onClick={() => setSection('online')}
              >
                Online
              </button>

              <button
                className={`font-semibold px-4 py-2 rounded-lg
                ${section == 'all' ? 'bg-[#5a5e63]' : 'hover:cursor-pointer hover:bg-[#424549]'}`}
                onClick={() => setSection('all')}
              >
                All
              </button>

              <button
                className={`font-semibold px-4 py-2 rounded-lg
                ${section == 'pending' ? 'bg-[#5a5e63]' : 'hover:cursor-pointer hover:bg-[#424549]'}`}
                onClick={() => setSection('pending')}
              >
                Pending
              </button>

              <button
                className={`font-semibold px-4 py-2 rounded-lg
                ${section == 'addFriend' ? 'text-emerald-400' : 'bg-emerald-700 hover:cursor-pointer'}`}
                onClick={() => setSection('addFriend')}
              >
                Add Friend
              </button>
            </div>

            {/* Right */} <div>
              
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
      </div>
      
    </FetchFriendListProvider>
    </FetchFriendRequestProvider>
  )
}

export default Dashboard