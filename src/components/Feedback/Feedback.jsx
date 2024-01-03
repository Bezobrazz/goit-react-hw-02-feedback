import React, { Component } from 'react';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.state.good;

    if (totalFeedback === 0) {
      return 0;
    }

    return Math.round((positiveFeedback / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const persentageOfPositiveFeedback = this.countPositiveFeedbackPercentage();

    const feedbackOptions = [
      { type: 'good', label: 'Good' },
      { type: 'neutral', label: 'Neutral' },
      { type: 'bad', label: 'Bad' },
    ];

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          {feedbackOptions.map(option => (
            <button
              key={option.type}
              onClick={() => this.onButtonClick(option.type)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p>Total feedbacks: {totalFeedback}</p>
        <p>Positive feedbacks: {persentageOfPositiveFeedback} %</p>
      </div>
    );
  }
}
