import React from "react";
import styled from "styled-components";
import { MdCancel } from "react-icons/md";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({ id, title, amount, date, onDeleteExpense }) => {
  return (
    <Wrapper>
      <ExpenseDate date={date} id={id} />
      <ExpenseDescription>
        <h2>{title}</h2>
        <div>{amount.toLocaleString()}원</div>
        <Cancel onClick={() => onDeleteExpense(id)}>
          <MdCancel />
        </Cancel>
      </ExpenseDescription>
    </Wrapper>
  );
};

export default ExpenseItem;

const Wrapper = styled.li`
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
    font-size: 1.3rem;
    color: white;
  }

  div {
    display: flex;
    flex: 0.3;
    justify-content: center;
    padding: 0.8rem;
    color: white;
    background-color: #0d3b66;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  }
`;

const Cancel = styled.button`
  padding: 0.5rem;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 1.5rem;

  &:hover {
    color: #588157;
  }
`;
