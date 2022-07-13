import './bookingItem.css';

import PropTypes from 'prop-types';

const BokingItem = ({data, onDelete}) => {
    const { guests, date, totalPrice, trip:{title} } = data
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
                onClick={onDelete}
            >
            <span className="visually-hidden" >Cancel booking</span>
                ×
            </button>       
        </li>
    )
}


BokingItem.propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func
}

export default BokingItem;