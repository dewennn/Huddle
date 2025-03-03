import React from 'react'

const TextChat = ({displayName= "Username"}) => {
  return (
    <div className='w-full bg-2'>
      <header className='flex items-center gap-4 p-2 shadow-lg border-black h-14 text-sm'>

      </header>

      <main className='flex'>
        <section className='px-4 pb-4 flex flex-col w-full' style={{height: 'calc(-64px + 100vh)'}}>
          <div className='flex-grow'>
            <h1 className='text-center py-6'>This is the beginning of your chat with {displayName} 😀</h1>
          </div>

          <form
            action=""
            className='w-full'
          >
            <input type="text" className='w-full bg-3 p-2 rounded-lg focus:outline-0' placeholder={`Message @ ${displayName}`}/>
          </form>
        </section>

        <section className='w-[500px] border-l border-gray-500 p-5' style={{height: 'calc(-64px + 100vh)'}}>
          <h1 className='font-semibold text-lg'>Active Now</h1>
        </section>
      </main>
    </div>
  )
}

export default TextChat