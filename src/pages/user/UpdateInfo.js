import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UpdateInfo = () => {
    const dispatch = useDispatch();
  const [name,setName]=useState("")

    
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    dispatch();

  };
  const registerDataChange = (e) => {
    setName(e.target.value);
  };
    return (
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="mt-5  text-2xl font-medium mb-4 text-start">Update Your Info</h2>
            <form onSubmit={registerSubmit}>
              <div class="mb-4 ">
                <input class="border border-gray-200 w-full h-10 rounded p-3 mt-5 mb-5" type="text" id="username"
                  name="name"
                  value={name}
                  onChange={registerDataChange}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
             
              <button class="border-2 border-teal-700  text-white py-1 w-full rounded-md  font-semibold h-10 bg-teal-700 mt-5" type="submit">Update</button>
              
            </form>
          </div>
        </div>
  
      </div>
    );
};

export default UpdateInfo;