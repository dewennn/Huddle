import React, { useImperativeHandle, useRef, useState } from 'react'

const FriendListProfileMoreModal = ({ref}) => {
  const[open, setOpen] = useState(false)

  useImperativeHandle(ref, () => {
    return{
      open(){
        setOpen(true)
      }
    }
  })

  return (
    <>
    <div className={`absolute w-52 bg-3 flex flex-col p-2 rounded-lg right-[-220px] top-0 z-40
      ${open ? 'block' : 'hidden'}`}>
      <button className='w-full p-2 hover:bg-[#3c4046] hover:cursor-pointer rounded-lg text-start text-sm font-semibold'>
        Start Voice Call
      </button>

      <button className='w-full p-2 hover:bg-[#3c4046] hover:cursor-pointer rounded-lg text-start text-sm font-semibold'>
        Start Video Call
      </button>

      <button className='w-full p-2 text-red-400 hover:bg-[#df4b4b] hover:text-white hover:cursor-pointer rounded-lg text-start text-sm font-semibold'>
        Remove Friend
      </button>
    </div>

    <div className={`fixed top-0 left-0 right-0 bottom-0 z-20
      ${open ? 'block' : 'hidden'} hover:cursor-default`}
      onClick={() => setOpen(false)}>
    </div>
    </>
  )
}

export default FriendListProfileMoreModal