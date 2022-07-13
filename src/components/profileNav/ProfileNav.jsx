import './profileNav.css'
import userImg from '../../resources/images/user.svg'

import { useSelector } from 'react-redux';
import { storegeRemoveToken } from '../../helpers/localStorage';
import { useNavigate } from 'react-router-dom'

const ProfileNav = () =>{
    const user = useSelector(state => state.user.userData)
    const navigate = useNavigate()

    const onSignOut =() =>{
        storegeRemoveToken()
        navigate('/sing-in')
    } 

    return(
        <>
            <span className="visually-hidden">Profile</span>
            <img src={userImg} alt="profile icon" />
            <ul className="profile-nav__list">
                <li className="profile-nav__item profile-nav__username">
                    {user ? user.fullName : null}
                </li>
                <li className="profile-nav__item">
                    <button 
                    className="profile-nav__sign-out button"
                    onClick={onSignOut}
                    >Sign Out</button>
                </li>
            </ul>
        </>
    )
}

export default ProfileNav;