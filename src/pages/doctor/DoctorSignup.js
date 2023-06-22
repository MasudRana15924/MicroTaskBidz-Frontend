import React from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { createSignUp } from '../../state/user/signupSlice';
import { Link } from 'react-router-dom';
const DoctorSignup = () => {
    const dispatch = useDispatch();
    const {success} = useSelector(
        (state) => state.signup
    );
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [district, setDistrict] = useState('');
    const [nid_No, setnid_No] = useState('');
    const [bmdc_No, setbmdc_No] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const role = "doctor";

    const data = ({ title, gender, district, nid_No, bmdc_No, type, phone, name, email, password, role });
    const registerSubmit = (e) => {
        e.preventDefault();

        if (title&& gender && district && nid_No && bmdc_No && type && phone && name&&  email&& password) {
            // dispatch(createDoctorSignUp(data));
            dispatch(createSignUp(data));
            toast.success('Account create successfully', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else{
            toast.error('Enter all Fields', {
                position: "top-center",
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    useEffect(() => {
        if (success) {
            navigate('/user-signin');
        } 
    }, [success, navigate]);
    const titles = [
        {

            label: 'Choose title ',
        },
        {
            value: 'Dr.',
            label: 'Dr.',
        },
        {
            value: 'Prof. Dr.',
            label: 'Prof. Dr.',
        },
        {
            value: 'Ass.Prof. Dr.',
            label: 'Ass.Prof. Dr.',
        },
        {
            value: 'Assoc.Prof. Dr.',
            label: 'Assoc.Prof. Dr.',
        },
    ];
    const genders = [
        {

            label: 'Select Gender ',
        },
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
    ];
    const types = [
        {

            label: 'Choose type ',
        },
        {
            value: 'Medical',
            label: 'Medical',
        },
        {
            value: 'Dental',
            label: 'Dental',
        },
    ];

    return (
        <div className=" mt-28 lg:mt-40 lg:w-3/4 lg:mx-auto lg:flex justify-between lg:gap-4 mb-10">

            <div className="w-full ">

                <div className="mt-16 hidden lg:block ">
                    <p className="text-4xl text-start text-blue-600 font-bold w-3/4 mx-auto ">Are You A Qualified Doctor?</p>
                    <p className=" text-gray-900 lg:text-3xl text-center mt-12 font-bold ml-5">Join the forefront of digital healthcare</p>
                    <p className="text-gray-900 text-xl text-start  lg:w-3/4 mx-auto mt-10">Join HealthBridge network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p>
                </div>
                <div className="mt-16 hidden lg:block ">
                    <p className="text-4xl text-start text-blue-600 font-bold w-3/4 mx-auto ">Benefits Of Joining</p>
                    <p className="text-gray-900 text-xl text-start  lg:w-3/4 mx-auto mt-10">Doctors can join the platform using our simple on boarding process. We verify every doctor to make sure only BMDC authorised doctors are providing consultation using our latest technology.</p>
                    <p className="text-gray-900 text-xl text-start  lg:w-3/4 mx-auto mt-10">You will be at the forefront of digital healthcare innovations providing accessible patient care for all.</p>
                    <p className="text-gray-900 text-xl text-start  lg:w-3/4 mx-auto mt-10">You will be working independently, making autonomous medical decisions, and supported by our HealthBridge technical team who are here to assist both patient and yourself when you’re on session or outside sessions.</p>
                </div>

                <div className="mt-16 hidden lg:hidden">
                    <p className=" text-2xl lg:text-4xl text-start text-blue-600 font-bold lg:w-3/4 mx-auto ml-3 lg:ml-0">Are You A Qualified Doctor?</p>
                    <p className="text-xl text-gray-900 lg:text-3xl text-center mt-12 font-bold lg:ml-3">Join the forefront of digital healthcare</p>
                    <p className="text-gray-900 text-xl text-start ml-3 lg:ml-0 lg:w-3/4 mx-auto mt-10">Join HealthBridge network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p>
                </div>
                <div className=" block lg:hidden ">
                    <p className="text-xl text-start text-blue-600 font-bold w-3/4 mx-auto ">Are You A Qualified Doctor?</p>
                    <p className=" text-gray-900 text-start w-3/4 mx-auto  mt-3 font-bold ">Join the forefront of digital healthcare</p>
                    <p className="text-gray-900 text-start text-xl w-3/4 mx-auto mt-5 mb-12">Join HealthBridge network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p>
                </div>
            </div>
            <div className=" w-3/4 mx-auto lg:w-full lg:mt-12 mt-10">
                <p className="text-2xl lg:text-4xl lg:text-center font-semibold text-gray-900 lg:w-2/4 lg:mx-auto ">Doctors Registration</p>
                <form action="" className="" onSubmit={registerSubmit}>
                    <div className="mt-12  lg:ml-0 lg:mr-0 ">
                        {/* <TextField id="standard-basic" label="Title" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={title} onChange={(e) => setTitle(e.target.value)} /> */}
                        <TextField
                            id="standard-select-currency-native"
                            select
                            label="Title"
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                            className="bg-white w-full lg:w-2/4 mx-auto "
                            onChange={(e) => setTitle(e.target.value)}
                           
                            
                        >
                            {titles.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>

                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Name" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>


                    <div className="mt-8  lg:ml-0 lg:mr-0 ">
                        <TextField
                            id="standard-select-currency-native"
                            select
                            label="Gender"
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                            className="bg-white w-full lg:w-2/4 mx-auto "
                             onChange={(e) => setGender(e.target.value)}
                        >
                            {genders.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>

                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="District" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={district} onChange={(e) => setDistrict(e.target.value)} />
                    </div>

                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="NID / Passport Number" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={nid_No} onChange={(e) => setnid_No(e.target.value)} />
                    </div>
                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="BMDC Registration Number" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={bmdc_No} onChange={(e) => setbmdc_No(e.target.value)} />
                    </div>

                    <div className="mt-8  lg:ml-0 lg:mr-0 ">
                        {/* <TextField id="standard-basic" label="Doctor Type" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={type} onChange={(e) => setType(e.target.value)} /> */}
                        <TextField
                            id="standard-select-currency-native"
                            select
                            label="Doctor Type"
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            variant="standard"
                            className="bg-white w-full lg:w-2/4 mx-auto "
                             onChange={(e) => setType(e.target.value)}
                        >
                            {types.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>

                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Phone Number" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mt-6  lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Email" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-6  lg:ml-0 lg:mr-0 mb-5">
                        <TextField id="standard-basic" label="Password" variant="standard" className="w-full lg:w-2/4 mx-auto mt-12" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button variant="contained" className="w-3/4 lg:w-2/4" onClick={registerSubmit}>Signup</Button>
                    {/* <button variant="contained" className="w-3/4 lg:w-2/4" >Signup</button> */}
                   <div className="mt-5">
                   <span className="text-sm tracking-wide text-gray-400 mt-8">Already have a account ?</span> <Link to="/doctor/login"><span className="text-sm font-semibold leading-6 text-gray-900">Please Login</span></Link>
                   </div>
                </form>
            </div>
            <ToastContainer
                position="top-center"
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

export default DoctorSignup;