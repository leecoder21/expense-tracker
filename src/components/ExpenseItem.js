import React from "react";
import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Wrapper>
      <ExpenseDate date={date} />
      <ExpenseDescription>
        <h2>{title}</h2>
        <div>{amount.toLocaleString()}원</div>
      </ExpenseDescription>
    </Wrapper>
  );
};

export default ExpenseItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const ExpenseDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;

  h2 {
    flex: 1;
    margin: 0 2rem;
    font-size: 1.2rem;
    color: white;
  }

  div {
    display: flex;
    flex: 0.3;
    justify-content: center;
    padding: 0.8rem;
    color: white;
    background-color: #03045e;
    border: 1px solid white;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: bold;
  }
`;
