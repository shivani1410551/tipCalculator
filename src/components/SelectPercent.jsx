const selectPercent = ({ children, percentage, onsetPercentage }) => {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(e) => onsetPercentage(Number(e.target.value))}
      >
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20"> Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
};

export default selectPercent;
