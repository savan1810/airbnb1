import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceGallery from "./PlaceGallery";
import { differenceInCalendarDays, format } from "date-fns";


export default function BookingsPage() {
  const { id } = useParams();
  const [myBooking, setMyBooking] = useState(null)
  const [myInfo, setMyInfo] = useState(null)

  useEffect(() => {
    
    axios.get(`/api/booking/bookings/${id}`).then(response => {
      console.log(response.data[0])
      console.log(response.data[0].place)
      setMyBooking(response.data[0].place)
      setMyInfo(response.data[0])
    })
  })

  return (
    <div>
    {/* {myBooking} */}
    { myInfo && 
    <div className=" bg-gray-100 -mx-8 px-16 pt-8">

      <h1 className="text-3xl ">{myBooking.title}</h1>
      <a className="flex gap-1 font-semibold underline" rel="noreferrer" target="_blank" href={'https://maps.google.com/?q='+myBooking.address} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        {myBooking.address}
      </a>
      <div className="mt-4 bg-gray-300 py-2 px-3 rounded-2xl">

        <h2 className="font-medium text-2xl">Your Information</h2>
        <div className='flex items-center mt-2 w-full text-md '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="5-4 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          {differenceInCalendarDays(new Date(myInfo.checkOut), new Date(myInfo.checkIn))} nights
          <div className='ml-4 flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>

            <p className=" ml-2 ">{format(new Date(myInfo.checkIn), 'yyyy-MM-dd')}</p>
          </div>
          <div className='ml-2 font-medium'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>

          </div>
          <div className='flex items-center ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <p className=" ml-2">{format(new Date(myInfo.checkOut), 'yyyy-MM-dd')}</p>
          </div>
        </div>
        <div className='mt-2'>Number of Guests : {myInfo?.numberOfGuests}</div>
        <div className=" flex mt-2 items-center  text-black ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>
          <div className="text-lg font-medium ml-2">
            Total price: ${myInfo?.price}
          </div>
        </div>
      </div>

      <PlaceGallery place={myBooking} />
      <div className="mt-8 mb-8 flex gap-8 ">
        <div className="text-justify">
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {myBooking.description}
          </div>
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{myBooking.extraInfo}</div>
      </div>
    </div>}
    </div>
  );
}