import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import NoteContext from '../context/NoteContext';
import { Link } from 'react-router-dom'

const Index = () => {
    const [allPlace, setAllPlace] = useState([])
    const a = useContext(NoteContext)
  const { user} = a;
  
//   useEffect(()=>{
//     async function fetchMyAPI() {
//       const {data}= await axios.get('/api/auth/co')
//       setUser(data)
//     }

//     fetchMyAPI()
//   },[])

    useEffect(() => {
        axios.get('/api/place/getAllPlaces').then((response) => { setAllPlace(response.data) })
    }, [user])

    console.log(allPlace)
    return (
        <div className="mt-8 ml-20 mr-20 grid gap-x-6 gap-y-8 grid-cols-4">
            {allPlace.length > 0 && allPlace.map(place => (
                <Link to={'/place/' + place._id}>
                    <div className="bg-gray-500 mb-2 rounded-2xl flex">
                        {place.photos?.[0] && (
                            <img className="rounded-2xl object-cover aspect-square" src={`/uploads/` + place.photos?.[0]} alt="" />
                        )}
                    </div>
                    <h2 className="font-bold">{place.address}</h2>
                    <h3 className="text-sm text-gray-500">{place.title}</h3>
                    <div className="mt-1 flex items-center">
                        <span className="font-bold mr-1">${place.price} </span> <span>per night</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Index
