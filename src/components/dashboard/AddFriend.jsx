import React, { useState } from 'react'
import { serverAddress } from '../../data'

const AddFriend = () => {
  const[targetUsername, setTargetUsername] = useState('')

  const handleChange = (e) => {
    setTargetUsername(e.target.value)
  }

  const addFriendHandler = async () => {
    const data = await fetch(serverAddress + '/api/user/add_friend', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "targetUsername":targetUsername
      }),
      credentials: "include"
    })

    console.log(data)
  }

  return (
    <div className='p-5'>
      <h1 className='font-semibold text-lg'>ADD FRIEND</h1>

      <p className='text-gray-400'>You can add friends with their Huddle username.</p>

      <form action={addFriendHandler} className='relative mt-2'>
        <input
          type="text"
          placeholder='Type in their username here.'
          className='w-full bg-3 rounded-lg p-4'
          value={targetUsername}
          onChange={handleChange}
          autoFocus
        />
        <div className='absolute right-0 top-0 bottom-0 flex items-center'>
          <button className='p-2 m-2 bg-emerald-700 hover:bg-emerald-600 font-semibold rounded-lg text-sm'>Send Friend Request</button>
        </div>
      </form>
    </div>
  )
}

export default AddFriend