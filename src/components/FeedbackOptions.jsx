import { OptionsContainer, Button } from './styledComponents';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsContainer>
      {options.map(option => (
        <Button key={option.type} onClick={() => onLeaveFeedback(option.type)}>
          {option.label}
        </Button>
      ))}
    </OptionsContainer>
  );
};

export default FeedbackOptions;
