import React from "react";
import InstructorImgRight from "../../assets/media/lmp-1.png";
import IntructorLeft from "../IntructorLeft/IntructorLeft";

const InstructorsAvailable = () => {
  return (
    <div className="container">
      <IntructorLeft></IntructorLeft>
      <div className="flex flex-col md:flex-row pb-8 md:pb-16 items-stretch gap-8 md:gap-16">
        <div className="flex-1">
          <img className="w-full" src={InstructorImgRight} alt="" />
        </div>
        <div className="flex-1 space-y-4">
          <ul className="space-y-8">
            <li className="flex gap-5">
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
