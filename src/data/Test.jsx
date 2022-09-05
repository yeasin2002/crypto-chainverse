import React from "react";

const Test = () => {
  const data = [
    {
      marketCap: 10,
    },
    {
      marketCap: 20,
    },
    {
      marketCap: 30,
    },
  ];

  let reduce = data.reduce((acc, arrData) => arrData.marketCap + acc.marketCap);
  console.log(reduce);
  return <div>Test</div>;
};

export default Test;
