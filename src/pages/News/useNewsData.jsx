import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useNewsData = (UserSearchInput) => {
  const [NewsValue, setNewsValue] = useState([]);
  const [NewLoading, setNewLoading] = useState(true);
  const [NewsErr, setNewsErr] = useState(false);

  const [ErrorLog, setErrorLog] = useState("");
  const [ErrorLogMsg, setErrorLogMsg] = useState(false);

  const GetNews = () => {
    try {
      const options = {
        method: "GET",
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "IE",
          "X-RapidAPI-Key":
            "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      };

      fetch(
        `https://google-search3.p.rapidapi.com/api/v1/news/q=${UserSearchInput}`,
        options
      )
        .then((response) => {
          if (!response.ok) {
            throw Error("Unable to fetch Data");
          } else {
            response.json();
          }
        })
        .then((data) => {
          setNewsValue(data.entries);
          setNewLoading(false);
        })
        .catch((err) => {
          setNewsErr(true);
          setNewLoading(false);
          setErrorLog(err.message);
        });
    } catch {
      setErrorLogMsg(true);
      setErrorLog(err.message);
      setNewsErr(false);
    }
  };
  useEffect(() => {
    GetNews();
    return GetNews();
  }, [UserSearchInput]);

  return { NewsValue, NewLoading, NewsErr, ErrorLog, ErrorLogMsg };
};

export default useNewsData;
