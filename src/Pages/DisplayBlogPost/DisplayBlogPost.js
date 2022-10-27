import React from "react";
import { Link } from "react-router-dom";

const DisplayBlogPost = ({ posts }) => {

    const {id, img, question, CATEGORY, ans_p_one } =posts
  return (
    <div>
      <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Link to={`/blog/${id}`}>
        <img
          alt="Office"
          src={img}
          class="h-56 w-full object-cover"
        />
        </Link>

        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-500">
            10th Oct 2022
          </time>

          <Link to={`/blog/${id}`} >
            <h3 class="my-10 text-lg text-gray-900 h-12">
             {question}
            </h3>
          </Link>

          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
           {ans_p_one.slice(0,100)}
          </p>
        </div>
      </article>
    </div>
  );
};


export default DisplayBlogPost;
