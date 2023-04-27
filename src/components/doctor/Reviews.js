import React from 'react';
import Rating from '@mui/material/Rating';
const Reviews = ({review}) => {
    const options = {
        size: "large",
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <div className="review-card mt-12">
            <div className="review-img-section">
                {/* <img src={profilePng} alt="User" className="user-img-review" /> */}
            </div>
            <div className="review-details ml-12">
                <p>{review.name}</p>
                <div className="review-star mt-3">
                <Rating {...options} name="size-small" size="small"/>
                </div>
                <span className="pl-10">{review.comment}</span>
                
            </div>

        </div>
    );
};

export default Reviews;