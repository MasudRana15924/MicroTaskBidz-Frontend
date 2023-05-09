import React from 'react';
import { Link } from 'react-router-dom';

const AdminDoctor = ({ doctor }) => {
    const {_id, name, expert, degree, fees, ratings, images, phone, email, work } = doctor;
    return (
        <table className="table text-start w-3/4">
            <tbody>
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={images[0].url} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><span className="badge badge-ghost badge-sm">Name {name}</span> </td>
                    <td> <span className="badge badge-ghost badge-sm">Degree {degree}</span></td>
                    <td> <span className="badge badge-ghost badge-sm">Expert {expert}</span></td>
                    <td> <span className="badge badge-ghost badge-sm">Work {work}</span></td>
                    <td> <span className="badge badge-ghost badge-sm">Email {email}</span></td>
                    <td> <span className="badge badge-ghost badge-sm">Phone {phone}</span></td>
                    <td> <span className="badge badge-ghost badge-sm">Fees {fees}</span></td>
                    <td> <span className="badge badge-ghost badge-sm">Rating {ratings}</span></td>
                    <td><Link to={`/doctor/${_id}`}> <span className="badge badge-info badge-sm">Details</span></Link></td>

                </tr>
            </tbody>
        </table>
    );
};

export default AdminDoctor;