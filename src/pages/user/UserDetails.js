import React from 'react';
import UserSidebar from './UserSidebar';

const UserDetails = () => {
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="max-w-full mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2 ">
                    <div className="lg:w-8/12 lg:mx-auto text-end  mb-5  ">
                        <UserSidebar></UserSidebar>
                    </div>
                    <div className="lg:w-8/12 ">
                        <h2 className="text-black text-start text-xl mt-5">Profile Information</h2>
                       
                    </div>




                </div>

            </div>
        </div>
    );
};

export default UserDetails;