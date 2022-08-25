import React from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";

import Index from "./pages/Home/";
import News from "./pages/News/News";
import CryptoCurrencies from "./pages/cryptoCurrencies/CryptoCurrencies";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/news" element={<News />} />
        <Route path="/crypto" element={<CryptoCurrencies />} />
      </Routes>
    </>
  );
};

export default App;
