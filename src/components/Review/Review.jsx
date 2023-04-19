import React from 'react';
import { FaStar } from "react-icons/fa";

const Review = ({review}) => {
    const {id,userTitle,reviewCount,description,img,} = review;
    return (
        <div className='border space-y-2 hover:shadow rounded-md  p-8'>
            <div className='flex items-center gap-3'>
            <figure><img className='w-16 h-16 object-cover rounded-full object-top' src={img} alt="" /></figure>
            <div>
                <h4 className='text-lg font-semibold'>{userTitle}</h4>
                <p className='text-sm text-gray-500'>Linkedin Leader</p>
                <p className='bg-yellow-400 items-center gap-1 text-sm text-white px-2 ml-1 rounded inline-flex'><FaStar></FaStar> {reviewCount}</p>
            </div>
            </div>
            <p className='text-sm font-light'>{description.length > 100 ? description.slice(0,100) : description}</p>
        </div>
    );
};

export default Review;