import React from "react";
import { motion } from "framer-motion";

const Data = ({ name, iconImg, value, color }) => {
  return (
    <>
      <motion.div
        style={{
          boxShadow: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px ${color}/0.5`,
        }}
        className={`max-w-md px-8 py-4 mx-auto mt-16  rounded-lg  dark:bg-gray-800`}
      >
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover  bg-white w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src={iconImg}
          />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          Design Tools
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>

        <div className="flex justify-end mt-4">
          <p
            href="#"
            className="text-xl font-medium text-blue-500 dark:text-blue-300"
          >
            {name}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Data;
