import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      
    
    }, [])
    
    return (
       <>
      
      <div id='blogs' className=''>
           <h1 className='text-5xl text-center mt-12 '>𝐌𝐲 𝐁𝐥𝐨𝐠𝐬</h1>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
            {
               blogs.map(blog => <Blog 

                   key={blog._id}
                   blog={blog}
               
               ></Blog>)
            }


       </div>
      </div>
       </>
    );
};

export default Blogs;