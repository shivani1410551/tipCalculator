import BillInput from "./BillInput";
import SelectPercent from "./SelectPercent";
import { useState } from "react";
import Output from "./Output";
const Hero = () => {
  const [billInput, setBillInput] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  let tip = billInput * ((percentage1 + percentage2) / 2 / 100);
  function handleReset() {
    setBillInput("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput billInput={billInput} onSetBillInput={setBillInput} />
      <SelectPercent percentage={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </SelectPercent>
      <SelectPercent percentage={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </SelectPercent>
      {billInput > 0 && (
        <>
          <Output tip={tip} billInput={billInput} />
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Hero;
