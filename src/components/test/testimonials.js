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
                        >
                            {Review.map((item) => {
                                return(
                                    <SwiperSlide>
                                        <p className="review__text">
                                            "{item.text}"
                                        </p>
                                        <span className="review__author">{item.author}</span>
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
        </div>
    )
}

export default Testimonials