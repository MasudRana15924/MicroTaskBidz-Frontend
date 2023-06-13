import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import Rating from '@mui/material/Rating';
import { FcCallback } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";

const DoctorsList = ({doctor}) => {
    const { name, phone, work, expert, email, degree, fees, ratings, numOfReviews, images } = doctor;
    const options = {
        size: "large",
        value: ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <div className=" w-3/4  lg:flex justify-between mt-5 border border-inherit">
            <div className="w-2/4 flex justify-between mt-5 mb-5 ">
                <img
                    src={images[0].url}
                    className="w-2/4 max-h-48 ml-5"
                    alt={name}
                />
                <div className=" w-full text-start ml-3">
                    <div className="flex mt-3">
                        <p className="font-semibold"> {name} </p>
                        <GoPrimitiveDot className="text-green-600"></GoPrimitiveDot>
                    </div>
                    <p className="text-slate-600  text-md font-semibold" >
                        {degree}
                    </p>
                    <p className="text-blue-400 text-md font-semibold" >
                        {expert}
                    </p>
                    <div className="flex mt-3">
                        <FcCallback className="mt-1 text-2xl"> </FcCallback>
                        <p className="ml-3"> {phone} </p>
                    </div>
                    <div className="flex mt-3">
                        <HiOutlineMail className="mt-1 text-2xl"> </HiOutlineMail>
                        <p className="ml-3"> {email} </p>
                    </div>


                </div>
            </div>


            <div className="ml-10 lg:ml-0 text-start mr-10 mt-5 mb-5">
                <p className="text-slate-600  text-md font-semibold" >
                    {work}
                </p>
                <p className="text-slate-600  text-md font-semibold flex gap-2 mt-2" >
                    < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{fees}Tk
                </p>
                <p className="text-slate-600  text-md font-semibold mt-2" >
                    ({numOfReviews}) Reviews
                </p>
                <p className="mt-2"><Rating {...options} size="sm" className="" />({ratings})</p>

                <p className="text-green-600  text-md font-semibold flex gap-2 mt-2" >
                    < MdCalendarToday className="text-2xl"></MdCalendarToday>Available Today
                </p>
                <Link to={`/doctor/${doctor._id}`} >
                    <button className="mt-3 h-8 w-3/4 mr-5  border border-blue-400 text-sm font-semibold pl-1 pr-1">VIEW PROFILE</button>
                </Link>
            </div>

        </div>
    );
};

export default DoctorsList;