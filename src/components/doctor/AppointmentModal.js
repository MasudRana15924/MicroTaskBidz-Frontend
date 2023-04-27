import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
// import { createAppointments } from '../../features/appointments/appointmentSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentModal = ({ name }) => {
    const dispatch = useDispatch();
    const [pname, setPname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const handleCreate = (e) => {
        e.preventDefault();
       
        if(name,pname, email, age, gender, phone, date){
            // dispatch(createAppointments({
            //     name, pname, email, age, gender, phone, date
            // }));
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
        }else{
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
        <div className=" w-4/4">
            <input type="checkbox" id="appointment-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="appointment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-start text-3xl font-bold mb-5">Make an Appointment</h3>
                    <form action="" className="grid col-span-1 gap-4 mx-auto" onSubmit={handleCreate}>
                        <input type="text" value={name} placeholder="Name" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                        <input type="text" value={pname} onChange={(e) => setPname(e.target.value)} placeholder="Name" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" className="border border-gray-200 rounded w-3/4 p-2  h-12 mx-auto" />
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone " className="border border-gray-200 rounded w-3/4 p-2 h-12 mx-auto" />
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Appoinment Date" className="border border-gray-200 rounded w-3/4 p-2  h-12 mx-auto" />
                        <button  className="user-auth-btn mt-5 h-12 w-full text-white font-semibold text-center mb-5">Book Appointment </button>
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