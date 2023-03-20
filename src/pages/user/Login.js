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
            <div class=" lg:w-3/12 ">
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <div class="space-y-4">

                        <p class="font-lg text-2xl text-gray-600">Welcome to Spring Rain </p>
                    </div>
                    {/* <form onSubmit={registerSubmit}>

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
                    </form> */}
                      <div class="mt-12 grid gap-6 sm:grid-cols-2">
                            <button class="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                                <div class="flex gap-4 justify-center">
                                    <img src="../public/images/google.svg" class="w-5" alt="" />
                                    <span class="block w-max font-medium tracking-wide text-sm text-green-700">Google</span>
                                </div>
                            </button>
                            <button class="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                                <div class="flex gap-4 items-center justify-center text-white">
                                    
                                    <span class="block w-max font-medium tracking-wide text-sm text-white">Github</span>
                                </div>
                            </button>
                        </div>

                        <div  class="mt-12 border-t">
                            <span class="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
                        </div>

                        <form action="" class="space-y-6 py-6" onSubmit={registerSubmit}>
                            <div>
                                <input
                                class=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Email"
                                   
                                />
                            </div>

                            <div class="flex flex-col items-end">
                                <input
                                    type="password"
                                   
                                    class=" border-2 w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                    name="password"
                                    value={password}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Password"
                                    
                                />
                                <button type="reset" class="w-max p-3 -mr-3">
                                    <span class="text-sm tracking-wide text-blue-600">Forgot password ?</span>
                                </button>
                            </div>

                            <div>
                                <button class="w-full px-6 py-3 rounded-xl bg-teal-700 mb-5">
                                    <span class="font-semibold text-white text-lg">Login</span>
                                </button>
                                <Link to="/user-signup">
                                <span class="text-sm tracking-wide text-gray-400 mt-5">Don't have any account ?</span> <span class="text-blue-600">Create new account</span> 
                                </Link>
                            </div>
                        </form>
                </div>
            </div>

        </div>
        // <div class="">
        //         <div class="lg:w-6/12 ">
        //             <div class="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
        //                 <div class="space-y-4">
                            
        //                     <p class="font-medium text-lg text-gray-600">Welcome to Spring Rain Login first</p>
        //                 </div>

        //                 <div class="mt-12 grid gap-6 sm:grid-cols-2">
        //                     <button class="py-3 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
        //                         <div class="flex gap-4 justify-center">
        //                             <img src="../public/images/google.svg" class="w-5" alt="" />
        //                             <span class="block w-max font-medium tracking-wide text-sm text-green-700">Google</span>
        //                         </div>
        //                     </button>
        //                     <button class="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
        //                         <div class="flex gap-4 items-center justify-center text-white">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
        //                                 <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        //                             </svg>
        //                             <span class="block w-max font-medium tracking-wide text-sm text-white">Github</span>
        //                         </div>
        //                     </button>
        //                 </div>

        //                 <div  class="mt-12 border-t">
        //                     <span class="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
        //                 </div>

        //                 <form action="" class="space-y-6 py-6">
        //                     <div>
        //                         <input
        //                             type="email"
        //                             placeholder="Your Email"
        //                             class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
        //                         />
        //                     </div>

        //                     <div class="flex flex-col items-end">
        //                         <input
        //                             type="password"
        //                             placeholder="Your Password"
        //                             class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
        //                         />
        //                         <button type="reset" class="w-max p-3 -mr-3">
        //                             <span class="text-sm tracking-wide text-blue-600">Forgot password ?</span>
        //                         </button>
        //                     </div>

        //                     <div>
        //                         <button class="w-full px-6 py-3 rounded-xl bg-teal-700 mb-5">
        //                             <span class="font-semibold text-white text-lg">Login</span>
        //                         </button>
        //                         <Link to="/user-signup">
        //                         <span class="text-sm tracking-wide text-gray-400 mt-5">Don't have any account ?</span> <span class="text-blue-600">Create new account</span> 
        //                         </Link>
        //                     </div>
        //                 </form>

                        
        //             </div>
        //         </div>
        //     </div>
    );
};

export default Login;