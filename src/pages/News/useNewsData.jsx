import React, { useEffect, useState } from "react";

const useNewsData = (UserSearchInput) => {
  if (UserSearchInput == "") {
    UserSearchInput = "crypto";
  }
  const [NewsData, setNewsData] = useState([]);
  const [LoadingLog, setLoadingLog] = useState(true);
  const [ErrorLog, setErrorLog] = useState(false);

  // data fetch
  const GetNews = () => {
    const options = {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };

    fetch(
      `https://google-search3.p.rapidapi.com/api/v1/search/q=${UserSearchInput}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setLoadingLog(false);
        setNewsData(data.results);
        setErrorLog(false);
      })
      .catch((err) => {
        setLoadingLog(false);
        setErrorLog(true);
      });
  };
  useEffect(() => {
    GetNews();
  }, [UserSearchInput]);

  return { NewsData, LoadingLog, ErrorLog };
};
export default useNewsData;
