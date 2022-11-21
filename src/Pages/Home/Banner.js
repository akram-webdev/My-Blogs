import React from 'react';
 


const Banner = () => {
    
    return (
     
    <header >
    

    <div class="w-full bg-center bg-cover h-[32rem] bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)] ">
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Welcome to My  <span class="text-blue-400 underline">Blog</span></h1>
            </div>
        
        
          
        </div>
    </div>
</header>
    );
};

export default Banner;