import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const DoctorsCard = (props) => {
    const { doctorName, dOfMedical, phone, mail, img } =
    props.allDoctor || {};
  return (
    <div className="col">
      <div className="card h-80 p-2 m-3 text-start">
        <img src={img} height="250px" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bold">Doctor Name: {doctorName}</h5>
          <p className="card-text">Department Of Medical: {dOfMedical}</p>
          <p className="card-text"> <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> Phone: {phone}</p>
          <p className="card-text"> <FontAwesomeIcon icon={faEnvelope} size="lg" /> Email: {mail}</p>
          <Button variant="secondary">Make an Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard; 