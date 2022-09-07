import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Data = (props) => {
  const {
    id,
    HourVolume,
    btcPrice,
    change,
    coinrankingUrl,
    color,
    iconImg,
    listedAt,
    lowVolume,
    marketCap,
    name,
    price,
    rank,
    symbol,
    tier,

    sparkline,
    value,
  } = props;

  return (
    <>
      <motion.div
        // initial={{
        //   x: rank % 2 == 0 ? 100 : -100,
        // }}
        // animate={{
        //   x: 0,
        // }}
        style={{
          boxShadow: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px ${color}`,
        }}
        className={`max-w-md px-6  md:px-8 mx-2 py-4  mt-16 group  rounded-lg bg-gray-100  dark:bg-gray-800`}
      >
        <div className="md:justify-end flex justify-center -mt-16">
          <img
            className="dark:border-blue-400 object-cover w-20 h-20 bg-white border-2 border-blue-500 rounded-full"
            alt="Testimonial avatar"
            src={iconImg}
          />
        </div>

        <h2 className="text-slate-600 font-Russo dark:text-white md:mt-0 md:text-3xl mt-2 text-2xl font-light font-semibold">
          {name}
        </h2>

        <div className="">
          <div>
            <p>
              <span className="cryptoKey">Rank</span> :
              <span className="cryptoValueDetails">{rank}</span>
            </p>
            <p>
              <span className="cryptoKey">Price</span>:
              <span className="cryptoValueDetails">${price} </span>
            </p>
            <p className="flex flex-wrap">
              <span className="cryptoKey">Market Capital :</span>
              <span className="cryptoValueDetails "> {marketCap}</span>
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <p
            className=" font-Permanent text-xl font-medium"
            style={{ color: color }}
          >
            {symbol}
          </p>
        </div>
        <div className=" my-4">
          <Link
            state={{
              id,
              HourVolume,
              btcPrice,
              change,
              coinrankingUrl,
              color,
              iconImg,
              listedAt,
              lowVolume,
              marketCap,
              name,
              price,
              rank,
              symbol,
              tier,
              sparkline,
              value,
            }}
            to={`/cryptodetails/${name}`}
            className="bg-slate-700 font-Ubuntu hover:bg-slate-500 focus:outline-none focus:ring focus:ring-gray-900 focus:ring-opacity-80 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md"
          >
            Learn more
          </Link>
        </div>
      </motion.div>
    </>
  );
};
export default Data;
