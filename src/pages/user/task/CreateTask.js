import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../../state/task/taskSlice';
import UserSidebar from '../UserSidebar';

const CreateTask = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        budget: "",
    });
    const { name, budget } = user;
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name", name);
        myForm.set("password", budget);
        dispatch(createTask(myForm));

    };
    const registerDataChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="p-10 bg-white mt-20 mb-20">
            <div className="max-w-full mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2 ">
                    <div className=" lg:w-8/12 lg:mx-auto text-end  mb-5 ">
                        <UserSidebar></UserSidebar>
                    </div>
                    <div className=" lg:w-7/12 ">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="space-y-4">

                                <p className="font-lg text-4xl text-gray-600 mb-3">Create a Task </p>
                            </div>


                            <form action="" className="space-y-6 py-6" onSubmit={registerSubmit}>
                                <div>
                                    <input
                                        className=" w-full py-3 px-6 ring-1 ring-gray-300  placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={registerDataChange}
                                        placeholder="Give a task name"

                                    />
                                </div>
                                <div>
                                    <input
                                        className=" w-full py-3 px-6 ring-1 ring-gray-300  placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                        type="text"
                                        name="budget"
                                        value={budget}
                                        onChange={registerDataChange}
                                        placeholder="Give a max Budget "

                                    />
                                </div>


                                <div>
                                    <button className="w-full px-6 py-3 rounded-xl bg-rose-400 mb-5">
                                        <span className="font-semibold text-white text-lg">Create </span>
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;