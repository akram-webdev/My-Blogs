import React from "react";
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
  let { _id, img, name, description } = blog;
  console.log(_id);
 
  const navigate = useNavigate();
  const navigateToBlogPage = id =>{
    navigate(`/blog/${_id}`)
  }
  
  return (
    <>
      <div className=" mt-20 lg:p-1 lg:shadow-xl  lg:bg-gradient-to-r from-white via-blue-200 to-blue-300 rounded-xl">
        <div class="max-w-md px-8 py-4  bg-gradient-to-r from-gray-200   mx-auto bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div class="flex justify-center -mt-16 md:justify-end">
            <img
              class="object-cover w-40 h-40 rounded-full  dark:border-blue-400"
              alt="Testimonial avatar"
              src={img}
            />
          </div>

          <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
            {name}
          </h2>

          <p class="mt-2 text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolores deserunt ea doloremque natus error, rerum quas odio quaerat
            nam ex commodi hic, suscipit in a veritatis pariatur minus
            consequuntur!
          </p>

          <div class="flex justify-end mt-4">
            <button
            onClick={() => navigateToBlogPage(_id)}
              type="button"
              class="  p-2 rounded-lg text-white bg-gradient-to-r from-blue-200 to-blue-500 ..."
            >
              Read More
            </button>

            {/* <button class="p-2 text-white rounded-lg   bg-gradient-to-r from-blue-200 to-blue-500   hover:scale-110   duration-300 ...">
  Save Changes
</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
