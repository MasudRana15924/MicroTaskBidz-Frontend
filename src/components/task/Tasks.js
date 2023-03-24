import React, { useEffect, useState } from 'react';
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch('./task.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])
    return (
        <div className="mt-20">
            <h5 className="text-center text-4xl font-medium ">Live Auction </h5>
            <p className="text-center text-md font-medium mt-3 text-slate-400 font-serif">Explore on the world's best & largest Bidding marketplace with our beautiful Bidding <br/> products. We want to be a part of your smile, success and future growth.</p>

            <div className="lg:w-2/4 lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10">

                {
                    tasks.map(task => <Task
                        key={task.id}
                        task={task}
                    ></Task>)
                }

            </div>
        </div>
    );
};

export default Tasks;