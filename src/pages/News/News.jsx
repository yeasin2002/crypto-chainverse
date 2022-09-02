import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import NewsCard from "./NewsCard";
import Search from "../../components/layout/Search";
import Loading from "../../components/layout/Loading";

const News = () => {
  const [UserSearchInput, setUserSearchInput] = useState("crypto");
  //
  // data fetching
  let url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${UserSearchInput}&safeSearch=Off&textFormat=Raw`;

  const optionsSearch = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
  const { DataResult, IsLoading, IsError } = useFetch(url, optionsSearch);
  const ChangeTitle = () => (document.title = "Crypto News");
  useEffect(() => {
    ChangeTitle();
    return ChangeTitle;
  }, []);
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col items-center sm:flex-row    justify-between overflow-x-hidden">
        <h2 className="text-slate-600 font-bold text-2xl mx-2 my-4">
          Latest Crypto News
        </h2>
        <Search setUserSearchInput={setUserSearchInput} doAnimations />
      </div>
      {IsLoading ? <Loading /> : ""}
      <div className="grid lg:grid-cols-2">
        {!IsLoading
          ? DataResult.value.map((data, index) => {
              if (!data.image) return;
              return (
                <div key={index}>
                  <NewsCard
                    ampUrl={data.url}
                    description={data.description}
                    contentUrl={data.image.thumbnail.contentUrl}
                    datePublished={data.datePublished}
                    name={data.name}
                    // name={data.name}
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default News;
