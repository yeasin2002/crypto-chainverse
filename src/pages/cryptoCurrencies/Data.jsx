import React from "react";
import { motion } from "framer-motion";

const Data = (props) => {
  const {
    name,
    iconImg,
    color,
    symbol,
    price,
    marketCap,
    rank,
    coinrankingUrl,
    change,
    Volume,
    sparkline,
    value,
  } = props;

  return (
    <>
      <motion.div
        initial={{
          x: rank % 2 == 0 ? 100 : -100,
          y: rank % 2 == 0 ? 100 : -100,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        style={{
          boxShadow: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px ${color}`,
        }}
        className={`max-w-md px-8 mx-2 py-4  mt-16 group  rounded-lg bg-gray-100  dark:bg-gray-800`}
      >
        <div className="flex justify-center -mt-16 md:justify-end ">
          <img
            className="object-cover  bg-white w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src={iconImg}
          />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-slate-600 dark:text-white md:mt-0 md:text-3xl">
          {name}
        </h2>

        <div className="my-4">
          <div>
            <p>
              <span className="cryptoKey">Rank</span> :
              <span className="cryptoValueDetails">{rank}</span>
            </p>
            <p>
              <span className="cryptoKey">Price</span>:
              <span className="cryptoValueDetails">{price}</span>
            </p>
            <p>
              <span className="cryptoKey">Market Capital</span>:
              <span className="cryptoValueDetails  ">{marketCap}</span>
            </p>
            <p>
              <span className="cryptoKey">Change</span>:
              <span className="cryptoValueDetails">{change}</span>
            </p>
            <p>
              <span className="cryptoKey">Volume</span>:
              <span className="cryptoValueDetails">{Volume}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <p
            className="text-xl font-medium  dark:text-blue-300 "
            style={{ color: color }}
          >
            {symbol}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Data;
