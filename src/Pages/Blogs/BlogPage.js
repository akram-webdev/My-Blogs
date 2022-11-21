import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { blogId } = useParams();
  console.log(blogId)
  const [blog, setBlog] = useState({});
  console.log(blog);

  let { _id, img, name, description } = blog;
  console.log(blog);

  useEffect(() =>{
    const url = `http://localhost:5000/blog/${blogId}`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => setBlog(data))
  },[blogId])
  

  return (
    <div>
     
    <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img class="object-cover w-52 h-64" src={img} alt="Article"/>

        <div class="p-6">
            <div>
                 
                <h1 href="#" class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline">{name}</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
            </div>

           
        </div>
    </div>
    </div>
  );
};

export default BlogPage;
