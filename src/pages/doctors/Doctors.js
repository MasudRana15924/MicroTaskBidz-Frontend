import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import {  FaRegMoneyBillAlt } from "react-icons/fa";
const Doctors = ({doctor}) => {
    const { name,expert, degree,fees,ratings,images } = doctor;
    const options = {
        size: "large",
        value: ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <div className="doctors-card col-span-12 sm:col-span-6 md:col-span-3  ">
            <div className="w-full flex flex-col ">
                <div className="relative">
                    <Link to={`/doctor/${doctor._id}`}>
                        <img
                            src={images[0].url}
                            className="w-full max-h-48"
                            alt={name}
                        />
                    </Link>
                </div>

                <div className=" text-start p-5">
                    <Link to={`/doctor/${doctor._id}`} >
                        <p className="text-slate-600 text-md font-semibold mt-5" >
                            {name} (  {expert})
                        </p>
                    </Link>
                    <p className="text-slate-600  text-md font-semibold mt-3" >
                      {degree}
                    </p>
                    <p className="text-slate-600  text-md font-semibold flex gap-2" >
                    < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{fees}Tk
                    </p>
                </div>
                <div className="flex justify-between ml-5">
                <p className=""><Rating {...options} size="medium" className=""/>({ratings})</p>
                <Link to={`/doctor/${doctor._id}`} >
                <button className="h-8 mr-5  border border-violet-400 text-xs pl-1 pr-1">VIEW PROFILE</button>
                </Link>
                </div>

            </div>
        </div>
       
    
    );
};

export default Doctors;