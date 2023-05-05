import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAppointments } from '../../state/appointments/appointmentsSlice';

const AppointmentModal = ({ doctor }) => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const [patientname, setPname] = useState('');
    const [patientemail, setEmail] = useState('');
    const [patientgender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [schedule, setSchedule] = useState('');
    const name = doctor.name;
    const fees = doctor.fees;
    const image = doctor.image;
    const doctorId = doctor._id
    const bookingAppointment = ({ name, fees, image, doctorId })
    const data = ({ bookingAppointment, patientname, patientemail, patientgender, phone, date, schedule });
    const handleCreate = (e) => {
        e.preventDefault();
        if (patientname && patientemail && patientgender && phone && date) {
            dispatch(createAppointments({
                data, userToken
            }));
            toast.success('Your appointment placed ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error('Please enter your details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <div >
            <input type="checkbox" id="appointment-modal" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box  relative">
                    <label for="appointment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-start text-3xl font-bold mb-5">Make an Appointment</h3>
                    <form action="" className="" onSubmit={handleCreate}>
                        <div className="ml-16">
                            <div>
                                <label className="label">
                                    <span className="label-text text-blue-400">Patient Name </span>
                                </label>
                                <input type="text" value={patientname} onChange={(e) => setPname(e.target.value)} placeholder="Name" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-blue-400">Patient Email </span>
                                </label>
                                <input type="text" value={patientemail} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-blue-400">Patient Phone </span>
                                </label>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone " className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-blue-400">Patient Gender </span>
                                </label>
                                <select name="Gender" className="w-3/4 h-12 border rounded" value={patientgender} onChange={(e) => setGender(e.target.value)}>
                                    <option  >Select Gender </option>
                                    <option  >Male </option>
                                    <option >Female </option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-blue-400">Date </span>
                                </label>
                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-3/4 p-2  h-12 mx-auto" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-blue-400">Appointment Slot?</span>
                                </label>
                                <select className="w-3/4 h-12 border rounded" value={schedule} onChange={(e) => setSchedule(e.target.value)}  >
                                    <option  >Select Slots</option>
                                    <option >Morning </option>
                                    <option >Afternoon </option>
                                    <option >Evening </option>
                                </select>
                            </div>
                        </div>
                        <button className="btn bg-violet-900 mt-5 h-12 w-full text-white font-semibold text-center mb-5">Book Appointment </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default AppointmentModal;