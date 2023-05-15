import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchUpdateAppointment } from '../../state/admin/updateAppointmentsSlice';

const UpdateAppointments = ({appointment}) => {
    const {_id}=appointment
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token
    const dispatch = useDispatch();
     const [bookingStatus, setStatus] = useState('');
    const data={bookingStatus}
    const handleCreate = (e) => {
        e.preventDefault();
            dispatch(fetchUpdateAppointment({
                data,userToken,_id
            }));
            toast.success('Appointments status updated'); 
    }
    return (
        <div>
        <input type="checkbox" id="appointment-modal" class="modal-toggle" />
        <div class="modal ">
            <div class="modal-box  relative">
                <label for="appointment-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="text-start text-3xl font-bold mb-5">Update Appointment Status</h3>
                <form action="" className="" onSubmit={handleCreate}>
                    <div className="ml-16">
                            <select className="w-3/4 h-12 border rounded" value={bookingStatus} onChange={(e) => setStatus(e.target.value)}  >
                                <option  >Update Status</option>
                                <option >Processing</option>
                                <option >Confirmed </option>
                                <option >Canceled </option>
                            </select>                      
                    </div>
                    <button className="btn bg-violet-900 mt-5 h-12 w-full text-white font-semibold text-center mb-5">Book Appointment </button>
                </form>
            </div>
        </div>

    </div> 
    );
};

export default UpdateAppointments;