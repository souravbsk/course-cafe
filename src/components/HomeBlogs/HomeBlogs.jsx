import React, { useContext } from 'react';
import { BlogsLoadData } from '../layout/Main';
import Blog from '../Blog/Blog';


const HomeBlogs = () => {
    const [blogs, setBlogs] = useContext(BlogsLoadData);
    return (
        <div className="container py-8 md:py-16">
      <div className="text-center max-w-full md:w-7/12 mx-auto space-y-3">
        <h2 className="text-xl md:text-3xl text-gray-700 font-bold">
        Latest News & <span className="text-gray-600">Articles</span>
        </h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {
          blogs.slice(0,3).map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
      
    </div>
    );
};

export default HomeBlogs;