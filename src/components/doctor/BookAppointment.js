import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { createAppointments } from '../../state/appointments/appointmentsSlice';

const BookAppointment = () => {

    const dispatch = useDispatch();
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const { doctor } = useSelector(state => state.doctor.doctor);
    const userToken = loggeduser.token
    const [patientname, setPname] = useState('');
    const [patientemail, setEmail] = useState('');
    const [patientgender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [schedule, setSchedule] = useState('');
    const doctorname = doctor.name;
    const doctorfees = doctor.fees;
    const doctorimage = doctor.images[0].url;
    const doctorId = doctor._id;
    const data = ({ doctorname, doctorfees, doctorimage, doctorId, patientname, patientemail, patientgender, phone, date, schedule });
    const GatewayPageURL='https://sandbox.sslcommerz.com/EasyCheckOut/testcde2792b8985131ec217d634dca483ceade'
    const handleCreate = (e) => {
        e.preventDefault();
        if (patientname && patientemail && patientgender && phone && date) {
            dispatch(createAppointments({
                data, userToken
            }));
            // toast.success('Your appointment placed ', {
            //     position: "top-right",
            //     autoClose: 500,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
              window.location.replace(GatewayPageURL)
            // navigate(GatewayPageURL)

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
            {
                token ? 

                    <div  className="lg:w-1/4 mx-auto mt-48">
                        <h3 class="text-center text-3xl font-bold mb-5">Make an Appointment</h3>
                        <form action="" className="" onSubmit={handleCreate}>
                           
                                <div>
                                    
                                    <input type="text" value={patientname} onChange={(e) => setPname(e.target.value)} placeholder="Enter Patient Name" className="border border-gray-300 rounded w-3/4 p-2 h-12 mx-auto mt-5" />
                                </div>
                                <div>
                                   
                                    <input type="text" value={patientemail} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Patient Email" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto mt-5" />
                                </div>
                                <div>
                                 
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Patient Phone " className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto mt-5 " />
                                </div>
                                <div>
                                
                                    <select name="Gender" className="w-3/4 h-12 border rounded mt-5" value={patientgender} onChange={(e) => setGender(e.target.value)}>
                                        <option  >Select Gender </option>
                                        <option  >Male </option>
                                        <option >Female </option>
                                    </select>
                                </div>
                                <div>
                                    
                                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-3/4 p-2  h-12 mx-auto mt-5" />
                                </div>
                                <div>
                                    
                                    <select className="w-3/4 h-12 border rounded mt-5" value={schedule} onChange={(e) => setSchedule(e.target.value)}  >
                                        <option  >Select Slots</option>
                                        <option >Morning </option>
                                        <option >Afternoon </option>
                                        <option >Evening </option>
                                    </select>
                                </div>
                           
                            <button className="btn bg-black mt-5 h-12 w-3/4  text-white font-semibold text-center mb-5">Book Appointment </button>
                        </form>
                    </div>
                 : <div>
                    <h3 className="font-bold text-lg text-center text-red-700">Please be Login</h3>
                    <p className="py-4">If You Are New Here Then? <span><Link to="/user-signup" className="text-blue-400">Signup</Link></span> </p>
                    <p className="">If You Have Account <span><Link to="/user-signin" className="text-blue-400">LogIn</Link></span> </p>
                </div>
            }
            <ToastContainer
                position="top-right"
                autoClose={500}
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

export default BookAppointment;