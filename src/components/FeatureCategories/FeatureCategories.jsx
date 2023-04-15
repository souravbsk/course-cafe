import React from "react";
import FetchCategoryData from "../../Utilites/CategoryData";
import CategoryItem from "../CategoryItem/CategoryItem";

const FeatureCategories = () => {
    const [Categories,setCategories] = FetchCategoryData();
    console.log(Categories);
  return (
    <section className="container py-16">
      <div className="text-center max-w-full w-7/12 mx-auto space-y-3">
        <h2 className="text-3xl text-gray-700 font-bold">
          Explore Featured <span className="text-gray-600">Categories</span>
        </h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-7 gap-8">
            {
                Categories?.map(category => <CategoryItem key={category.id} category={category}></CategoryItem>)
            }
      </div>
    </section>
  );
};

export default FeatureCategories;
