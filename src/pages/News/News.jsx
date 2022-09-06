import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";

import NewsCard from "./NewsCard";
import Search from "../../components/layout/Search";
import Loading from "../../components/layout/Loading";
import AlertBox from "../../components/layout/AlertBox";
import useNewsData from "./useNewsData";

const News = () => {
  const [UserSearchInput, setUserSearchInput] = useState("crypto");
  const [MainNews, setMainNews] = useState([]);
  const { NewsData, LoadingLog, ErrorLog } = useNewsData(UserSearchInput);

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="sm:flex-row flex flex-col items-center justify-between overflow-x-hidden">
        <h2 className="text-slate-600 mx-2 my-4 text-2xl font-bold">
          Latest Crypto News
        </h2>
        <Search setUserSearchInput={setUserSearchInput} doAnimations />
      </div>
      {ErrorLog && <AlertBox />}
      {LoadingLog && <Loading />}
      <div className="lg:grid-cols-2 grid grid-cols-1">
        {!LoadingLog &&
          NewsData.map((data) => {
            return (
              <div key={uuidv4()}>
                <NewsCard
                  title={data.title}
                  link={data.link}
                  description={data.description}
                  additionalLinks={data.additional_links}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default News;
