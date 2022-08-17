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
        <div>
             {
                blogs.map(blog => <Blog 

                    key={blog._id}
                    blog={blog}
                
                ></Blog>)
             }
        </div>
    );
};

export default Blogs;