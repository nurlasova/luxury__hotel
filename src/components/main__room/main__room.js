import "./main__room.scss"
import Button from "../button/button"
import Scroll from "../../assets/img/svg/scroll__down.svg"

function Mainroom(){

return(
<>
<div  className="main__room">
    <div className="container">
        <div className="main__room__content">
        <h3 className="main__room__subtitle">WELCOME TO</h3>
            <h1 className="main__room__title">LUXURY</h1>
            <h3 className="main__room__subtitle1">HOTELS</h3>
            <p className="main__room__text">Book your stay and enjoy Luxury
                redefined at the most affordable rates.</p>
         <Button className="main__room__button"/>
         <h4 className="main__room__scrollname">Scroll</h4>
        <img  src= {Scroll} className="main__room__scroll"/> 
        </div>
      </div>
    </div>
</>
)
}
export default Mainroom