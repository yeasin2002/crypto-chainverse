import React from "react";

const DataBox = ({
  title = "",
  dataValue,
  iconValue,
  colorStyle = " border-gray-200",
}) => {
  return (
    <div className={" border px-4 py-2 rounded-lg mx-4 " + colorStyle}>
      <p className="font-Kalam md:text-xl lg:text-2xl md:my-2 text-center">
        {title}{" "}
      </p>
      <div className="gap-x-2 inline-flex items-center justify-center">
        <div>{iconValue}</div>
        <div className="font-Oswald">{dataValue} </div>
      </div>
    </div>
  );
};

export default DataBox;
