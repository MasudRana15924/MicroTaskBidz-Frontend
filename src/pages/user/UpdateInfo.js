import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSidebar from './UserSidebar';
import { updateProfile } from '../../state/user/updateprofile/updateProfileSlice';
import { ToastContainer, toast } from 'react-toastify';

const UpdateInfo = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector(
    (state) => state.userDetails
);
const userToken = loggeduser.token
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const data=({name,gender,phone,birthdate})
  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({data,userToken}));
    toast.success('Your Info Updated', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    },
    );
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
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-2 ">
                  
                    <select name="Gender" className="w-full h-12 border rounded" value={gender} onChange={(e) => setGender(e.target.value)}>
                                            <option  >Select Gender </option>
                                            <option  >Male </option>
                                            <option >Female </option>
                                        </select>
                </div>
                <div className="mb-2 mt-5">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="text" id="username"
                    name="name"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>
                
                <div className="mb-2 ">
                  <input className="border border-gray-200 w-full h-10 rounded p-3 mb-5" type="date" id="username"
                    name="name"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
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
  );
};

export default UpdateInfo;