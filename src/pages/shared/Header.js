import React, { useState } from 'react';
import logo from '../../images/main.png'
import { FiMenu } from 'react-icons/fi'
import './Shared.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useDispatch, useSelector } from 'react-redux';
import {RxCross1} from "react-icons/rx";
import { logout } from '../../state/user/Login/loginSlice';


const navigation = [
    { name: 'Home', to: '/home' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'Doctors', to: '/doctors' },
    { name: 'Insurance', to: '/insurance' },
    { name: 'Find Bloods', to: '/bloods' },
    { name: 'Nurses', to: "/nurses" },
    { name: 'For Doctors', to: "/doctor/signup" },
]
// const navigations = [
//     { name: 'Home', to: '/home' },
//     { name: 'About Us', to: '/about' },
//     { name: 'Contact Us', to: '/contact' },
//     { name: 'Doctors', to: '/doctors' },
//     { name: 'Insurance', to: '/insurance' },
//     { name: 'Bloods', to: '/bloods' },
//     { name: 'Nurses', to: "/nurses" },
// ]

const Header = () => {
    const dispatch = useDispatch();
    const {token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user = loggeduser.user
    // const { loggeddoctor } = useSelector(
    //     (state) => state.loggeddoctor
    // );
    // const doctor = loggeddoctor.user
    // const doctorToken=loggeddoctor.token
    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between  p-4 lg:p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/">
                        <img
                            className="h-12 lg:h-16 w-auto "
                            src={logo}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={showMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FiMenu className="lg:hidden block h-8 w-8 cursor-pointer mr-3 "
                        />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                   
                     {/* {
                        user?.role==='doctor' ? <div  className="hidden lg:flex lg:gap-x-12">{navigations.map((item) => (
                            <Link key={item.name} as={HashLink} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}</div>:<div  className="hidden lg:flex lg:gap-x-12">{navigation.map((item) => (
                            <Link key={item.name} as={HashLink} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}</div>
                     } */}
                     {navigation.map((item) => (
                            <Link key={item.name} as={HashLink} to={item.to} className="text-md font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {
                        token ?
                            <Link to="/user-info">
                                {/* {
                                    user.avatar.url? <img src={user.avatar.url} alt="" className="h-8 w-8" />:
                                }
                                */}
                                <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
                            </Link>
                            : <Link to="/user-signin" className="text-sm font-semibold leading-6 text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                    }
                </div>
            </nav>
            {/* for small devices */}
            <ul className={active ? '  border border-gray-200 flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-white text-black text-start ml-16 ' : 'hidden'}>
                <div className="grid grid-cols-2 md:gap-96">
                    <RxCross1 className="text-xl ml-5 mt-5 text-black" onClick={showMenu}></RxCross1>

                </div>
               {
                token? <div>
                     <li>
                    <Link to="/" className=" text-sm  text-gray-900 px-5 py-2 font-semibold  block " onClick={showMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>About</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>Contact Us</Link>
                </li>
                <li>
                    <Link to="/doctors" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block " onClick={showMenu}>Doctors</Link>
                </li>
                <li>
                    <Link to="/nurses" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>Nurses</Link>
                </li>
                <li>
                    <Link to="/insurance" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block " onClick={showMenu}>Insurance</Link>
                </li>
                <li>
                    <Link to="/bloods" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>Find Bloods</Link>
                </li>
                </div>:<ul>
                     <li>
                    <Link to="/" className=" text-sm  text-gray-900 px-5 py-4 font-semibold  block " onClick={showMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>About</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>Contact Us</Link>
                </li>
                <li>
                    <Link to="/doctors" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block " onClick={showMenu}>Doctors</Link>
                </li>
                <li>
                    <Link to="/nurses" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>Nurses</Link>
                </li>

                <li>
                    <Link to="/bloods" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>Find Bloods</Link>
                </li>
                <li>
                    <Link to="/insurance" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block " onClick={showMenu}>Insurance</Link>
                </li>
                <li>
                    <Link to="/doctor/signup" className="text-sm  text-gray-900 px-5 py-4 font-semibold  block" onClick={showMenu}>For Doctors</Link>
                </li>

                </ul>
               }
                
                {
                    token ? <ul>
                        <li>
                            <Link to="/user-info" onClick={showMenu} className=" text-sm  text-gray-900 px-5 py-4 font-semibold  block">
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/updateinfo" onClick={showMenu} className="mt-3 text-sm py-4 text-gray-900 px-5  font-semibold  block">
                                Update Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/change/password" onClick={showMenu} className="mt-3 text-sm py-4 text-gray-900 px-5  font-semibold  block">
                                Change Password
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-booking" onClick={showMenu} className="mt-3 text-sm py-4 text-gray-900 px-5 font-semibold  block">
                             Consultation History
                            </Link>
                        </li>
                      
                        <button  className="btn btn-sm text-sm ml-5 bg-red-500 border-red-500 hover:bg-red-500 w-3/4 mx-auto mt-32" onClick={() => dispatch(logout())}>Logout</button>
                    </ul> : <li>
                        <Link to="/user-signin" onClick={showMenu} className="text-sm  text-gray-900 px-5 py-4 font-semibold  block">Login</Link>
                    </li>
                }
            </ul>

        </header>
    );
};

export default Header;