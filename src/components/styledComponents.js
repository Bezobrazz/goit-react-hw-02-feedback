import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const StatisticsContainer = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  margin-top: 10px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const SectionContainer = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.h2`
  color: #333;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StatisticsListItem = styled.li`
  margin-bottom: 8px;
  font-size: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`;
