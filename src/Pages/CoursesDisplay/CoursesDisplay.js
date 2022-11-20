import { ArrowRightCircleIcon, ArrowRightOnRectangleIcon, BookOpenIcon, CurrencyDollarIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const CoursesDisplay = ({ courses }) => {
  const {
    id,
    img,
    course_title,
    Duration,
    price,
    reviews,
    instructor_img,
    instructor_name,
    Lectures,
    students,
    Level,
    Category,
    articles,
  } = courses;

  return (
    <div className="flex justify-center">
      <Link to={ `/courses/${id}`} className="rounded-lg shadow-lg bg-white max-w-sm">
        <div  data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={img} alt="courses images" />
        </div>
        <div className="p-6">
          <h5 className="h-20 text-gray-700 text-xl font-medium mb-2">
            {course_title}
          </h5>

          <div className=" ">
            <hr className="border border-gray-700 my-2" />
            <hr className="w-10 mx-auto mt-[-11px] border-2 border-orange-400 my-2" />
          </div>

          {/* card info  */}
          <div className="flex justify-between items-center">
            <div className="flex ">
              <BookOpenIcon className="w-6 text-orange-500"></BookOpenIcon>
              <p className="mb-0 ml-2">{Lectures} <small>Lectures</small></p>
            </div>
            <div className="flex ">
              <UserGroupIcon className="w-6 text-orange-500"></UserGroupIcon>
              <p className="mb-0 ml-2">{students} <small>Students</small></p>
            </div>
            <div className="flex ">
              <CurrencyDollarIcon className="w-6 text-orange-500"></CurrencyDollarIcon>
              <p className="mb-0 ml-1">{price}</p>
            </div>
            
            


          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoursesDisplay;

let x= {
  "id": "01",
  "catagories_id": "webFront23763",
  "img": "https://eduma.thimpress.com/demo-edtech/wp-content/uploads/sites/70/2022/04/courses-18-400x300.jpg",
  "course_title": "HTML Tutorial: HTML & CSS for Beginners",
  "Duration": 8,
  "students": 234,
  "price": 34,
  "reviews": 4.9,
  "instructor_name": "Jhon Doe",
  "instructor_img": "https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g",
  "Lectures": 45,
  "Level": "Easy",
  "Category": "Front-end  Development",
  "description": "Want to learn how to create webpages, but feeling intimidated by HTML and CSS? Not sure where to start? Step-by-step HTML and CSS for Absolute Beginners is a comprehensive and friendly course designed for beginners with NO previous coding or programming experience. HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the building blocks of the web. If you've ever looked at a website, you've seen HTML and CSS in action! Whether you want to make changes to your website's template, create new webpages from scratch, or just understand what you're doing when you cut-and-paste embed codes from sites like YouTube or SlideShare — understanding HTML and CSS makes it possible.",
  "articles": 34
}