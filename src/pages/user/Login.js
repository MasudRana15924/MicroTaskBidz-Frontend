import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './User.css'
import { useDispatch, useSelector } from 'react-redux';
import { createLogin } from '../../state/user/Login/loginSlice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [agree, setAgree] = useState(false);
    const { token, loggeduser } = useSelector(
        (state) => state.userDetails
    );
   
    const user = loggeduser.user
    const message = loggeduser.message
    const [users, setUser] = useState({
        email: "",
        password: "",
    });
    const { email, password } = users;
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
        myForm.set("password", password);
        dispatch(createLogin(myForm));
        toast.success('Login Succesfull');     
    };
    const registerDataChange = (e) => {
        setUser({
            ...users,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        if (user) {
            navigate('/');
            // toast.info('Login Succesfull');
        } else {
            toast.info(message);
        }
    }, [user, navigate, message]);
    return (
        <div>
            <div className=" flex flex-col items-center justify-center min-h-screen">
                <div className="lg:w-3/12 ">
                    <div className=" p-8">
                        <h2 className="text-start text-2xl font-semibold leading-6 text-gray-900">Welcome to Login</h2>
                        <form action="" className="space-y-6 py-6 " onSubmit={registerSubmit}>
                            <div>
                                <input
                                    className=" w-full py-3 px-6 border-2 border-black"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Email"
                                    required

                                />
                            </div>

                            <div className="flex flex-col items-end">
                                <input
                                    className=" w-full py-3 px-6 border-2 border-black "
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Password"

                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)}
                                        required
                                    />
                                    <label
                                        htmlFor="accept-terms"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <Link to="/user/password">

                                        <span className="text-sm tracking-wide text-blue-700 mt-5">Forgot password ?</span>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button className="w-full px-6 py-3 bg-black mb-5">
                                    <span className="font-semibold text-white text-lg">Login</span>
                                </button>

                                <span className="text-sm tracking-wide text-gray-400 mt-5">Don't have any account ?</span> <Link to="/user-signup"> <span className="text-sm font-semibold leading-6 text-gray-900">Create new account</span>
                                </Link>
                            </div>
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
                    theme="light"
                   
                />
                {/* Same as */}
                <ToastContainer />
      

            </div>
        </div>
    );
};

export default Login;