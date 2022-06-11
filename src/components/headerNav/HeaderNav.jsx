import './headerNav.css'
import briefcaseImg from '../../resources/images/briefcase.svg';
import ProfileNav from '../profileNav/ProfileNav';


const NavBar = () => {
    return (
        <nav className="header__nav">
            <ul className="nav-header__list">
                <li className="nav-header__item" title="Bookings">
                <a href="./bookings.html" className="nav-header__inner">
                    <span className="visually-hidden">Bookings</span>
                    <img src={briefcaseImg} alt=" icon" />
                </a>
                </li>
                <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" tabIndex="0">
                    <ProfileNav/>
                </div>
                </li>
            </ul>
        </nav>
    )
}


export default NavBar;