import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserSidebar from './UserSidebar';

const Changepassword = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    oldpassword: "",
    newpassword: "",
  });
  const { oldpassword, newpassword } = user;
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPassword", oldpassword);
    myForm.set("newPassword", newpassword);


  };
  const registerDataChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="p-10 bg-white mt-20 mb-20">
      <div className="max-w-full mx-auto ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
          <div className=" lg:w-8/12 lg:mx-auto text-end  mb-5">
            <UserSidebar></UserSidebar>
          </div>
          <div className=" lg:w-8/12 mb-5  p-5 ">
            <div class="bg-white rounded-lg shadow-lg p-8 ">
              <h2 class=" mb-5 text-2xl font-medium  text-start">Change Passowrd</h2>
              <form onSubmit={registerSubmit}>
                <div class="mb-4">
                  <input class="border border-gray-200 w-full h-10 rounded p-3" type="text" id="username"
                    name="name"
                    value={oldpassword}
                    onChange={registerDataChange}
                    placeholder="Enter Your 6 digit code"
                    required
                  />
                </div>

                <div class="mb-4">

                  <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="userpassword"
                    name="password"
                    value={newpassword}
                    onChange={registerDataChange}
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <button class="border-2 border-rose-700 text-white py-1 w-full rounded-md  font-semibold h-10 bg-rose-700 mt-5 mb-5" type="submit">Change Password</button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Changepassword;