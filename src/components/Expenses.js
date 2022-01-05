import React, { useState } from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const Expenses = ({ items }) => {
  const expenseItems = items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return <Wrapper>{expenseItems}</Wrapper>;
};

export default Expenses;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  background-color: rgb(31, 31, 31);
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
