import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterNurses } from '../../state/nurses/nursesSlices';
import Loading from '../loader/Loading';
import Nurse from './Nurse';
const locations = [
  "Uttara",
  "Dhanmondi",
  "Mirpur",
  "Banani",
  "Gulshan"
];
const Nurses = () => {
    const [location, setLocation] = useState("");
    const [visible, setVisible] = useState(4);
    const loadMore = () => {
        setVisible(visible + 4);
    };
    const dispatch = useDispatch();
    const { nurses, isLoading, isError, error } = useSelector(state => state.filterNurses.filterNurses);
    useEffect(() => {
        dispatch(fetchFilterNurses({ location }));
    }, [dispatch, location])

    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && nurses?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-1/4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Doctors Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && nurses?.length > 0) {
        content = nurses.slice(0, visible).map(nurse => <Nurse key={nurse._id} nurse={nurse} />)
    }
    return (
        <section id="#nurses" className="doctors-section pt-12 mb-10 mt-24">
        <h1 className="text-center text-2xl lg:text-6xl">Our Best Nurses</h1>
        <div className="mt-10 ">
            {locations?.map((exp) => (

                <button
                    className="btn btn-xs ml-5 mt-5 bg-violet-600 border-violet-600"
                    key={exp}
                    onClick={() => setLocation(exp)}
                >
                    {exp}
                </button>
            ))}
        </div>
        <div
            className="grid grid-cols-12 gap-4  w-3/4 mx-auto  lg:px-0 min-h-[300px] mt-28 " >
            {content}

            <div className="col-span-12 ">
                {visible && (nurses?.length > 0 && (
                    <button onClick={loadMore} className="btn bg-violet-600 border-violet-600 mx-auto mt-5 mb-10">Load More</button>
                ))
                }
            </div>
        </div>
    </section>
    );
};

export default Nurses;