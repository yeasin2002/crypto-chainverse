import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { v4 as uuidv4 } from "uuid";

import NewsCard from "./NewsCard";
import Search from "../../components/layout/Search";
import Loading from "../../components/layout/Loading";
import AlertBox from "../../components/layout/AlertBox";
import useNewsData from "./useNewsData";
import useImg from "./useImg";

const News = () => {
  const [UserSearchInput, setUserSearchInput] = useState("crypto");
  const [MainNews, setMainNews] = useState([]);
  const NewsStatement = useNewsData(UserSearchInput);
  const Statement = useImg(UserSearchInput);

  const { result, LoadingState, ErrorState } = Statement;
  const { NewsValue, NewLoading, NewsErr } = NewsStatement;

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="sm:flex-row flex flex-col items-center justify-between overflow-x-hidden">
        <h2 className="text-slate-600 ml-7 mx-2 my-4 text-2xl font-bold">
          Latest Crypto News
        </h2>
        <Search setUserSearchInput={setUserSearchInput} doAnimations />
      </div>
      {NewsErr && <AlertBox />}
      {NewLoading && <Loading />}
      <div className="">
        {!NewLoading &&
          NewsValue.map((data, index) => {
            return (
              <div key={uuidv4()}>
                <NewsCard
                  guidislink
                  title={data.title}
                  summary={data.summary}
                  published={data.published}
                  link={data.link}
                  // Array
                  source={data.source}
                  publishedParsed={data.published_parsed}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default News;
// img={result.image_results[index].image.src}
