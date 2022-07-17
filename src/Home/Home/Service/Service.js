import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, price, description, _id } = service;
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='service-container' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className='service shadow-lg'>
                <img src={img} alt="" />
                <h3 style={{color:"#003f91"}}>{name}</h3>
                <h5>Price:-$ {price}</h5>
                <p>{description}</p>
                <button type="button" onClick={() => handleNavigate(_id)} style={{ borderRadius: "50px", background:"#0353a4"}} className="btn btn-lg d-block mx-auto text-white">Book {name}</button>
            </div>
        </div>
    );
};
export default Service;
