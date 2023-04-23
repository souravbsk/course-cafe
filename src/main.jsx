import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/layout/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AllCourses from "./components/AllCourses/AllCourses";
import Blogs from "./components/Blogs/Blogs";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import courseDetailsLoad from "./Utilites/courseDetailsLoad";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Loader from "./components/Loader/Loader";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ContactUs from "./components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/course.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/course",
        element: <AllCourses></AllCourses>,
        loader: () => fetch("/course.json"),
      },
      {
        path: "/course/:id",
        element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
        loader: courseDetailsLoad,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/loader",
        element: <NotFound></NotFound>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element: <Register></Register>
      },
      {
        path:"/contact",
        element:<ContactUs></ContactUs>
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
