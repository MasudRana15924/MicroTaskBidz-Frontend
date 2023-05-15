import React from 'react';
import UserSidebar from '../UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHireNurses } from '../../../state/user/hirenurse/myHireNurseSlice';
import Loading from '../../loader/Loading';
import HireNurses from './HireNurses';

const HireNurse = () => {
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const userToken = loggeduser.token;
    const dispatch = useDispatch();
    const { hireNurse, isLoading, isError, error } = useSelector(state => state.myHireNurses.myHireNurses);
    useEffect(() => {
        dispatch(fetchHireNurses({ userToken }));
    }, [dispatch, userToken]);
    let content;
    if (isLoading) content = <Loading></Loading>;

    if (!isLoading && isError) content = <div className="col-span-12">{error}</div>

    if (!isLoading && !isError && hireNurse?.length === 0) {
        content = <div className="col-span-12  ">
            <div class="alert alert-error shadow-lg text-start  mt-5 h-12 w-2/4 ">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">No Appointments Found</span>
            </div>
        </div>
    }

    if (!isLoading && !isError && hireNurse?.length > 0) {
        content = hireNurse.map(hire => <HireNurses key={hire._id} hire={hire} />)
    }
    return (
        <div className="p-10 bg-white mt-20 mb-20">
        <div className="max-w-full mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2">
                <div className="lg:w-8/12 lg:mx-auto text-end mt-20 mb-5">
                    <UserSidebar></UserSidebar>
                </div>
                <div>
                    <h2 className="text-start text-2xl mt-20">My Hired Nurse</h2>
                    <div className="w-full grid grid-cols-10 gap-4 mt-10">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default HireNurse;
