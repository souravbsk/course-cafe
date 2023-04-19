import React from "react";

const FilterCheckBox = ({ category,handleFilterWithCategory }) => {
  const {title,value,id} =category;
  return (
    <div className="flex items-center mb-4">
      <input
      onChange={handleFilterWithCategory}
        id="default-checkbox"
        type="checkbox"
        value={title.toLowerCase()}
        className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
      >
        {title}  {value}
      </label>
    </div>
  );
};

export default FilterCheckBox;
