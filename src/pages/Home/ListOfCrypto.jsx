import React, { useEffect, useState } from "react";

import SearchBox from "./SearchBox";
import {
  LeftToRightArrow,
  RightToLeftArrow,
} from "../../components/layout/Icon";

const ListOfCrypto = ({ Data }) => {
  const [ListData, setListData] = useState([]);
  const [UserInput, setUserInput] = useState("");
  const [Page, setPage] = useState(1);
  useEffect(() => {
    if (Data?.data?.coins) {
      setListData(Data.data.coins);
    }
  }, [Data?.data]);

  const PrevPage = () => {
    if (Page <= 1) return;
    setPage((prePage) => prePage - 1);
  };
  const NextPage = () => {
    if (Page === 5) return;
    setPage((prePage) => prePage + 1);
  };
  const PageItemsHailer = (e) => {
    setPage(e.target.innerText);
  };

  return (
    <div className="my-6 mx-4">
      <h3 className="text-xl md:text-2xl font-bold my-2 px-6">
        Cryptocurrency Prices by Market Cap
      </h3>
      <div className="py-6 px-4">
        <SearchBox setUserInput={setUserInput} />
      </div>
      <div id="data">
        <div>
          <div className="ListShow ">
            <p></p>
            <p>coin</p>
            <p>24 hour Change</p>
            <p>Market Cap</p>
          </div>
        </div>
        {ListData.slice((Page - 1) * 10, (Page - 1) * 10 + 10).map((value) => {
          // let letReducer = (marketValue) => {
          //   return ListData.reduce(
          //     (acc, presentValue) => acc.marketCap + marketValue
          //   );
          // };
          // console.log(letReducer(value.marketCap));
          return (
            <div
              key={value.uuid}
              className="ListShow my-4 border-b py-2  border-slate-700 hover:bg-slate-800 rounded-lg transition-all justify-center  items-center "
            >
              <div>
                {
                  <img
                    className="w-16 sm:w-20 h-20 rounded-full"
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
        <div className="flex justify-center items-center gap-x-4 my-6 py-6">
          <div
            onClick={PrevPage}
            className="flex justify-start items-center ListPageNumber"
          >
            <RightToLeftArrow />
          </div>
          <div className="flex justify-start items-center">
            {[1, 2, 3, 4, 5].map((PageList) => {
              return (
                <div
                  onClick={(e) => {
                    PageItemsHailer(e);
                  }}
                  className="mx-2 ListPageNumber"
                >
                  {PageList}
                </div>
              );
            })}
          </div>
          <div
            onClick={NextPage}
            className="flex justify-start items-center ListPageNumber"
          >
            <LeftToRightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfCrypto;
