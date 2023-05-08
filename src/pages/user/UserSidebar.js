import React from 'react';
import { AiOutlineUnorderedList, AiOutlineEdit,AiOutlineUser } from "react-icons/ai";
import { BsMinecartLoaded, BsFillChatDotsFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../state/user/Login/loginSlice';


const UserSidebar = () => {
    const dispatch = useDispatch();
    return (
        <div className="">
            <div className="card w-3/4 bg-base-100 shadow-xl">
                <div className="flex text-start ml-8">
                    <div className="avatar mb-5 mt-5 ml-5">
                        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="mt-7 ml-10">
                        <h2 className="">Hello,</h2>
                        <h2 className="text-xl font-semibold">Masud Rana</h2>
                    </div>
                </div>
            </div>
            <div className="card w-3/4 bg-base-100 shadow-xl mt-5">
                <div className="card-body text-start">
                    <div className="flex ">
                        <AiOutlineUnorderedList className="mt-1 w-20 h-5"></AiOutlineUnorderedList>
                        <h2 className="text-sm lg:text-xl  lg:font-semibold"> Manage My Accounts </h2>
                    </div>
                    <div className="flex mt-5">
                        <AiOutlineUser className="mt-1 w-20 h-5"></AiOutlineUser>
                        <Link to="/user-info">
                            <h2 className="text-sm lg:text-xl  lg:font-semibold ">My Profile</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                        <Link to="/user/updateinfo">
                            <h2 className="text-sm lg:text-xl  lg:font-semibold ">Update Profile</h2>
                        </Link>
                    </div>

                    <div className="flex mt-5">
                        <AiOutlineEdit className="mt-1 w-20 h-5"></AiOutlineEdit>
                        <Link to="/user/change/password">
                            <h2 className="text-sm lg:text-xl  lg:font-semibold"> Change Password</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <BsMinecartLoaded className="mt-1 w-20 h-5"></BsMinecartLoaded>
                        <Link to="/my-booking">
                            <h2 className="text-sm lg:text-xl  lg:font-semibold ">My Booking</h2>
                        </Link>
                    </div>
                    <div className="flex mt-5">
                        <BsFillChatDotsFill className="mt-1 w-20 h-5"></BsFillChatDotsFill>
                        <Link to="/chat">
                            <h2 className="text-sm lg:text-xl  lg:font-semibold ">Chat</h2>
                        </Link>
                    </div>

                    <div className=" mt-10">
                        <Link to="/user-signin">
                            <button className="btn  ml-8 w-3/4 bg-slate-700 border-slate-200  hover:bg-slate-700" onClick={() => dispatch(logout())}>  Logout </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserSidebar;