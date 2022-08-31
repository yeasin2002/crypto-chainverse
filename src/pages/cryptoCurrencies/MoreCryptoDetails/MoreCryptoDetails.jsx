import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Cash,
  HandleDollar,
  BitcoinLogo,
  Ranking,
  Time,
  Market,
} from "../../../components/layout/Icon";

const MoreCryptoDetails = () => {
  const location = useLocation();
  const {
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
  } = location.state;
  // console.log(location.state);
  const statisticsData = [
    {
      name: "price to USD",
      status: price + " USD",
      icon: <HandleDollar />,
    },
    {
      name: "Price to BTC",
      status: btcPrice + "BTC",
      icon: <BitcoinLogo />,
    },
    {
      name: "Rank",
      status: "#" + rank,
      icon: <Ranking />,
    },
    {
      name: "24h volume",
      status: +HourVolume,
      icon: <Time />,
    },
    {
      name: "Market cap",
      status: +marketCap,
      icon: <Market />,
    },
  ];

  return (
    <div>
      <div>
        <div className="flex   justify-between items-center my-4 px-4   ">
          <div className="flex  flex-wrap items-center">
            <img className="w-10 mx-2" src={iconImg} alt="" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold">{name} </h1>
              <h3>
                <span className="text-base md:text-lg font-normal">
                  {symbol}
                </span>
                <span className="px-1 ml-2  sm:backdrop:ml-2 text-slate-600   border border-slate-700">
                  #{rank}
                </span>
              </h3>
            </div>
          </div>
          <div>
            <p>
              $
              <span className="text-base md:text-xl font-semibold">
                {price}
              </span>
            </p>
          </div>
        </div>
        <div className="mx-2">
          {/*statistics  */}
          <h3 className="text-2xl font-bold text-gray-700">Value statistics</h3>
          <p className="text-base my-2 md:text-lg  text-gray-500">
            An overview showing the statistics of Aave, such as the base and
            quote currency, the rank, and trading volume.
          </p>
        </div>
        <div>
          {statisticsData.map((data, index) => {
            return (
              <div
                className="flex justify-between flex-wrap  my-2 hover:bg-gray-100  border-b py-3 px-4 border-blue-400/40"
                key={index}
              >
                <div className="flex  flex-wrap gap-x-2">
                  <span>{data.icon}</span>
                  <span>{data.name}</span>
                </div>
                <div>{data.status}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreCryptoDetails;
