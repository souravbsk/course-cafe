import React from 'react';

const CategoryItem = ({category}) => {
    console.log(category);
    const {title,id,icon,value} = category;
    return (
        <div className='bg-white gr hover:bg-gray-300 duration-300 p-6 shadow-md text-center space-y-3'>
            <div className='w-12 inline-flex items-center justify-center h-12 hover:bg-white bg-gray-300  text-gray-800 text-xl rounded-full'><i className={icon}></i></div>
            <div>
                <h3 className='text-lg'>{title}</h3>
                <p className='text-orange-400'>{value} Courses</p>
            </div>

        </div>
    );
};

export default CategoryItem;