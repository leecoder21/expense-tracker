import React from "react";
import styled from "styled-components";

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <Bar>
      <InnerBar>
        <Fill height={barFillHeight}></Fill>
      </InnerBar>
      <Label>{label}</Label>
    </Bar>
  );
};

export default ChartBar;

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const InnerBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 1rem;
  border-radius: 12px;
  background-color: #a3b18a;
  overflow: hidden;
`;

const Fill = styled.div`
  background-color: #344e41;
  width: 100%;
  height: ${({ height }) => height};
  transition: all 0.3s ease-out;
`;

const Label = styled.div`
  padding-top: 0.3rem;
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;
