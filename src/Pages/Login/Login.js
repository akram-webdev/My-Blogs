import React from 'react';

const Login = () => {
    return (

     <>
 

{/* <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
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
</div> */}
  <section class="">
  <div class="px-0 py-20 mx-auto max-w-7xl sm:px-4">
    <div class="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
      <h1 class="mb-4 text-lg font-semibold text-left text-gray-900">Log in to your account</h1>
      <form class="mb-8 space-y-4">
        <label class="block">
          <span class="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
          <input class="form-input" type="email" placeholder="Ex. james@bond.com" inputmode="email" required />
        </label>
        <label class="block">
          <span class="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
          <input class="form-input" type="password" placeholder="••••••••" required />
        </label>
        <input type="submit" class="w-full py-3 mt-1 btn btn-primary" value="Login" />
      </form>
      <div class="space-y-8">
        <div class="text-center border-b border-gray-200">
          <span class="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white"  >Or</span>
        </div>
        <div class="grid grid-cols-1 w-full gap-4">
          <a href="#" class="py-3 btn btn-icon btn-google">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="mr-1">
              <path
                d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z"
              />
            </svg>
            <span class="sr-only">Continue with</span> Google
          </a>
           
        </div>
      </div>
    </div>
    <p class="mb-4 text-xs text-center text-gray-400">
      <a href="#" class="text-purple-200 underline hover:text-white">Create an account</a>
      ·
      <a href="#" class="text-purple-200 underline hover:text-white">Forgot password</a>
      ·
      <a href="#" class="text-purple-200 underline hover:text-white">Privacy & Terms</a>
    </p>
  </div>
</section>

     </>
    );
};

export default Login;