import React from 'react';
import workFlow from '../../src/images/workFlow.webp'


const WorkFlow = () => {

    return (
        <div className='mt-4'>
            <h1 className='text-danger text-center'>OUR WORKFLOW</h1>
            <img className='rounded mx-auto d-block img-fluid w-100' src={workFlow} alt="" />
        </div>
    );
};

export default WorkFlow;