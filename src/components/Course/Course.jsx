import React from "react";
import { FaClock, FaSignal, FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {
    id,
    authorImg,
    authorTitle,
    price,
    enrollCount,
    courseCategory,
    courseWeek,
    courseImg,
    courseLabel,
    courseLesson,
    courseTitle,
  } = course;
  return (
    <Link to={`/course/${id}`}>
      <div className="p-2 group shadow-lg bg-white">
        <figure className="overflow-hidden rounded-md">
          <img
            className="w-full duration-300 group-hover:scale-105 h-56 rounded-md"
            src={courseImg}
            alt=""
          />
        </figure>

        <div className="px-2 flex h-32 flex-col gap-2 py-3">
          <div className="flex justify-between items-center">
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-3.5 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {courseCategory}
            </span>
            <p className="text-gray-700 text-sm">{enrollCount} Enrolled</p>
          </div>

          <h2 className="text-sm text-gray-600 font-medium">{courseTitle}</h2>

          <ul className="flex justify-between items-center mt-auto">
            <li className="flex items-center gap-2">
              <FaClock className="text-red-600 text-sm"></FaClock>{" "}
              <span className="text-sm font-light">{courseWeek} Week</span>
            </li>
            <li className="flex items-center gap-2">
              <FaVideo className="text-green-600 text-sm"></FaVideo>{" "}
              <span className="text-sm font-light">{courseLesson} Lesson</span>
            </li>
            <li className="flex items-center gap-2">
              <FaSignal className="text-yellow-400 text-sm"></FaSignal>{" "}
              <span className="text-sm font-light">{courseLabel}</span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={authorImg} className="h-8 w-8 rounded-full" alt="" />
            <h4
              className="text-sm font-medium
            "
            >
              {authorTitle}
            </h4>
          </div>
          <h2 className="font-semibold text-2xl text-gray-600">${price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default Course;
