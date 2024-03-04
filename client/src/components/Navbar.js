import React,{useContext,useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import NoteContext from '../context/NoteContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
import Avatar from 'react-avatar';


const Navbar = () => {
  const a = useContext(NoteContext)
  const { user} = a;
//   const navigate = useNavigate();
  
  useEffect(()=>{
    async function fetchMyAPI() {
    //   const {data}= await axios.get('/api/auth/co')
      // console.log(notes.data)

    //   console.log(data.name)
    //   setUser(data)
    }
    fetchMyAPI()
})

  return (
        <div className='    ' >
            <header className="flex  h-16 p-2 items-center justify-between border-b-2  ">
                <Link to='/'><img src={logo} alt="Logo" className="h-10 mx-20 " /></Link>
                <div className="text-md flex justify-around items-center border-2 p-1 ml-20  rounded-full font-semibold w-1/3 hover:shadow-lg cursor-pointer">
                    <div className='mx-2'> Anywhere </div>
                    <div className='mx-2 border-l border-gray-300 '> <span className='mx-4'>Any week</span> </div>
                    <div className='mx-2 border-l border-gray-300'> <span className='mx-4'>Add guests</span></div>
                    <div className=' bg-orange-500 rounded-full   flex justify-around items-center'>
                        <SearchIcon className=' text-white scale-75' />
                    </div>
                </div>
                <div className="text-md flex justify-between items-center  p-2 font-md " >
                    <div className='mx-4 flex'>
                        <span className='mx-2 hover:bg-gray-200 hover:border-2 p-2 rounded-full  cursor-pointer font-medium'>Airbnb your home</span>
                        <div className=' hover:bg-gray-200 rounded-full p-1  flex justify-around items-center'>
                            <FontAwesomeIcon icon={faGlobe} className='text-black scale-125' />
                        </div>
                    </div>
                    <div className='mx-4 font-light hover:shadow-lg flex justify-between items-center border p-1 rounded-full  cursor-pointer '>
                        <MenuIcon className='mx-2   ' />
                        <Link to={user?'/account/profile':'/login'}>{user?<Avatar name={user?.name} size="30" round={true}  />:<AccountCircleIcon className='mx-2 scale-125 -mt-1' />}</Link>
                        {user && <p className=' font-medium ml-2 mr-2'>{user.name}</p>}
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
