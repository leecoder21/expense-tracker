import React, { useState } from "react";
import styled from "styled-components";

const ExpenseFilter = ({ onFilter, selected }) => {
  const filterValue = (e) => {
    onFilter(e.target.value);
  };

  return (
    <Wrapper>
      <Label>Filter by year</Label>
      <Select value={selected} onChange={filterValue}>
        <option value="none" selected>
          선택
        </option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </Select>
    </Wrapper>
  );
};

export default ExpenseFilter;

const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 1rem;
`;

const Label = styled.label`
  margin-right: 2rem;
  color: white;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 0.5rem 2rem;
  font-weight: bold;
  border-radius: 6px;
`;
