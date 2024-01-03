import {
  StatisticsContainer,
  StatisticsList,
  StatisticsListItem,
} from './styledComponents';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsContainer>
      <StatisticsList>
        <StatisticsListItem>Good: {good}</StatisticsListItem>
        <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
        <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      </StatisticsList>
      <p>Total feedbacks: {total}</p>
      <p>Positive feedbacks: {positivePercentage} %</p>
    </StatisticsContainer>
  );
};

export default Statistics;
