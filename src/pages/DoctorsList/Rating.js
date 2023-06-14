import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ratingRemoved, ratingSelected } from '../../state/filter/filterReducer';

const Rating = ({title}) => {
    const dispatch = useDispatch();
    const { ratingss } = useSelector(state => state.filter)

    const isSelected =ratingss.includes(title) ? true : false

    const style = isSelected ? 'text-slate-600 w-32 h-8 pt-1  text-start font-semibold  mt-1 lg:ml-64' : 'w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-1 lg:ml-64'
    const handleSelect = () => {
        if (isSelected) {
             dispatch(ratingRemoved(title));
        } else {
             dispatch(ratingSelected(title));
        }
    }
    return (
        <div>

            <p className={style} onClick={handleSelect}>
                <input type="checkbox" className="mr-3" />
                {title}

            </p>
        </div>
    );
};

export default Rating;