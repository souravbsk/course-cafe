import React from "react";

const TabDetails = ({course}) => {
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
    <div>
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li class="mr-2">
          <a
            href="#"
            aria-current="page"
            class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          >
            Overview
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Curriculum
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Instructor
          </a>
        </li>
        <li class="mr-2">
          <a
            href="#"
            class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Reviews
          </a>
        </li>
      </ul>



      <div className="bg-white p-5 rounded-md">
            <h4 className="font-medium text-xl mb-3">Course Overview</h4>
            <p className=" text-gray-900 text-base font-light">{description}</p>
          </div>

    </div>
  );
};

export default TabDetails;
