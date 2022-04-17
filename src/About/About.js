import React from 'react';
import profile from '../images/profile/profile.png'
import certificate1 from '../images/certificate/certificat-1_03.jpg'
import certificate2 from '../images/certificate/certificat-2_03.jpg'
import certificate3 from '../images/certificate/certificat-3_03.jpg'

const About = () => {
    return (
        <div className='container'>
            <div className='text-center m-5'>
                <img className='w-50 mx-auto' src={profile} alt="" />
            </div>
            <h1 className='text-center'>Ashley Graff</h1>
            <h6 className='m-3 text-center'>My name is Ashley Graff, I am 35 years old. I am a Personal Health Coach</h6>

            <p className='text-center'>How to develop yourself more in the future. Bring something better as a gift for people, which will be something good for their health</p>

            <p>Ashley Graff is one of the most famous fitness models worldwide. Thanks to her balanced physique and incredible definition she has been featured in many popular magazines, TV shows, commercials and music videos. As a certified personal coach and natural yoga trainer she helped thousands to transform their body. With EAST MODE she developed a 90 days transformation program which is based on more than 10 years’ experience as a fitness model and life coach.</p>
            <div>
                <div className='mt-5 mb-5'>
                    <h1 className='text-center m-5 fs-1'>Certificates</h1>
                    <div className='d-flex justify-content-center '>
                        <img style={{width:"30%"}} className="border me-4" src={certificate1} alt="" />
                        <img style={{width:"30%"}} className="border me-4" src={certificate2} alt="" />
                        <img style={{width:"30%"}} className="border" src={certificate3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;