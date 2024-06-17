const BillInput = ({ billInput, onSetBillInput }) => {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        type="text"
        value={billInput}
        onChange={(e) => onSetBillInput(Number(e.target.value))}
      />
    </div>
  );
};

export default BillInput;
