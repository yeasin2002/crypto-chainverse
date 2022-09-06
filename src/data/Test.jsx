import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Test = () => {
  const [CoinData, setCoinData] = useState([]);
  const [List, setList] = useState([]);
  const { DataResult, IsLoading, IsError } = useFetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"
  );

  const data = [
    {
      marketCap: 10,
      name: "bitcoin",
    },
    {
      marketCap: 40,
      name: "eteriam",
    },
    {
      marketCap: 100,
      name: "gold",
    },
  ];

  useEffect(() => {
    if (DataResult.data) {
      setCoinData(DataResult.data.coins);
    } else {
      console.log("failed");
    }
  }, [CoinData]);

  let example = CoinData.sort((a, b) => {
    return a.marketCap - b.marketCap;
  });

  return (
    <div>
      <h1 className="my-8 text-4xl font-extrabold text-center">Testing sort</h1>

      <div>
        {example.map((value, index) => {
          return (
            <div className="border-slate-700 p-4 m-4 border">
              <div className=" flex">
                <img
                  className="w-10 h-10"
                  src={value.iconUrl}
                  alt={value.name}
                />
                <h3> {value.name} </h3>
              </div>
              <h3>
                <span>market Capital : </span> {value.marketCap}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Test;
