import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        // <footer>
        //     <div className='foot'>
        //     <h3>Health Coach</h3>
        //     <p className="footvar">Copyright 2022 Health Coach</p>
        //     <p className="footvar">All rights reserved</p>
        //     </div>
        // </footer>

        <div className='footer-container'>
            <div className='footer-description'>
                <div className='ms-3'>
                    <h3 className='text-info mt-3'>About Health Coach</h3>
                    <p>I understand very well how lack of confidence can be an obstacle. That is why I dedicated myself to helping people overcome their fears and improve their looks - and their lives.</p>
                </div>
                <div className='pages'>
                    <h3 className='text-info mt-3'>Pages</h3>
                    <Link to=''>About</Link >
                    <Link to=''>Contact</Link >
                    <Link to=''>Videos</Link >
                    <Link to=''>Healthy Shop</Link >
                    <Link to=''>Success Stories</Link >

                </div>
                <div>
                    <h3 className='text-info mt-3'>Contact Us</h3>
                    <p>USA, California 20, First Avenue, California <br></br>
                        Tel: +7 998 71 150 30 20<br></br>
                        Fax: +7 998 71 150 30 20<br></br>
                        info@ranahossain.com</p>
                </div>
            </div>
            <div className='copyright mt-5'>
                <span>Copyright &copy; 2022 Health Coach</span>
                <p>All Rights Reserve by <span className='text-info'>Rana Hossain Shimul</span></p>
            </div>
        </div>
    );
};

export default Footer;