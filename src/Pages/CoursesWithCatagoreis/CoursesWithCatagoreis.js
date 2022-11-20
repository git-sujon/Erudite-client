import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesDisplay from "../CoursesDisplay/CoursesDisplay";
import CoursesHeader from "../Shared/CoursesHeader/CoursesHeader";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";

const CoursesWithCatagoreis = () => {
  const catagoriesData = useLoaderData();

  const coursesData = { Category: catagoriesData[0].Category };

  return (
    <div>
      <div className="">
        <CoursesHeader coursesData={coursesData}></CoursesHeader>
      </div>
      <div className="container  mx-auto flex flex-col-reverse lg:grid grid-cols-12 mt-12 ">
        {/* Catagories header   */}

        <div className="col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
            {catagoriesData.map((courses) => (
              <CoursesDisplay
                key={courses.id}
                courses={courses}
              ></CoursesDisplay>
            ))}
          </div>
        </div>
        <div className="col-span-3  ">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default CoursesWithCatagoreis;

let x = {
  id: "01",
  catagories_id: "webFront23763",
  img: "https://eduma.thimpress.com/demo-edtech/wp-content/uploads/sites/70/2022/04/courses-18-400x300.jpg",
  course_title: "HTML Tutorial: HTML & CSS for Beginners",
  Duration: 8,
  students: 234,
  price: 34,
  reviews: 4.9,
  instructor_name: "Jhon Doe",
  instructor_img:
    "https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g",
  Lectures: 45,
  Level: "Easy",
  Category: "Front-end  Development",
  description:
    "Want to learn how to create webpages, but feeling intimidated by HTML and CSS? Not sure where to start? Step-by-step HTML and CSS for Absolute Beginners is a comprehensive and friendly course designed for beginners with NO previous coding or programming experience. HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the building blocks of the web. If you've ever looked at a website, you've seen HTML and CSS in action! Whether you want to make changes to your website's template, create new webpages from scratch, or just understand what you're doing when you cut-and-paste embed codes from sites like YouTube or SlideShare — understanding HTML and CSS makes it possible.",
  articles: 34,
};
