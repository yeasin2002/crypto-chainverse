import React from "react";

const NewsCard = ({ ampUrl, description, contentUrl, datePublished, name }) => {
  return (
    <div className="md:grid ">
      <div className="flex justify-center mx-2 my-4">
        <div className="flex flex-col  md:max-w-xl rounded-lg bg-slate-900 shadow-lg">
          <img
            className=" w-10/12 mx-auto  mt-2 rounded-t-md h-[15rem] rounded-b-lg md:rounded-none md:rounded-l-lg"
            src={contentUrl}
            alt="images"
          />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-200 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-300 text-base mb-4">{description}</p>
            <p className="text-gray-300 text-xs">{datePublished} </p>
            <a
              target="_blank"
              href={ampUrl}
              className="text-gray-200 m-2  border border-teal-500 w-28 px-1 py-2 rounded-md text-center"
            >
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
