import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import NewsCard from "./NewsCard";
import Search from "../../components/layout/Search";

const News = () => {
  const [UserSearchInput, setUserSearchInput] = useState("");

  //   const { DataResult, IsLoading, IsError } = useFetch(
  //     "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0"
  //   );
  console.log(UserSearchInput);
  return (
    <div>
      <div className="flex justify-between overflow-x-hidden">
        <h2 className="text-slate-600 font-bold text-2xl mx-2 my-4">
          Latest Crypto News
        </h2>
        <Search setUserSearchInput={setUserSearchInput} doAnimations />
      </div>
      <div>
        {UserSearchInput}
        <NewsCard />
      </div>
    </div>
  );
};

export default News;
