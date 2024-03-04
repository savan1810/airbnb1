import NoteContext from "./NoteContext";
import {  useState } from "react";
import axios from 'axios';


const NoteState = (props) => {

    const [user, setUser] = useState(null)
    const [places, setPlaces] = useState([])


    const getPlaces = async () => {
      const response = await axios.get(`/api/place/getPlaces`);
      setPlaces(response.data)
    }

    const addPlaces = async ({form_data}) => {
      console.log(form_data)
      const response = await axios.post(`/api/place/addPlaces`, {form_data})
      // const note = await response.json();
      setPlaces(places.concat(response.data));
    }

    const updatePlaces = async (id,{form_data}) => {
      console.log(id,form_data)
       await axios.post(`/api/place/updatePlaces/${id}`,{form_data})
    }  
    return (
      <NoteContext.Provider value={{ user,setUser,places,getPlaces,addPlaces,updatePlaces,}}>
        {props.children}
      </NoteContext.Provider>
    )

}

export default NoteState;