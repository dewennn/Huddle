import React, { useImperativeHandle, useRef } from 'react'

const ConversationModal = ({ref}) => {
  const modal = useRef()

  useImperativeHandle(ref, () => {
    return{
      open(){
        modal.current.showModal()
      }
    }
  })

  const handleClose = (event) => {
    if (event.target === modal.current) {
      modal.current.close()
    }
  };

  return (
    <dialog
      style={{
        left: 'calc(50% - 235px)'
      }}
      className='top-1/3 w-[570px] bg-2 p-4 rounded-lg backdrop:bg-black backdrop:opacity-50'
      ref={modal} onClick={handleClose}
    >
      <input className='bg-3 w-full p-2 rounded-lg text-lg placeholder:text-gray-300 text-gray-300 focus:outline-none' type="text" placeholder='Where would you like to go?' autoFocus/>
    </dialog>
  )
}

export default ConversationModal