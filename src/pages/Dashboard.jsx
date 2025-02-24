import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { TokenContext } from '../Context/Token'
import { serverAddress } from '../data'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  // JWT Token
  const { token } = useContext(TokenContext)

  // Request user data
  const getUserData = async () => {
    if(!token){
      navigate('/login')
      return
    }

    try {
      const response = await fetch(serverAddress + '/api/user/me', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${token}`
        }
      })

      if(!response.ok) throw new Error("Failed to fetch user data")
      
      const data = await response.json()
      console.log(data)
    }
    catch (error) {
      console.error("Error fetching user data: ", error)
    }
  }

  useEffect(() => {
    getUserData()
  }, [token])

  // Component
  return (
    <>
      <div className="flex manrope text-gray-200">
        <Sidebar />
        <div className="w-full bg-2">
            <header>
            {/* Left */} <div className='flex items-center gap-4 p-4 shadow-lg border-black h-16'>
              <h1 className='font-semibold px-4'>Friends</h1>

              <div className='h-5 w-[1px] bg-gray-400'></div>

              <button className='hover:cursor-pointer font-semibold hover:bg-[#424549] px-4 py-2 rounded-lg'>Online</button>

              <button className='hover:cursor-pointer font-semibold hover:bg-[#424549] px-4 py-2 rounded-lg'>All</button>

              <button className='hover:cursor-pointer font-semibold hover:bg-[#424549] px-4 py-2 rounded-lg'>Pending</button>

              <button className='hover:cursor-pointer font-semibold px-4 py-2 rounded-lg bg-emerald-700'>Add Friend</button>
            </div>

            {/* Right */} <div>
              
            </div>
          </header>
        </div>
      </div>
    </>
  )
}

export default Dashboard