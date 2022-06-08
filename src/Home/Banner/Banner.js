import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.webp'
import banner2 from '../../images/banner/banner2.webp'
import banner3 from '../../images/banner/banner3.webp'

const Banner = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img style={{maxHeight:"600px"}}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 className='text-white  m-0 justify-content-start'>Hi, I'm Asley Graff!</h1>
                    <h5 className='text-white '>Your new Personal Coach for better life!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{maxHeight:"600px"}}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1 className='text-white'>Hi, I'm Asley Graff!</h1>
                        <h5 className='text-white'>Your new Personal Coach for better life!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{maxHeight:"600px"}}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1 className='text-secondary'>Hi, I'm Asley Graff!</h1>
                        <h5 className='text-secondary'>Your new Personal Coach for better life!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;