import BillInput from "./BillInput";
import Output from "./Output";
import { useState } from "react";
import SelectPercent from "./SelectPercent";
const Hero = () => {
  const [billValue, setBillValue] = useState("");
  const [percentage1, selectPercent1] = useState(0);
  const [percentage2, selectPercent2] = useState(0);
  let tip = billValue * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBillValue("");
    selectPercent1(0);
    selectPercent2(0);
  }
  return (
    <div>
      <BillInput billValue={billValue} setBillValue={setBillValue} />
      <SelectPercent percentage={percentage1} onsetPercentage={selectPercent1}>
        How did you like the service?
      </SelectPercent>
      <SelectPercent percentage={percentage2} onsetPercentage={selectPercent2}>
        {" "}
        How did your friend like the service?
      </SelectPercent>
      {billValue > 0 && (
        <>
          <Output billValue={billValue} tip={tip} />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Hero;
