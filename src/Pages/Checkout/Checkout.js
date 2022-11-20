import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const coursesData = useLoaderData();
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
    cover_img,
    description,
    quiz,
    assignment,
  } = coursesData;

  return (
    <div className="container my-32 px-8 mx-auto">
      <Link href="#" className="block">
        <div className="flex justify-center">
          <strong className="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
            New
          </strong>
        </div>

        <img
          alt="Trainer"
          src={img}
          className="-mt-3 h-[350px] w-50 object-cover sm:h-[450px]"
        />

        <h3 className="mt-4 text-5xl text-gray-700">{course_title}</h3>

        <div className="mt-4 flex items-center justify-between font-medium">
          <p className="text-5xl text-orange-500 font-bold">${price}</p>
        </div>
      </Link>
      {/* <Link
      
        className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 my-8"
        href="/download"
      >
        <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
          Payment 
        </span>
      </Link> */}
    </div>
  );
};

export default Checkout;
