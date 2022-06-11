import './cards.css';
import tripImg from '../../../../resources/images/iceland.jpg';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import data from '../../../../resources/api/trips-list.json';



const CardsBlock = () => {
  const cards = data.map(item=> <Card info ={item} key={item.id}/>)
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

  const { title, level, duration, price, image} = info

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
          <Link to="./trip" className="button">Discover a trip</Link>
      </li>
  )
}
export default CardsBlock;