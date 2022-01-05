import React from "react";
import styled from "styled-components";

const ExpenseDate = ({ date }) => {
  console.log(date);
  const month = date.toLocaleString("kr-KR", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("kr-KR", { day: "2-digit" });
  return (
    <Wrapper>
      <Year>{year}</Year>
      <Month>{month}</Month>
      <Day>{day}</Day>
    </Wrapper>
  );
};

export default ExpenseDate;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
`;

const Year = styled.div`
  font-size: 0.75rem;
`;

const Month = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Day = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
