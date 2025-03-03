import React, { useContext, useEffect } from 'react'
import { FriendRequestsContext } from '../../Context/FriendRequestsContext'
import FriendRequestProfile from './FriendRequestProfile'

const FriendRequests = () => {
  const { sentFriendRequests, fetchSentFriendRequest, receivedFriendRequests, fetchReceivedFriendRequest } = useContext(FriendRequestsContext)

  useEffect(() => {
    fetchSentFriendRequest()
    fetchReceivedFriendRequest()
  }, [])

  return (
    <section className='p-3'>
      <div>
        {
          sentFriendRequests.length > 0 ?
          <>
            <div className='px-3 py-5'>
              <h1 className='font-semibold text-sm'>
                SENT - {sentFriendRequests.length}
              </h1>
            </div>

            <div>
              {sentFriendRequests.map(f => 
                <FriendRequestProfile
                  key={f.id}
                  id={f.id}
                  displayName={f.displayName}
                  username={f.username}
                  profilePicture={f.profilePictureUrl}
                  status={f.userStatus}
                  receiver={false}
                />
              )}
            </div>
          </> : <></>
        }

        {
          receivedFriendRequests.length > 0 ?
          <>
            <div className='px-3 py-5'>
              <h1 className='font-semibold text-sm'>
                RECEIVED - {receivedFriendRequests.length}
              </h1>
            </div>

            <div>
              {receivedFriendRequests.map(f => 
                <FriendRequestProfile
                  key={f.id}
                  id={f.id}
                  displayName={f.displayName}
                  username={f.username}
                  profilePicture={f.profilePictureUrl}
                  status={f.userStatus}
                  receiver={true}
                />
              )}
            </div>
          </> : <></>
        }
      </div>
    </section>
  )
}

export default FriendRequests