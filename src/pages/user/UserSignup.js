import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
      <div class="w-full max-w-md">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="mt-5 mb-5 text-2xl font-medium mb-4 text-start">Create a Account </h2>
          <form onSubmit={registerSubmit}>
            <div class="mb-4">
              <input class="border border-gray-200 w-full h-10 rounded p-3" type="text" id="username"
                name="name"
                value={name}
                onChange={registerDataChange}
                placeholder="Enter Your Name"
                required
              />
            </div>
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

              <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="userpassword"
                name="password"
                value={name}
                onChange={registerDataChange}
                placeholder="Enter Your Password"
                required
              />
            </div>
            <button class="border-2 border-teal-700 bg-teal-700 text-white py-1 w-full rounded-md  font-semibold h-10 bg-teal-700" type="submit">SignUp</button>
            <div class="mt-3 mb-5 text-center">
              <Link to="/user-signin" class="text-black"><span class="text-gray-500">Already have a account ? </span> <span class="text-black-900 font-semibold"> SignIn </span></Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default UserSignup;