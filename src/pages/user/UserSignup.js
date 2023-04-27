import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './User.css'
import { createSignUp } from '../../state/user/signupSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authImg from '../../images/auth.png'
const UserSignup = () => {
  const navigate = useNavigate();
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
    dispatch(createSignUp(myForm));
    navigate('/user-signin');
    toast.success('Please Verify Your Email', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  };
  const registerDataChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>

      <div className="mt-5 lg:mt-0 flex flex-col items-center justify-center min-h-screen ">
        <div className="lg:w-3/12 ">
          <img src={authImg} alt="" className="mx-auto " />
          <form action="" className="space-y-6 py-6 " onSubmit={registerSubmit}>
            <div>
              <input
                className=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                type="text"
                name="name"
                value={name}
                onChange={registerDataChange}
                placeholder="Enter Your Name"
              />
            </div>
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
                className=" w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                name="password"
                value={password}
                onChange={registerDataChange}
                placeholder="Enter Your Password"
              />
            </div>
            <div>
              <button className="w-full px-6 py-3 rounded-xl bg-violet-600 mb-5">
                <span className="font-semibold text-white text-lg">Signup</span>
              </button>
              <span className="text-sm tracking-wide text-gray-400 mt-5">Already have a account ?</span> <Link to="/login"><span className="text-violet-700">Please Login</span>
              </Link>
            </div>
            {/* {
              error !== '' && <Error message={error}></Error>
            } */}
          </form>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserSignup;
