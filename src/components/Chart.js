import React from "react";
import styled from "styled-components";
import ChartBar from "./ChartBar";

const Chart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Wrapper>
      {chartDataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  height: 10rem;
  border-radius: 12px;
  background-color: #dad7cd;
  text-align: center;
`;
