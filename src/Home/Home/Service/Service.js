import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, img, name, price, description} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
     
    return (
       <div className='service-container' id="service">
            <div className='service shadow-lg'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:-$ {price}</h5>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetail(id)} type="button" style={{borderRadius:"50px"}} className="btn btn-primary btn-lg d-block mx-auto ">Book {name}</button>
        </div>
       </div>
    );
};

export default Service;