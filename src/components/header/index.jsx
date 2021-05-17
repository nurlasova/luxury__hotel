import "./header.scss"
import logo from '../../assets/img/svg/logo.svg';
import {Link} from 'react-router-dom'
function Header(){
    return(
        <>    
            <div className="container">
                <div className="header__row row">
                    <div className="header__logo">
                    <img src={logo}/>
                    </div>
                    <nav className="header__nav">
                        <ul className="header__menu">
                            <li className="header__list"><Link to="/" className="header__link">Home</Link> </li>
                            <li className="header__list"><Link to="/facilities" className="header__link">Facilities</Link></li>
                            <li className="header__list"><Link to='/rooms' className="header__link">Rooms</Link></li>
                            <li className="header__list"><Link to="/contact" className="header__link">Contact-us</Link></li>
                        </ul>
                    </nav>
                </div>
                
            </div>
        </>

    )
}
export default Header
