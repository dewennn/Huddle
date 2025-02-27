import React from 'react'

const TextChat = ({displayName= "Username"}) => {
  return (
    <div className='px-2 pb-8 flex flex-col' style={{height: 'calc(-64px + 100vh)'}}>
      <div className='flex-grow'>
        <h1 className='text-center py-6'>This is the beginning of your chat with {displayName} 😀</h1>
      </div>

      <form
        action=""
        className='w-full'
      >
        <input type="text" className='w-full bg-3 p-2 rounded-lg focus:outline-0' placeholder={`Message @ ${displayName}`}/>
      </form>
    </div>
  )
}

export default TextChat