import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { user,logOut } = useContext(AuthContext);
  const userName = user?.displayName?.split(' ')[0]

  const handleLogOut = () => {
    logOut()
  }
  return (
    <header className="">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <div>
              <h2 className="md:text-3xl font-semibold text-slate-700">
                Course-cafe
              </h2>
            </div>
          </a>
          <div className="flex md:order-2">
            {user ? (
             <div className="flex items-center gap-4">
              <p className="hidden md:block">welcome, <span className="font-semibold">{userName}</span></p>
             <button onClick={handleLogOut} className="bg-slate-600 flex items-center gap-2 text-white font-semibold px-6 py-2 rounded-md">
             Log out
           </button>
             </div>
            ) : (
              <Link to="/login">
                <button className="bg-slate-600 text-white font-semibold px-6 py-2 rounded-md">
                  Sign in
                </button>
              </Link>
            )}
            <button
              onClick={() => setShowNav(!showNav)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex ms-3 items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto duration-300 md:order-1 ${
              showNav ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  className="text-lg px-3 py-2 hover:text-green-600 duration-150 text-slate-800"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg px-3 py-2 hover:text-green-600 duration-150 text-slate-800"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg px-3 py-2 hover:text-green-600 duration-150 text-slate-800"
                  to="/course"
                >
                  Course
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg px-3 py-2 hover:text-green-600 duration-150 text-slate-800"
                  to="/blog"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="text-lg px-3 py-2 hover:text-green-600 duration-150 text-slate-800"
                  to="/contact"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
