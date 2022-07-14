import './singleTrip.css'

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const SingleTrip = ({setDislpayTrip}) => {
	const cardData = useSelector(state => state.singleTrip.tripData)
	const { title, level, duration, price, image, description} = cardData


	return (
		<main className="trip-page">
		<h1 className="visually-hidden">Travel App</h1>
		<div className="trip">
			<img src={image} className="trip__img" alt="trip" />
			<div className="trip__content">
			<div className="trip-info">
				<h3 className="trip-info__title">{title}</h3>
				<div className="trip-info__content">
				<span className="trip-info__duration"><strong>{duration}</strong> days</span>
				<span className="trip-info__level">{level}</span>
				</div>
			</div>
			<div className="trip__description">{description}</div>
			<div className="trip-price">
				<span>Price</span>
				<strong className="trip-price__value">{price} $</strong>
			</div>
			<button className="trip__button button" onClick={() =>setDislpayTrip('block')}>Book a trip</button>
			</div>
		</div>
		</main>
	)
}


SingleTrip.propTypes = {
  setDislpayTrip:PropTypes.func
}

export default SingleTrip;