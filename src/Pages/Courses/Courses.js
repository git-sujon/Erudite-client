import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesDisplay from "../CoursesDisplay/CoursesDisplay";
import CoursesHeader from "../Shared/CoursesHeader/CoursesHeader";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";

const Courses = () => {
  const allCourses = useLoaderData();




  return (
    <>

    <div className="container  mx-auto flex flex-col-reverse lg:grid grid-cols-12 mt-12  ">
      <div className=" col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8  ">
          {allCourses.map((courses) => (
            <CoursesDisplay key={courses.id} courses={courses}></CoursesDisplay>
          ))}
        </div>
      </div>
      <div className="col-span-3  ">
        <RightSideBar></RightSideBar>
      </div>
    </div>
    
    </>
    
  );
};

export default Courses;
