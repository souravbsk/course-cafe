import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() => {
        fetch('/review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <div className="container py-16">
      <div className="text-center max-w-full w-7/12 mx-auto space-y-3">
        <h2 className="text-3xl text-gray-700 font-bold">
        Our Students <span className="text-gray-600">Reviews</span>
        </h2>
        <p className="text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-8 gap-8
      ">
      {
        reviews?.map(review => <Review review={review} key={review.id}></Review>)
      }
      </div>
    </div>
  );
};

export default Reviews;
