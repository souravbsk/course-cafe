import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const TabDetails = ({ course }) => {
  const [TabValue, setTabValue] = useState(0);
  const { id, authorImg, review, authorTitle, description, socialLinks } =
    course;

  return (
    <div>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li onClick={() => setTabValue(0)} className="mr-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
          >
            Overview
          </a>
        </li>
        <li onClick={() => setTabValue(1)} className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Curriculum
          </a>
        </li>
        <li onClick={() => setTabValue(2)} className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Instructor
          </a>
        </li>
        <li onClick={() => setTabValue(3)} className="mr-2">
          <a
            href="#"
            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          >
            Reviews
          </a>
        </li>
      </ul>

      <div className="bg-white p-5 rounded-md">
        <div className={TabValue === 0 ? "block" : "hidden"}>
          <h4 className="font-medium text-xl mb-3">Course Overview</h4>
          <p className=" text-gray-900 text-base font-light">{description}</p>
        </div>
        <div className={TabValue === 1 ? "block" : "hidden"}>
          <h4 className="font-medium text-xl mb-3">Curriculum</h4>
          <p className=" text-gray-900 text-base font-light">{description}</p>
        </div>
        <div className={TabValue === 2 ? "block" : "hidden"}>
          <div className="flex flex-col md:flex-row gap-3">
            <figure className="shrink-0">
              <img className="w-64 h-64 rounded-md" src={authorImg} alt="" />
            </figure>
            <div className="flex flex-col justify-between">
              <h4 className="font-medium text-2xl mb-3">{authorTitle}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quam qui, similique enim eius vero consequatur!
                Assumenda, modi incidunt. Earum pariatur ut incidunt
                voluptatibus soluta.
              </p>
              <ul className="flex mt-5 md:mt-0 items-center gap-3">
                <li className="bg-gray-300 p-2 rounded-md text-xl">
                  <a href={socialLinks[0].url}>
                    <FaFacebook></FaFacebook>
                  </a>
                </li>
                <li className="bg-gray-300 p-2 rounded-md text-xl">
                  <a href={socialLinks[1].url}>
                    <FaTwitter></FaTwitter>
                  </a>
                </li>
                <li className="bg-gray-300 p-2 rounded-md text-xl">
                  <a href={socialLinks[2].url}>
                    <FaLinkedin></FaLinkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={TabValue === 3 ? "block" : "hidden"}>
          <h4 className="font-medium text-xl mb-3">Reviews</h4>
          <div>
            <h4 className="font-semibold text-gray-700 text-7xl mb-3">
              {review}
            </h4>
            <Rating
              placeholderRating={review}
              emptySymbol={
                <FaRegStar  className="text-yellow-300"></FaRegStar>
              }
              placeholderSymbol={
                <FaStar className="text-yellow-300"></FaStar>
              }
              fullSymbol={
                <FaStar className="text-yellow-300"></FaStar>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabDetails;
