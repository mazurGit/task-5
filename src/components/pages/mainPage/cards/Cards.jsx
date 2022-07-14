import './cards.css';

import { useSelector  } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';


const CardsBlock = () => {  
  
  const tripsSelector = createSelector(
    state => state.trips.filters.searchValue,
    state => state.trips.filters.duration,
    state => state.trips.filters.level,
    state => state.trips.trips,
    (search, duration, level, trips) => {
    return trips
      .filter(item => {
        const regExp = new RegExp(`${search}`,'i')
        return search
          ? item.title.search(regExp) > -1
          : item
      })
      .filter(item =>{
        return  duration.length < 2
        ? item
        : item.duration > duration[0] && item.duration <  duration[1] 
      })
      .filter(item =>{
        return level
          ? item.level === level
          : item
      })
    }
  )
  
const tripsData = useSelector(tripsSelector)
const cards = tripsData.map (item => <Card info ={item} key={item.id}/>)

    return (
        <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          {cards}
        </ul>
      </section>
    )
}

const Card = ({info}) =>{

const { title, level, duration, price, image, id} = info

  return (
      <li className="trip-card">
          <img  src={image} alt="trip" />
          <div className="trip-card__content">
              <div className="trip-info">
              <h3 className="trip-info__title">{title}</h3>
              <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>{duration}</strong> days</span>
                  <span className="trip-info__level">{level}</span>
              </div>
              </div>
              <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">{price}$</strong>
              </div>
          </div>
          <Link to={`./trip/${id}`} className="button">Discover a trip</Link>
      </li>
  )
}

export default CardsBlock;