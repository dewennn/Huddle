import React, { useContext, useEffect } from 'react'
import { FetchFriendRequests } from '../../Context/FetchFriendRequests'

const FriendRequests = () => {
  const { friendRequests, fetchSentFriendRequest } = useContext(FetchFriendRequests)

  useEffect(() => {
    fetchSentFriendRequest()
    console.log(friendRequests)
  }, [friendRequests])

  return (
    <section>
      <div>
        <div className='px-3 py-5'>
          <h1 className='font-semibold text-sm'>
            SENT - 
          </h1>
        </div>

      </div>
    </section>
  )
}

export default FriendRequests