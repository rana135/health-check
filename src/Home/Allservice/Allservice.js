import React from 'react';
import './Allservice.css'

const Allservice = ({ allSservice }) => {
    return (
        <div>
            <div className='Allservice-container'>
                <figure className="px-10 pt-10 text-center">
                    <img src={allSservice.img} alt="services name" className="rounded-3  w-25" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title text-secondary">{allSservice.name}</h2>
                    <p>{allSservice.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Allservice;