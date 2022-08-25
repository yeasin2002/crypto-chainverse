import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [DataResult, setDataResult] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [IsError, setIsIsError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setDataResult(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsIsError(err.message);
        setIsLoading(false);
      });
  }, []);
  return { DataResult, IsLoading, IsError };
};

export default useFetch;
