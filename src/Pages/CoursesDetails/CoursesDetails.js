import {
  BookOpenIcon,
  FilmIcon,
  NewspaperIcon,
  PencilIcon,
  PuzzlePieceIcon,
  QueueListIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesHeader from "../Shared/CoursesHeader/CoursesHeader";
import "./CoursesDetails.css";

const CoursesDetails = () => {
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

  const button='Download PDF'

  return (
    <div>
      <CoursesHeader coursesData= {coursesData} button={button}></CoursesHeader>

      <div className="container px-2 mx-auto">
        {/* courses Details  */}
        <div className=" mt-5">
          <div className="grid grid-cols-7 gap-4">
            <div className="border p-3 col-span-7 lg:col-span-5">
              <div>
                <h2 className="text-2xl font-semibold text-gray-700">
                  {course_title}
                </h2>
              </div>
              {/* header title info  */}
              <div className="my-5 flex  items-center lg:justify-between ">
                <div className="flex items-center justify-between">
                  {/* author Details  */}
                  <div className="flex items-center mr-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={instructor_img}
                      alt=""
                    />
                    <p className="ml-2 text-xl font-semibold">
                      {instructor_name}
                    </p>
                  </div>

                  {/* catagories  */}
                  <div>
                    <p className="mb-0 text-gray-400">Catagories</p>
                    <p className="mb-0 text-gray-700">{Category}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {/* review  */}
                  <div className="mr-10">
                    <p className="mb-0 text-gray-400">Reviews</p>
                    <p className="mb-0 text-gray-700">{reviews}</p>
                  </div>

                  {/* price  */}
                  <div className="flex items-center">
                    <p className="text-5xl text-orange-500 font-bold mb-0 mr-3">
                      ${price}
                    </p>

                    <div className="hidden md:block">
                      <Link
                        to={`/checkout/${id}`}
                        className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        href="/download"
                      >
                        <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                          Get Premium Access
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* cover image  */}
              <div>
                <img
                  className="CoursesDetails-cover-img"
                  src={cover_img}
                  alt=""
                />
              </div>

              {/* courses Description  */}

              <div className="my-10">
                <h3 className="text-3xl font-semibold text-gray-600 my-3">
                  About this Course
                </h3>
                <p>{description}</p>
              </div>

              {/* CERTIFICATION  */}
              <div>
                <h3 className="text-3xl font-semibold text-gray-600 my-3">
                  Certification
                </h3>
                <p>
                  When you complete a paid Erudite course, you will receive a
                  certificate of completion, which you can share with your
                  friends, relatives, co-workers and potential employers! This
                  article explains how you can download your certificate, after
                  completing your course on a browser.{" "}
                </p>
              </div>
              {/* Checkout button */}
              <div className="text-center my-12">
                <Link
                to={`/checkout/${id}`}
                  className="inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  href="/download"
                >
                  <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
                    Get Premium Access
                  </span>
                </Link>
              </div>
            </div>

            {/* catagories Side Bar */}
            <div className="col-span-7 lg:col-span-2">
              <div className="border p-3">
                <h3 className="text-center text-xl text-orange-500 font-semibold my-4 mb-12">
                  COURSE FEATURES
                </h3>
                <div>
                  {/* single feature  */}
                  <div className="flex justify-between border-b p-5">
                    <div className="flex">
                      <BookOpenIcon className="w-6 text-orange-500"></BookOpenIcon>
                      <p className="mb-0 ml-2">Lectures</p>
                    </div>

                    <p className="mb-0">{Lectures}</p>
                  </div>

                  {/* single feature  */}
                  <div className="flex justify-between border-b p-5 ">
                    <div className="flex">
                      <UserGroupIcon className="w-6 text-orange-500"></UserGroupIcon>
                      <p className="mb-0 ml-2">Students</p>
                    </div>

                    <p className="mb-0">{students}</p>
                  </div>

                  {/* single feature  */}
                  <div className="flex justify-between border-b p-5 ">
                    <div className="flex">
                      <NewspaperIcon className="w-6 text-orange-500"></NewspaperIcon>
                      <p className="mb-0 ml-2">Articles</p>
                    </div>

                    <p className="mb-0">{articles}</p>
                  </div>

                  {/* single feature  */}
                  <div className="flex justify-between border-b p-5 ">
                    <div className="flex">
                      <FilmIcon className="w-6 text-orange-500"></FilmIcon>
                      <p className="mb-0 ml-2">Durations/Hours</p>
                    </div>

                    <p className="mb-0">{Duration}</p>
                  </div>

                  {/* single feature  */}
                  <div className="flex justify-between border-b p-5 ">
                    <div className="flex">
                      <PuzzlePieceIcon className="w-6 text-orange-500"></PuzzlePieceIcon>
                      <p className="mb-0 ml-2">Level</p>
                    </div>

                    <p className="mb-0">{Level}</p>
                  </div>

                  {/* single feature  */}
                  <div className="flex justify-between border-b p-5 ">
                    <div className="flex">
                      <QueueListIcon className="w-6 text-orange-500"></QueueListIcon>
                      <p className="mb-0 ml-2">Quiz</p>
                    </div>

                    <p className="mb-0">{quiz}</p>
                  </div>

                  {/* single feature  */}
                  <div className="flex justify-between border-b p-5 ">
                    <div className="flex">
                      <PencilIcon className="w-6 text-orange-500"></PencilIcon>
                      <p className="mb-0 ml-2">Assignment</p>
                    </div>

                    <p className="mb-0">{assignment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
