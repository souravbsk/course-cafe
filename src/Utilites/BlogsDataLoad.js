import { data } from "autoprefixer";
import { useEffect, useState } from "react";


const BlogsDataLoad = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch("/blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
return [blogs,setBlogs]
};

export default BlogsDataLoad;