const SelectPercent = ({ children, percentage, onSetPercentage }) => {
  return (
    <div>
      <p>{children}</p>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercent;
