import React, { useEffect, useRef, useState } from "react";
import AlertBox from "../../components/layout/AlertBox";
import { selectStyle } from "../../components/util/Style";

import {
  LeftToRightArrow,
  RightToLeftArrow,
} from "../../components/layout/Icon";
import Loading from "../../components/layout/Loading";

const ListOfCrypto = ({ Data, IsLoading, IsError }) => {
  const [ListData, setListData] = useState([]);
  const [Page, setPage] = useState(1);
  const [SelectedValue, setSelectedValue] = useState("a2z");

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
  const ListHandler = (pageData) => {
    if (SelectedValue == "a2z") {
      return pageData.sort((a, b) => {
        return a.marketCap - b.marketCap;
      });
    } else if (SelectedValue == "z2a") {
      return pageData.sort((a, b) => {
        return b.marketCap - a.marketCap;
      });
    } else {
      return pageData;
    }
  };

  const selectedHandler = (e) => {
    setSelectedValue(e.target.value);
  };
  useEffect(() => {
    ListHandler(ListData);
  }, [SelectedValue]);

  return (
    <div className="mx-4 my-6">
      <hr />
      <h3
        ref={marketCapLocations}
        className="md:text-2xl lg:text-3xl px-4 py-6 my-2 text-xl font-bold"
      >
        Cryptocurrency Prices by Market Capital
      </h3>
      <div className="gap-x-4 flex items-center justify-end py-4 my-4">
        <label
          htmlFor="order"
          className="md:text-2xl lg:text-2xl text-lg font-bold"
        >
          Sort By
        </label>
        <select
          name="order"
          id="order"
          className={selectStyle}
          onChange={selectedHandler}
        >
          <option value="a2z" defaultValue>
            A To Z
          </option>
          <option value="z2a">Z To A</option>
        </select>
      </div>
      <div id="data">
        {!IsLoading && (
          <div>
            <div className="ListShow ">
              <p className=" PageListHeading col-end-2 text-center">Coins</p>
              <p className=""></p>
              <p className="PageListHeading"> Change</p>
              <p className="PageListHeading "> Market Capital</p>
            </div>
          </div>
        )}
        {IsLoading && <Loading />}
        {IsError && <AlertBox />}
        {ListHandler(ListData)
          .slice((Page - 1) * 10, (Page - 1) * 10 + 10)
          .map((value, index) => {
            return (
              <div
                key={value.uuid}
                className="ListShow border-slate-700 hover:bg-slate-800  items-center justify-center py-2 my-4 transition-all border-b rounded-lg"
              >
                <div>
                  {
                    <img
                      className="sm:w-20 w-16 h-20 rounded-full"
                      src={value.iconUrl}
                      alt={value.name + "logo"}
                    />
                  }
                </div>
                <div className="sm:block hidden"> {value.name} </div>
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
        {/*  pagination start */}
        {!IsLoading && (
          <div className="gap-x-1 md:gap-x-4 flex items-center justify-center py-6 my-6">
            <div
              onClick={PrevPage}
              className="ListPageNumber flex items-center justify-start"
            >
              <RightToLeftArrow page={Page} />
            </div>

            <div className="flex items-center justify-start">
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
              className="ListPageNumber  flex items-center justify-start"
            >
              <LeftToRightArrow page={Page} />
            </div>
          </div>
        )}
        {/*  pagination end */}
      </div>
    </div>
  );
};
export default ListOfCrypto;
