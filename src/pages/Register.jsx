import React, { useContext, useEffect, useState } from 'react'
import { serverAddress } from '../data'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  // Form handling
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    username: "",
    passwordHashed: "",
    dateOfBirth: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(serverAddress + "/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include"
      })

      if (!response.ok) throw new Error("Registration failed")
    } catch (error) {
      throw error
    }
  }

  const handleSubmitWrapper = async () => {
    navigate('/loading')
    
    try {
      await handleSubmit() // Wait for the API call to finish
      navigate('/dashboard') // Navigate to the dashboard after successful registration
    } catch (error) {
      console.error("Registration failed:", error)
      navigate('/register') // Stay on register page if failed
    }
  }


  // Transition
  const[active, setActive] = useState(true)
  const[transition, setTransition] = useState(false)
  const[visible, setVisible] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(!active){
      setTransition(false)
      setTimeout(() => setVisible(false), 200)
      setTimeout(() => navigate('/login'), 300)
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
            `w-full mx-[10%] lg:mx-[32%] bg-3 rounded-md shadow text-gray-200 space-mono transition-all ease-in-out duration-200
            ${transition ? 'opacity-100' : 'opacity-0 mb-10'}
            ${visible ? 'block' : 'hidden'}
            `}
        >
          <form action={handleSubmitWrapper} className='flex flex-col p-8 gap-4'>
            {/* Title */} <div className='flex flex-col items-center gap-1'>
              <h1 className='text-2xl font-semibold'>CREATE AN ACCOUNT</h1>
              <p className='text-gray-500 font-normal'>We're so excited to see you!</p>
            </div>

            {/* Email */} <div className='flex flex-col gap-2'>
              <label htmlFor="inputEmail">Email</label>
              <input
                id='inputEmail'
                name='email'
                type="email"
                value={formData.email}
                onChange={handleChange}
                className='bg-[#16181b] p-2 rounded-md text-white focus:outline-none opacity-70 w-full'
                required
              />
            </div>

            {/* Display Name */} <div className='flex flex-col gap-2 items-start'>
              <label htmlFor="displayName">Display Name</label>
              <input
                id="displayName"
                name="displayName"
                type="text"
                value={formData.displayName}
                onChange={handleChange}
                className="bg-[#16181b] p-2 rounded-md text-white focus:outline-none opacity-70 w-full"
                required
              />
            </div>

            {/* Username */} <div className='flex flex-col gap-2 items-start'>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="bg-[#16181b] p-2 rounded-md text-white focus:outline-none opacity-70 w-full"
                required
              />
            </div>

            {/* Password */} <div className='flex flex-col gap-2 items-start'>
            <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-[#16181b] p-2 rounded-md text-white focus:outline-none opacity-70 w-full"
                required
              />
            </div>

            {/* DOB */} <div className='flex flex-col gap-2 items-start'>
            <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="bg-[#16181b] p-2 rounded-md text-white focus:outline-none opacity-70 w-full"
                required
              />
            </div>

            {/* Buttons */} <div className='flex flex-col gap-2 items-start mt-5'>
              <button type='submit' className='w-full p-2 bg-highlight rounded-md hover:cursor-pointer font-semibold hover:opacity-85'>CONTINUE</button>
              <button className='text-blue-300 hover:cursor-pointer hover:underline' onClick={() => setActive(false)} type='button'>Already have an account?</button>
            </div>
          </form>
        </section>
      </main>
    </main>
  )
}

export default Register