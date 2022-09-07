import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewsCard = ({ title, link, description, additionalLinks }) => {
  let IsMappable;

  if (Array.isArray(additionalLinks)) {
    IsMappable = true;
  } else {
    IsMappable = false;
  }

  return (
    <div>
      <div className="dark:bg-gray-800 hover:bg-gray-200 max-w-2xl px-8 py-4 mx-4 my-6 overflow-x-hidden transition-all bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="dark:text-gray-400 text-sm font-light text-gray-600"></span>
        </div>

        <div className="mt-2">
          <p className="dark:text-white font-Oswald hover:text-gray-600 dark:hover:text-gray-200 text-2xl font-bold text-gray-700">
            {title}
          </p>
          <p className="dark:text-gray-300 font-Acme mt-2 text-gray-600">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            target={"_blank"}
            href={link}
            className=" border-slate-700 font-Lobster bg-slate-200 hover:bg-slate-50 text-slate-600 px-4 py-2 transition-all border rounded-lg"
          >
            Read more
          </a>
        </div>
        <div className="px-2 py-4">
          {IsMappable &&
            additionalLinks.map((extraData) => {
              return (
                <div key={uuidv4()}>
                  <a
                    className="font-Flower my-4 text-lg text-blue-500"
                    href={extraData.href}
                  >
                    {extraData.text.slice(0, 30)}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
