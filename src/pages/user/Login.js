import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css'
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({

        email: "",
        password: "",
    });
    const { name, email, password } = user;
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("email", email);
        myForm.set("password", password);
        dispatch();

    };
    const registerDataChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div class="w-full max-w-md">
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <h2 class="mt-5 mb-5 text-2xl font-medium mb-4 text-start">Login </h2>

                    <h2 class="mt-5 mb-5 text-sm font-sm mb-4 text-start">Welcome back Please enter your details </h2>
                    <form onSubmit={registerSubmit}>

                        <div class="mb-4">
                            <input class="border border-gray-200 w-full h-10 rounded p-3" type="text" id="useremail"
                                name="email"
                                value={email}
                                onChange={registerDataChange}
                                placeholder="Enter Your Email"
                                required
                            />
                        </div>
                        <div class="mb-4">

                            <input class="border-2 border-gray-200 w-full h-10 rounded p-3" type="password" id="userpassword"
                                name="password"
                                value={name}
                                onChange={registerDataChange}
                                placeholder="Enter Your Password"
                                required
                            />
                        </div>
                        <div class="text-end mt-3 mb-3">
                            <Link to="/forgot-password"><span class="text-teal-700 text-end">Forgot password ? </span> </Link>
                        </div>

                        <button class="border-2 border-teal-700 bg-teal-700 text-white py-1 w-full rounded-md  font-semibold h-10 bg-teal-700" type="submit">SignUp</button>
                        <div class="mt-3 mb-5 text-center">
                            <Link to="/user-signup" class="text-black"><span class="text-gray-500">Don't have a account ? </span> <span class="text-black-900 font-semibold"> Register </span></Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>


    );
};

export default Login;