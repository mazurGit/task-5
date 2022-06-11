import './footer.css'
import heartImg from '../../resources/images/heart.svg'

const Footer = () => { 
    return (
      <footer className="footer">
        <span className="footer__text">
          from <a className="footer__link" href="https://binary-studio.com">binary studio</a> with
          <img className="footer__icon" src={heartImg} alt="heart icon" />
        </span>
      </footer>
    )
}

export default Footer;