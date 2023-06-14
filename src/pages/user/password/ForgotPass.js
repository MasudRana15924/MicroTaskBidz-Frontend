import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  {forgotPassword} from '../../../state/user/forgotpassword/forgotPasswordSlice';
import { ToastContainer, toast } from 'react-toastify';


const ForgotPass = () => {
    const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const registerSubmit = (e) => {
        e.preventDefault();
       const data = ({email});
      dispatch(forgotPassword(data));
      toast.success('Reset Password Email Send');
     
  }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="mt-5 mb-5 text-4xl font-medium  text-start ">Forgot Password</h2>
            <form onSubmit={registerSubmit} className="mt-10 mb-10">
  
              <div className="mb-10">
                <input className="border border-black w-full h-10 p-3" type="text" id="useremail"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <button className=" text-white py-1 w-full rounded-md  font-semibold h-10 bg-black" type="submit">Send</button>
  
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={500}
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

export default ForgotPass;