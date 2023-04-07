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
import CryptoCarousel from "./CryptoCarousel";
import ListOfCrypto from "./ListOfCrypto";

const Hero = () => {
  const [StatsValue, setStatsValue] = useState([]);
  const { DataResult, IsLoading, IsError } = useFetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"
  );
  const ChangeTitle = () => (document.title = "Crypto Verse");
  useEffect(() => {
    ChangeTitle();
    return ChangeTitle;
  }, []);
  return (
    <>
      <section className="bg-slate-900 ">
        <div className="lg:flex">
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="dark:text-white lg:text-3xl font-Kalam text-2xl font-semibold text-gray-300">
                Get Real Time Information About
                <span className="dark:text-blue-400 font-Prompt mx-2 text-blue-600">
                  Cryptocurrency
                </span>
              </h2>

              <p className="dark:text-gray-400 font-Acme lg: lg:text-xl mt-2 text-sm text-gray-400">
                A digital currency in which transactions are verified and
                records maintained by a decentralized system using cryptography,
                rather than by a centralized authority:
              </p>

              <div className="lg:space-y-0 lg:flex-row flex flex-col mt-6 space-y-3">
                <Link
                  to="/crypto"
                  href="#"
                  className="border-slate-800 text-slate-800 font-Combo hover:text-slate-100 hover:bg-slate-800 hover:border-slate-200 md:text-xl block px-3 py-2 text-sm font-semibold text-center transition-colors duration-200 transform bg-gray-200 border-2 rounded-md"
                >
                  All Cryptocurrency
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:h-auto flex justify-center w-full h-64">
            <div className=" sm:w-60 md:w-80 lg:w-96 w-56">
              <img
                className=" bg-slate-900 w-full h-full m-auto"
                src={BannerImg}
                alt="BannerImg"
              />
            </div>
          </div>
        </div>
        <div className="sm:grid-cols-2 lg:grid-cols-3 grid justify-center grid-cols-1 gap-2">
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
                    DataResult?.data?.stats?.total
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
                    DataResult?.data?.stats?.total24hVolume
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
                    DataResult?.data?.stats?.totalCoins
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
                    DataResult?.data?.stats?.totalExchanges
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
                    DataResult?.data?.stats?.totalMarketCap
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
                    DataResult?.data?.stats?.totalMarkets
                  )
                }
                colorStyle=" border-teal-600"
              />
            </>
          }
        </div>
        <div className="w-full h-4 mb-6"></div>
        <div className="w-full h-full">
          <CryptoCarousel
            Data={DataResult}
            IsLoading={IsLoading}
            IsError={IsError}
          />
          <ListOfCrypto
            Data={DataResult}
            IsLoading={IsLoading}
            IsError={IsError}
          />
        </div>
      </section>
    </>
  );
};
export default Hero;
