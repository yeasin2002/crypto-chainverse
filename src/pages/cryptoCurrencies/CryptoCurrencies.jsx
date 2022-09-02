import React, { useEffect } from "react";
import GetResult from "./GetResult";

const CryptoCurrencies = () => {
  const ChangeTitle = () => (document.title = "Crypto Currencies");
  useEffect(() => {
    ChangeTitle();
    return ChangeTitle;
  }, []);
  return (
    <div className="bg-slate-200 min-h-screen">
      <GetResult />
    </div>
  );
};

export default CryptoCurrencies;
