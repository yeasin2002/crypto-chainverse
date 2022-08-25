const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

fetch(
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//  crypto news api data

// const optionsNews = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
//     "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
//   },
// };

// fetch("https://crypto-news-live3.p.rapidapi.com/news", optionsNews)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

//  news search

let searchInput = "dogcoin";

const optionsSearch = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "508a20f86bmsh3a8ae2c62ebb4ffp1e84aajsn1ecf49b70c48",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

fetch(
  `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchInput}&safeSearch=Off&textFormat=Raw`,
  optionsSearch
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
