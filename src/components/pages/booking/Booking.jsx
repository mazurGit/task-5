import './booking.css';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteBookingTrip, deleteBookingTrip } from '../../../store/actions/booking';

import BokingItem from '../../bookingItem/bookingItem';

const Booking = () =>{
    const dispatch = useDispatch()
    const bookingData = filterByDate (useSelector(state => state.booking.bookingTrips) )
    
    function filterByDate (array) {
        const newArr = [...array]
        return newArr.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
          });
    } 

    const onDelete  = (id)=>{
        dispatch(fetchDeleteBookingTrip(id))
        .then((res) => {
            if(!res.error){
                dispatch(deleteBookingTrip(id))
            }      
        })
    }

    const elems = bookingData
    .map(item => <BokingItem data ={item} key= {item.id}  onDelete={() => onDelete(item.id) }/>)
    
    return (
        <div className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {elems}
            </ul>
        </div>
    )
}

export default Booking;