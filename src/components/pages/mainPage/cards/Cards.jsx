import './cards.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import data from '../../../../resources/api/trips-list.json';



const CardsBlock = (props) => {  
  const [cardData, setCardsData] = useState([])

  let filteredData = [...cardData]

  useEffect(() => {
    //ussualy I fetch data here , this is just request  imitation
    setCardsData(data)
  },[])

  filteredData = onFilterApply(cardData, props.filters)


  function onFilterApply(array, filters){
    let tempData =[...array];
 
    if (filters){
      const {search, duration, level} = filters
  
      if(search){
        tempData = tempData
          .filter(item => {
            const regExp = new RegExp(`${search}`,'i')
            return item.title.search(regExp) > -1
        })
      }
    
    if(duration){
      tempData = tempData
        .filter(item =>{
           return  duration.length < 2
           ?  true
           : item.duration > duration[0] && item.duration <  duration[1] 
        })
    }
  
    if(level){
      tempData = tempData.filter(item =>{
        return item.level === level
        })
      }
    } 
    return tempData
  }
  
    
 const cards = filteredData.map(item=> <Card info ={item} key={item.id}/>)

  

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

CardsBlock.propTypes = {
  filters: PropTypes.object
}

Card.propTypes = {
  info: PropTypes.object
}

export default CardsBlock;