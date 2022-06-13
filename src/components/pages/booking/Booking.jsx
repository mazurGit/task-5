import './booking.css';

import data from '../../../resources/api/book-list.json';

const Booking = () =>{
    const elems = data.map(item => <BokingItem data ={item} key= {item.id}/>)
    return (
        <div className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {elems}
            </ul>
        </div>
    )
}

const BokingItem = ({data}) => {
    const { guests, date, totalPrice, trip:{title}} = data
    return(
        <li className="booking">
                <h3 className="booking__title">{title}</h3>
                <span className="booking__guests">{guests < 2? `${guests} guest`: `${guests} guest`}</span>
                <span className="booking__date">{date}</span>
                <span className="booking__total">{totalPrice} $</span>
                <button className="booking__cancel" title="Cancel booking">
                <span className="visually-hidden">Cancel booking</span>
                ×
                </button>
            </li>
    )
}




export default Booking;