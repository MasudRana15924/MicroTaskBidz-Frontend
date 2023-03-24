import React, { useState } from 'react';


const Changepassword = () => {
    const [user, setUser] = useState({
      oldpassword: "",
      newpassword: "",
    });
    const {oldpassword,newpassword} = user;
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
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="mt-5 mb-5 text-2xl font-medium  text-start">Change Passowrd</h2>
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
              <button class="border-2 border-teal-700 bg-teal-700 text-white py-1 w-full rounded-md  font-semibold h-10 bg-teal-700 mt-5" type="submit">Change Password</button>
              
            </form>
          </div>
        </div>
  
      </div>
    );
};

export default Changepassword;