import React from "react";
import { createGlobalStyle } from "styled-components";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "1",
      title: "고구마",
      amount: 5000,
      date: new Date(2020, 7, 14),
    },
    { id: "2", title: "가전", amount: 1000000, date: new Date(2021, 2, 12) },
    {
      id: "3",
      title: "포켓 도시락",
      amount: 35000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "4",
      title: "치킨스톡",
      amount: 6000,
      date: new Date(2022, 1, 4),
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Expenses items={expenses} />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    background: #e9ecef;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;
