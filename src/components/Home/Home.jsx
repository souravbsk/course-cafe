import React from 'react';
import HomeHeroBanner from '../HomeHeroBanner/HomeHeroBanner';
import Sponserd from '../Sponserd/Sponserd';
import InstructorsAvailable from '../InstructorsAvailable/InstructorsAvailable';
import FeatureCategories from '../FeatureCategories/FeatureCategories';
import Reviews from '../Reviews/Reviews';
import Courses from '../Courses/Courses';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <HomeHeroBanner></HomeHeroBanner>
            <Sponserd></Sponserd>
            <Courses courses={courses}></Courses>
            <FeatureCategories></FeatureCategories>
            <InstructorsAvailable></InstructorsAvailable>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;