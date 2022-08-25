import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Data from "./Data";
import Loading from "../../components/layout/Loading";
import AlertBox from "../../components/layout/AlertBox";
const GetResult = () => {
  const { DataResult, IsLoading, IsError } = useFetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"
  );

  return (
    <div>
      {IsLoading ? <Loading /> : null}
      {IsError ? <AlertBox /> : null}
      <div className="grid grid-cols-2 gap-2">
        {DataResult.length === 0
          ? ""
          : DataResult.data.coins.map((value) => {
              return (
                <div key={value.uuid}>
                  <Data
                    value={value}
                    name={value.name}
                    iconImg={value.iconUrl}
                    color={value.color}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default GetResult;
