import React,{useEffect,useContext} from 'react'
import axios from 'axios';
import NoteContext from '../context/NoteContext';
import Index from './Index';


const Home = () => {
  
  const a = useContext(NoteContext)
  const { setUser} = a;
  
  useEffect(()=>{
    async function fetchMyAPI() {
      const {data}= await axios.get('/api/auth/co')
      // console.log(notes.data)
      setUser(data)
    }

    fetchMyAPI()
     
  },[setUser])

  return (
    <div>
      <Index/>
    </div>
  )
}


export default Home
