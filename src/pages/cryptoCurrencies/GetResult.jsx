import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import Data from "./Data";
import Loading from "../../components/layout/Loading";
import AlertBox from "../../components/layout/AlertBox";
import Search from "../../components/layout/Search";

const GetResult = () => {
  const [UserSearchInput, setUserSearchInput] = useState("");
  const [AllValue, setAllValue] = useState([]);

  const { DataResult, IsLoading, IsError } = useFetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"
  );

  const DataHandler = () => {
    if (DataResult.length === 0) return;
    else {
      return setAllValue(DataResult?.data?.coins);
    }
  };
  useEffect(() => {
    DataHandler();
  }, [DataResult]);

  return (
    <div>
      <div>
        <Search setUserSearchInput={setUserSearchInput} />
      </div>
      {IsLoading ? <Loading /> : null}
      {IsError ? <AlertBox /> : null}
      <div className="justify-items-center sm:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-2">
        {AllValue.filter((searchValue) => {
          if (UserSearchInput == "") {
            return searchValue;
          } else if (
            searchValue.name
              .toLowerCase()
              .includes(UserSearchInput.toLowerCase()) ||
            searchValue.symbol
              .toLowerCase()
              .includes(UserSearchInput.toLowerCase())
          ) {
            return searchValue;
          }
        }).map((value) => {
          return (
            <div key={value.uuid}>
              <Data
                id={value.uuid}
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
                AllValue={AllValue}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetResult;
