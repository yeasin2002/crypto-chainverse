import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";

const ListOfCrypto = ({ Data }) => {
  const [ListData, setListData] = useState([]);
  const [UserInput, setUserInput] = useState("");
  useEffect(() => {
    if (Data?.data?.coins) {
      setListData(Data.data.coins);
    }
  }, [Data?.data]);

  // console.log(ListData);

  return (
    <div className="my-6 mx-4">
      <h3 className="text-xl md:text-2xl font-bold my-2">
        Cryptocurrency Prices by Market Cap
      </h3>
      <div className="my-6">
        <SearchBox setUserInput={setUserInput} />
      </div>
      <div id="data">
        <div>
          <div className="ListShow ">
            <p>coin</p>
            <p>price</p>
            <p>24 hour Change</p>
            <p>Market Cap</p>
          </div>
        </div>
        {ListData.map((value) => {
          return (
            <div
              key={value.uuid}
              className="ListShow my-4 border-b py-2  border-slate-700 hover:bg-slate-800 rounded-lg transition-all justify-center  items-center "
            >
              <div>
                {
                  <img
                    className="w-20 h-20 rounded-full"
                    src={value.iconUrl}
                    alt={value.name + "logo"}
                  />
                }
              </div>
              <div> {value.name} </div>
              <div>
                {value.change > 0 ? (
                  <span className="text-green-500"> +{value.change} </span>
                ) : (
                  <span className="text-red-600"> {value.change} </span>
                )}
              </div>
              <div> ${value.marketCap.slice(0, 6)} Millions </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOfCrypto;
