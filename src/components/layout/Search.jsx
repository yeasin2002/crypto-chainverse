import React from "react";
import { SearchIcon } from "./Icon";
import { motion } from "framer-motion";

const Search = ({ setUserSearchInput, doAnimations }) => {
  return (
    <>
      <motion.div
        className="flex justify-end p-2"
        initial={{
          x: doAnimations ? 100 : 0,
          opacity: doAnimations ? 0 : 1,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
      >
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex  items-stretch w-full mb-4">
            <input
              onChange={(e) => {
                setUserSearchInput(e.target.value);
              }}
              type="search"
              className="form-control rounded-md relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Search;
