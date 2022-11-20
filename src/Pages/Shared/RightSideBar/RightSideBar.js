import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  const [catagories, setCatagories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=> res.json())
        .then(data=> setCatagories(data))
    }, [])

  return (
    <div className="text-center px-4">

      <hr />
     

      <nav aria-label="Main Nav" className="flex flex-col space-y-1">

        {catagories.map((category) => (
        <Link key={category.id} className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700" to={`/catagories/${category.catagories_id}`}>
         
            {category.Category_Name}
         
        </Link>
      ))}



      </nav>
    </div>
  );
};

export default RightSideBar;

