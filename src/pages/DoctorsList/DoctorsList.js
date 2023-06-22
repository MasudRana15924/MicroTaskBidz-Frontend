import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import Rating from '@mui/material/Rating';
import { FcCallback } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";

const DoctorsList = ({ doctor }) => {
    const { name, phone, work, expert, email, degree, fees, ratings, numOfReviews, images } = doctor;
    const options = {
        size: "large",
        value: ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <Link to={`/doctor/${doctor._id}`} >
        <div className="ml-3 mr-3 lg:ml-0 lg:mr-0 lg:w-3/4 mx-auto lg:flex justify-between mt-5 border border-inherit rounded">
            <div className="flex  md:w-2/4 lg:w-2/4  md:flex lg:flex justify-between  mb-5 ">
                {/* <img
                    src={images[0].url}
                    className="w-full mx-auto md:w-2/4 lg:w-2/4 max-h-48 "
                    alt={name}
                /> */}
                {
                    images[0]?.url? <img
                        src={images[0].url}
                        // className="w-1/4 mx-auto md:w-2/4 lg:w-2/4 h-28 lg:h-48 border rounded m-3 ml-3 "
                        className="doctor-image m-3 ml-3 border rounded"
                        alt={name}
                    />: <img
                    src=""
                    className="w-full mx-auto md:w-2/4 lg:w-2/4 max-h-48 "
                    alt={name}
                />
                }
                <div className=" w-full text-start ml-5 lg:ml-3 md:ml-3">
                    <div className="flex mt-3">
                        <p className="font-semibold"> {name} </p>
                        <GoPrimitiveDot className="text-green-600"></GoPrimitiveDot>
                    </div>
                    <p className="text-slate-600  text-md " >
                        {degree}
                    </p>
                    <p className="text-slate-400  text-md mt-3" >
                       Specialities
                    </p>
                    <p className=" text-md " >
                        {expert}
                    </p>
                    {/* <div className="flex mt-3">
                        <FcCallback className="mt-1 text-2xl"> </FcCallback>
                        <p className="ml-3"> {phone} </p>
                    </div>
                    <div className="flex mt-3">
                        <HiOutlineMail className="mt-1 text-2xl"> </HiOutlineMail>
                        <p className="ml-3"> {email} </p>
                    </div> */}


                </div>
            </div>


            <div className="ml-5 lg:ml-0 text-start mr-10 mt-5 mb-5">
                <p className="text-slate-600  text-md font-semibold" >
                    Works at {work}
                </p>
                
                {/* <p className="text-slate-600  text-md font-semibold mt-2" >
                    ({numOfReviews}) Reviews
                </p> */}
                <div className="flex justify-between lg:block">
                    <div>
                    <p className="text-slate-400  text-md mt-3" >
                       Experience
                    </p>
                    <p className=" text-md " >
                        {expert}
                    </p>
                    </div>
                    <div>
                    <p className="text-slate-400  text-md mt-3" >
                      Total Ratings
                    </p>
                    <p className=" text-md " >
                    {/* {ratings} */}
                    </p>
                    </div>
                </div>
                <p className="text-slate-600  text-md font-semibold flex gap-2 mt-2" >
                    < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{fees} BDT
                </p>
                
            </div>

        </div>
        </Link>
    );
};

export default DoctorsList;