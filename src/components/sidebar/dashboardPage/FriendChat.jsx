import React from 'react'

const FriendChat = ({img = 'default_profile_picture.png', username = 'anonymous user'}) => {
  if(img == null) img = 'default_profile_picture.png'

  return (
    <div className='flex gap-2 items-center p-2 m-2 rounded-lg hover:bg-[#373c42] hover:cursor-pointer'>
      <div className='w-8 h-8'><img className='w-full h-full' src={img} alt="" /></div>
      <h1 className='text-gray-400 text-sm'>{username}</h1>
    </div>
  )
}

export default FriendChat