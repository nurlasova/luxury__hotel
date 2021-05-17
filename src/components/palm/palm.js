import "./hero.scss"
import Button from "../button/button"
import Scroll from "../../assets/img/svg/scroll__down.svg"

function Palm(){
    return(
 <div>
    <div  className="palm">
    <div className="container">
        <div className="row">
        <div className="col-6">
        <h3 className="palm__subtitle">WELCOME TO</h3>
            <h1 className="palm__title">LUXURY</h1>
            <h3 className="palm__subtitle1">HOTELS</h3>
            <p className="palm__text">Book your stay and enjoy Luxury
                redefined at the most affordable rates.</p>
        </div>
        </div>
         <Button className="palm__button"/>
         <h4 className="palm__scrollname">Scroll</h4>
         <img src= {Scroll} className="palm__scroll"/>
      </div>
    </div>
 
    </div>
   
   )
 }
 
 export default Palm