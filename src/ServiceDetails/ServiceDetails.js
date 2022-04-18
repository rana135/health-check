import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [show, setShow] = useState(true);
    const {serviceId} = useParams();
    return (
        <div className='text-center p-5'>
            <Alert show={show} variant="success">
        <Alert.Heading>Do you really want to book it?!</Alert.Heading>
        <h2 className='text-center mt-3'>Product id:{serviceId}</h2>
            <div className='text-center'></div>
        <p>
        Then submit your details by clicking on the button below. I hope you will get the desired product very soon.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
        <Link to='/checkOut'>
          <Button  onClick={() => setShow(false)} variant="outline-success">
          Proceed CheckOut
          </Button>
          </Link>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </div>
    );
};

export default ServiceDetails;