import React, { useRef } from 'react'
import ConversationModal from './ConversationModal'

const ConversationDashboard = () => {
  const conversationModal = useRef()

  return (
    <>
      <div className='flex justify-center px-3 py-3 shadow-lg border-black h-14'>
        <button
          onClick={() => {conversationModal.current.open()}}
          className='bg-4 w-full text-start text-sm px-2 py-1 hover:cursor-pointer font-semibold rounded-md'
        >
          Find or start a conversation
        </button>
      </div>

      <ConversationModal ref={conversationModal}/>
    </>
  )
}

export default ConversationDashboard