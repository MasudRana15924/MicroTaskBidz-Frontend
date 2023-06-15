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
                        token ?
                            <Link to="/user-info">
                                <img src={user.avatar.url} alt="" className="h-8 w-8" />
                                {/* <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p> */}
                            </Link>
                            : <Link to="/user-signin" className="text-sm font-semibold leading-6 text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                    }
            </div>
        </nav>
        <ul className={active ? 'border border-gray-200 flex-col flex fixed inset-0 left-1/4 lg:left-3/4 uppercase   gap-6  md: lg:block bg-white text-black text-start ml-24 ' : 'hidden'}>
            <div className="grid grid-cols-2 md:gap-96">
                <MdCancelPresentation className="text-4xl ml-5" onClick={showMenu}></MdCancelPresentation>
               
            </div>
            <li>
                <Link to="/" className="leading-6 text-gray-900 px-5 py-2  font-semibold block " onClick={showMenu}>Home</Link>
            </li>
            <li>
                <Link to="/about" className="leading-6 text-gray-900 px-5 py-2  font-semibold block " onClick={showMenu}>About</Link>
            </li>
            <li>
                <Link to="/contact" className="leading-6 text-gray-900 px-5 py-2 font-semibold block" onClick={showMenu}>Contact Us</Link>
            </li>
            <li>
                <Link to="/doctors" className="leading-6 text-gray-900 px-5 py-2  font-semibold block " onClick={showMenu}>Doctors</Link>
            </li>
            <li>
                <Link to="/nurses" className="leading-6 text-gray-900 px-5 py-2  font-semibold block " onClick={showMenu}>Nurses</Link>
            </li>
            <li>
                <Link to="/insurance" className="leading-6 text-gray-900 px-5 py-2  font-semibold block " onClick={showMenu}>Insurance</Link>
            </li>
            <li>
                <Link to="/bloods" className="leading-6 text-gray-900 px-5 py-2  font-semibold block " onClick={showMenu}>Bloods</Link>
            </li>

            {
               token ? <div>
                   <li>
                    <Link to="/user-info" onClick={showMenu} className="leading-6 text-gray-900 px-5 py-2  font-semibold block">
                        My Profile
                    </Link>
                    </li>
                    <li>
                    <Link to="/user/updateinfo" onClick={showMenu} className="leading-6 text-gray-900 px-5 py-2 mt-5 font-semibold block">
                        Update Profile
                    </Link>
                    </li>
                    <li>
                    <Link to="/user/change/password"onClick={showMenu} className="leading-6 text-gray-900 px-5 py-2 mt-5 font-semibold block">
                        Change Password
                    </Link>
                    </li>
                  <li>
                  <Link to="/my-booking"onClick={showMenu} className="leading-6 text-gray-900 px-5 py-2 mt-5 font-semibold block">
                        My Booking
                    </Link>
                  </li>
                    <li>
                    <Link to="/chat"onClick={showMenu} className="leading-6 text-gray-900 px-5 py-2 mt-5 font-semibold block">
                        Chat
                    </Link>
                    </li>
                    <button onClick={showMenu} className="btn  bg-black border-black hover:bg-black w-full mx-auto mt-72">Logout as {user.name}</button>
                </div> : <li>
                    <Link to="/user-signin" onClick={showMenu} className="leading-6 text-gray-900 px-5 py-2  font-semibold block">Login</Link>
                </li>
            }
        </ul>
    </header>
    );
};

export default Header;