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
                    <div className="lg:w-10/12 lg:mx-auto mb-5 rounded border-white-500 border p-5 shadow-2xl">
                        <h2 className="text-black text-start text-xl mt-5">Profile Information</h2>
                        <div className=" mx-auto mt-5">
                            <form action="">

                                <div className="flex items-center justify-between">
                                    
                                    <input type="text" placeholder="First Name" className="border border-gray-200 rounded w-2/4 p-2" />
                                    <input type="text" placeholder="last Name" className="border border-gray-200 rounded w-2/4 p-2 mx-1" />
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <input type="text" placeholder="Birth Date" className="border border-gray-200 rounded w-2/4 p-2" />
                                    <input type="text" placeholder="Gender" className="border border-gray-200 rounded w-2/4 p-2 mx-1" />
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <input type="text" placeholder="Email Address" className="border border-gray-200 rounded w-2/4 p-2" />
                                    <input type="text" placeholder="Phone " className="border border-gray-200 rounded w-2/4 p-2 mx-1" />
                                </div>
                                <button className="bg-rose-700 mt-5 h-10 w-1/5 text-white font-semibold text-center mb-5">Save Changes</button>


                            </form>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default UserDetails;