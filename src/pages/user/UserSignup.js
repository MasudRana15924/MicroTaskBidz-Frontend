import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import img from '../../images/Rectangle.jpg'
import './User.css'

const UserSignup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
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

            <p class="font-lg text-2xl text-gray-600">Create a account </p>
          </div>


          <form action="" class="space-y-6 py-6" onSubmit={registerSubmit}>
            <div>
              <input
                class=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                type="text"
                name="name"
                value={name}
                onChange={registerDataChange}
                placeholder="Enter Your Name"

              />
            </div>
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

            </div>

            <div>
              <button class="w-full px-6 py-3 rounded-xl bg-teal-700 mb-5">
                <span class="font-semibold text-white text-lg">Signup</span>
              </button>
              <Link to="/user-signup">
                <span class="text-sm tracking-wide text-gray-400 mt-5">Already have a account ?</span> <span class="text-blue-600">Please Login</span>
              </Link>
            </div>
            <div class="mt-12 border-t">
              <span class="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">Or</span>
            </div>
            <div class="mt-12 grid gap-6 sm:grid-cols-2">
              <button class="py-3 px-6 rounded-xl bg-green-200 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
                <div class="flex gap-4 justify-center">
                  <img src="../public/images/google.svg" class="w-5" alt="" />
                  <span class="block w-max font-medium tracking-wide text-sm text-black-700">Google</span>
                </div>
              </button>
              <button class="py-3 px-6 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700">
                <div class="flex gap-4 items-center justify-center text-white">

                  <span class="block w-max font-medium tracking-wide text-sm text-white">Github</span>
                </div>
              </button>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
