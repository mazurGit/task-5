import './header.css';

import { Link, useParams } from 'react-router-dom';


const Header = (props) => {
    const linkAdress = useParams()
    const renderNav = linkAdress['*'] === 'sing-in' || linkAdress['*'] === 'sing-up'
    return(
        <header className="header">
            <div className="header__inner">
                <Link to="./" className="header__logo">Travel App</Link>
                { renderNav?  null: props.children}
            </div>
        </header>
    )
}


export default Header;