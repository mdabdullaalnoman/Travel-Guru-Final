import React, { useState } from 'react';
import SliderInfo from '../../FakeData/SliderInfo';
import SliderLeft from '../SliderLeft/SliderLeft';
import './DataLoad.css'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const DataLoad = () => {
    const [showData, setShowData ] = useState([]);
    console.log(showData);
    const handelShowData = (data) => {
        setShowData([data]);
    }

        
    
    return (
        <section>
            <div className="container">
                <div className="row align-self-center slider-info my-2 my-md-5 ">
                    <div className="col-12 col-md-4 my-3 my-md-0">
                        {
                            showData.map( LeftInfo => <SliderLeft key={LeftInfo.id} LeftInfo={LeftInfo}></SliderLeft>)
                        }
                    </div>
                    <div className="col-12 col-md-8 my-3 my-md-0">
                        <div className="row">
                        <Swiper
                             breakpoints={{
                                // when window width is >= 320px
                                    320: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    },
                                    // when window width is >= 480px
                                    480: {
                                        slidesPerView: 3,
                                        spaceBetween: 10
                                    },
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 20
                                    }
                              }}
                           
                            loop={true}
                            autoplay={{
                                delay:2000,
                                disableOnInteraction:false
                            }}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            {
                                    SliderInfo.map( data => ( 
                                        <SwiperSlide key={data.id} >
                                        
                                            <div className="col-md-4">
                                               <div className="carousel-card roboto">
                                                    <img onClick={() =>handelShowData(data)}  src={data.image}  alt="image"/>
                                                    <h3>{data.tittle}</h3>
                                                </div>
                                            </div>
                                        
                                        </SwiperSlide>
                                    ))
                                }
                            ...
                         </Swiper>
                                
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataLoad;