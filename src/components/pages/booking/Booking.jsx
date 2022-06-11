import './booking.css'


const BokingItem = () => {
    return(
        <li className="booking">
                <h3 className="booking__title">Iceland</h3>
                <span className="booking__guests">2 guests</span>
                <span className="booking__date">13.07.2022</span>
                <span className="booking__total">14000 $</span>
                <button className="booking__cancel" title="Cancel booking">
                <span className="visually-hidden">Cancel booking</span>
                ×
                </button>
            </li>
    )
}

const Booking = () =>{
    return (
        <div className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                <BokingItem/>
                <BokingItem/>
                <BokingItem/>
            </ul>
        </div>
    )
}


export default Booking;