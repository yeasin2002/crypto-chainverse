import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useImg = (UserSearchInput) => {
  if (UserSearchInput == "") {
    UserSearchInput = "crypto";
  }
  const [Statement, setStatement] = useState({
    result: [],
    LoadingState: true,
    ErrorState: false,
  });

  const ImgData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "BD",
        "X-RapidAPI-Key": "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    };

    fetch(
      `https://google-search3.p.rapidapi.com/api/v1/image/q=${UserSearchInput}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setStatement({ ...Statement, result: data, LoadingState: false });
      })
      .catch(() => {
        setStatement({ ...Statement, ErrorState: true, LoadingState: false });
      });
  };

  useEffect(() => {
    ImgData();

    return ImgData();
  }, []);

  return Statement;
};

export default useImg;
