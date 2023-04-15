import React from "react";
import { FcSearch } from "react-icons/fc";

const HomeHeroBanner = () => {
  return (
    <div className="bg-banner">
      <div className="max-w-full w-8/12 px-4 flex justify-center items-center h-[80vh] mx-auto">
        <div className="text-center space-y-6">
          <span className="px-4 text-sm rounded-md py-1 bg-slate-600 text-white">
            LISTEN TO OUR NEW ANTHEM
          </span>
          <h1 className="text-5xl font-semibold text-slate-700">
            Crack UPSC CSE - GS with World's largest learning platform
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <form className="flex items-center justify-center">
            <div className="w-2/5 border rounded-md relative">
              <input className="border-none w-full" type="text" />
              <FcSearch className="absolute top-4 left-3"></FcSearch>
            </div>
            <div className="shrink">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-r-md text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroBanner;
