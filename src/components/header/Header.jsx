import './header.css';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return(
        <header className="header">
            <div className="header__inner">
                <Link to="./" className="header__logo">Travel App</Link>
                {props.children}
            </div>
        </header>
    )
}


export default Header;