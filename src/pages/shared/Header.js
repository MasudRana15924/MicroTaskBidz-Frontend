import React, { useState } from 'react';
import logo from '../../images/logo2.png'
import { FiMenu } from 'react-icons/fi'
import './Shared.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import { MdCancelPresentation } from "react-icons/md";
const navigation = [
    { name: 'Home', to: '/home' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'Doctors', to: '/doctors' },
    { name: 'Insurance', to: '/insurance' },
    { name: 'Bloods', to: '/bloods' },
    { name: 'Nurses',  to:"/nurses" },
]

const Header = () => {
  
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user
    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
    return (
        // <header className="header">
        //     <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[5%] flex-wrap w-full">
        //         <Link to="/" className="flex">
        //             <img src={logo} alt="" className="logo" />
        //             <p className="mt-3 font-semibold text-indigo-600">MKM HealthBridge</p>
        //         </Link>

        //         <FiMenu className="lg:hidden block h-10 w-10 cursor-pointer "
        //             onClick={() => setOpen(!open)}
        //         />

        //         <nav className={`${open ? "hidden" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
        //             <ul className="text-base lg:flex lg:justify-between">
        //                 <li>
        //                     <Link to="/" className="text-indigo-600 px-5 py-2 hover:text-blue-200 font-semibold block">Home</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/about" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">About</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/contact" className="text-indigo-600 px-5 py-2 hover:text-blue-200 font-semibold block">Contact Us</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/doctors" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">Doctors</Link>
        //                 </li>

        //                 {
        //                     token ? <Link to="/user-info" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">{user.name}</Link> : <li>
        //                         <Link to="/user-signin" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">Login</Link>
        //                     </li>
        //                 }

        //             </ul>
        //         </nav>
              

        //     </div>
        // </header>
        <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">

                <img
                    className="h-8 w-auto"
                    src={logo}
                    alt=""
                />
                <p className="text-sm font-semibold leading-6 text-gray-900">MKM HealthBridge</p>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={showMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
                    <FiMenu className="lg:hidden block h-10 w-10 cursor-pointer "

                    />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <Link key={item.name} as={HashLink} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               
                {
                  token ? <Link to="/user-info" className="text-sm font-semibold leading-6 text-gray-900" >
                    {user.name} <span aria-hidden="true">&rarr;</span>
                </Link> :  <Link to="/user-signin" className="text-sm font-semibold leading-6 text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
                }
            </div>
        </nav>
        <ul className={active ? 'flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-black text-white text-center ml-24 ' : 'hidden'}>
            <div className="grid grid-cols-2 md:gap-96">
                <MdCancelPresentation className="text-5xl" onClick={showMenu}></MdCancelPresentation>
                <p onClick={showMenu} className="mt-3 ">Cancel</p>
            </div>
            <li>
                <Link to="/" className="text-white px-5 py-2  font-semibold block">Home</Link>
            </li>
            <li>
                <Link to="/about" className="text-white px-5 py-2  font-semibold block ">About</Link>
            </li>
            <li>
                <Link to="/contact" className="text-white px-5 py-2 font-semibold block">Contact Us</Link>
            </li>
            <li>
                <Link to="/doctors" className="text-white px-5 py-2  font-semibold block ">Doctors</Link>
            </li>

            {
               token ? <div>
                   <li>
                    <Link to="/user-info" className="text-white px-5 py-2  font-semibold block">
                        My Profile
                    </Link>
                    </li>
                    <li>
                    <Link to="/user/updateinfo" className="text-white px-5 py-2 mt-5 font-semibold block">
                        Update Profile
                    </Link>
                    </li>
                    <li>
                    <Link to="/user/change/password" className="text-white px-5 py-2 mt-5 font-semibold block">
                        Change Password
                    </Link>
                    </li>
                  <li>
                  <Link to="/my-booking" className="text-white px-5 py-2 mt-5 font-semibold block">
                        My Booking
                    </Link>
                  </li>
                    <li>
                    <Link to="/chat" className="text-white px-5 py-2 mt-5 font-semibold block">
                        Chat
                    </Link>
                    </li>
                    <button className="btn bg-black border-black hover:bg-black w-full mx-auto mt-72">Logout as {user.name}</button>
                </div> : <li>
                    <Link to="/user-signin" className="text-white px-5 py-2  font-semibold block">Login</Link>
                </li>
            }
        </ul>
    </header>
    );
};

export default Header;