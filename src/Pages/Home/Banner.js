import React from 'react';
import { AiOutlineDown } from "react-icons/ai";


const Banner = () => {
    
    return (
     
    <header>
    

    <div class="w-full bg-center bg-cover h-[32rem] bg-[url('https://scontent.fdac24-1.fna.fbcdn.net/v/t31.18172-8/23157142_535680756780114_2328984339193240765_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_eui2=AeHHg_CyiIiwca9ADMZJ2qhT8DzgriNBY-nwPOCuI0Fj6UUlt2ZpGkUwWzChrjDlfxxcMgRJn_WR01sZQpvVBeon&_nc_ohc=0YVZIdLQjocAX_dBrr5&_nc_pt=1&_nc_ht=scontent.fdac24-1.fna&oh=00_AT9HlV8m9OLDo21dgN7_2dDYPJ6YepQyEhF3JAr5yHIwFQ&oe=6323BDC4')] ">
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Welcome to My  <span class="text-blue-400 underline">Blog</span></h1>
              
                
 
            </div>
            <span className= ' animate-bounce bold  text-blue-500 text-5xl text-center'>   <AiOutlineDown /> </span>
        </div>
    </div>
</header>
    );
};

export default Banner;