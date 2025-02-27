import React, { act, useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { serverAddress } from '../data'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/User'
import AddFriend from '../components/dashboard/AddFriend'
import FetchFriendListProvider from '../Context/FetchFriendList'

const Dashboard = () => {
  // Hooks
  const navigate = useNavigate()
  const {setUsername} = useContext(UserContext)

  // Request user data
  const getUserData = async () => {
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
    getUserData()
  }, [])

  // Navigation
  const[active, setActive] = useState('online')

  // COMPONENT
  return (
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
                ${active == 'online' ? 'bg-[#5a5e63]' : 'hover:cursor-pointer hover:bg-[#424549]'}`}
                onClick={() => setActive('online')}
              >
                Online
              </button>

              <button
                className={`font-semibold px-4 py-2 rounded-lg
                ${active == 'all' ? 'bg-[#5a5e63]' : 'hover:cursor-pointer hover:bg-[#424549]'}`}
                onClick={() => setActive('all')}
              >
                All
              </button>

              <button
                className={`font-semibold px-4 py-2 rounded-lg
                ${active == 'pending' ? 'bg-[#5a5e63]' : 'hover:cursor-pointer hover:bg-[#424549]'}`}
                onClick={() => setActive('pending')}
              >
                Pending
              </button>

              <button
                className={`font-semibold px-4 py-2 rounded-lg
                ${active == 'addFriend' ? 'text-emerald-400' : 'bg-emerald-700 hover:cursor-pointer'}`}
                onClick={() => setActive('addFriend')}
              >
                Add Friend
              </button>
            </div>

            {/* Right */} <div>
              
            </div>
          </header>

          <main className='flex'>
            <section className='w-full'>
              {active == 'addFriend' ? <AddFriend/> : <></>}
            </section>
            
            <section className='w-[500px] border-l border-gray-500 p-5' style={{height: 'calc(-64px + 100vh)'}}>
              <h1 className='font-semibold text-lg'>Active Now</h1>
            </section>
          </main>
        </div>
      </div>
    </FetchFriendListProvider>
  )
}

export default Dashboard