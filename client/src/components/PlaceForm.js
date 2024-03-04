import React, { useState, useContext, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import Photo from './Photo';
import NoteContext from '../context/NoteContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Account from './Account';
import { useLocation } from 'react-router-dom';



const PlaceForm = () => {

  const navigate = useNavigate();
  const a = useContext(NoteContext)
  const {  addPlaces,updatePlaces } = a;
  const { id } = useParams()
  // console.log(id)

  useEffect(() => {
    if (!id) {
      return;
    }
    else {
      axios.post('/api/place/getPlacesById',{id}).then((info) => {
        const data=info.data[0]
        setTitle(data.title)
        setAddress(data.address)
        setDescription(data.description)
        setExtraInfo(data.extraInfo)
        setCheckIn(data.checkIn)
        setCheckOut(data.checkOut)
        setMaxGuests(data.maxGuests)
        setPerks(data.perks)
        setAddedPhotos(data.photos)
        setPrice(data.price)
      })
    }

  }, [id])

  
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  // const { action } = useParams()
  let location = useLocation();
  // console.log(perks)

  function inputHeader(text) {
    return (
      <h2 className="my-2 text-xl font-medium">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
      <p className="text-gray-500 mb-1 text-sm">{text}</p>
    );
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  const handleCheck = (event) => {
    event.preventDefault()
    if (event.target.checked === true) {
      setPerks([...perks, event.target.name])
    }
    else {
      setPerks([...perks.filter((ele) => ele !== event.target.name)])
    }
  }

  const submit_form = async (event) => {
    event.preventDefault()
    const form_data = {
      title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests,price
    }

    if(!id){
      await addPlaces({ form_data })
      navigate('/account/accommodation')
    }
    else{
      // console.log(addedPhotos)
      await updatePlaces(id,{form_data})
      navigate('/account/accommodation')
    }
    // console.log(form_data)
    setAddedPhotos([])
    setAddress('')
    setCheckIn('')
    setCheckOut('')
    setDescription('')
    setExtraInfo('')
    setMaxGuests('')
    setPrice('')
    setPerks([])
    setTitle('')
    
  }


  return (
    <div>
      <Account path={location.pathname.split('/')[2]} />
      <div className='mt-10 ml-10 mr-10'>
        <form onSubmit={submit_form}>
          {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
          <input input='text' value={title} className='w-full border rounded-lg py-1 px-2 outline-slate-300 ' placeholder='title,for example:Mumbai' onChange={(event) => setTitle(event.target.value)} />
          {preInput('Address', 'Address to this place')}
          <input input='text' value={address} className='w-full border rounded-lg py-1 px-2 outline-slate-300 ' placeholder='address ,for your place' onChange={(event) => setAddress(event.target.value)} />
          {preInput('Photos', 'more = better')}

          <Photo addedPhotos={addedPhotos} setAddedPhotos={setAddedPhotos} id={id} />

          {preInput('Description', 'description of the place')}
          <textarea className='border ' placeholder='' value={description} onChange={(event) => setDescription(event.target.value)} />

          {preInput('Perks', 'select all the perks of your place')}
          <div className=' gap-2 grid grid-cols-4 '>
            <p className='flex  items-center rounded-lg gap-2 border p-2'>
              <input type='checkbox' name='wifi' checked={perks.filter((ele)=>{ 
                return (ele==='wifi')
              }).length >0 ? true :false } onChange={(e) => handleCheck(e)} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
              </svg>
              <span>Wifi</span>
            </p>
            <p className='flex  items-center rounded-lg gap-2 border p-2'>

              <input type='checkbox' name='parking' checked={perks.filter((ele)=>{ 
                return (ele==='parking')
              }).length >0 ? true :false }onChange={(e) => handleCheck(e)} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <span>Free parking spot</span>
            </p>
            <p className='flex  items-center gap-2  rounded-lg border p-2'>

              <input type='checkbox' name='tv'checked={perks.filter((ele)=>{ 
                return (ele==='tv')
              }).length >0 ? true :false }onChange={(e) => handleCheck(e)} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
              </svg>
              <span>TV</span>
            </p>
            <p className='flex  items-center gap-2 rounded-lg border p-2'>
              <input type='checkbox' name='radio' checked={perks.filter((ele)=>{ 
                return (ele==='radio')
              }).length >0 ? true :false } onChange={(e) => handleCheck(e)} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
              <span>Radio</span>
            </p>
            <p className='flex  items-center gap-2  rounded-lg border p-2'>

              <input type='checkbox' name='entrance' checked={perks.filter((ele)=>{ 
                return (ele==='entrance')
              }).length >0 ? true :false } onChange={(e) => handleCheck(e)} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
              </svg>

              <span>Private Entrance</span>
            </p>
          </div>
          {preInput('Extra info', 'house rules, etc')}
          <textarea className='border ' placeholder='' value={extraInfo} onChange={(event) => setExtraInfo(event.target.value)} />
          {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
          <div className=" gap-2 mt-1 grid grid-cols-4 ">
            <div classname='flex-col'>
              <h3 className='font-medium'>Check in time</h3>
              <input input='text' className='w-full border rounded-lg py-1 px-2 outline-slate-300 ' placeholder='14:00' value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
            </div>
            <div classname='flex-col'>
              <h3 className='font-medium'>Check out time</h3>
              <input input='text' className='w-full border rounded-lg py-1 px-2 outline-slate-300 ' placeholder='21:00' value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
            </div>
            <div classname='flex-col'>
              <h3 className='font-medium'>Max. number of guest</h3>
              <input input='text' className='w-full border rounded-lg py-1 px-2 outline-slate-300 ' placeholder='5' value={maxGuests} onChange={(event) => setMaxGuests(event.target.value)} />
            </div>
            <div classname='flex-col'>
              <h3 className='font-medium'>Rent per night</h3>
              <input input='text' className='w-full border rounded-lg py-1 px-2 outline-slate-300 ' placeholder='5' value={price} onChange={(event) => setPrice(event.target.value)} />
            </div>
          </div>
          <button className='w-full bg-orange-500 hover:bg-orange-400 my-6 rounded-full p-1  text-white text-xl align-middle mx-auto'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default PlaceForm

