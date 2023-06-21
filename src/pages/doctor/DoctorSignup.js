import React from 'react';
import { TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
            <div className="w-full hidden">
                <form action="" className="">
                    <TextField id="standard-basic" label="Title" variant="standard" className="" />
                    <TextField id="standard-basic" label="Name" variant="standard" className="" />

                </form>
            </div>
            <div className="w-full ">
                <p className=" text-4xl text-center font-semibold text-gray-900 lg:w-2/4 lg:mx-auto ">Doctors Registration</p>
                <form action="" className="">
                    <div className="mt-6 p-5 lg:m-0">
                        <TextField id="standard-basic" label="Title" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="Name" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>


                    <div className="mt-8 m-5 lg:m-0">
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
                    <div className="mt-8 lg:ml-44 lg:pr-14 m-5 lg:m-0">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Birth Date" className="w-full lg:w-2/4 mx-auto mt-12" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="District" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="NID / Passport Number" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>
                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="BMDC Registration Number" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="Doctor Type" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="Phone Number" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>
                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="Email" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>
                    <div className="mt-6 m-5 lg:m-0">
                        <TextField id="standard-basic" label="Password" variant="outlined" className="w-full lg:w-2/4 mx-auto mt-12" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center lg:w-2/4 mx-auto mt-5">
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
                    <button className="btn btn-sm bg-black w-2/4 mx-auto mt-5">Signup</button>

                </form>
            </div>

        </div>
    );
};

export default DoctorSignup;