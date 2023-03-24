import React from 'react';
import userImg from '../../images/icons8-circled-user-male-skin-type-7-96.png'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import { Link } from 'react-router-dom';


const UserSidebar = () => {
    return (
        <div className="">
            <div className="w-full  flex items-center border border-gray-50  lg:mx-5 lg:w-3/4 shadow-xl mb-10">
                <img src={userImg} alt="" className="rounded-full h-20" />
                <div className="text-start mx-5 ">
                    <h2>Hello,</h2>
                    <h2 className="text-xl font-semibold">Masud Rana</h2>
                </div>
            </div>
            <div className=" border border-gray-50 w-full shadow-xl mb-3 mt-5 text-start lg:w-3/4 lg:mx-5 ">
                <div className="flex items-center mt-20">
                    <AiOutlineUnorderedList className="mt-1 w-20 h-5"></AiOutlineUnorderedList>
                    <h2 className="text-sm lg:text-xl  lg:font-semibold"> Manage My Accounts </h2>
                </div>
                <Link to="/user/updateinfo"> 
                <h2 className="text-sm mx-20 w-full lg:text-xl font-thin lg:mx-20 mt-3">Update Profile</h2>
                </Link>
                <Link to="/user/change/password">
                <h2 className="text-sm mx-20 w-full lg:text-xl font-thin lg:mx-20 mt-3"> Change Password</h2>
                </Link>
                <Link to="/user/create-task">
                <h2 className="text-sm mx-20 w-full lg:text-xl font-thin lg:mx-20 mt-3">Create a Task </h2>
                </Link>
                
                <div className="h-5 flex items-center mt-10  bg-teal-700 lg:h-20 text-white">
                    <BsArrowClockwise className="h-5 mt-1 w-20 lg:h-10"></BsArrowClockwise>
                    <h2 className=" text-md text-start lg:text-3xl font-thin ">LogOut</h2>
                </div>




            </div>
        </div>
    );
};

export default UserSidebar;