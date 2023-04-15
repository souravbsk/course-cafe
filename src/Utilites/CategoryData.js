import { useEffect, useState } from "react";

const FetchCategoryData =  () => {
    const [Categories,setCategories] = useState([]);
useEffect(() => {
    fetch("/featureCategories.json")
    .then(res => res.json())
    .then(data => setCategories(data))

},[])
return [Categories,setCategories];
}

export default FetchCategoryData;