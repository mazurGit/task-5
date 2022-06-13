import './tripPopup.css';

import { useState } from 'react';
import PropTypes from 'prop-types';

const TripPopup = ( {displayTripPopup, setDislpayTrip}) => {

    const [guestsQty, setGuestsQty] = useState(1)
    const [date ,setDate] = useState('')

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
                break
        }
    }
 
    const onClose =() =>{
        setDislpayTrip('none')
    } 

    

    return (
        <div  style={{display:displayTripPopup}} >
            <div className="modal">
                <div className="trip-popup">
                <button className="trip-popup__close" onClick={onClose}>×</button>
                <form className="trip-popup__form" autoComplete="off">
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
                    Total: <output className="trip-popup__total-value">4000$</output>
                    </span>
                    <button className="button" type="submit">Book a trip</button>
                </form>
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