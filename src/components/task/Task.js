import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({ task }) => {
    const { taskName, maxBudget, img } = task
    const placeBid = () => {
        toast.success('You win the Bid ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    return (
        <div className="border border-gray-100 rounded h-full shadow-md">
            <img src={img} alt="" className="w-6/12 h-2/4 mx-auto" />
            <div className="p-5 ">
                <h3 className="text-2xl mt-5">{taskName}</h3>
                <h5 className="mt-3"><span className="text-xl text-slate-400">Current bid:</span> <span className="text-2xl font-bold ">{maxBudget} $</span>  </h5>
                <button className="bg-green-600 h-10 w-5/12 mt-5 mb-5 rounded-md text-white text-xl hover:bg-black" onClick={placeBid}>Place A Bid</button>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

export default Task;