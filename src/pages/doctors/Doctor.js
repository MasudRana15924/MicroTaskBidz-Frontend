import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Doctors from './Doctors';
import Loading from '../loader/Loading';
import { useState } from 'react';
import { fetchFilterDoctors } from '../../state/filter/filterSlice';
const experts = [
    "Dentist",
    "Surgeon",
    "Orthopedic",
    "Neurology",
    "Urology",
    "Medicine",
];
const Doctor = () => {
    const [expert, setExpert] = useState("");
    const [visible, setVisible] = useState(4);
    const loadMore = () => {
        setVisible(visible + 4);
    };
    const dispatch = useDispatch();
    // const { doctors, isLoading, isError, error } = useSelector(state => state.doctors.doctors);
    const { doctors, isLoading, isError, error } = useSelector(state => state.filterDoctors.filterDoctors);
    useEffect(() => {
        // dispatch(fetchDoctors());
        dispatch(fetchFilterDoctors({ expert }));
    }, [dispatch, expert])
    //decide what to render 
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && doctors?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-1/4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Doctors Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.slice(0, visible).map(doctor => <Doctors key={doctor._id} doctor={doctor} />)
    }
    return (

        <section className="pt-12 mb-10">
            <h1 className="text-center text-6xl">Our Best Doctors</h1>
            <div className="mt-10 ">
                {experts?.map((exp) => (

                    <button
                        className="btn btn-xs ml-5 bg-violet-600 border-violet-600"
                        key={exp}
                        onClick={() => setExpert(exp)}
                    >
                        {exp}
                    </button>
                ))}
            </div>
            <div
                className="grid grid-cols-12 gap-4  w-3/4 mx-auto  lg:px-0 min-h-[300px] mt-28 " >
                {content}

                <div className="col-span-12 ">
                    {visible && (doctors?.length > 0 && (
                        <button onClick={loadMore} className="btn bg-violet-600 border-violet-600 mx-auto mt-5">Load More</button>
                    ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;