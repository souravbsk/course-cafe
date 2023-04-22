import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="5xl">
          <span className="text-8xl font-semibold">404</span> Not Found !!!
        </h2>
        <Link to='/'>
          <button
            type="button"
            className="py-2.5 mt-5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-600 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
