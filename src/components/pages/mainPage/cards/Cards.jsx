import './cards.css';

import { Link } from 'react-router-dom';

import data from '../../../../resources/api/trips-list.json';



const CardsBlock = (props) => {  
  let cards = null;
  let toDisplay =[...data];
 


  if (props.filters){
    const {filters:{search, duration, level}} = props

    if(search){
      toDisplay = toDisplay
        .filter(item => {
          const regExp = new RegExp(`${search}`,'i')
          return item.title.search(regExp) > -1
      })
    }
  
  if(duration){
    toDisplay = toDisplay
      .filter(item =>{
         return  duration.length < 2
         ?  true
         : item.duration > duration[0] && item.duration <  duration[1] 
      })
  }

  if(level){
    toDisplay = toDisplay.filter(item =>{
      return item.level === level
    })
  }
} 
    
  cards = toDisplay.map(item=> <Card info ={item} key={item.id}/>)

  

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