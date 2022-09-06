import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import Loading from "../../components/layout/Loading";
import AlertBox from "../../components/layout/AlertBox";

const CryptoCarousel = ({ Data, IsLoading, IsError }) => {
  return (
    <div>
      <h2 className="lg:text-2xl p-4 mx-auto text-xl font-bold">
        Trending Crypto Currency's
      </h2>
      {IsLoading && <Loading />}
      {IsError && <AlertBox />}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {Data.length === 0
          ? ""
          : Data.data.coins.map((element, index) => {
              const {
                uuid,
                btcPrice,
                change,
                coinrankingUrl,
                color,
                iconUrl: iconImg,
                listedAt,
                lowVolume,
                marketCap,
                name,
                price,
                rank,
                symbol,
                tier,
                sparkline,
              } = element;

              let HourVolume = element["24hVolume"];
              return (
                <SwiperSlide key={uuid}>
                  <Link
                    state={{
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
                    }}
                    to={`/cryptodetails/${name}`}
                  >
                    <div className=" flex flex-col items-center justify-center">
                      <img
                        className=" w-24 h-24 rounded-full"
                        src={iconImg}
                        alt={name + "logo"}
                      />
                      <h2 className="md:text-2xl my-2 text-lg font-semibold">
                        {name} ( {symbol} )
                      </h2>
                      <p>
                        {change > 1 ? (
                          <span className=" text-lg text-green-400">
                            +{change}
                          </span>
                        ) : (
                          <span className="text-rose-500  text-lg">
                            -{change}
                          </span>
                        )}
                      </p>
                      <p>${Number(price).toFixed(2)}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default CryptoCarousel;
