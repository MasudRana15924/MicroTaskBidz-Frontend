import React from 'react';
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { useState } from 'react';

const DoctorSignup = () => {



    const gender = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
    ];
    const [agree, setAgree] = useState(false);

    return (
        <div className="mt-40 lg:w-3/4 lg:mx-auto lg:flex justify-between lg:gap-4 mb-10">
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
                <div className="mt-16 block lg:hidden ">
                    <p className="text-2xl text-center text-blue-600 font-bold ">Are You A Qualified Doctor?</p>
                    <p className=" text-gray-900 text-center mt-8 font-bold ">Join the forefront of digital healthcare</p>
                    <p className="text-gray-900 text-start text-xl w-3/4 mx-auto mt-10 mb-12">Join HealthBridge network and create your virtual chamber provide medical consultancy via video call and expand the reach of your service.</p>
                </div>







            </div>
            <div className="w-full lg:mt-0 mt-12">
                <p className=" text-4xl text-center font-semibold text-gray-900 lg:w-2/4 lg:mx-auto ">Doctors Registration</p>
                <form action="" className="">
                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Title" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Name" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>


                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField
                            id="filled-select-currency-native"
                            select
                            label="Gender"
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            className="w-full lg:w-2/4 mx-auto mt-12"
                            variant="filled"
                        >
                            {gender.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div className="mt-8 lg:ml-44 lg:pr-14 m-5 lg:m-0 ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Birth Date" className="w-full lg:w-3/4 mx-auto mt-12" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="District" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="NID / Passport Number" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>
                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="BMDC Registration Number" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Doctor Type" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Phone Number" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>
                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Email" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>
                    <div className="mt-6 m-5 lg:ml-0 lg:mr-0 ">
                        <TextField id="standard-basic" label="Password" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center w-3/4 lg:w-2/4 mx-auto mt-5 mb-6">
                            <input
                                id="agree"
                                name="agree"
                                type="checkbox"
                                className="h-4 w-4 text-violet-700 focus:ring-violet-700 border-gray-300 "
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                required
                            />
                            <label
                                htmlFor="accept-terms"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Agreed with the terms and condition
                            </label>
                        </div>
                    </div>
                    <Button variant="contained" className="w-3/4 lg:w-2/4">Signup</Button> 
                </form>
            </div>

        </div>
    );
};

export default DoctorSignup;