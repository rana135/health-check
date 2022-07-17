import React from 'react';
import banner1 from '../../images/banner/banner1.webp'
import './banner.css'

const Banner = () => {
    return (
        <div>
            <div>
                <div className="banner container" style={{ marginTop: "10%" }}>
                    <img data-aos="fade-right" data-aos-duration="3000" src={banner1} alt='' style={{ borderRadius: "10%" }} className="w-75" />
                    <div style={{ marginTop: "12%"}} data-aos="fade-right" data-aos-duration="3000">
                        <h1 className="fw-bold text-succed banner-title">
                            inspiring you to live a 
                            <span style={{color:"#003f91"}}> healthier lifestyle</span>
                        </h1>
                        <p className="mt-3">We offer excellent value by providing quality work at an affordable price. We offer superior pricing, unmatched in the industry. Please contact us to discuss your facilities, volumes of work, specific needs to procure a quote on our pricing.</p>
                        <button className='btn btn-lg rounded-3 text-white' style={{background:"#0353a4"}}>CONTACT US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;