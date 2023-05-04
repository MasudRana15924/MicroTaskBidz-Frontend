import React from 'react';
import { Triangle,LineWave } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className=" w-1/4 mx-auto lg:mt-96 justify-items-center">
        <div className="w-1/4 mx-auto">
            <LineWave
                height="120"
                width="120"
                // color="#4fa94d"
                color="#F510EB "
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                className="absolute "
            />
            <p className="text-sm text-violet-900">MKM HealthBridge</p>
        </div>
    </div>
    );
};

export default Loader;