import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesDisplay from "../CoursesDisplay/CoursesDisplay";
import CoursesHeader from "../Shared/CoursesHeader/CoursesHeader";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";

const Courses = () => {
  const allCourses = useLoaderData();
  // console.log(allCourses)
  const coursesData={ Category: "Our Courses"}


  return (
    <>
    <div>
      <CoursesHeader coursesData={coursesData}></CoursesHeader>
    </div>
    
    <div className="container  mx-auto flex flex-col-reverse lg:grid grid-cols-6 mt-12 ">
      <div className=" col-span-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8  ">
          {allCourses.map((courses) => (
            <CoursesDisplay key={courses.id} courses={courses}></CoursesDisplay>
          ))}
        </div>
      </div>
      <div className="col-span-1">
        <RightSideBar></RightSideBar>
      </div>
    </div>
    
    </>
    
  );
};

export default Courses;
