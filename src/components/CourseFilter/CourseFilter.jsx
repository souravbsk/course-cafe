import React from "react";
import { FaSistrix } from "react-icons/fa";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import FetchCategoryData from "../../Utilites/CategoryData";
import findDuplicateValue from "../../Utilites/findDuplicateValue";

const CourseFilter = ({
  handleFilterWithCategory,
  setSearchValue,
  courses,
  handleLevel
}) => {
  const [Categories, setCategories] = FetchCategoryData();

  // find all label in course
  const AllcourseLabels = courses.map((course) => course.courseLabel);
  // remove duplicate item
  const courseLabels = findDuplicateValue(AllcourseLabels);

  return (
    <div className="bg-gray-100 space-y-6 rounded-md p-6">
      <div className="relative">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search courses..."
          required
        />
        <FaSistrix className="text-2xl absolute top-1/2 right-6 -translate-y-1/2"></FaSistrix>
      </div>
      <div>
        <h2 className="font-semibold text-xl">Top Categories</h2>
        <form onChange={handleFilterWithCategory} className="mt-5">
          {Categories.map((category) => (
            <FilterCheckBox
              key={category.id}
              title={category.title}
              value={category.value}
              typeValue="checkbox"
              nameValue="corseCategory"
            ></FilterCheckBox>
          ))}
        </form>
      </div>
      <div>
        <h2 className="font-semibold text-xl">Skill Levels</h2>
        <form onChange={handleLevel} className="mt-5">
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="radio"
              value="all"
              name="CourseLabels"
              className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300">
             All Labels {AllcourseLabels.length}
            </label>
          </div>
          {courseLabels.map((label, i) => (
            <FilterCheckBox
              key={i}
              title={label.item}
              value={label.count}
              typeValue="radio"
              nameValue="CourseLabels"
            ></FilterCheckBox>
          ))}
        </form>
      </div>
    </div>
  );
};

export default CourseFilter;
