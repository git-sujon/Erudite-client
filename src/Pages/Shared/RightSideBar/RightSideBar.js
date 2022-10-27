import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RightSideBar = () => {

    const [catagories, setCatagories] = useState([])
    
    axios.get('http://localhost:5000/catagories/')
    .then(data => setCatagories(data.data))

  
    return (
        <div className='text-center px-4'>
            <h4 className='text-4xl text-gray-700 '>All Courses</h4>
            <hr />
            {
                catagories.map(category => <p key={category.id} className='text-blue-700'><Link to={`/catagories/${category.catagories_id}`}>{category.Category_Name}</Link></p>)
            }
        </div>
    );
};

export default RightSideBar;

let x= {
    "id": "01",
    "catagories_id": "webFront23763",
    "Duration": 0,
    "students": 0,
    "Lectures": 0,
    "Category": "Front-end  Development",
    "articles": 0
}