import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const Login = () => {
    return (
        <div class="flex justify-center items-center h-screen ">
            <img src="" alt="" />

            <div class="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> Login</h1>
                
                
                <div class="mt-6">
                    {/* <label for="username" class="block text-base mb-2">Email </label> */}
                    <input type="text" id="username" class=" " placeholder="Enter Your Email..." />
                </div>
                <div class="mt-3">
                    {/* <label for="password" class="block text-base mb-2">Password</label> */}
                    <input type="password" id="password" class="" placeholder="Enter Your Password..." />
                </div>
                <div class="mt-3">
                <Link to="/signup" class="text-black">Forgot password ? </Link>
                </div>

                <div class="mt-5">
                    <button type="submit" class="border-2 border-indigo-700 bg-teal-700 text-white py-1 w-full rounded-md  font-semibold h-10">Login</button>
                </div>
                <div class="mt-3">
                <Link to="/user-signup" class="text-black">Don't have a account ? Create a account </Link>
                </div>
                
            </div>
           
        </div>


    );
};

export default Login;