import React from 'react'

const FriendChat = ({
  img = '/default_profile_picture.png',
  username = 'anonymous user',
  message="Hello World",
  dateCreated = '1/23/25, 2:32 PM'
}) => {

  if(img == null) img = '/default_profile_picture.png'

  // DATE FUNC
    const formatDate = (dateString) => {
      if(!dateString) return
  
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "numeric",
        minute: "2-digit"
      }).format(date);
    }

  return (
    <div className='flex w-full gap-4 p-2 rounded-lg hover:bg-[#373c42] hover:cursor-pointer'>
      <div className='w-8 h-8 mt-1'><img className='w-full h-full rounded-full object-cover' src={img} alt="" /></div>

      <div>
        <div className='flex gap-2 items-end'>
          <h1 className='font-semibold'>{username}</h1>
          <h2 className='text-gray-400 font-semibold text-xs p-[2.5px]'>{formatDate(dateCreated)}</h2>
        </div>
        <p className='text-gray-300 text-sm'>{message}</p>
      </div>
    </div>
  )
}

export default FriendChat