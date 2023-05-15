import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from "react-icons/fa";
const MyBookings = ({ booking }) => {
    const { doctorname, doctorfees, doctorimage, doctorId, date, schedule,bookingStatus } = booking;
    return (
        <div className="card col-span-12 sm:col-span-6 md:col-span-3  ">
            <div className="card-body border ">
                <div className="relative">
                    <Link to={`/doctor/${doctorId._id}`}>
                        <img
                            src={doctorimage}
                            className="w-full max-h-48"
                            alt={doctorname}
                        />
                    </Link>
                </div>

                <div className=" text-start p-5">
                    <Link to={`/doctor/${doctorId._id}`} >
                        <p className="text-slate-600 text-md font-semibold " >
                            Doctor :  {doctorname}
                        </p>
                    </Link>
                    <p className="text-slate-600  text-md font-semibold flex gap-2" >
                        < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{doctorfees}Tk
                    </p>
                    <p className="text-slate-600 text-md font-semibold " >Appointment : {date}</p>
                    <p className="text-slate-600 text-md font-semibold " >Slot : {schedule}</p>
                    <p className="text-slate-600 text-md font-semibold " >Status : {bookingStatus}</p>
                </div>


            </div>
        </div>
    );
};

export default MyBookings;