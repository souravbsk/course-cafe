import React from 'react';
import HomeHeroBanner from '../HomeHeroBanner/HomeHeroBanner';
import Sponserd from '../Sponserd/Sponserd';
import InstructorsAvailable from '../InstructorsAvailable/InstructorsAvailable';
import FeatureCategories from '../FeatureCategories/FeatureCategories';

const Home = () => {
    return (
        <div>
            <HomeHeroBanner></HomeHeroBanner>
            <Sponserd></Sponserd>
            <FeatureCategories></FeatureCategories>
            <InstructorsAvailable></InstructorsAvailable>
        </div>
    );
};

export default Home;