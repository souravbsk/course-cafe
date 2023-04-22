import React, { createContext } from "react";
import Header from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import CallToAction from "../CallToAction/CallToAction";
import BlogsDataLoad from "../../Utilites/BlogsDataLoad";
import Loader from "../Loader/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const BlogsLoadData = createContext('blogs');
const Main = () => {
  const [blogs, setBlogs] = BlogsDataLoad();
  const navigation = useNavigation();
  return (
    <BlogsLoadData.Provider value={[blogs, setBlogs]}>
      <div>
        <Header></Header>
        {
          navigation.state === "loading" && <Loader></Loader>
        }
        <Outlet></Outlet>
        <CallToAction></CallToAction>
        <ToastContainer />
        <Footer></Footer>

      </div>
    </BlogsLoadData.Provider>
  );
};

export default Main;
