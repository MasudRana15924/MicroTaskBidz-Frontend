import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRatings } from '../../state/category/ratingsSlice';
import Rating from './Rating';

const Ratings = () => {
    const dispatch = useDispatch();
    const { ratings } = useSelector(state => state.ratings.ratings);
    useEffect(() => {
        dispatch(fetchRatings());
    }, [dispatch])
    return (
        <div>
            {ratings?.map((rating)=><Rating key={rating._id} title={rating.title}></Rating>)}
        </div>
    );
};

export default Ratings;