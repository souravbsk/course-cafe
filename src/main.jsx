import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/layout/Main'
import Home from './components/Home/Home'
import About from './components/About/About'
import AllCourses from './components/AllCourses/AllCourses'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch("/course.json")
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/course",
        element:<AllCourses></AllCourses>,
        loader:() => fetch("/course.json")
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
