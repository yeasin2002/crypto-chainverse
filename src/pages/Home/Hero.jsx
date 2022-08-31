import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

import LoaderImg from "../../assets/loader/Intersection.gif";
import Loading from "../../components/layout/Loading";
import BannerImg from "../../assets/images/bitcoin-cloud-01.png";
import DataBox from "../../components/util/DataBox";
import {
  Info,
  Shop,
  Money,
  Speed,
  Chart,
  Cash,
  Spinier,
} from "../../components/layout/Icon";

const Hero = () => {
  const [StatsValue, setStatsValue] = useState("");
  const { DataResult, IsLoading, IsError } = useFetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"
  );

  return (
    <>
      <section className="bg-slate-900  ">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-300 dark:text-white lg:text-3xl">
                Get Real Time Information About
                <span className="text-blue-600 dark:text-blue-400 mx-2">
                  Cryptocurrency
                </span>
              </h2>

              <p className="mt-2 text-sm text-gray-400 dark:text-gray-400 lg:text-base">
                A digital currency in which transactions are verified and
                records maintained by a decentralized system using cryptography,
                rather than by a centralized authority:
              </p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <Link
                  to="/crypto"
                  href="#"
                  className="block px-3 border-2  border-slate-800 py-2 text-sm font-semibold text-center text-slate-800 transition-colors duration-200 transform bg-gray-200 rounded-md hover:text-slate-100  hover:bg-slate-800 hover:border-slate-200"
                >
                  See Crypto Currencies
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover ">
              <img
                className="w-3/5 sm:w-[42%] md:w-[48%] lg:w-11/12 h-11/12 m-auto bg-slate-900"
                src={BannerImg}
                alt="BannerImg"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center">
          {
            <>
              {/*  */}
              <DataBox
                title="Total Crypto"
                iconValue={<Info />}
                dataValue={
                  DataResult.length === 0 ? (
                    <div className="animate-spin w-5 h-5">
                      <Spinier />
                    </div>
                  ) : (
                    DataResult.data.stats.total
                  )
                }
                colorStyle=" border-teal-600"
              />

              <DataBox
                title="Total24h Volume"
                iconValue={<Shop />}
                dataValue={
                  DataResult.length === 0 ? (
                    <div className="animate-spin w-5 h-5">
                      <Spinier />
                    </div>
                  ) : (
                    DataResult.data.stats.total24hVolume
                  )
                }
                colorStyle=" border-teal-600"
              />
              <DataBox
                title="Total Coins"
                iconValue={<Money />}
                dataValue={
                  DataResult.length === 0 ? (
                    <div className="animate-spin w-5 h-5">
                      <Spinier />
                    </div>
                  ) : (
                    DataResult.data.stats.totalCoins
                  )
                }
                colorStyle=" border-teal-600"
              />
              <DataBox
                title="Total Exchanges"
                iconValue={<Speed />}
                dataValue={
                  DataResult.length === 0 ? (
                    <div className="animate-spin w-5 h-5">
                      <Spinier />
                    </div>
                  ) : (
                    DataResult.data.stats.totalExchanges
                  )
                }
                colorStyle=" border-teal-600"
              />
              <DataBox
                title="Total Market Cap"
                iconValue={<Chart />}
                dataValue={
                  DataResult.length === 0 ? (
                    <div className="animate-spin w-5 h-5">
                      <Spinier />
                    </div>
                  ) : (
                    DataResult.data.stats.totalMarketCap
                  )
                }
                colorStyle=" border-teal-600"
              />
              <DataBox
                title="Total Markets"
                iconValue={<Cash />}
                dataValue={
                  DataResult.length === 0 ? (
                    <div className="animate-spin w-5 h-5">
                      <Spinier />
                    </div>
                  ) : (
                    DataResult.data.stats.totalMarkets
                  )
                }
                colorStyle=" border-teal-600"
              />
            </>
          }
        </div>
        <div className="mb-6 w-full h-4"></div>
      </section>
    </>
  );
};

export default Hero;
