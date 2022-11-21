 import { useEffect, useState } from 'react';
 
 const useBlogPage = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:3000/blog')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[]);
    return [blog, setBlog]


 
 };
 
 export default useBlogPage;