import './tripPopup.css';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchBookTrip, resetFormStatus } from '../../store/actions/booking';

const TripPopup = ( {displayTripPopup, setDislpayTrip}) => {

    const [guestsQty, setGuestsQty] = useState(1)
    const [date ,setDate] = useState('')
    const tripData = useSelector(state => state.singleTrip.tripData)
    const userData = useSelector(state => state.user.userData)
    const bookTripStatus = useSelector(state => state.booking.bookTripLoadingStatus)
    const dispatch = useDispatch();

    const clearForm = () => {
        setGuestsQty(1)
        setDate('')
    }

    const message = {
        success:'You had successfully booked a trip!',
        loading:'Working on it...',
        fail:'Something went wrong... Please try again later'
    }

    const onInputChage = (e) =>{
        const target = e.target
        switch (target.name){
            case 'date':
                const selectedDate = new Date(target.value)
                const currentDate = new Date()
                selectedDate > currentDate 
                    ? setDate(selectedDate.toISOString().replace(/T.{0,}/,''))
                    : setDate('')
                break

            case 'guests':
                setGuestsQty(target.value)
                break;
            default:
                break;
        }
    }
 
    const onClose = () =>{
        setDislpayTrip('none')
        clearForm()
    } 

    const onSubmit  = (e) =>{
        e.preventDefault()
        const data = {
            tripId: tripData.id,
            userId :userData.id,
            guests: guestsQty,
            date: new Date(date).toISOString()
        }
        dispatch(fetchBookTrip(data))
        .then(() => setTimeout(() => {
            onClose()
            dispatch(resetFormStatus())
        }, 2000))
    }

    const Form = () =>{
        return (
            <form 
                className="trip-popup__form"
                autoComplete="off"
                onSubmit= {onSubmit}
                >
                <div className="trip-info">
                <h3 className="trip-info__title">Iceland</h3>
                <div className="trip-info__content">
                    <span className="trip-info__duration"><strong>15</strong> days</span>
                    <span className="trip-info__level">easy</span>
                </div>
                </div>
                <label className="trip-popup__input input">
                <span className="input__heading">Date</span>
                <input 
                    name="date" 
                    type="date" 
                    required 
                    value={date}
                    onChange={onInputChage}
                />
                </label>
                <label className="trip-popup__input input">
                <span className="input__heading">Number of guests</span>
                <input 
                    name="guests" 
                    type="number" 
                    min="1" 
                    max="10" 
                    value={guestsQty} 
                    onChange={onInputChage}
                    required 
                />
                </label>
                <span className="trip-popup__total">
                Total: <output className="trip-popup__total-value">${tripData.price * guestsQty}</output>
                </span>
                <button className="button" type="submit">Book a trip</button>
            </form>
        )
    }
    
    return (
        <div  style={{display:displayTripPopup}} >
            <div className="modal" style={{"textAlign":"center"}}>
                <div className="trip-popup">
                <button className="trip-popup__close" onClick={onClose}>×</button>
                    {bookTripStatus === 'loading' ? message.loading : null}
                    {bookTripStatus === 'rejected' ? message.fail : null}
                    {bookTripStatus === 'loaded'? message.success : null }
                    {bookTripStatus === 'idle'? <Form/> : null }     
                </div>
            </div>
        </div>
    )
}

TripPopup.propTypes = {
    displayTripPopup:PropTypes.string,
    setDislpayTrip:PropTypes.func
}

export default TripPopup;