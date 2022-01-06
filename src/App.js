import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "치킨스톡",
    amount: 6000,
    date: new Date(2022, 0, 4),
  },
  {
    id: "2",
    title: "포켓 도시락",
    amount: 35000,
    date: new Date(2021, 2, 28),
  },
  { id: "3", title: "가전", amount: 100000, date: new Date(2021, 3, 12) },
  {
    id: "4",
    title: "고구마",
    amount: 5000,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    background: #3f3f3f;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
