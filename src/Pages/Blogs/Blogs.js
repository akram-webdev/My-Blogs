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
          hello
      <div  className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            
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