import React, { useState } from "react";
import styled from "styled-components";

const ExpenseForm = ({ onSaveExpense }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <NewExpenseControls>
        <Input>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </Input>
        <Input>
          <label>Amount</label>
          <input
            type="number"
            min="100"
            step="100"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </Input>
        <Input>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </Input>
      </NewExpenseControls>
      <SubmitBtn>
        <button type="submit">Add Expense</button>
      </SubmitBtn>
    </form>
  );
};

export default ExpenseForm;

const NewExpenseControls = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: left;
`;

const Input = styled.div`
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #dad7cd;
    width: 20rem;
    max-width: 100%;
  }
`;

const SubmitBtn = styled.div`
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    padding: 1rem 2rem;
    border: none;
    background-color: #0d3b66;
    color: white;
    border-radius: 12px;
    margin-right: 1rem;
  }
`;
