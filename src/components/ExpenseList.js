import React, { useState } from 'react';
import { useExpenseState } from '../context/ExpenseContext';
import ExpenseItem from './ExpenseItem';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  margin-top:-30px;
`;

const FilterLabel = styled.label`
  margin-bottom: 5px;
  font-family: Arial;
`;

const FilterSelect = styled.select`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 10px;
`;

const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 10px;
`;

const StyledDateInput = styled(FilterInput)`
  appearance: none;
  background-color: white;
`;

const ExpenseList = () => {
  const { expenses } = useExpenseState();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Filter expenses based on selected category and date
  const filteredExpenses = expenses.filter((expense) => {
    if (selectedCategory && expense.category !== selectedCategory) {
      return false;
    }
    if (selectedDate && expense.date !== selectedDate) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <FiltersWrapper>
        <FilterLabel htmlFor="categoryFilter">Filter by Category:</FilterLabel>
        <FilterSelect
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="Food">Food</option>
          <option value="Drink">Drink</option>
          <option value="Housing">Housing</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </FilterSelect>
        <FilterLabel htmlFor="dateFilter">Filter by Date:</FilterLabel>
        <StyledDateInput
          id="dateFilter"
          type="date"
          value={selectedDate}
          placeholder="Date"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </FiltersWrapper>
      <div>
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} />
          ))
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
