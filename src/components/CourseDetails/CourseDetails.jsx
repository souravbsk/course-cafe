import React from "react";
import { FaCheck, FaClock, FaPlay, FaRegBookmark } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import TabDetails from "../TabDetails/TabDetails";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);

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
    description,
  } = course;
  return (
    <div className="py-36 bg-gray-100">
      <div className="container grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <TabDetails course={course}></TabDetails>
        </div>
        <div className="">
          <div className="rounded-md bg-white">
            <figure>
              <img className="w-full rounded h-48" src={courseImg} alt="" />
            </figure>
            <h2 className="p-5 text-2xl font-bold text-gray-600">${price}</h2>
            <div className="border-t p-5">
              <ul className="flex flex-col gap-6">
                <li className="flex items-center justify-between">
                  <div>
                    <button className="p-2 border-dashed border border-gray-800 bg-gray-200 text-gray-600 rounded-full text-sm">
                      <FaClock></FaClock>
                    </button>
                    <span className="text-lg font-light ms-2">Duration</span>
                  </div>
                  <span>{courseWeek}</span>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <button className="p-2 border-dashed border border-gray-800 bg-gray-200 text-gray-600 rounded-full text-sm">
                      <FaPlay></FaPlay>
                    </button>
                    <span className="text-lg font-light ms-2">Lessons</span>
                  </div>
                  <span>{courseLesson}</span>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <button className="p-2 border-dashed border border-gray-800 bg-gray-200 text-gray-600 rounded-full text-sm">
                      <FaRegBookmark></FaRegBookmark>
                    </button>
                    <span className="text-lg font-light ms-2">Skill level</span>
                  </div>
                  <span>{courseLabel}</span>
                </li>
              </ul>
              <ul className="flex mt-8 flex-col gap-6">
                <h4 className="font-medium text-xl">Course Overview</h4>

                <li>
                  <div>
                    <button className="p-2 border-dashed border border-gray-800 bg-gray-200 text-gray-600 rounded-full text-sm">
                      <FaCheck></FaCheck>
                    </button>
                    <span className="text-lg font-light ms-2">
                      Full lifetime access
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <button className="p-2 border-dashed border border-gray-800 bg-gray-200 text-gray-600 rounded-full text-sm">
                      <FaCheck></FaCheck>
                    </button>
                    <span className="text-lg font-light ms-2">
                      20+ downloadable resources
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <button className="p-2 border-dashed border border-gray-800 bg-gray-200 text-gray-600 rounded-full text-sm">
                      <FaCheck></FaCheck>
                    </button>
                    <span className="text-lg font-light ms-2">
                      Certificate of completion
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <button className="p-2 border-dashed border border-gray-800 bg-gray-200 text-gray-600 rounded-full text-sm">
                      <FaCheck></FaCheck>
                    </button>
                    <span className="text-lg font-light ms-2">
                      Free Trial 7 Days
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <button className="w-full py-3 bg-gray-700 hover:bg-gray-500 duration-300 text-white font-semibold rounded-md">Start Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
