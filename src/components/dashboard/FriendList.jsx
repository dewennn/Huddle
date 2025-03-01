import React, { useContext, useEffect } from 'react'
import { FetchFriendList } from '../../Context/FetchFriendList'
import FriendListProfile from './FriendListProfile'

const FriendList = ({filter = 'ALL'}) => {
  const {friends, fetchFriends} = useContext(FetchFriendList)

  useEffect(() => fetchFriends, [])

  return (
    <section className='px-5 py-5'>
      <div className='px-3 py-5'>
        <h1 className='font-semibold text-sm'>
          {filter.toUpperCase() == 'ALL' ? 'ALL FRIENDS' : filter.toUpperCase()} -- {friends.length}
        </h1>
      </div>

      <div>
        {friends.map(f => 
          <FriendListProfile
            key={f.id}
            displayName={f.displayName}
            username={f.username}
            profilePicture={f.profilePictureUrl}
            status={f.userStatus}
          />
        )}
      </div>
    </section>
  )
}

export default FriendList