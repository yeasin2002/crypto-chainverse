import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";

import Index from "./pages/Home/Index";
import News from "./pages/News/News";
import CryptoCurrencies from "./pages/cryptoCurrencies/CryptoCurrencies";
import MoreCryptoDetails from "./pages/cryptoCurrencies/MoreCryptoDetails/MoreCryptoDetails";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/news" element={<News />} />
        <Route path="/crypto" element={<CryptoCurrencies />} />
        <Route path="/cryptodetails/:name" element={<MoreCryptoDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
