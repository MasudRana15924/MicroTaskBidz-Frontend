import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../state/doctor/doctorsSlice';
import { useEffect } from 'react';
import Doctors from './Doctors';
import Loading from '../loader/Loading';

const Doctor = () => {
    const dispatch = useDispatch();
    const { doctors, isLoading, isError, error } = useSelector(state => state.doctors.doctors);
    useEffect(() => {
        dispatch(fetchDoctors());
    }, [dispatch])
    //decide what to render 
    let content;
    if (isLoading) content = <Loading></Loading>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && doctors?.length === 0) {
        content = <div className="col-span-12">No doctors found ! </div>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.map(doctor => <Doctors key={doctor._id} doctor={doctor} />)
    }
    return (
       
        <section className="pt-12 mb-10">
            <h1 className="text-center text-5xl">Our Best Doctors</h1>
            
            <div
                className="grid grid-cols-12 gap-4  w-3/4 mx-auto  lg:px-0 min-h-[300px]  mt-28" >
                {content}
            </div>
        </section>
    );
};

export default Doctor;