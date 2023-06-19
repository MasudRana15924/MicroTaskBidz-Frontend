import React, { useState } from 'react';
import UserSidebar from './UserSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../state/user/changePassword/updatePasswordSlice';
import { ToastContainer, toast } from 'react-toastify';




const Changepassword = () => {
  const dispatch = useDispatch();
  const { loggeduser } = useSelector(
    (state) => state.userDetails
  );
  const userToken = loggeduser.token
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const data = ({ oldPassword, newPassword, confirmPassword })
  const registerSubmit = (e) => {
    e.preventDefault();
    if (data && userToken) {
      dispatch(updatePassword({ data, userToken }));
      toast.success('Password Update Suceessfully ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error('Please enter your details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };



  return (
    <div className="p-10 bg-white mt-20 mb-20">
      <div className="max-w-full mx-auto ">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2">
          <div className="hidden lg:block  lg:w-8/12 lg:mx-auto text-end mt-20 mb-5">
            <UserSidebar></UserSidebar>

          </div>
          <div className=" lg:w-8/12 mb-5 mt-32 lg:p-5 ">
            <div class="bg-white rounded-lg shadow-lg p-8 ">
              <h2 class=" mb-5 text-2xl font-medium  text-start mt-10">Change Password</h2>
              <form onSubmit={registerSubmit}>
                <div class="mb-4">

                  <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="username"
                    name="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Enter Your Old Password"
                    required
                  />
                </div>

                <div class="mb-4">

                  <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="userpassword"
                    name="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter Your New Password"
                    required
                  />
                </div>
                <div class="mb-4">

                  <input class="border border-gray-200 w-full h-10 rounded p-3" type="password" id="userpassword"
                    name="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Your Password"
                    required
                  />
                </div>
                <button class="border-2 border-violet-700 text-white py-1 w-full rounded-md  font-semibold h-10 bg-violet-700 mt-5 mb-10" type="submit">Change Password</button>

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

export default Changepassword;