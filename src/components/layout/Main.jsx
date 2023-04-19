import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CallToAction from '../CallToAction/CallToAction';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <CallToAction></CallToAction>
            <Footer></Footer>
        </div>
    );
};

export default Main;