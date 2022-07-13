import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../header/Header';
import HeaderNav from '../headerNav/HeaderNav'
import Footer from '../footer/Footer';
import TripPopup from "../tripPopup/tripPopup";
import {useSelector} from 'react-redux';
import { BoundaryPage } from '../boundary/boundaryPage';
import { fetchAllTrips } from "../../store/actions/trips";
import { fetchBooking } from '../../store/actions/booking';
import { fetchSingleTrip } from '../../store/actions/singleTrip';
import { SignIn, SignUp, MainPage, Booking, SingleTrip } from '../pages/index';
import { useState } from "react";

const App = () => {
    const [displayTripPopup, setDislpayTrip] = useState('none')
    const cardsLoadingStatus = useSelector(state => state.trips.tripsLoadingStatus)
    const bookingLoadingStatus = useSelector(state => state.booking.bookingLoadingStatus)
    const tripLoadingStatus = useSelector(state => state.singleTrip.tripDataLoadingStatus)

    return (
        <Router>
            <Routes>
                <Route path="*" element={<Header><HeaderNav/></Header>}/>
            </Routes>
                
            <Routes>
            <Route path="/" element={
                    <BoundaryPage 
                    elem ={<MainPage/>} 
                    loadDataFunc = {fetchAllTrips} 
                    statusRef = {cardsLoadingStatus}/>
                }/>
                <Route path="/sing-in" element={<SignIn/>}/>
                <Route path="/sing-up" element={<SignUp/>}/>
                <Route path="/bookings" element={
                    <BoundaryPage 
                    elem ={<Booking/>} 
                    loadDataFunc = {fetchBooking} 
                    statusRef = {bookingLoadingStatus} />
                }/>
                <Route path="/trip/:tripId" element={
                    <BoundaryPage 
                    elem ={<SingleTrip 
                    setDislpayTrip={setDislpayTrip}/>} 
                    loadDataFunc = {fetchSingleTrip} 
                    statusRef = {tripLoadingStatus}/>
                }/>
                <Route path="*" element={<MainPage/>}/>
            </Routes>

            <Footer/>    

            <TripPopup displayTripPopup= {displayTripPopup} setDislpayTrip={setDislpayTrip}/>
        </Router>
    )
}

export default App;