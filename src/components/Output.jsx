const Output = ({ tip, billInput }) => {
  return (
    <div>
      <h1>
        You pay $({tip + billInput}) (${billInput} bill value+ ${tip} tip).
      </h1>
    </div>
  );
};

export default Output;
