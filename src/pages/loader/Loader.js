import React from 'react';
import { Triangle} from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className="w-2/4 md:w-2/4 lg:w-1/4 mx-auto mt-96 lg:mt-96 justify-items-center">
        <div className=" w-2/4 lg:w-1/4 mx-auto">
                <Triangle
                    height="60"
                    width="60"
                    color="#F510EB "
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
               
        </div>
        {/* <p className="ml-3 lg:ml-30 text-sm font-semibold leading-6 text-gray-900 mt-3">MKM HelathBridge</p> */}
    </div>
    );
};

export default Loader;