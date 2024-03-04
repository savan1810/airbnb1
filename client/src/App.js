import React,{} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
// import Account from './components/Account';
// import  axios  from "axios";
import NoteState from "./context/NoteState";
// import NoteContext from './context/NoteContext';
import Place from './components/Places';
import PlaceForm from './components/PlaceForm';
import ProfilePage from './components/ProfilePage';
import Index from './components/Index';
import PlacePage from './components/PlacePage';
import BookingPage from './components/BookingPage';
import BookingsPage from './components/BookingsPage';




function App() {
  
  return (
    <NoteState>
      <Router>
      <Navbar/>
          <Routes>
            <Route exact path="/" element={<Index />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact  path="/account/profile" element={<ProfilePage />}></Route>
            <Route exact  path="/account/accommodation" element={<Place/>}></Route>
            <Route exact  path="/account/accommodation/new" element={<PlaceForm/>}></Route>
            <Route exact  path="/account/accommodation/:id" element={<PlaceForm/>}></Route>
            <Route exact  path="/place/:id" element={<PlacePage/>}></Route>
            <Route exact  path="/account/bookings" element={<BookingsPage/>}></Route>
            <Route exact  path="/account/bookings/:id" element={<BookingPage/>}></Route>
          </Routes>
      </Router>
    </NoteState>
  )
}

export default App;
