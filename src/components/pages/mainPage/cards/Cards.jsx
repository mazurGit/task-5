import './cards.css';
import tripImg from '../../../../resources/images/iceland.jpg';

const Card = () =>{
  return (
      <li className="trip-card">
          <img src={tripImg} alt="trip" />
          <div className="trip-card__content">
              <div className="trip-info">
              <h3 className="trip-info__title">Island</h3>
              <div className="trip-info__content">
                  <span className="trip-info__duration"><strong>15</strong> days</span>
                  <span className="trip-info__level">easy</span>
              </div>
              </div>
              <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">7000 $</strong>
              </div>
          </div>
          <a href="./trip.html" className="button">Discover a trip</a>
      </li>
  )
}

const CardsBlock = () => {
    return (
        <section className="trips">
        <h2 className="visually-hidden">Trips List</h2>
        <ul className="trip-list">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ul>
      </section>
    )
}

export default CardsBlock;