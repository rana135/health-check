import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Service from '../Home/Service/Service';
import './Services.css';

const Services = () => {
    const [products] = useProducts()
    return (
        <div>
            <h1 style={{marginTop:"6.5rem"}} className='text-center'>Fitness Store</h1>
            <div className='container services'>
            {
                products.slice(0,6).map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;

