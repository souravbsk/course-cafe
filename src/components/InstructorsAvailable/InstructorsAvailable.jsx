import React from "react";
import InstructorImgLeft from "../../assets/media/lmp-2.png";
import InstructorImgRight from "../../assets/media/lmp-1.png";

const InstructorsAvailable = () => {
  return (
    <div className="container">
      <div className="flex py-16 items-stretch gap-16">
        <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-semibold text-slate-800">
            We Have The Best Instructors Available in The City
          </h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique
          </p>
          <ul className="max-w-md space-y-3 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center text-base font-semibold text-slate-700">
              <svg
                className="w-5 h-5 mr-1.5 text-gray-500 dark:text-gray-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Full Lifetime Access
            </li>
            <li className="flex items-center  text-base font-semibold text-slate-700">
              <svg
                className="w-5 h-5 mr-1.5 text-gray-500 dark:text-gray-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              20+ Downloadable Resources
            </li>
            <li className="flex items-center  text-base font-semibold text-slate-700">
              <svg
                className="w-5 h-5 mr-1.5 text-gray-500 dark:text-gray-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Certificate Of Completion
            </li>
            <li className="flex items-center  text-base font-semibold text-slate-700">
              <svg
                className="w-5 h-5 mr-1.5 text-gray-500 dark:text-gray-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Free Trial 7 Days
            </li>
          </ul>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-transparent hover:text-gray-800 border duration-300 border-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Enrolled Today
          </button>
        </div>
        <div className="flex-1">
          <img className="w-full" src={InstructorImgLeft} alt="" />
        </div>
      </div>
      <div className="flex items-stretch gap-16">
        <div className="flex-1">
          <img className="w-full" src={InstructorImgRight} alt="" />
        </div>
        <div className="flex-1 space-y-4">
          <ul className="space-y-8">
            <li className="flex  gap-5">
              <span className="bg-gray-800 shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">1</span>
              <div>
                <h4 className="text-xl mb-2 font-semibold text-gray-800 ">Create account</h4>
                <p className="text-gray-600 text-sm">
                  Oluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa.
                </p>
              </div>
            </li>
            <li className="flex  gap-5">
              <span className="bg-gray-800 shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">2</span>
              <div>
                <h4 className="text-xl mb-2 font-semibold text-gray-800 ">Create account</h4>
                <p className="text-gray-600 text-sm">
                  Oluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa.
                </p>
              </div>
            </li>
            <li className="flex  gap-5">
              <span className="bg-gray-800 shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">3</span>
              <div>
                <h4 className="text-xl mb-2 font-semibold text-gray-800 ">Create account</h4>
                <p className="text-gray-600 text-sm">
                  Oluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa.
                </p>
              </div>
            </li>
            <li className="flex  gap-5">
              <span className="bg-gray-800 shrink-0 text-xl text-white rounded-full inline-block text-center w-10 h-10 py-1 px-1">4</span>
              <div>
                <h4 className="text-xl mb-2 font-semibold text-gray-800 ">Create account</h4>
                <p className="text-gray-600 text-sm">
                  Oluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstructorsAvailable;
