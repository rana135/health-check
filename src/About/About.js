import React from 'react';
import certificate1 from '../images/certificate/certificat-1_03.jpg'
import certificate2 from '../images/certificate/certificat-2_03.jpg'
import certificate3 from '../images/certificate/certificat-3_03.jpg'

const About = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='text-center'>About Us</h1>
                <p className='container'>health coach is engaged in enabling healthcare for all  removing time and space barriers. We are currently focussed on transforming diagnostic imaging services. “health coach allows you to DO MORE WITH LESS”  It reduces turnaround time and costs significantly. Anyology is primarily helping its clients in Asia, Africa and North America providing Tele-radiology, Tele-cardiology and Clinical/Non-Clinical Review services to be more effective and efficient.</p>
                <div>
                    <div className='mt-5 mb-5'>
                        <h1 className='text-center m-5 fs-1'>Our Doctors are <span className='text-danger'>Certified</span></h1>
                        <div className='d-flex justify-content-center '>
                            <img style={{ width: "30%" }} className="border me-4" src={certificate1} alt="" />
                            <img style={{ width: "30%" }} className="border me-4" src={certificate2} alt="" />
                            <img style={{ width: "30%" }} className="border" src={certificate3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default About;