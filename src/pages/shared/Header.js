import React, { useState } from 'react';
import logo from '../../images/Logo Large.png'
import { FiMenu } from 'react-icons/fi'
import './Shared.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../state/Login/loginSlice';

const Header = () => {
    const [open, setOpen] = useState(false);
    const dipatch=useDispatch();
    const { token } = useSelector(
        (state) => state.userDetails
    );
    return (
        <header className="header">
            <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[5%] flex-wrap w-full">
                <Link to="/">
                    <img src={logo} alt="" className="logo" />
                </Link>

                <FiMenu className="lg:hidden block h-10 w-10 cursor-pointer"
                    onClick={() => setOpen(!open)}
                />

                <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
                    <ul className="text-base lg:flex lg:justify-between">
                        <li>
                            <Link to="/" className="text-white px-5 py-2 hover:text-blue-200 font-semibold block">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white  px-5 py-2 hover:text-blue-200 font-semibold block">About</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="text-white  px-5 py-2 hover:text-blue-200 font-semibold block">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/user/create-task" className="text-white  px-5 py-2 hover:text-blue-200 font-semibold block">Create Task</Link>
                        </li>

                        <li>
                            <Link className="text-white  px-5 py-2 hover:text-blue-200 font-semibold block">Contact Us</Link>
                        </li>
                        {
                            token ? <button className="text-xl text-white font-bold" onClick={()=>dipatch(logout())}>Logout</button>:<li>
                            <Link to="/user-signin" className="text-white  px-5 py-2 hover:text-blue-200 font-semibold block">LOGIN</Link>
                        </li>
                        }
                        


                    </ul>

                </nav>

            </div>
        </header>
    );
};

export default Header;