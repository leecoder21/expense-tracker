import React from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseData = (data) => {
    const expense = {
      id: Math.floor(Math.random() * 10000),
      ...data,
    };
    onAddExpense(expense);
  };

  return (
    <Wrapper>
      <ExpenseForm onSaveExpense={saveExpenseData} />
    </Wrapper>
  );
};
export default NewExpense;

const Wrapper = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  background-color: #dad7cd;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
