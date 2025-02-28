import React, { useImperativeHandle, useRef } from 'react'

const RemoveFriendModal = ({ref, friendName}) => {
  const modal = useRef()

  useImperativeHandle(ref, () => {
    return{
      open(){
        modal.current.showModal()
      }
    }
  })

  const handleClose = (event) => {
    if(event.target = modal.current) modal.current.close()
  }

  return (
    <dialog
      style={{
        left: 'calc(50% - 235px)'
      }}
      className='top-1/3 w-[570px] bg-2 p-4 rounded-lg backdrop:bg-black backdrop:opacity-50 hover:cursor-default text-white'
      ref={modal} onClick={handleClose}
    >
      <div className='w-full p-4 bg-2'>
        <div className='pb-5'>
          <h1 className=''>Remove '{friendName}'</h1>
          <p className='mt-2'>Are you sure you want to remove {friendName} from your friends?</p>
        </div>

        <div className='w-full flex justify-end gap-5'> 
          <button>Cancel</button>
          <button>Remove Friend</button>
        </div>
      </div>
    </dialog>
  )
}

export default RemoveFriendModal