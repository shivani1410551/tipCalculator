import React from "react";

const billInput = ({ billValue, setBillValue }) => {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
    </div>
  );
};

export default billInput;
