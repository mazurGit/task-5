import './profileNav.css'
import userImg from '../../resources/images/user.svg'


const ProfileNav = () =>{
    return(
        <>
            <span className="visually-hidden">Profile</span>
            <img src={userImg} alt="profile icon" />
            <ul className="profile-nav__list">
            <li className="profile-nav__item profile-nav__username">John Doe</li>
            <li className="profile-nav__item">
                <button className="profile-nav__sign-out button">Sign Out</button>
            </li>
            </ul>
        </>
    )
}


export default ProfileNav;