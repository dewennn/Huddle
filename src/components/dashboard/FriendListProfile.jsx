import React, { useRef, useState } from 'react'
import FriendListProfileMoreModal from './FriendListProfileMoreModal'

const FriendListProfile = ({id, profilePicture = 'default_profile_picture.png', displayName, username, status}) => {
  // HANDLE PROPS
    if(profilePicture == null) profilePicture = 'default_profile_picture.png'
    if(status == null) status = 'Offline'

  // SHOW / HIDE USERNAME
    const[hover, setHover] = useState(false)
  
  // FOR MESSAGE & MORE BUTTON
    const msgBtn = useRef()
    const moreBtn = useRef()

    const msgBtnClass = 'absolute top-[-32px] left-[-22px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out duration-100'
    const moreBtnClass = 'absolute top-[-32px] left-[-10px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out duration-100'
    const hiddenMsgBtn = 'absolute top-[-32px] left-[-22px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out opacity-0 duration-100'
    const hiddenMoreBtn = 'absolute top-[-32px] left-[-10px] text-sm bg-4 px-3 py-1 rounded-full font-semibold transition ease-in-out opacity-0 duration-100'

    const moreRef = useRef()

  // COMPONENT
  return (
    <div className='relative h-[68.8px]'>

      <div className='w-full h-[0.1px] absolute top-0 px-3'>
        <div className='w-full h-full bg-gray-500'></div>
      </div>

      <div
        className='flex items-center p-3 hover:border-0 hover:rounded-lg hover:cursor-pointer hover:bg-[#40444a] hover:absolute hover:left-0 hover:right-0 hover:pb-[15px] hover:z-10 justify-between'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* USER */}
          <div className='flex gap-4 items-center'>
            {/* PROFILE PICTURE */}
              <div className='w-9 h-9 rounded-full'><img className='w-full h-full rounded-full object-cover' src={profilePicture} alt="Profile Picture" /></div>

            {/* NAME & STATUS */}
              <div className='flex flex-col justify-between'>
                <div className='flex gap-2 items-end'>
                  <h1 className='text-sm font-bold'>{displayName}</h1>
                  <h2 className={`text-xs text-gray-300 font-semibold ${hover ? 'opacity-100' : 'opacity-0'} mb-[0.5px]`}>{username}</h2>
                </div>

                <p className='text-sm text-gray-400'>{status}</p>
              </div>
          </div>

        {/* NAVIGATION */}
          <div className='flex gap-4'>
            {/* MESSAGE BTN */}
              <div className='relative'>
                <div ref={msgBtn} className= {hiddenMsgBtn}> Message </div>
                <button
                    onMouseEnter={() => msgBtn.current.className = msgBtnClass}
                    onMouseLeave={() => msgBtn.current.className =  hiddenMsgBtn}
                    className={`w-10 h-10 p-3 rounded-full bg-3 ${hover ? 'bg-4' : ''} hover:cursor-pointer`}
                  >
                    <img className='invert' src="icon/icon_message.png" alt="" />
                  </button>
              </div>

            {/* MORE BTN */}
              <div className='relative'>
                <div ref={moreBtn} className= {hiddenMoreBtn}> More </div>
                <button
                  onMouseEnter={() => moreBtn.current.className = moreBtnClass}
                  onMouseLeave={() => moreBtn.current.className =  hiddenMoreBtn}
                  className={`w-10 h-10 p-3 rounded-full bg-3 ${hover ? 'bg-4' : ''} hover:cursor-pointer`}
                  onClick={() => moreRef.current.open()}
                >
                  <img className='invert' src="icon/icon_more.png" alt="" />
                </button>
                <FriendListProfileMoreModal ref={moreRef} displayName={displayName} friendId={id}/>
              </div>

          </div>

      </div>

    </div>
  )
}

export default FriendListProfile