import React,{useContext} from 'react'
import NoteContext from '../context/NoteContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Account from './Account';
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const a = useContext(NoteContext)
    const { user, setUser } = a;
    const navigate = useNavigate();
    let location = useLocation();

    const handleLogout = async (event) => {
        event.preventDefault()
        await axios.get('/api/auth/logout')
        navigate('/login')
        setUser('')
      }

  return (
    <div>
    <Account path={location.pathname.split('/')[2]}/>
      {user &&
        <div className='flex justify-center mt-8  w-full'>
          <div className='flex-col '>
            <div className=''>
              <h2>Logged in as {user.name} ({user.email})</h2>
            </div>
            <div className=''>
              <button className=' my-4  w-full bg-red-500 text-xl p-1 outline-0 text-white rounded-xl hover:bg-orange-600' onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default ProfilePage
