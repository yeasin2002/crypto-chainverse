import React from "react";

const Calculator = () => {
  return (
    <div className="my-6">
      <h1 className="md:text-2xl text-lg font-bold">Calculator</h1>
      <p className=" text-lg">
        Use the calculator to convert real-time prices between all available
        cryptocurrencies and fiat.
      </p>
      <div className="bg-gray-100">
        <div>
          <input
            type="number"
            className=" border-slate-800 px-2 py-4 border"
            id=""
          />
          <select name="choice">
            <option value="first">First Value</option>
            <option value="second">Second Value</option>
            <option value="third">Third Value</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
