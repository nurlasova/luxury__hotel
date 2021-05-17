import "./blocks.scss"
import { RoomList } from './const'
import {Block } from './const'


function Blocks(){
  return (
  <>
   <div className="blocks">
    <div className="container">
    {RoomList.map(item => {
                    return (
                     <>
                        <h2 className="blocks__title">{item.title}</h2>
                        <p className="blocks__text">{item.text}</p>
                     </>
            )
            })}
      {Block.map(item => {
                    return (
                     <>
                        <div className="row">
                        <div className="col-12 ">
                     <div className="blocks__content">
                     <img src= {item.img} className="blocks__img"/>
                        <button className="blocks__button">{item.button}</button>
                     </div>
                        </div>
                        </div>
                     </>
            )
            })}
    </div>






   </div>
  </>

  )
  }
  export default Blocks