import './booking.css';
import data from '../../../resources/api/book-list.json';

import { useState, useEffect } from 'react';


const Booking = () =>{
    useEffect(() =>{
        
    })
    const[bookingData, setBookingData] = useState(data)
    
    useEffect (() =>{
        setBookingData((state)=>filterByDate(state))
    },[])


    function filterByDate (array) {
        const newArr = [...array]
        return newArr.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
          });
    } 

    const onDelete  = (id)=>{
        setBookingData((state)=>{
            return state.filter(item => item.id !== id)
        })
    }


    const elems = bookingData.map(item => <BokingItem data ={item} key= {item.id} onDelete={(onDelete)}/>)

    return (
        <div className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {elems}
            </ul>
        </div>
    )
}

const BokingItem = ({data, onDelete}) => {
    const { guests, date, totalPrice, trip:{title},id} = data
    const parsedDate = date.replace(/T.{0,}/,'').replace(/-/g,'.')
    
    return(
        <li className="booking">
                <h3 className="booking__title">{title}</h3>
                <span className="booking__guests">{guests < 2? `${guests} guest`: `${guests} guest`}</span>
                <span className="booking__date">{parsedDate}</span>
                <span className="booking__total">{totalPrice} $</span>
                <button 
                    className="booking__cancel" 
                    title="Cancel booking"
                    onClick={()=>onDelete(id)}
                >
                <span className="visually-hidden" >Cancel booking</span>
                    ×
                </button>
            </li>
    )
}




export default Booking;