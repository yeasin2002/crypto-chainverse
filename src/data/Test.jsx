import React from "react";

const Test = () => {
  const data = [
    {
      marketCap: 2444564,
    },
    {
      marketCap: 542525,
    },
  ];

  let reduce = data.reduce((acc, arrData) => arrData.marketCap + acc.marketCap);
  console.log(reduce);
  // acc.marketCap +
  return <div>Test</div>;
};

export default Test;
