import React from 'react';
import { Link } from 'react-router-dom';
import googleicon from '../../assets/icon/7123960_logo_google_icon.ico';

const Login = () => {
    return (

     <>
 

<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Please Login</h1>

    

    <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
      <p class="text-lg font-medium">Sign in to your account</p>

      <div>
        <label for="email" class="text-sm font-medium">Email</label>

        <div class="relative mt-1">
          <input
            type="email"
            id="email"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter email"
          />
 
        </div>
      </div>

      <div>
        <label for="password" class="text-sm font-medium">Password</label>

        <div class="relative mt-1">
          <input
            type="password"
            id="password"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter password"
          />
 
        </div>
      </div>

      <button type="submit" class="block w-full h-14 px-5 py-3 text-xl   text-white bg-indigo-600 rounded-lg">
        Sign in
      </button>

      <button type="submit" class="block w-full h-14  px-5 text-xl text-black bg-white border-2 border-indigo-600 hover:bg-indigo-600   rounded-lg">
        <img className='w-14 h-14 mx-auto justify-items-center' src={googleicon} alt="" />
  
      </button>

    
            <p class="text-sm text-center text-gray-500">
              No account?
               <Link 
               className='ml-2'
               to="/register"
               >sing up</Link>
            </p>
    </form>
  </div>
</div>

     </>
    );
};

export default Login;