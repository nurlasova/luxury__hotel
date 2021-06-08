import './testimonials.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Review } from './const'
import SwiperCore, { Navigation } from 'swiper/core';
import "swiper/components/navigation/navigation.min.css"


function Testimonials(){
    SwiperCore.use([Navigation]);
    return(
        <div className="review">
                <div className="container">
                    <h2 className="review__title">Testimonials</h2>
                    <Swiper
                        slidesPerView={1}
                        navigation={true}
                        prevEl='.prev'
                        nextEl='.next'
                        >
                            {Review.map((item) => {
                                return(
                                    <SwiperSlide>
                                        <p className="review__text">
                                            "{item.text}"
                                        </p>
                                        <span className="review__author">{item.author}</span>
                                    <div className="row review__row">
         <svg className=" review__prev swiper-button-prev" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 50L40 50C45.5228 50 50 45.5228 50 40L50 10C50 4.47715 45.5228 0 40 0L10 0C4.47715 0 0 4.47715 0 10L0 40C0 45.5228 4.47715 50 10 50Z" fill="#E0B973"/>
<path d="M18.66 24.693L28.353 15L31.24 17.887L24.434 24.693L31.24 31.5L28.353 34.387L18.66 24.693Z" fill="white"/>
</svg>  
    <svg className="review__next swiper-button-next" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 0H10C4.47715 0 0 4.47715 0 10V40C0 45.5228 4.47715 50 10 50H40C45.5228 50 50 45.5228 50 40V10C50 4.47715 45.5228 0 40 0Z" fill="#E0B973"/>
<path d="M31.34 24.6918L21.647 34.3848L18.76 31.4978L25.566 24.6918L18.76 17.8848L21.647 14.9978L31.34 24.6918Z" fill="white"/>
</svg>  
                                    </div>
                                    
                                    </SwiperSlide>
                                    
                                )
                            })}
                    </Swiper>
                </div>
        </div>
    )
}

export default Testimonials