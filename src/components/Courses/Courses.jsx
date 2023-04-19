import React from "react";
import Course from "../Course/Course";
import { Link } from "react-router-dom";

const Courses = ({ courses }) => {
  return (
    <div className="container py-16">
      <div className="text-center max-w-full w-7/12 mx-auto space-y-3">
        <h2 className="text-3xl text-gray-700 font-bold">
          Explore Featured <span className="text-gray-600">Courses</span>
        </h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {courses.slice(0, 6)?.map((course) => (
          <Course course={course} key={course.id}></Course>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/course">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-gray-300 rounded border border-gray-200 hover:bg-gray-700 duration-300  hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Explore More Cources
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;
