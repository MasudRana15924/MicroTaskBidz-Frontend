import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css'
import { useDispatch } from 'react-redux';
import { createLogin } from '../../state/Login/loginSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({

        email: "",
        password: "",
    });
    const { email, password } = user;
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(createLogin(myForm));

    };
    const registerDataChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className=" lg:w-3/12 ">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="space-y-4">

                        <p className="font-lg text-3xl text-gray-600">Welcome to Spring Rain </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2">
                        <button className="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                            <div className="flex gap-4 justify-center">
                                <img src="../public/images/google.svg" className="w-5" alt="" />
                                <span className="block w-max font-medium tracking-wide text-sm text-green-700">Google</span>
                            </div>
                        </button>
                        <button className="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                            <div className="flex gap-4 items-center justify-center text-white">

                                <span className="block w-max font-medium tracking-wide text-sm text-white">Github</span>
                            </div>
                        </button>
                    </div>

                    <div className="mt-12 border-t">
                        <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                    </div>

                    <form action="" className="space-y-6 py-6" onSubmit={registerSubmit}>
                        <div>
                            <input
                                className=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                type="email"
                                name="email"
                                value={email}
                                onChange={registerDataChange}
                                placeholder="Enter Your Email"

                            />
                        </div>

                        <div className="flex flex-col items-end">
                            <input
                                type="password"

                                className=" border-2 w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                name="password"
                                value={password}
                                onChange={registerDataChange}
                                placeholder="Enter Your Password"

                            />
                            <div className="mt-5">
                                <Link to="/user/password">

                                    <span className="text-sm tracking-wide text-blue-600 mt-5">Forgot password ?</span>
                                </Link>
                            </div>

                        </div>

                        <div>
                            <button className="w-full px-6 py-3 rounded-xl bg-teal-700 mb-5">
                                <span className="font-semibold text-white text-lg">Login</span>
                            </button>

                            <span className="text-sm tracking-wide text-gray-400 mt-5">Don't have any account ?</span> <Link to="/user-signup"> <span className="text-blue-600">Create new account</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;