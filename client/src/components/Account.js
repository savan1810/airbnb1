import React from 'react'
// import NoteContext from '../context/NoteContext';
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import Places from './Places';


const Account = ({path}) => {
  // const a = useContext(NoteContext)
  // const { user, setUser } = a;
  // const { subpage } = useParams()
  // const navigate = useNavigate();


 
  const classStyle = (type) => {
    let st = ''

    if (type === path) {
      st += 'mx-4 flex justify-center gap-2 bg-orange-500 rounded-full px-2 py-1 text-white font-medium '
    }
    else {
      st += 'mx-4 flex justify-center gap-2 bg-gray-300 rounded-full px-2 py-1 text-black font-medium '
    }
    return st
  }

  

  return (
    <>
      <div className="mt-10 flex justify-center items-center">
        <Link to='/account/profile' className={classStyle('profile')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>

          My Profile
        </Link>
        <Link to='/account/bookings' className={classStyle('bookings')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>

          My Bookings
        </Link>
        <Link to='/account/accommodation' className={classStyle('accommodation')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
          </svg>
          My Accommodation
        </Link>

      </div>
      

        {/* {user && subpage=="accommodation" && 
          <Places />
        } */}
    </>
  )
}

export default Account
