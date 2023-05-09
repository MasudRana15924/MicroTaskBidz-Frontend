import React from 'react';
import { FcCallback } from 'react-icons/fc';
import { GoPrimitiveDot } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { TbGenderFemme } from 'react-icons/tb';
import { CgCalendarDates } from 'react-icons/cg';
import { MdSchedule } from 'react-icons/md';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminAppointment = ({ appointment }) => {
    const { doctorId, doctorname, doctorimage, doctorfees, patientname, patientemail, phone, patientgender, date, schedule } = appointment
    return (

        <table className=" text-start table w-full">
            <tbody>
                <td className="w-1/4">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <Link to={`/doctor/${doctorId}`}>
                                    <img src={doctorimage} alt="Avatar Tailwind CSS Component" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{doctorname}</div>
                            <div className="flex gap-2 text-sm opacity-50"> < FaRegMoneyBillAlt className="text-2xl"></FaRegMoneyBillAlt>{doctorfees}Tk</div>
                        </div>
                    </div>
                </td>
                <td className="w-1/4">
                    {patientname}
                    <br />
                    <span className="badge badge-ghost badge-sm">{patientemail}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">{patientgender}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">{phone}</span>
                </td>
                <td className="w-1/4">{date}</td>
                <td className=" w-1/4">{schedule}</td>
                <th className=" w-1/4">
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tbody>
        </table>

    );
};

export default AdminAppointment;