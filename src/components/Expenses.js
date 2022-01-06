import React, { useState } from "react";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Chart from "./Chart";

const Expenses = ({ items, onDeleteExpense }) => {
  const [selectedYear, setSelectedYear] = useState("none");

  const filteredChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = items.filter(
    (items) => items.date.getFullYear().toString() === selectedYear
  );

  return (
    <Wrapper>
      <ExpenseFilter onFilter={filteredChangeHandler} selected={selectedYear} />
      <Chart expenses={filteredExpenses} />
      <ul>
        {items.length === 0 ? (
          <Empty>지출이 없습니다.</Empty>
        ) : (
          (selectedYear === "none" ? items : filteredExpenses).map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                id={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
                onDeleteExpense={onDeleteExpense}
              />
            );
          })
        )}
      </ul>
    </Wrapper>
  );
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

const Empty = styled.h2`
  margin: 1rem 0;
  color: white;
  text-align: center;
`;
