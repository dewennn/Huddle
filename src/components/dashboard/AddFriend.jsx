import React, { useState } from 'react'
import { serverAddress } from '../../data'

const AddFriend = () => {
  // FORM HANDLER

    // handle user form value and change
      const[targetUsername, setTargetUsername] = useState('')

      const handleChange = (e) => {
        setTargetUsername(e.target.value)
      }
    
    // function to update UI after fetch
      const[requestSent, setRequestSent] = useState(false)
    
    // fetch function
      const addFriendHandler = async () => {
        const response = await fetch(serverAddress + '/api/user/send_friend_request', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "targetUsername": targetUsername
          }),
          credentials: "include"
        })

        if(response['ok'] == true){
          setRequestSent(true)
        }

        console.log(response)
      }

  // COMPONENT
  return (
    <div className='p-5'>
      {/* Title */}
        <h1 className='font-semibold text-lg'>ADD FRIEND</h1>
        <p className='text-gray-400'>You can add friends with their Huddle username.</p>

      {/* Form for friend fetch */}
        <form action={addFriendHandler} className='relative mt-2'>
          <input
            type="text"
            placeholder='Type in their username here.'
            value={targetUsername}
            onChange={handleChange}
            autoFocus
            className={`w-full bg-3 rounded-lg p-4 ${
              requestSent ? 'border border-emerald-400' : ''
            }`}
          />

          <div className='absolute right-0 top-0 bottom-0 flex items-center'>
            <button
              type='submit'
              className={`p-2 m-2 bg-emerald-700 hover:bg-emerald-600 font-semibold rounded-lg text-sm ${
                targetUsername.length > 0 ? 'opacity-100' : 'opacity-70'
              }`}
            >
              Send Friend Request
            </button>
          </div>
        </form>
      
      {/* Confirmation Message */}
        <p className={`text-emerald-400 mt-2 ${requestSent ? 'block' : 'hidden'}`}>
          Success! Your friend request to <b>{targetUsername}</b> was sent.
        </p>
    </div>
  )
}

export default AddFriend