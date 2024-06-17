const Output = ({ billValue, tip }) => {
  return (
    <div>
      <h3>
        You pay {billValue + tip} (${billValue} + ${tip} tip)
      </h3>
    </div>
  );
};

export default Output;
