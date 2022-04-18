import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("Services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 style={{marginTop:"6.5rem"}} className='text-center'>Fitness Store</h1>
            <div className='container services'>
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;

