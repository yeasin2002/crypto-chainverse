import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CryptoCarousel = ({ Data }) => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {Data.length === 0
          ? ""
          : Data.data.coins.map((element, index) => {
              // console.log(element)
              const { uuid, iconUrl, name, change, price, symbol } = element;
              return (
                <>
                  <SwiperSlide key={uuid}>
                    <div
                      className=" flex  items-center justify-center flex-col"
                      onClick={(e) => {
                        console.log(element);
                      }}
                    >
                      <img
                        className=" w-24 h-24 rounded-full"
                        src={iconUrl}
                        alt={name + "logo"}
                      />
                      <h2 className="text-lg md:text-2xl font-semibold my-2">
                        {name} ( {symbol} )
                      </h2>
                      <p>
                        {change > 1 ? (
                          <span className="text-green-400 text-lg ">
                            +{change}
                          </span>
                        ) : (
                          <span className="text-red-800 text-lg ">
                            {change}
                          </span>
                        )}
                      </p>
                      <p>${Number(price).toFixed(2)}</p>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
      </Swiper>
    </div>
  );
};

export default CryptoCarousel;
