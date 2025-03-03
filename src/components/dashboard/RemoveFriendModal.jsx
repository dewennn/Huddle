import React, { useContext, useImperativeHandle, useRef } from 'react'
import { serverAddress } from '../../data'
import { FetchFriendList } from '../../Context/FriendListContext'

const RemoveFriendModal = ({ref, friendName, friendId}) => {
  const modal = useRef()
  const {setFriends} = useContext(FetchFriendList)

  useImperativeHandle(ref, () => {
    return{
      open(){
        modal.current.showModal()
      }
    }
  })

  const deleteFriend = async () => {
    console.log(JSON.stringify({
      'friendId': friendId
    }))

    const response = await fetch(serverAddress + '/api/user/remove_friend', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        'friendId': friendId
      }),
      credentials: 'include'
    })

    if(response.ok === true){
      modal.current.close()
      setFriends(friends => friends.filter(f => f.id != friendId))
    }
}

  const handleClose = (event) => {
    if(event.target = modal.current) modal.current.close()
  }

  return (
    <dialog
      style={{
        left: 'calc(50% - 235px)'
      }}
      className='top-1/3 w-[570px] bg-2 p-4 rounded-lg backdrop:bg-black backdrop:opacity-50 hover:cursor-default text-white'
      ref={modal}
    >
      <div className='w-full p-4 bg-2'>
        <div className='pb-5'>
          <h1 className=''>Remove '{friendName}'</h1>
          <p className='mt-2'>Are you sure you want to remove {friendName} from your friends?</p>
        </div>

        <div className='w-full flex justify-end gap-3'> 
          <button onClick={handleClose} className='font-semibold bg-amber-600 p-2 rounded-lg hover:cursor-pointer'>Cancel</button>
          <button className='font-semibold bg-red-500 p-2 rounded-lg hover:cursor-pointer' onClick={deleteFriend}>Remove Friend</button>
        </div>
      </div>
    </dialog>
  )
}

export default RemoveFriendModal