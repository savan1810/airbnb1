import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

 
  

  const handleLogin=async (ev)=>{
    try{
      ev.preventDefault()
      
      await axios.post(`/api/auth/login`,{email,password},{
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Content-Type': 'application/json'
        }})
      // console.log(token)
      alert('Login Successful.')
      setEmail('')
      setPassword('')
      navigate('/home')
    }
    catch(e){
      alert('Login Failed,Please enter valid credentials.')
    }
  }



  return (
    <div className='mx-4  '>

    <div className='h-full my-20  flex-col items-center justify-center '>
      <h1 className="text-4xl text-center -ml-10 ">Login</h1>
      <form className="mt-8 mx-auto w-1/4 ">
        <input type="email" name="" id=""  value={email} placeholder='abc@gmail.com' onChange={event=>setEmail(event.target.value)}/>
        <input type="password" name="" id="" value={password} placeholder='password'  onChange={event=>setPassword(event.target.value)}/>
        <button className='-ml-5 my-2  w-full bg-red-500 text-xl p-2 outline-0 text-white rounded-2xl' onClick={handleLogin}>Login</button>
        <div className='text-center text-gray-500'>
          <span>Don't have registered yet? </span>
          <Link to="/signup"><span className='underline text-xl text-gray-700'>Sign up</span></Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login
