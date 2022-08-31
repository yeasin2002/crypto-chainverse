import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import Data from "./Data";
import Loading from "../../components/layout/Loading";
import AlertBox from "../../components/layout/AlertBox";
import Search from "../../components/layout/Search";

const GetResult = () => {
  const [UserSearchInput, setUserSearchInput] = useState("");
  const [SearchResult, setSearchResult] = useState("");

  const { DataResult, IsLoading, IsError } = useFetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"
  );

  return (
    <div>
      <div>
        <Search setUserSearchInput={setUserSearchInput} />
      </div>
      {IsLoading ? <Loading /> : null}
      {IsError ? <AlertBox /> : null}
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {DataResult.length === 0
          ? ""
          : DataResult.data.coins.map((value) => {
              return (
                <div key={value.uuid}>
                  <Data
                    value={value}
                    HourVolume={value["24hVolume"]}
                    btcPrice={value.btcPrice}
                    change={value.change}
                    coinrankingUrl={value.coinrankingUrl}
                    color={value.color}
                    iconImg={value.iconUrl}
                    listedAt={value.listedAt}
                    lowVolume
                    marketCap={value.marketCap}
                    name={value.name}
                    price={value.price}
                    rank={value.rank}
                    symbol={value.symbol}
                    tier={value.tier}
                    sparkline={value.sparkline}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default GetResult;

/*
 search function

 DataResult.data.coins.filter((cryptoData) => {
                // console.log(cryptoData.name);
                if (
                  cryptoData.name
                    .toLocaleLowerCase()
                    .includes(UserSearchInput.toLocaleLowerCase())
                ) {
                  // return console.log(cryptoData.name);
                  return DataResult.data;
                }
                // if (UserSearchInput == "") return cryptoData;
                // else if (
                //   cryptoData.name
                //     .toLocaleLowerCase()
                //     .includes(UserSearchInput.toLocaleLowerCase())
                // ) {
                //   return cryptoData;
                // } else {
                //   return cryptoData;
                // }
              // })
*/
