import React, { useContext, useEffect } from 'react'
import { FetchFriendList } from '../../Context/FetchFriendList'
import FriendListProfile from './FriendListProfile'

const FriendList = ({filter = 'ALL'}) => {
  const {friends, fetchFriends} = useContext(FetchFriendList)

  useEffect(() => fetchFriends, [])

  return (
    <section className='p-5'>
      {/* ONLINE / ALL - NUMBER OF FRIEND SECTION */}
        <div className='px-3 py-5'>
          <h1 className='font-semibold text-sm'>
            {filter.toUpperCase() == 'ALL' ? 'ALL FRIENDS' : filter.toUpperCase()} -- {' '}
            {
              filter === 'online' ?
                friends.filter(friend => friend.onlineStatus === 'online').length
                :
                friends.length
            }
          </h1>
        </div>
      
      {/* MAP FRIEND LIST */}
        <div>
          {filter === 'online' ?
            friends.map(f => f.onlineStatus == 'online' ?
              <FriendListProfile
                key={f.id}
                id={f.id}
                displayName={f.displayName}
                username={f.username}
                profilePicture={f.profilePictureUrl}
                status={f.userStatus}
              /> : <></>
            )
            :
            friends.map(f =>
              <FriendListProfile
                key={f.id}
                id={f.id}
                displayName={f.displayName}
                username={f.username}
                profilePicture={f.profilePictureUrl}
                status={f.userStatus}
              />)
          }
        </div>
    </section>
  )
}

export default FriendList