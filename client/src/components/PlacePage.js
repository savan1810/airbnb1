import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "./PlaceGallery";
// import AddressLink from "../AddressLink";

export default function PlacePage() {
  const {id} = useParams();
  const [place,setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/place/places/${id}`).then(response => {
      setPlace(response.data[0]);
    });
  }, [id]);

  if (!place) return '';


// console.log(place)
  return (
    <div className=" bg-gray-100 -mx-8 px-16 pt-8">
      <h1 className="text-3xl">{place.title}</h1>
      <a className="flex gap-1 font-semibold underline" rel="noreferrer" target="_blank" href={'https://maps.google.com/?q='+place.address}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      {place.address}
    </a>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 flex gap-8 ">
        <div className="text-justify">
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}<br />
          Check-out: {place.checkOut}<br />
          Max number of guests: {place.maxGuests}
        </div>
        <div className="mr-4">
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">{place.extraInfo}</div>
      </div>
    </div>
  );
}