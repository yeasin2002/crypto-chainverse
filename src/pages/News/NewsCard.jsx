import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Clock } from "../../components/layout/Icon";

const NewsCard = ({
  guidislink,
  title,
  summary,
  published,
  link,

  source,
  publishedParsed,
}) => {
  // lg:grid-cols-2 grid grid-cols-1
  return (
    <div className="group md:mx-8 md:my-6 mx-2 my-4">
      <div className="dark:bg-gray-800 max-w-screen px-8 py-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="gap-x-2 flex items-center">
            <span>
              <Clock />
            </span>
            <span className="dark:text-gray-400 text-sm font-light text-gray-600">
              {published}
            </span>
          </div>
        </div>

        <div className="mt-2">
          <a
            href="#"
            className="dark:text-white font-Acme group-hover:text-gray-500 text-2xl font-bold text-gray-700 transition-all"
          >
            {title}
          </a>
          <p
            className="dark:text-gray-300 font-Oswald mt-2 text-gray-600"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            target={"_blank"}
            href={link}
            className="dark:text-blue-400 hover:underline font-Ubuntu text-blue-600"
          >
            Read more
          </a>

          <div className="flex items-center">
            {/* <img
              className="sm:block hidden object-cover w-10 h-10 mx-4 rounded-full"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            /> */}
            <a
              target={"_blank"}
              href={source.href}
              className="hover:bg-gray-500 font-Righteous px-3 py-1 text-sm font-light font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer"
            >
              {source.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
