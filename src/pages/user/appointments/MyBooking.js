import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApponitments } from '../../../state/user/appointment/myAppointmentsSlice';
import Loading from '../../loader/Loading';
import UserSidebar from '../UserSidebar';
import MyBookings from '../../../pages/user/appointments/MyBookings';




const MyBooking = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { appointment, isLoading, isError, error } = useSelector(state => state.myAppointments.myAppointments);
    useEffect(() => {
        dispatch(fetchApponitments({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && appointment?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-2/4 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Appointments Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && appointment?.length > 0) {

        content = appointment.map(booking => <MyBookings key={booking._id} booking={booking} />)
    }
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="max-w-full mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2">
                    <div className="lg:w-8/12 lg:mx-auto text-end  mb-5">
                        <UserSidebar></UserSidebar>
                    </div>
                    <div>
                        <h2 className="text-start text-2xl ">My Booking</h2>
                        <div className="w-full grid grid-cols-10 gap-4 mt-10">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;