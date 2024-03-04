import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    try{
      event.preventDefault()
      await axios.post(`/api/auth/createuser`,{
        name,email,password
      })

      alert('Registration Successful, Now you can log in.')
      setName('')
      setEmail('')
      setPassword('')
    }
    catch(e){
      alert('Registration Failed,Please try again later.')
    }
  }

  return (
    <div className='mx-4 font-sans h-full my-20  flex-col  items-center justify-center '>
      <h1 className="text-4xl text-center -ml-10">Sign up</h1>
      <form className="mt-8 mx-auto w-1/4 ">
        <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <input type="email" name="" id="" value={email} placeholder='abc@gmail.com' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="" id="" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <button className="-ml-5 my-2  w-full bg-red-500 text-xl p-2 outline-0 text-white rounded-2xl" onClick={handleSubmit}>Sign up</button>
        <div className='text-center text-gray-500'>
          <span>Already a member? </span>
          <Link to="/login"><span className='underline text-xl text-gray-700'>Login</span></Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
