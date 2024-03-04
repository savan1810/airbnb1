import React,{useEffect,useContext} from 'react'
import NoteContext from '../context/NoteContext';
import { Link } from 'react-router-dom'
import Account from './Account';
import { useLocation } from 'react-router-dom';


const Places = () => {
    const a = useContext(NoteContext)
    const { places, getPlaces } = a;
    let location = useLocation();

    useEffect(() => {
        getPlaces()
    })

    console.log()
  return (
    <div>
                <Account path={location.pathname.split('/')[2]}/>
                    <div className="flex-col align-center ">
                        <Link to='/account/accommodation/new' style={{backgroundColor:""}} className="bg-red-500 bg-opacity-80 flex p-1 gap-1 w-40 rounded-full mx-auto mt-10 text-white text-xl justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Place
                        </Link>
                        <div>
                            <div className="mt-4">
                                {places.length > 0 && places.map(place => (
                                    <Link to={'/account/accommodation/' + place._id} className="flex my-4 ml-8 mr-8 cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
                                        <div className="flex w-32 h-32 bg-gray-300  shrink-0">
                                            <img src={`/uploads/` + place?.photos[0]} alt='/'/>
                                        </div>
                                        <div className="grow-0 shrink">
                                            <h2 className="text-xl">{place.title}</h2>
                                            <p className="text-sm mt-2">{place.description}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Places
