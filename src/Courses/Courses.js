import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Courses.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import cases1 from '../../src/images/cases/cases1.jpg'
import cases2 from '../../src/images/cases/cases2.jpg'
import cases3 from '../../src/images/cases/cases3.jpg'
import cases4 from '../../src/images/cases/cases4.jpg'
import cases5 from '../../src/images/cases/cases5.jpg'


const Courses = () => {
    return (
        <div>
            <div className='text-center mt-5'>
                <h1 className='fs-1 fw-bolder'>Here Is Some Of Our <br />
                    <span className='text-danger'>Latest Cases</span></h1>
            </div>
            <div className=' swiper-wrapper'>
                <>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 60,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={cases1} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={cases2} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={cases3} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={cases4} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={cases5} alt='' />
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Courses;