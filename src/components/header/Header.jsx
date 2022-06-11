import './header.css';

const Header = (props) => {
    return(
        <header className="header">
            <div className="header__inner">
                <a href="./index.html" className="header__logo">Travel App</a>
                {props.children}
            </div>
        </header>
    )
}

export default Header;