import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loader/Loading';
import DoctorsList from './DoctorsList';
import { useEffect } from 'react';
import FilterTags from './FilterTags';
import { fetchDoctors } from '../../state/doctor/doctorsSlice';
import { fetchFilterDoctors } from '../../state/filter/filterSlice';

const DoctorLis = () => {
    const dispatch = useDispatch();
    // const { doctors, isLoading, isError, error } = useSelector(state => state.doctors.doctors);
    const { doctors, isLoading, isError, error } = useSelector(state => state.filterDoctors.filterDoctors);
    const { experts ,search} = useSelector(state => state.filter)
    useEffect(() => {
        // dispatch(fetchDoctors({experts,search}));
        dispatch(fetchFilterDoctors({experts,search}));
    }, [dispatch,experts,search])

    //decide what to render 
    let content;
    if (isLoading) content = <Loading></Loading>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && doctors?.length === 0) {
        content = <div className="col-span-12 lg:mt-64 text-red-600 text-5xl">No Doctors is Found ! </div>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.map(doctor => <DoctorsList key={doctor._id} doctor={doctor} />)
    }

    return (
        <div>
            <div className="lg:flex gap-4 mt-10 mb-20">

                <div className="lg:w-2/4 mt-16 ">
                    <div className="w-3/4 mx-auto ">

                        <div className="h-12 w-full lg:w-3/4 lg:mx-auto mt-10">
                            <h2 className="font-semibold text-2xl mt-1 text-start lg:ml-64">Expert</h2>
                        </div>
                        <div className="hidden lg:block lg:w-3/4 lg:mx-auto  ">

                            <FilterTags></FilterTags>
                        </div>

                    </div>
                </div>
                <div className="w-full mt-20 ">
                    {
                        content
                    }
                </div>
            </div>
        </div>
    );
};

export default DoctorLis;