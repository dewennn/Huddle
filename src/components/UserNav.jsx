import React, { useContext } from 'react'
import { UserContext } from '../Context/User'

const UserNav = ({profilePicture = 'default_profile_picture.png', status = 'Online'}) => {
  const {username} = useContext(UserContext)
  console.log(username)

  return (
    <section className='absolute bottom-0 left-0 right-0 bg-4 flex items-center p-2'>
      <div className='w-full flex gap-2 items-center'>
        {/* Profile Picture */} <div className='w-8 h-8'>
        <img src={profilePicture} alt="Profile Picture" className='w-full h-full'/>
        </div>
        
        {/* Username & Status */} <div>
          <h1 className='text-[14px] font-semibold'>{username}</h1>
          <p className='text-[11px] text-gray-300'>{status}</p>
        </div>
      </div>
        
        {/* Navigations */} <nav className='w-full'>

        </nav>
    </section>
  )
}

export default UserNav