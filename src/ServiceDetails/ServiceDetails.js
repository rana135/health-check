import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1 className='text-center'>le haluya:{serviceId}</h1>
            <Link to='/checkOut'>
            <button className='btn btn-primary mx-auto d-block m-5'>Proceed CheckOut</button>
            </Link>
        </div>
    );
};

export default ServiceDetails;