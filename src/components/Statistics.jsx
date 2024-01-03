const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
      <p>Total feedbacks: {total}</p>
      <p>Positive feedbacks: {positivePercentage} %</p>
    </div>
  );
};

export default Statistics;
