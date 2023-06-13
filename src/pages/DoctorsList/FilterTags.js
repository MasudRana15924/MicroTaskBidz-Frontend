import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory } from '../../state/category/categorySlice';
import FilterTag from './FilterTag';
import DoctorLis from './DoctorLis';

const FilterTags = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories.categories);
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])

    

    return (
        <div>
            {/* {
              content 
            } */}
            {categories?.map((category)=><FilterTag key={category._id} title={category.title}></FilterTag>)}
        </div>
    );
};

export default FilterTags;