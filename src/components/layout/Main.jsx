import React, { createContext } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import CallToAction from "../CallToAction/CallToAction";
import BlogsDataLoad from "../../Utilites/BlogsDataLoad";

export const BlogsLoadData = createContext('blogs');
const Main = () => {
  const [blogs, setBlogs] = BlogsDataLoad();
  
  return (
    <BlogsLoadData.Provider value={[blogs, setBlogs]}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <CallToAction></CallToAction>
        <Footer></Footer>
      </div>
    </BlogsLoadData.Provider>
  );
};

export default Main;
