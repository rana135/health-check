import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
             <img className='w-100' src={notFound} alt="" />
            <div className='notFound'>
                <button className='btn-sm'><Link to='home'>Go Back Home</Link></button>
            </div>
        </div>
    );
};

export default NotFound;