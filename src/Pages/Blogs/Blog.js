import React from 'react';

const Blog = ({blog}) => {
    const {_id, img, name, description} = blog
    return (
    
        <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img class="object-cover w-full h-56" src={img} alt="avatar"/>
        
        <div class="py-5 text-center">
            <a href="#" class="block text-2xl font-bold text-gray-800 dark:text-white">{name}</a>
            <span class="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
        </div>
    </div>
    );
};

export default Blog;