import moment from "moment/moment";
import React from "react";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, category, paragraph, date, authorImage, blogImage } = blog;
  return (
    <div className="max-w-sm h-8/12 group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <figure className="overflow-hidden">
        <img className="rounded-t-lg group-hover:scale-105 duration-300"   src={blogImage} alt="" />
      </figure>
      <div className="flex  justify-between flex-col">
        <div className="p-5">
          <span className="bg-gray-200 py-0.5 px-3 rounded-md font-medium text-gray-600">
            {category}
          </span>
          <Link to={`/blog/${id}`} href="#">
            <h5 className="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {paragraph.slice(0, 80) + "..."}
          </p>
        </div>

        <div className="flex p-4 border-t-2 items-center justify-between">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={authorImage}
            alt="Avatar of Writer"
          />

          <p className="text-gray-600 flex items-center gap-2">
            <FaClock className="text-yellow-300 text-xl"></FaClock>{" "}
            <span className="font-medium">
              {moment(date).format("MMMM D ,YYYY")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
