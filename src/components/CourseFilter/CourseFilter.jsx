import React from "react";
import { FaSistrix } from "react-icons/fa";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";
import FetchCategoryData from "../../Utilites/CategoryData";

const CourseFilter = ({handleFilterWithCategory}) => {
    const [Categories,setCategories] = FetchCategoryData();
  return (
    <div className="bg-gray-100 space-y-6 rounded-md p-6">
      <div className="relative">
        <input
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
        <form className="mt-5">
            {
                Categories.map(category => <FilterCheckBox key={category.id} handleFilterWithCategory={handleFilterWithCategory} category={category}></FilterCheckBox>)
            }
        </form>
        
      </div>
    </div>
  );
};

export default CourseFilter;
