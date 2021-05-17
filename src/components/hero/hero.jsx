import "./hero.scss"
import Button from "../button/button"
import Scroll from "../../assets/img/svg/scroll__down.svg"

function Hero(){
    return(
 <div>
    <div  className="hero">
    <div className="container">
        <div className="hero__content">
        <div className="row">
        <div className="col-6">
        <h3 className="hero__subtitle">WELCOME TO</h3>
            <h1 className="hero__title">LUXURY</h1>
            <h3 className="hero__subtitle1">HOTELS</h3>
            <p className="hero__text">Book your stay and enjoy Luxury
                redefined at the most affordable rates.</p>
        </div>
        </div>
         <Button className="hero__button"/>
         <h4 className="hero__scrollname">Scroll</h4>
        <a href="#footer" id = "#footer" Scroll > 
        <img  src= {Scroll} className="hero__scroll"/> </a>
        </div>
      </div>
    </div>
    </div>
   
   )
 }
 
 export default Hero