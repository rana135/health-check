import React from 'react';
import './About.css'
import profile from '../images/profile/profile.png'
import certificate1 from '../images/certificate/certificat-1_03.jpg'
import certificate2 from '../images/certificate/certificat-2_03.jpg'
import certificate3 from '../images/certificate/certificat-3_03.jpg'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

const About = () => {
    return (
        <div>
            <div className='container'>
                <div className='text-center m-5'>
                <img className='w-25 mx-auto' src={profile} alt="" />
                </div>
                <h1 className='text-center'>Rana Hossain Shimul</h1>
                <h6 className='m-3 text-center'>My nickname is Shimul, I am 21 years old. I am a full stack web developer</h6>

                <p>As a Web developer, I want to be able to design Web pages that can effectively display material, provide interactivity, and be artistically pleasing to the user.Another goal is to make sure users of the website have a good experience.In next 6 month i want to learn SEO ,that's why developing sites that are optimized for search engine ranking, and ensuring that websites are properly coded and functional.</p>
                <div>
                    <div className='mt-5 mb-5'>
                        <h1 className='text-center m-5 fs-1'>Certificates</h1>
                        <div className='d-flex justify-content-center '>
                            <img style={{ width: "30%" }} className="border me-4" src={certificate1} alt="" />
                            <img style={{ width: "30%" }} className="border me-4" src={certificate2} alt="" />
                            <img style={{ width: "30%" }} className="border" src={certificate3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        speed={600}
                        parallax={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Parallax, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div
                            slot="container-start"
                            className="parallax-bg"
                            style={{
                                "background-image":
                                    "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                            }}
                            data-swiper-parallax="-23%"
                        ></div>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                                Slide 1
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Subtitle
                            </div>
                            <div className="d-flex ms-5" data-swiper-parallax="-100">
                                <p className='text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>
                                <div className='ms-5'>
                                <img style={{height:"20rem", width:"20rem"}} src={profile} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                                Slide 2
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Subtitle
                            </div>
                            <div className="text ms-5" data-swiper-parallax="-100">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                                Slide 3
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Subtitle
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>


    );
};

export default About;