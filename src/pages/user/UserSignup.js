import React from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
    return (
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-medium mb-4 text-center">Register</h2>
            <form>
              <div class="mb-4">
                {/* <label class="block text-gray-700 font-medium mb-2" for="username">Name  </label> */}
                <input class="border border-gray-400 w-full" type="text" id="username" name="username" required placeholder="Enter Your Name"/>
              </div>
              <div class="mb-4">
                {/* <label class="block text-gray-700 font-medium mb-2" for="username">Email  </label> */}
                <input class="border border-gray-400 w-full" type="text" id="useremail" name="useremail" required placeholder="Enter Your Email"/>
              </div>
              <div class="mb-4">
                {/* <label class="block text-gray-700 font-medium mb-2" for="password">Password</label> */}
                <input class="form-input border-gray-400 w-full" type="password" id="password" name="password" required placeholder="Enter Your Password"/>
              </div>
              <button class=" bg-teal-700" type="submit">SignUp</button>
              <div class="mt-3">
                <Link to="/user-signin" class="text-black">Already have a account ? SignIn </Link>
                </div>
            </form>
          </div>
        </div>
      
      </div>
    );
};

export default UserSignup;