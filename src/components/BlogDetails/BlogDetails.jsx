import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsLoadData } from "../layout/Main";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  useEffect(()=>{
    fetch('/blogs.json')
    .then(res => res.json())
    .then(data => {
        const blogItem = data.find((blog) => blog.id == id);
        setBlogs(blogItem)
    })
  },[])

  const {
    blogImage,
    authorImage,
    category,
    date,
    paragraph,
    socialLinks,
    title,
  } = blogs;

  return (
    <div className="mt-20">
      <div className=" py-8 md:py-16 ">
      <div className="container">
        <div className="p-5 bg-gray-200 rounded-md">
          <h2 className="mb-5 text-2xl font-semibold">{title}</h2>
          <figure>
            <img
              className="md:h-auto
              
              h-96 w-full rounded-md object-cover"
              
              src={blogImage}
              alt=""
            />
          </figure>
          <p className="mt-8">{paragraph}</p>
          <div className="mt-6">
            <img
              className="w-14 h-14 object-cover rounded-full"
              src={authorImage}
              alt=""
            />
            <ul className="flex mt-5 items-center gap-3">
              <li className="bg-gray-300 p-2 rounded-md text-xl">
                <a href={socialLinks?.facebook}>
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li className="bg-gray-300 p-2 rounded-md text-xl">
                <a href={socialLinks?.twitter}>
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li className="bg-gray-300 p-2 rounded-md text-xl">
                <a href={socialLinks?.linkedin}>
                  <FaLinkedin></FaLinkedin>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default BlogDetails;
