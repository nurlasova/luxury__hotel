import "./rate.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { RoomList } from './const'
import {Double} from './const'
import {Bed} from './const'
import {Twin} from './const'
import {TWO} from './const'
import SwiperCore, {   Pagination } from 'swiper/core';
import "swiper/components/pagination/pagination.min.css"
function Rate(){
    return(
  <>
     <div className="rate">
       <div className="container">
       <h2 className="rate__title">ROOMS AND RATES</h2>
                        <p className="rate__text">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
       {RoomList.map(item => {
                    return (
                     <>
                              <div className="col-12">
                                <div className="rate__rates">
                                 <div className="rate__top">
                                 <img src= {item.img} className="rate__img"/>
                               <button className="rate__button">{item.button}</button>
                                 </div>
                                 <div className="rate__bottom row">
                                      <div className="rate__left">
                                      <img src = {item.svg} className="rate__svg"/>
                                    <p className="rate__name">{item.name}</p>
                                      </div>
                                    <button className="rate__btn">{item.btn}</button>
                                 </div>
                                </div>
                            </div>
                     </>
            )
            })}

            
            {Double.map(item => {
              SwiperCore.use([Pagination]);
                    return (
                     <>
                        <div className="col-12">
                                <div className="rate__rates">
                                 <div className="rate__top">
                                <Swiper 
                                 slidesPerView={1}
                                 pagination={true}
                              >
                               {Bed.map((item)=>{
                                 return(
                                  <SwiperSlide>
                                   <img src = {item.img} className="rate__img"/> 
                                  </SwiperSlide>
                                 )
                               })}
                                </Swiper>

                               <div className="rate__button2">{item.button}</div>
                                 </div>
                                 <div className="rate__bottom row">
                                      <div className="rate__left">
                                      <img src = {item.svg} className="rate__svg"/>
                                    <p className="rate__name">{item.name}</p>
                                      </div>
                                    <button className="rate__btn">{item.btn}</button>
                                 </div>
                                </div>
                            </div>
                     </>
            )
            })}

{Twin.map(item => {
              SwiperCore.use([Pagination]);
                    return (
                     <>
                        <div className="col-12">
                                <div className="rate__rates">
                                 <div className="rate__top">
                                <Swiper 
                                 slidesPerView={1}
                                 pagination={true}
                              >
                               {TWO.map((item)=>{
                                 return(
                                  <SwiperSlide>
                                   <img src = {item.img} className="rate__img"/> 
                                  </SwiperSlide>
                                 )
                               })}
                                </Swiper>

                               <div className="rate__button2">{item.button}</div>
                                 </div>
                                 <div className="rate__bottom row">
                                      <div className="rate__left">
                                      <img src = {item.svg} className="rate__svg"/>
                                    <p className="rate__name">{item.name}</p>
                                      </div>
                                    <button className="rate__btn">{item.btn}</button>
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
export default Rate