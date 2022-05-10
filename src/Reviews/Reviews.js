import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'
import natural1 from '../images/natural1.webp'
import natural3 from '../images/natural3.webp'
import natural4 from '../images/natural4.webp'
import natural5 from '../images/natural5.webp'
import natural6 from '../images/natural6.jpg'


const Reviews = () => {
    const [clientReviews, SetClientReviews] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => SetClientReviews(data))
    }, [])
    return (
        <div>
            <div className='customer-reviews'>
                <h1 style={{ textAlign: "center", fontSize: "45px" }}>Customer Reviews:</h1>
                <div className='reviews-container'>
                    {
                        clientReviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div>
                <div className='images'>
                    <div className='image-container'>
                        <img src={natural1} alt="" />
                        <img className='transition-image' src={natural3} alt="" />
                    </div>
                    <div className='image-container'>
                        <img src={natural4} alt="" />
                        <div className='imag__overlays'>
                            <h1>This is Dog</h1>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='image-contain'>
                        <img className='' src={natural5} alt="" />
                    </div>
                    <div className='image-contain ms-2'>
                        <img className='' src={natural6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;