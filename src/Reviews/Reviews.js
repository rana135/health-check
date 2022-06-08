import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'


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
        </div>
    );
};

export default Reviews;