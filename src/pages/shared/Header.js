import React, { useState } from 'react';
import logo from '../../images/logo2.png'
import { FiMenu } from 'react-icons/fi'
import './Shared.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
    const [open, setOpen] = useState(false);
    const { token,loggeduser } = useSelector(
        (state) => state.userDetails
    );
    const user=loggeduser.user
    return (
        <header className="header">
            <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[5%] flex-wrap w-full">
                <Link to="/" className="flex">
                    <img src={logo} alt="" className="logo" />
                    <p className="mt-3 font-semibold text-indigo-600">MKM HealthBridge</p>
                </Link>

                <FiMenu className="lg:hidden block h-10 w-10 cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
                
                <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
                    <ul className="text-base lg:flex lg:justify-between">
                        <li>
                            <Link to="/" className="text-indigo-600 px-5 py-2 hover:text-blue-200 font-semibold block">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">About</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-indigo-600 px-5 py-2 hover:text-blue-200 font-semibold block">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/doctors" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">Doctors</Link>
                        </li>

                        {
                            token ?  <Link to="/user-info" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">{user.name}</Link>:<li>
                            <Link to="/user-signin" className="text-indigo-600  px-5 py-2 hover:text-blue-200 font-semibold block">Login</Link>
                        </li>
                        }
                        


                    </ul>

                </nav>

            </div>
        </header>
    );
};

export default Header;