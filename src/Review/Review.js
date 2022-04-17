import React from 'react';
import './Review.css'

const Review = (props) => {
    const { picture, name, reviews, ratings } = props.review;
    return (
        <div className='reviews-all'>
            <div>
                <div className='client-reviews'>
                    <img src={picture} alt='' />
                    <div className='review-details'>
                        <h4>{name}</h4>
                        <h6>Ratings: {ratings}</h6>
                    </div>
                </div>
                <div>
                    <p className='reviews'><small>{reviews}</small></p>
                </div>
            </div>
        </div>
    );
};

export default Review;