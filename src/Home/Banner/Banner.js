import React from 'react';
import banner1 from '../../images/banner/banner1.webp'
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div>
            <div>
                <div className="d-flex container" style={{ marginTop: "10%" }}>
                    <img data-aos="fade-right" data-aos-duration="3000" src={banner1} alt='' style={{ borderRadius: "10%" }} className="w-50" />
                    <div style={{ marginTop: "7%", marginLeft: "5rem" }} data-aos="fade-right" data-aos-duration="3000">
                        <h1 style={{ fontSize: "45px" }} className="fw-bold text-succed">
                            inspiring you to live a healthier 
                            <span className='text-danger'> lifestyle</span>
                        </h1>
                        <p className="mt-3">We offer excellent value by providing quality work at an affordable price. We offer superior pricing, unmatched in the industry. Please contact us to discuss your facilities, volumes of work, specific needs to procure a quote on our pricing.</p>
                        <button className='btn btn-primary btn-lg rounded-3'>CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;