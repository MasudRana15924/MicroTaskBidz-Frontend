import React from 'react';
import { Triangle} from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className=" w-1/4 mx-auto lg:mt-96 justify-items-center">
        <div className="w-1/4 mx-auto">
                <Triangle
                    height="80"
                    width="80"
                    color="#F510EB "
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
        </div>
    </div>
    );
};

export default Loader;