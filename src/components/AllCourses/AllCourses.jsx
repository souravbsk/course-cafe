import React, { useEffect, useState } from "react";
import CourseFilter from "../CourseFilter/CourseFilter";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const AllCourses = () => {
  const courses = useLoaderData();
  const [showCategory, setShowCategory] = useState([]);
  const [showCourse, setCourse] = useState(courses);
  //   let showCourse;
  useEffect(() => {
    if (showCategory.length !== 0) {
      setCourse(showCategory);
    } else {
      setCourse(courses);
    }
  }, [showCategory]);
  const handleFilterWithCategory = (e) => {
    const categoryName = e.target.value;
    if (e.target.checked) {
      const checkedCategory = courses.filter(
        (course) => course.courseCategory.toLowerCase() === categoryName
      );
      setShowCategory([...showCategory, ...checkedCategory]);
    } else {
      const restCategory = showCategory.filter(
        (courses) => courses.courseCategory.toLowerCase() !== categoryName
      );
      setShowCategory([...restCategory]);
    }
  };
  return (
    <div className="pt-36">
      <div className="container gap-7 grid grid-cols-3">
        <div>
          <CourseFilter
            handleFilterWithCategory={handleFilterWithCategory}
          ></CourseFilter>
        </div>
        <div className="grid col-span-2 md:grid-cols-2 gap-8">
          {showCourse.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
