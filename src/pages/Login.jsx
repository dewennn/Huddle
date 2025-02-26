import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { serverAddress } from '../data'

const Login = () => {

  // Navigate
  const navigate = useNavigate()

  // Form Handling
  const[formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
    try{
      const response = await fetch(serverAddress + "/api/user/login",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "include"
      })

      if (!response.ok) throw new Error("Problem with Login")

      const data = await response.json()
    } catch (error) {
      throw error
    }
  }

  const handleSubmitWrapper = async () => {
    try{
      await handleSubmit()
      navigate('/dashboard')
    } catch(error){
      console.error("Login failed:", error)
      navigate('/login') // Stay on register page if failed
    }
  }

  // Transition
  const[active, setActive] = useState(true)
  const[transition, setTransition] = useState(false)
  const[visible, setVisible] = useState(false)

  useEffect(() => {
    if(!active){
      setTransition(false)
      setTimeout(() => setVisible(false), 200)
      setTimeout(() => navigate("/register"), 300)
    }
    else{
      setTimeout(() => setVisible(true), 200)
      setTimeout(() => setTransition(true), 300)
    }
  }, [active])


  // Component
  return (
    <main
      className='w-screen h-screen bg-center bg-cover'
      style={{backgroundImage: "url('/landing_page_bg.jpg')"}}
    >
      {/* Icon and Name */} <header className='flex items-center gap-3 p-5 absolute'>
        <div className='w-8 h-8'><img src="/huddle.png" alt="icon" className='w-full h-full'/></div>
        <h1 className='text-xl text-white space-mono font-semibold'>Huddle</h1>
      </header>
      
      {/* Form */} <main
        className='flex justify-center items-center h-screen'
      >
        <section
          className={
            `w-full mx-[10%] lg:mx-[30%] bg-3 rounded-md shadow text-gray-200 space-mono transition-all ease-in-out duration-200
            ${transition ? 'opacity-100' : 'opacity-0 mb-10'}
            ${visible ? 'block' : 'hidden'}
            `}
        >
          <form action={handleSubmitWrapper} className='flex flex-col p-8 gap-6'>
            {/* Title */} <div className='flex flex-col items-center gap-1 font-semibold'>
              <h1 className='text-2xl'>WELCOME BACK!</h1>
              <p className='text-gray-500 font-normal'>We're so excited to see you again!</p>
            </div>

            {/* Username */} <div className='flex flex-col gap-2'>
              <label htmlFor="inputUsername">Email or Phone Number</label>
              <input
                id='inputUsername'
                name='email'
                type="email"
                onChange={handleChange}
                className='bg-[#16181b] p-2 rounded-md text-white focus:outline-none opacity-70'
                required
              />
            </div>

            {/* Password */} <div className='flex flex-col gap-2 items-start'>
              <label htmlFor="inputPassword">Password</label>
              <input
                id='inputPassword'
                name='password'
                type="password"
                onChange={handleChange}
                className='bg-[#16181b] p-2 rounded-md text-white focus:outline-none opacity-70 w-full'
                required
              />
              <button className='text-blue-300 hover:cursor-pointer hover:underline' type='button'>Forgot your password?</button>
            </div>

            {/* Buttons */} <div className='flex flex-col gap-2 mt-5'>
              <button type='submit' className='w-full p-2 bg-highlight rounded-md hover:cursor-pointer font-semibold hover:opacity-85'>LOG IN</button>
              <p className='text-gray-500'>Need an account? <button className='text-blue-300 hover:cursor-pointer hover:underline' onClick={() => setActive(false)} type='button'>Register</button></p>
            </div>
          </form>
        </section>
      </main>
    </main>
  )
}

export default Login