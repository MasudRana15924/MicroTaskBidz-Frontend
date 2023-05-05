import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ForgotPassword = () => {
    // const { token} = useParams()
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerSubmit = (e) => {
        e.preventDefault();
        const data = ({ password, confirmPassword });
        if (data) {
            // dispatch(forgotPassword(data));
            toast.success('Reset Password Email Send', {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            },
            );
        } else {
            toast.error('Please Enter Email', {
                position: "top-right",
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="mt-5 mb-5 text-4xl font-medium  text-start ">Reset Password</h2>
                    <form onSubmit={registerSubmit} className="mt-5 mb-5">

                        <div className="mb-4">
                            <input className="border border-gray-200 w-full h-10 rounded p-3" type="password" id="useremail"
                                name="email"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your New Password"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input className="border border-gray-200 w-full h-10 rounded p-3" type="password" id="useremail"
                                name="email"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        <button className=" text-white py-1 w-full rounded-md  font-semibold h-10 bg-violet-600" type="submit">Update</button>

                    </form>
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

export default ForgotPassword;