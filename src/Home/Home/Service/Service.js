import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {img, name, price, description} = service;
    return (
       <div className='service-container' id="service">
            <div className='service shadow-lg'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:-$ {price}</h5>
            <p>{description}</p>
            <button type="button" style={{borderRadius:"50px"}} className="btn btn-primary btn-lg d-block mx-auto ">Large button</button>
        </div>
       </div>
    );
};

export default Service;