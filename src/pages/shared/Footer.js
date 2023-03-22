import React from 'react';
import { ImFacebook } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { ImYoutube } from "react-icons/im";

const FOoter = () => {
  return (
    <div className="p-10 bg-black mt-5 ">
      <div className="max-w-full mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-2 ">
          <div className="lg:w-8/12 lg:mx-auto text-end  mb-5">
            <h2 className="text-start text-white  font-bold">DROP US A LINE</h2>
            <h2 className="text-start text-white text-2xl mt-3 font-bold">WE"RE MORE TALKATIVE</h2>
            <h2 className="text-start text-white text-2xl mb-5 font-bold">ALIVE 24HOUR IN A WEEK</h2>
            <form action="" className='mt-5 '>

              <div>
                <input type="text" placeholder='Name         |' className="lg:w-full mb-3 h-10 border-gray-100 px-5" /> <br />
                <input type="text" placeholder='Email          |' className="lg:w-full mb-3 h-10 border-gray-100 px-5" /> <br />
                <input type="text" placeholder='Phone        |' className="lg:w-full mb-3 h-10 border-gray-100 px-5" /> <br />
                <input type="text" placeholder='Message    |' className="lg:w-full mb-3 h-10 border-gray-100 px-5" />
              </div>
              <div>
                <button className="bg-rose-700 mt-5 h-10 w-1/5 text-white font-semibold text-center mb-5">+ Submit</button>
              </div>

            </form>
          </div>
          <div className="">
            <div>
              <h2 className="text-start text-white text-xl font-semibold">ADDRESS 01</h2>
              <h2 className="text-start text-white font-semibold mt-3">Rain Design</h2>
              <h2 className="text-start text-white font-semibold mt-1">Silver Tower</h2>
              <h2 className="text-start text-white font-semibold mt-1">123/45. There are many variations of passages</h2>
              <h2 className="text-start text-white font-semibold mt-1">12 Jumpton Road , South Avenue, New Jersey , NA</h2>
              <h2 className="text-start text-white font-semibold mt-1">Phone (123) 456 789</h2>
              <h2 className="text-start text-white font-semibold mt-1">Email : help@raindesign.com</h2>
            </div>
            <div className="mt-5">
              <h2 className="text-start text-white text-xl font-semibold ">ADDRESS 01</h2>
              <h2 className="text-start text-white font-semibold mt-3">Rain Design</h2>
              <h2 className="text-start text-white font-semibold mt-1">Silver Tower</h2>
              <h2 className="text-start text-white font-semibold mt-1">123/45. There are many variations of passages</h2>
              <h2 className="text-start text-white font-semibold mt-1">12 Jumpton Road , South Avenue, New Jersey , NA</h2>
              <h2 className="text-start text-white font-semibold mt-1">Phone (123) 456 789</h2>
              <h2 className="text-start text-white font-semibold mt-1 mb-5">Email : help@raindesign.com</h2>
              <div className="flex items-start justify-start mb-5">
                <ImFacebook className="bg-teal-700 text-white text-4xl rounded-full text-center"></ImFacebook>
                <ImTwitter className="bg-zinc-600 text-white text-4xl rounded-full text-center mx-5 p-2"></ImTwitter>
                <ImLinkedin2 className="bg-zinc-600 text-white text-4xl rounded-full text-center  p-2"></ImLinkedin2>
                <ImYoutube className="bg-zinc-600 text-white text-4xl rounded-full text-center mx-3  p-2"></ImYoutube>
              </div>
              <h2 className="text-white text-start text-sm"> &copy; 2021 Rain Design .All rights reserved</h2>
              <h2 className="text-white text-start text-sm"> Made by Rain Group of Company</h2>
              <h2 className="text-white text-start text-sm"> Privacy policy | Terms & Conditions</h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FOoter;