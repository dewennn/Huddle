import React, { useEffect, useState } from 'react'

const Loading = () => {
  const[dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className='w-screen h-screen manrope text-3xl font-bold flex items-center justify-center bg-3 text-white'>
      <h1>LOADING{dots}</h1>
    </div>
  )
}

export default Loading