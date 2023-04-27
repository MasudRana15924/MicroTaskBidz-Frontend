import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loader/Loading';
import DoctorsList from './DoctorsList';
const experts = [
    "Dentist",
    "Surgeon",
    "Orthopedic",
    "Neurology",
    "Urology",
    "Medicine",

];
const genders = [
    "Male",
    "Female"

];
const locations = [
    "Uttara",
    "Dhanmondi",
    "Gulshan",
    "Mirpur"
];
const DoctorLis = () => {
    const [agree, setAgree] = useState(false);
    const [selected, setSelected] = useState([]);
    const [expert, setExpert] = useState("");
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const dispatch = useDispatch();
    const { doctors, isLoading, isError, error } = useSelector(state => state.doctors.doctors);
    // useEffect(() => {
    //     dispatch(fetchFilterDoctors({ expert, gender, location }));
    // }, [dispatch, expert, location, gender])
    //decide what to render 

    let content;
    if (isLoading) content = <Loading></Loading>;
    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && doctors?.length === 0) {
        content = <div className="col-span-12 lg:mt-64 text-red-600 text-5xl">No Doctors is Found ! </div>
    }
    if (!isLoading && !isError && doctors?.length > 0) {
        content = doctors.map(doctor => <DoctorsList key={doctor.id} doctor={doctor} />)
    }
    const handleFilter = (e, index) => {
        const activeData = document.getElementById(index).checked
        if (activeData === true) {
            setSelected(oldData => [...oldData, e.target.value]);
            setExpert(e.target.value);
        } else {
            setSelected(selected.filter(values => values !== e.target.value));
            setExpert()
        }

        console.log(e.target.value)

    }


    return (
        <div>
            <div className="flex gap-4 mt-10">

                <div className="w-2/4 mt-16 ">
                    <div className="w-3/4 mx-auto">
                        <div className="form-control w-3/4 mx-auto max-w-xs">
                            <label className="label">
                                <span className="label-text">What you want to find ?</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            
                        </div>
                        <div className="border h-12 w-3/4 mx-auto mt-10">
                            <h2 className="font-semibold text-2xl mt-1 text-center ">Search Filter </h2>
                        </div>
                        <div className="w-3/4 mx-auto ">

                            {experts?.map((exp) => (

                                <p
                                    className=" w-32 h-8  pt-1  text-start font-semibold text-slate-600 mt-3 ml-5"
                                    key={exp}
                                    onClick={() => setLocation(exp)}

                                >
                                    {exp}
                                </p>
                            ))}

                        </div>
                        <div className="w-3/4 mx-auto">
                            <div className="border rounded h-12 mt-5">
                                <h2 className="font-semibold text-2xl mt-1 text-center ">Gender</h2>
                            </div>
                            <div className="">
                                {genders?.map((exp) => (

                                    <p
                                        className=" w-32 h-8  pt-1 font-semibold text-slate-600 text-start mt-3 ml-5"
                                        key={exp}
                                        onClick={() => setLocation(exp)}

                                    >
                                        {exp}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="w-3/4 mx-auto">
                            <div className="border rounded h-12 mt-5">
                                <h2 className="font-semibold text-2xl mt-1 text-center">Locations</h2>
                            </div>
                            <div className="">
                                {locations?.map((exp) => (

                                    <p
                                        className=" w-32 h-8  pt-1 font-semibold text-slate-600 text-start mt-3 ml-5"
                                        key={exp}
                                        onClick={() => setLocation(exp)}

                                    >
                                        {exp}
                                    </p>
                                ))}
                            </div>
                        </div>


                    </div>

                </div>
                <div className="w-full mt-20">
                    {
                        content
                    }
                </div>
            </div>
        </div>
    );
};

export default DoctorLis;