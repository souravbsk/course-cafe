import React, { useContext } from 'react';
import { BlogsLoadData } from '../layout/Main';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useContext(BlogsLoadData);
    return (
        <div>
            <div className='container py-16 mt-20 grid md:grid-cols-3 gap-8'>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;