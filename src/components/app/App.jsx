import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../header/Header';
import HeaderNav from '../headerNav/HeaderNav'
import Footer from '../footer/Footer';
import TripPopup from "../tripPopup/tripPopup";
import { SignIn, SignUp, MainPage, Booking, SingleTrip } from '../pages/index';
import cards from '../../resources/api/book-list.json'

import { useState } from "react";

const App = () => {
    const [displayTripPopup, setDislpayTrip] = useState('none')


    return (
        <Router>
            <Routes>
                <Route path="/sing-in" element={<Header/>}/>
                <Route path="/sing-up" element={<Header/>}/>
                <Route path="*" element={<Header><HeaderNav/></Header>}/>
            
            </Routes>
                
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/sing-in" element={<SignIn/>}/>
                <Route path="/sing-up" element={<SignUp/>}/>
                <Route path="/bookings" element={<Booking/>}/>
                <Route path="/trip/:tripId" element ={<SingleTrip setDislpayTrip={setDislpayTrip}/>} />
                <Route path="*" element={<MainPage/>}/>
            </Routes>

            <Footer/>    

            <TripPopup displayTripPopup= {displayTripPopup} setDislpayTrip={setDislpayTrip}/>
        </Router>
    )
}

export default App;