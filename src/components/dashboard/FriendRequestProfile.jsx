import React, { useRef, useState } from 'react'

const FriendRequestProfile = (
  {id, profilePicture = 'default_profile_picture.png', displayName, username, status, receiver}
) => {

  // HANDLE NULL PROFILE PIC
    if(profilePicture == null) profilePicture = 'default_profile_picture.png'

  // SHOW / HIDE USERNAME
    const[hover, setHover] = useState(false)
  
  // FOR CANCEL BUTTON & ACCEPT BUTTON
    const cancelHintClass = 'absolute top-[-32px] left-[-16px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out duration-100'
    const hiddenCancelHint = 'absolute top-[-32px] left-[-16px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out opacity-0 duration-100'

    const acceptHintClass = 'absolute top-[-32px] left-[-16px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out duration-100'
    const hiddenAcceptHint = 'absolute top-[-32px] left-[-16px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out opacity-0 duration-100'

    const [cancelHint, setCancelHint] = useState(hiddenCancelHint)
    const [acceptHint, setAcceptHint] = useState(hiddenAcceptHint)

  // COMPONENT
  return (
    <>
    <div className='relative h-[68.8px]'>
      <div className='w-full h-[0.5px] absolute top-0 px-3'>
        <div className='w-full h-full bg-gray-500'></div>
      </div>

      <div
        className='flex items-center p-3 hover:border-0 hover:rounded-lg hover:cursor-pointer hover:bg-[#40444a] hover:absolute hover:left-0 hover:right-0 hover:pb-[15px] hover:z-10 justify-between'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* USER */}
          <div className='flex gap-4 items-center'>
            {/* Profile Picture */}
              <div className='w-11 h-11 rounded-full'><img className='w-full h-full rounded-full' src={profilePicture} alt="Profile Picture" /></div>

            {/* Name & Status */}
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <h1 className='text-sm font-bold'>{displayName}</h1>
                  <h2 className={`text-xs text-gray-400 ${hover ? 'opacity-100' : 'opacity-0'}`}>{username}</h2>
                </div>

                <p className='text-sm text-gray-400'>{status}</p>
              </div>
          </div>

        {/* THE BUTTONS */}
          <div className='flex gap-4'>
            <div className='relative'>
              <div className = {cancelHint}> Cancel </div>
              <button
                onMouseEnter={() => setCancelHint(cancelHintClass)}
                onMouseLeave={() => setCancelHint(hiddenCancelHint)}
                className={`w-10 h-10 p-3 rounded-full bg-3 ${hover ? 'bg-4' : ''} hover:cursor-pointer`}
              >
                <img className='invert w-full' src="icon/icon_close.png" alt="" />
              </button>
            </div>

            {receiver ?
              <div className='relative'>
                <div className= {acceptHint}> Accept </div>
                <button
                  onMouseEnter={() => setAcceptHint(acceptHintClass)}
                  onMouseLeave={() => setAcceptHint(hiddenAcceptHint)}
                  className={`w-10 h-10 p-3 rounded-full bg-3 ${hover ? 'bg-4' : ''} hover:cursor-pointer`}
                >
                  <img className='invert w-full' src="icon/icon_check.png" alt="" />
                </button>
              </div> : <></>
            }
          </div>
      </div>
    </div>
    </>
  )
}

export default FriendRequestProfile