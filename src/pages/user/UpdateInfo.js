import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserSidebar from './UserSidebar';

const UpdateInfo = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
   

  };
  const registerDataChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="p-10 bg-white mt-20 mb-20">
      <div className="max-w-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
          <div className="lg:w-8/12 lg:mx-auto text-end  mb-5">
            <UserSidebar></UserSidebar>

          </div>
          <div className="lg:w-8/12 mb-5  p-5">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="mt-5  text-2xl font-medium mb-4 text-start">Update Your Info</h2>

              <form onSubmit={registerSubmit}>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mt-5 mb-5" type="text" id="username"
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="text" id="username"
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="text" id="username"
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="text" id="username"
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                    placeholder="Enter Your Gender"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="date" id="username"
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                    placeholder="Birth Date"
                    required
                  />
                </div>

                <button className=" text-white py-1 w-full rounded-md  font-semibold h-10 bg-violet-700 mt-5" type="submit">Update</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;