import React from 'react';
import { AiOutlineUnorderedList, AiOutlineEdit, AiOutlineUser } from "react-icons/ai";
import { BsMinecartLoaded, BsFillChatDotsFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdInfoOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../state/user/Login/loginSlice';
import { updateLogout } from '../../state/user/Login/logOutSlice';


const UserSidebar = () => {
    const dispatch = useDispatch();
    const { loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user;
    const userToken = loggeduser.token;
    const isActive=false;
     const data=isActive;
    const handleLogout = () => {
        //   dispatch(logout(data));
          dispatch(updateLogout ({ data, userToken }));


    }
    return (
        <div className="">
            <div className="card w-3/4 bg-base-100 shadow-xl">
                <div className="flex text-start ml-8">
                    <div className="avatar mb-5 mt-5 ml-5">
                        <div className="w-16 h-16 rounded-full  ring-offset-base-100 ring-offset-2">
                            {/* <img src={user.avatar.url} alt=""/> */}
                        </div>
                    </div>
                    <div className="mt-7 ml-10">
                        <h2 className="text-md font-semibold leading-6 text-gray-900">Hello,</h2>
                        <h2 className="text-md font-semibold leading-6 text-gray-900">{user.name}</h2>
                    </div>
                </div>
            </div>
            <div className="card w-3/4 bg-base-100 shadow-xl mt-5">
                {
                    user?.role === 'admin' ? <div className="card-body text-start">

                        <div className="flex mt-5">
                            <AiOutlineUser className="mt-1 w-20 h-5"></AiOutlineUser>
                            <Link to="/admin-dashboard">
                                {/* <h2 className="text-sm lg:text-xl  lg:font-semibold ">Dashboard</h2> */}
                                <h2 className="text-sm font-semibold leading-6 text-gray-900">Dashboard</h2>
                            </Link>
                        </div>

                        <div className="flex mt-5">
                            <AiOutlineUser className="mt-1 w-20 h-5"></AiOutlineUser>
                            <Link to="/admin-appointments">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">All Appointments</h2>
                            </Link>
                        </div>

                        <div className="flex mt-5">
                            <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                            <Link to="/admin/create-doctor">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">Create Doctor</h2>
                            </Link>
                        </div>
                        <div className="flex mt-5">
                            <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                            <Link to="/admin/all-doctors">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">All Doctors</h2>
                            </Link>
                        </div>
                        <div className="flex mt-5">
                            <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                            <Link to="/admin/create-nurse">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">Create Nurse</h2>
                            </Link>
                        </div>
                        <div className="flex mt-5">
                            <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                            <Link to="/admin/all-nurses">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">All Nurses</h2>
                            </Link>
                        </div>
                        <div className="flex mt-5">
                            <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                            <Link to="/admin/all-hired-nurses">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">Booked Nurses</h2>
                            </Link>
                        </div>

                        <div className="flex mt-5">
                            <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                            <Link to="/admin/alluser">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">All Users</h2>
                            </Link>
                        </div>
                        <div className="flex mt-5">
                            <BsFillChatDotsFill className="mt-1 w-20 h-5"></BsFillChatDotsFill>
                            <Link to="/chat">
                                <h2 className="text-md font-semibold leading-6 text-gray-900">Chat</h2>
                            </Link>
                        </div>

                        <div className=" mt-10">
                            <Link to="/user-signin">
                                <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700" onClick={() => dispatch(logout())}>  Logout </button>
                            </Link>
                        </div>
                    </div> :null
                     
                }
                {
                    user?.role==='doctor'?<div className="card-body text-start">
                    <div className="flex ">
                        <AiOutlineUnorderedList className="mt-1 h-5 mr-3"></AiOutlineUnorderedList>
                        <h2 className="text-md font-semibold leading-6 text-gray-900 "> Manage My Accounts </h2>
                    </div>
                    <div className="flex mt-5">
                        <CgProfile className="mt-1 h-5 mr-3"></CgProfile>
                        <Link to="/doctor/info">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">My Profile</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <AiOutlineEdit className="mt-1 h-5 mr-3"></AiOutlineEdit>
                        <Link to="/doctor/updateprofile">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">Update Profile</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <MdInfoOutline className="mt-1 h-5 mr-3"></MdInfoOutline>
                        <Link to="/doctor/updateinfo">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">Update Info</h2>
                        </Link>
                    </div>

                    <div className="flex mt-5">
                        <RiLockPasswordFill className="mt-1 h-5 mr-3"></RiLockPasswordFill>
                        <Link to="/doctor/change/password">
                            <h2 className="text-md font-semibold leading-6 text-gray-900"> Change Password</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <BsMinecartLoaded className="mt-1 h-5 mr-3"></BsMinecartLoaded>
                        <Link to="/doctor-booking">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">My Consultations</h2>
                        </Link>
                    </div>

                    <div className=" mt-10">
                        {
                            user?.role === 'user' ? <Link to="/user-signin">
                                <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700 " onClick={() => dispatch(logout())}>  Logout </button>
                            </Link> : <Link to="/doctor/login">
                                <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700 " onClick={() => dispatch(logout())}>  Logout </button>
                                {/* <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700 " onClick={handleLogout}>  Logout </button> */}
                            </Link>
                        }

                    </div>
                </div>:<div className="card-body text-start">
                    <div className="flex ">
                        <AiOutlineUnorderedList className="mt-1 w-20 h-5"></AiOutlineUnorderedList>
                        <h2 className="text-md font-semibold leading-6 text-gray-900"> Manage My Accounts </h2>
                    </div>
                    <div className="flex mt-5">
                        <CgProfile className="mt-1 w-20 h-5"></CgProfile>
                        <Link to="/user-info">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">My Profile</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                        <Link to="/user/updateprofile">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">Update Profile</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <MdInfoOutline className="mt-1 w-20 h-5"></MdInfoOutline>
                        <Link to="/user/updateinfo">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">Update Info</h2>
                        </Link>
                    </div>

                    <div className="flex mt-5">
                        <RiLockPasswordFill className="mt-1 w-20 h-5"></RiLockPasswordFill>
                        <Link to="/user/change/password">
                            <h2 className="text-md font-semibold leading-6 text-gray-900"> Change Password</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <BsMinecartLoaded className="mt-1 w-20 h-5"></BsMinecartLoaded>
                        <Link to="/my-booking">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">My Appointments</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <BsMinecartLoaded className="mt-1 w-20 h-5"></BsMinecartLoaded>
                        <Link to="/my/hire-nurses">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">My Hire Nurses</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <BsFillChatDotsFill className="mt-1 w-20 h-5"></BsFillChatDotsFill>
                        <Link to="/chat">
                            <h2 className="text-md font-semibold leading-6 text-gray-900">Chat</h2>
                        </Link>
                    </div>

                    <div className=" mt-10">
                        {
                            user?.role === 'user' ? <Link to="/user-signin">
                                <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700 " onClick={() => dispatch(logout())}>  Logout </button>
                            </Link> : <Link to="/doctor/login">
                                <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700 " onClick={() => dispatch(logout())}>  Logout </button>
                                {/* <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700 " onClick={handleLogout}>  Logout </button> */}
                            </Link>
                        }

                    </div>
                </div>
                }

            </div>
        </div>
    );
};

export default UserSidebar;