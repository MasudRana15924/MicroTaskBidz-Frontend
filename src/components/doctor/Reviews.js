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
        <div className="flex mt-12 w-3/4 ">
            <div className=" w-1/4">
                {/* <img src={profilePng} alt="User" className="user-img-review" /> */}
            </div>
            <div className=" w-3/4">
                <p className="text-start font-medium">{review.name}</p>
                <Rating {...options} name="size-small" size="small" className=" mr-64 mt-2"/>
                <p className="text-start">{review.comment}</p>
                
            </div>

        </div>
    );
};

export default Reviews;