import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { _id, img, name, price, description } = service;

    return (
        <div className='service-container' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className='service shadow-lg'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>Price:-$ {price}</h5>
                <p>{description}</p>
                <button type="button" style={{ borderRadius: "50px" }} className="btn btn-primary btn-lg d-block mx-auto ">Book {name}</button>
            </div>
        </div>
    );
};

export default Service;