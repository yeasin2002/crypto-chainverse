import React, { useEffect, useRef, useState } from "react";

import {
  LeftToRightArrow,
  RightToLeftArrow,
} from "../../components/layout/Icon";

const ListOfCrypto = ({ Data }) => {
  const [ListData, setListData] = useState([]);
  const [UserInput, setUserInput] = useState("");
  const [Page, setPage] = useState(1);

  const marketCapLocations = useRef();

  useEffect(() => {
    if (Data?.data?.coins) {
      setListData(Data.data.coins);
    }
  }, [Data?.data]);

  const PrevPage = () => {
    if (Page <= 1) return;
    setPage((prePage) => prePage - 1);
    window.scrollTo(0, marketCapLocations.current.offsetTop);
  };
  const NextPage = () => {
    if (Page === 5) return;
    setPage((prePage) => prePage + 1);
    window.scrollTo(0, marketCapLocations.current.offsetTop);
  };

  const PageItemsHailer = (e) => {
    if (Page == e) return;
    setPage(e);
    window.scrollTo(0, marketCapLocations.current.offsetTop);
  };
  let TheStyle;
  return (
    <div className="my-6 mx-4">
      <hr />
      <h3
        ref={marketCapLocations}
        className="text-xl md:text-2xl lg:text-3xl font-bold my-2 px-4 py-6"
      >
        Cryptocurrency Prices by Market Cap
      </h3>
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
              <div className="hidden sm:block"> {value.name} </div>
              <div className="sm:hidden"> {value.symbol} </div>
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
        <div className="flex justify-center items-center gap-x-1 md:gap-x-4 my-6 py-6">
          <div
            onClick={PrevPage}
            className="flex justify-start items-center ListPageNumber"
          >
            <RightToLeftArrow />
          </div>
          <div className="flex justify-start items-center">
            {[1, 2, 3, 4, 5].map((PageList, index) => {
              if (Page == PageList) {
                TheStyle = ` bg-cyan-700 text-slate-200`;
              } else {
                TheStyle = `bg-indigo-800 `;
              }
              return (
                <div key={index}>
                  <div
                    onClick={(e) => {
                      PageItemsHailer(PageList);
                    }}
                    className={`mx-2  ListPageNumber  transition-all  ${TheStyle}`}
                  >
                    {PageList}
                  </div>
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
