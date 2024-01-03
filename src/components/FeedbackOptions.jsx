const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button key={option.type} onClick={() => onLeaveFeedback(option.type)}>
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
