import React from "react";

const DataBox = ({
  title = "",
  dataValue,
  iconValue,
  colorStyle = " border-gray-200",
}) => {
  return (
    <div className={" border px-4 py-2 rounded-lg mx-4 " + colorStyle}>
      <p className="text-center">{title} </p>
      <div className="inline-flex items-center justify-center gap-x-2 ">
        <div>{iconValue}</div>
        <div>{dataValue} </div>
      </div>
    </div>
  );
};

export default DataBox;
