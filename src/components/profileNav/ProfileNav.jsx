import './profileNav.css'
import userImg from '../../resources/images/user.svg'

import { Link } from 'react-router-dom'

const ProfileNav = (props) =>{
    const { name } = props


    return(
        <>
            <span className="visually-hidden">Profile</span>
            <img src={userImg} alt="profile icon" />
            <ul className="profile-nav__list">
                {name? <ProfileNavSignedIn/>: <ProfileNavSignedOut name ={name}/>}
            </ul>
        </>
    )
}

const ProfileNavSignedOut = () =>{
    return (
        <>
            <li className="profile-nav__item">
                 <button className="profile-nav__sign-in button"><Link to='/sing-in'> Sign In </Link></button>  
            </li>
            <li className="profile-nav__item">
                 <button className="profile-nav__sign-up button"><Link to='/sing-up'>Sign Up</Link> </button> 
            </li>
        </>  
    )
   
}

const ProfileNavSignedIn = (props) => {
    const {name} = props
    return (
        <>
            <li className="profile-nav__item profile-nav__username">{name}</li>
            <li className="profile-nav__item">
                <button className="profile-nav__sign-out button">Sign Out</button>
            </li>
        </>
    )
}

export default ProfileNav;