import {  useState,useContext,useEffect } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import NoteContext from '../context/NoteContext';

export default function BookingWidget({ place }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const a = useContext(NoteContext)
    const { user} = a;

      useEffect(() => {
        if (user) {
          setName(user.name);
        }
      }, [user]);

    let numberOfNights = 0;
    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    const bookThisPlace = async() => {
    if(user){

        await axios.post('/api/booking/booking', {
            checkIn, checkOut, numberOfGuests, name, phone,
            place: place._id,
            price: numberOfNights * place.price,
        })
        navigate('/account/bookings')
    }


    }

    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-2xl text-center">
                Price: ${place.price} / per night
            </div>
            <div className="border rounded-2xl mt-4">
                <div className="flex">
                    <div className="py-3 px-4">
                        <label>Check in:</label>
                        <input type="date"
                            value={checkIn}
                            onChange={ev => setCheckIn(ev.target.value)} />
                    </div>
                    <div className="py-3 px-4 border-l ">
                        <label>Check out:</label>
                        <input type="date" value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)} />
                    </div>
                </div>
                <div className="py-3 px-4 border-t flex items-center">
                    <label>Number of guests:</label>
                    <input type="number" className="w-40 ml-2 border py-1 px-2 rounded-xl"
                        value={numberOfGuests}
                        onChange={ev => setNumberOfGuests(ev.target.value)} />
                </div>
                {numberOfNights > 0 && (
                    <div className="py-3 px-4 border-t">
                        <label>Your full name:</label>
                        <input type="text" style={{ marginLeft: "0px" }}
                            value={name}
                            onChange={ev => setName(ev.target.value)} />
                        <label>Phone number:</label>
                        <input type="tel" className=" my-2 px-3 py-2 w-full text-xl outline-0 border rounded-2xl"
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)} />
                    </div>
                )}
            </div>
            <button onClick={bookThisPlace} className="bg-red-500 w-full p-2 rounded-3xl text-white text-lg mt-4">
                Book this place
                {numberOfNights > 0 && (
                    <span> ${numberOfNights * place.price}</span>
                )}
            </button>
        </div>
    );
}