import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { serverAddress } from '../data'
import FriendChat from '../components/sidebar/dashboardPage/FriendChat'
import { UserContext } from '../Context/User'

const TextChat = () => {
  // USER DATA
    const {user} = useContext(UserContext)

  // MESSAGE STATE
    const [currMsg, setCurMsg] = useState('')

    const handleMsgChange = (e) => {
      setCurMsg(e.target.value)
    }

  // GET FRIEND DATA
    const { friendId } = useParams()
    const [targetDTO, setTargetDTO] = useState({})
    
    const fetchUserDTO = async () => {
      try {
        const response = await fetch(serverAddress + '/api/user/' + friendId, {method:'GET', credentials:'include'})
        if(!response.ok) throw new Error()
        const data = await response.json()

        setTargetDTO(data)
      }
      catch (error) {
        
      }
    }

    useEffect(() => {fetchUserDTO()}, [])

  // MESSAGES
    const[messages, setMessages] = useState([])

    const fetchMessage = async () => {
      try{
        const response = await fetch(serverAddress + '/api/' + friendId + '/messages', {method: 'GET', credentials: 'include'})
        if(!response.ok) throw new Error()
        const data = await response.json()
        setMessages(data)
        console.log(data)
      }
      catch (error){

      }
    }

    useEffect(() => {fetchMessage()}, [])

    const postMessage = async () => {
      try {
        const response = await fetch(serverAddress + '/api/' + friendId + '/add_message',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include',
          body: JSON.stringify({'content': currMsg})
        })

        if (!response.ok) throw new Error("Error")

        await fetchMessage()
      } catch (error) {
        
      }
    }

    const handleSendMsg = async (e) => {
      if (e.key === "Enter" && !e.shiftKey) { // Prevent shift+enter for new lines
        e.preventDefault() // Prevent default form submission
        postMessage()
        setCurMsg('')
      }
    }

  // DATE FUNC
    const formatDate = (dateString) => {
      if(!dateString) return

      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        month: "short", // "Jan", "Feb", "Mar", etc.
        day: "2-digit", // "01", "02", ..., "31"
        year: "numeric", // "2024"
      }).format(date);
    }
  
  // COMPONENT
  return (
    <div className='w-full bg-2'>
      {/* HEADER */}
      <header className='flex items-center gap-4 p-2 shadow-lg border-black h-14 text-sm'>
        {/* USER DATA | LEFT */}
        <section className='flex items-center gap-3 px-3'>
          <div className='w-8 h-8'><img className='w-full h-full object-cover rounded-full' src={targetDTO.profilePictureUrl == null ? '/default_profile_picture.png' : targetDTO.profilePictureUrl} alt="" /></div>

          <h1 className='font-semibold'>{targetDTO.displayName}</h1>
        </section>
      </header>

      {/* TEXT PART */}
      <main className='flex'>
        <section className='px-4 pb-4 flex flex-col w-full' style={{height: 'calc(-64px + 100vh)'}}>
          {/* MESSAGES */}
          <div className='flex flex-col items-center overflow-x-hidden' style={{height: 'calc(-124px + 100vh)'}}>

            <section className='flex flex-col items-center py-6 gap-3'>
              <h1 className='text-center text-gray-400 font-semibold'>
                This is the beginning of your chat with {targetDTO.displayName}
              </h1>

              <div className='w-10 h-10 opacity-80'>
                <img className='w-full h-full' src="/huddle.png" alt="" />
              </div>
            </section>

            {
              messages.map(m =>
              <FriendChat
                key={m.id}
                message={m.content}
                username={m.senderId == user.id ? user.username : targetDTO.username}
                dateCreated={m.dateCreated}
                img={m.senderId == user.id ? user.profilePictureUrl : targetDTO.profilePictureUrl}
              />)
            }

          </div>

          {/* INPUT */}
          <form
            action=""
            className='w-full pr-2'
          >
            <input
              type="text"
              className='w-full bg-3 p-3 rounded-md focus:outline-0'
              placeholder={`Message @ ${targetDTO.displayName}`}
              value={currMsg}
              onChange={handleMsgChange}
              onKeyDown={handleSendMsg}
            />
          </form>
        </section>

        {/* ABOUT FRIEND */}
        <section className='w-[500px] bg-3 flex flex-col gap-4' style={{height: 'calc(-64px + 100vh)'}}>
          <div className='w-full relative h-[160px]'>
            <div className='w-full h-[120px] bg-amber-400'></div>

            <div className='w-24 h-24 absolute left-2 bottom-0 p-[6px] bg-3 rounded-full'>
              <img className='w-full h-full rounded-full object-cover' src={targetDTO.profilePictureUrl == null ? '/default_profile_picture.png' : targetDTO.profilePictureUrl} alt="" />
            </div>
          </div>

          <div className='px-5'>
            <h1 className='font-bold text-lg'>{targetDTO.displayName}</h1>
            <p>{targetDTO.username}</p>
          </div>

          <div className='flex flex-col bg-2 p-2 rounded-sm gap-2 mx-5'>
            {
              targetDTO.aboutMe ? 
              <>
                <h1 className='font-semibold text-sm'>About Me</h1>
                <p className='text-sm font-light'>{targetDTO.aboutMe}</p>
              </>
              : <></>
            }

            <h1 className='font-semibold text-sm'>Member Since</h1>
            <p className='text-sm font-light'>{formatDate(targetDTO.dateCreated)}</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default TextChat