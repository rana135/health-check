import React from 'react';
import profile from '../images/profile/profile.png'
import certificate1 from '../images/certificate/certificat-1_03.jpg'
import certificate2 from '../images/certificate/certificat-2_03.jpg'
import certificate3 from '../images/certificate/certificat-3_03.jpg'

const About = () => {
    return (
        <div className='container'>
            <div className='text-center m-5'>
                <img className='w-25 mx-auto' src={profile} alt="" />
            </div>
            <h1 className='text-center'>Rana Hossain Shimul</h1>
            <h6 className='m-3 text-center'>My nickname is Shimul, I am 21 years old. I am a full stack web developer</h6>

            <p>As a Web developer, I want to be able to design Web pages that can effectively display material, provide interactivity, and be artistically pleasing to the user.Another goal is to make sure users of the website have a good experience.In next 6 month i want to learn SEO ,that's why developing sites that are optimized for search engine ranking, and ensuring that websites are properly coded and functional.</p>
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