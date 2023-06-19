import React from 'react';
import bloodImg from '../../images/bloods.jpg'
const Blood = () => {
    return (
        <div className="mt-28 lg:mt-64 md:mt-64 mb-10 ">
            <div>
                <img src={bloodImg} alt="" className="h-96 w-3/4 mx-auto"/>
            </div>
             <div  className=" mt-10 lg:w-1/4 mx-auto ">
                        <h3 class="text-center text-xl font-bold ">Apply For Emergency  Blood </h3>
                        <form action="" >
                           
                                <div>
                                    
                                    <input type="text"  placeholder="Enter  Name" className="border border-gray-300  w-3/4 p-2 h-12 mx-auto mt-5" />
                                </div>
                                <div>
                                   
                                    <input type="text"  placeholder="Enter  Email" className="border border-gray-200  w-3/4 p-2 h-12 mx-auto mt-5" />
                                </div>
                                <div>
                                 
                                    <input type="text"  placeholder="Enter  Phone " className="border border-gray-200 w-3/4 p-2 h-12 mx-auto mt-5 " />
                                </div>
                                <div>
                                
                                    <select name="Gender" className="w-3/4 h-12 border  mt-5" >
                                        <option  >Choose Blood Group </option>
                                        <option  >A+ </option>
                                        <option  >A- </option>
                                        <option >AB+ </option>
                                        <option >AB- </option>
                                        <option >B+ </option>
                                        <option >B- </option>
                                        <option >O+ </option>
                                        <option >O- </option>
                                    </select>
                                </div>
                               
                           
                            <button className="btn bg-black mt-5 h-12 w-3/4  text-white font-semibold text-center mb-5">Apply  </button>
                        </form>
             </div>
        </div>
    );
};

export default Blood;