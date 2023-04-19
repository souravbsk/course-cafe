import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-gray-400">
      <div className="container flex justify-between items-center py-10">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Do You Have Questions ?
          </h3>
          <p className="text-white">
            We’ll help you to grow your career and growth
          </p>
        </div>
        <div>
          <button
            type="button"
            className="text-gray-800 border-2 border-gray-600 bg-white hover:text-white duration-300 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
