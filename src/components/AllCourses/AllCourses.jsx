import React, { useEffect, useState } from "react";
import CourseFilter from "../CourseFilter/CourseFilter";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import {
  FaBars,
  FaRegCaretSquareDown,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";

const AllCourses = () => {
  const courses = useLoaderData();
  const [showFilterSide, setShowFilterSide] = useState(false);
  const [showCourses, setShowCourses] = useState([]);
  const [displayCourse, setDisplayCourse] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortingValue, setSortingValue] = useState("");

  useEffect(() => {
    const searchFilter = courses.filter((course) =>
      course.courseTitle.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setDisplayCourse(searchFilter);
  }, [searchValue]);

  useEffect(() => {
    if (showCourses.length === 0) {
      setDisplayCourse(courses);
    } else {
      setDisplayCourse([...showCourses]);
    }
  }, [showCourses]);

  //handle filter with category
  const handleFilterWithCategory = (e) => {
    const checkedMark = e.target.checked;
    const categoryName = e.target.value;
    const checkedCourses = courses.filter(
      (course) => course.courseCategory.toLowerCase() === categoryName
    );

    if (checkedMark) {
      if (checkedCourses.length === 0) {
        setShowCourses([...showCourses]);
      } else {
        setShowCourses([...showCourses, ...checkedCourses]);
      }
    } else {
      const unCheckedCourses = showCourses.filter(
        (course) => course.courseCategory.toLowerCase() !== categoryName
      );
      if (unCheckedCourses.length !== 0) {
        setShowCourses([...unCheckedCourses]);
      } else {
        setShowCourses([...unCheckedCourses]);
      }
    }
  };

  // labelFilterRing
  const handleLevel = (e) => {
    const checked = e.target.checked;
    const targetValue = e.target.value;
    if (checked) {
      if (targetValue === "all") {
        setDisplayCourse(courses);
      } else {
        const labelFilter = courses.filter(
          (course) =>
            course.courseLabel.toLowerCase() === targetValue.toLowerCase()
        );
        setDisplayCourse(labelFilter);
      }
    }
  };

  //sorting

  const coursesArray = [...displayCourse].sort((a, b) => {
    if (sortingValue === "new") {
      return a.courseWeek - b.courseWeek;
    } else if (sortingValue === "old") {
      return b.courseWeek - a.courseWeek;
    } else {
      return 0;
    }
  });

  return (
    <div className="pt-20">
      <div className="py-8 md:py-16">
        <div className="container gap-7 grid md:grid-cols-3">
          <div
            className={`absolute md:static duration-300 h ${
              showFilterSide ? "left-0" : "-left-64"
            }`}
          >
            <CourseFilter
              handleFilterWithCategory={handleFilterWithCategory}
              setSearchValue={setSearchValue}
              courses={courses}
              handleLevel={handleLevel}
            ></CourseFilter>
          </div>

          <div className="col-span-2">
            <button
              onClick={() => setShowFilterSide(!showFilterSide)}
              className=" bg-gray-400 px-4 py-4 rounded-lg text-4xl md:hidden fixed right-0 text-gray-600"
            >
              {showFilterSide ? (
                <FaToggleOn></FaToggleOn>
              ) : (
                <FaToggleOff></FaToggleOff>
              )}
            </button>
            <div className="bg-gray-100 py-3 px-3 flex flex-col md:flex-row md:items-center justify-between mb-8 rounded-md">
              <h2 className="text-xl font-semibold">
                {coursesArray?.length} Courses Found
              </h2>
              <div>
                <div className="flex items-center gap-2">
                  <label
                    htmlhtmlFor="large"
                    className="block text-base font-normal text-gray-600 dark:text-white"
                  >
                    Short By:
                  </label>
                  <select
                    onChange={(e) => setSortingValue(e.target.value)}
                    id="large"
                    className="block w- px-3 py-2 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                  >
                    <option value="default">Default By</option>
                    <option value="new">Newest</option>
                    <option value="old">Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {coursesArray.map((course) => (
                <Course key={course.id} course={course}></Course>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
