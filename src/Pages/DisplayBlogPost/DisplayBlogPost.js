import React from "react";
import { Link } from "react-router-dom";

const DisplayBlogPost = ({ posts }) => {

    const {id, img, question, CATEGORY, ans_p_one } =posts
  return (
    <Link to={`/blog/${id}`}>
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <div >
        <img
          alt="Office"
          src={img}
          className="h-56 w-full object-cover"
        />
        </div>

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
            10th Oct 2022
          </time>

          <div>
            <h3 className="my-10 text-lg text-gray-900 h-12">
             {question}
            </h3>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
           {ans_p_one.slice(0,100)}
          </p>
        </div>
      </article>
    </Link>
  );
};


export default DisplayBlogPost;
