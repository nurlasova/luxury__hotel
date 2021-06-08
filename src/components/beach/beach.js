import "./beach.scss"
import { RoomList } from './const'
import {Btn2} from '../../components/btn/btn'

function Beach(){
    return(
  <div>
      <div className="container" >
      <h2 class="beach__description">All our room types are including complementary breakfast</h2>
       <div className="row">
       {RoomList.map(item => {
                    return (
                     <>
                        <div className="col-6">
                       <div className="beach__line">
                       <h3 className="beach__title">{item.title}</h3>
                       <p className="beach__text">{item.text}</p>
                       <Btn2  name="Explore"/>      
              </div>
           </div>
          
           <div className="col-6">
           <img src= {item.img} className="beach__img"/>
           </div>  
                     </>
            )
            })}
       </div>
      </div>
  </div>

    )
}

export default Beach