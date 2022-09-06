import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HandleDollar,
  BitcoinLogo,
  Ranking,
  Time,
  Market,
} from "../../../components/layout/Icon";
import useFetch from "../../../hooks/useFetch";
import Calculator from "./Calculator";

const MoreCryptoDetails = () => {
  const location = useLocation();
  const {
    uuid,
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
    // value,
  } = location.state;

  const statisticsData = [
    {
      name: "price to USD",
      status: price + " USD",
      icon: <HandleDollar />,
    },
    {
      name: "Price to BTC",
      status: btcPrice + " BTC",
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
      name: "Market Capital",
      status: +marketCap,
      icon: <Market />,
    },
  ];
  const ChangeTitle = () => (document.title = name);
  useEffect(() => {
    ChangeTitle();
    return ChangeTitle;
  }, []);

  return (
    <div>
      <div>
        <div className=" flex items-center justify-between px-4 my-4">
          <div className="flex flex-wrap items-center">
            <img className="w-10 mx-2" src={iconImg} alt="" />
            <div>
              <h1 className="md:text-2xl text-xl font-bold">{name} </h1>
              <h3>
                <span className="md:text-lg text-base font-normal">
                  {symbol}
                </span>
                <span className="sm:backdrop:ml-2 text-slate-600 border-slate-700 px-1 ml-2 border">
                  #{rank}
                </span>
              </h3>
            </div>
          </div>
          <div>
            <p>
              $
              <span className="md:text-xl text-base font-semibold">
                {price}
              </span>
            </p>
          </div>
        </div>
        <div className="mx-2">
          {/*statistics  */}
          <h3 className="text-2xl font-bold text-gray-700">Value statistics</h3>
          <p className="md:text-lg my-2 text-base text-gray-500">
            An overview showing the statistics of{" "}
            <span className="text-lg font-semibold">{name}</span> , such as the
            base and quote currency, the rank, and trading volume.
          </p>
        </div>
        <div>
          {statisticsData.map((data, index) => {
            return (
              <div
                className="hover:bg-gray-100 border-blue-400/40 flex flex-wrap justify-between px-4 py-3 my-2 border-b"
                key={index}
              >
                <div className="gap-x-2 flex flex-wrap">
                  <span>{data.icon}</span>
                  <span>{data.name}</span>
                </div>
                <div>{data.status}</div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="md:text-xl md:font-bold px-2 py-4 text-lg font-semibold">
            More In
            <a
              href={coinrankingUrl}
              target="_blank"
              className="mx-2 text-blue-800"
            >
              Coin Rank
            </a>
          </p>
        </div>
      </div>
      <hr />
      {/* <Calculator /> */}
    </div>
  );
};
export default MoreCryptoDetails;
