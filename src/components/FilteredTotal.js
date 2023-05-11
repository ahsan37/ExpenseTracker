import React from 'react';
import { useExpenseState } from '../context/ExpenseContext';

const FilteredTotal = () => {
  const { expenses, selectedCategory, selectedDate } = useExpenseState();

  // Filter the expenses based on selected category and date
  const filteredExpenses = expenses.filter((expense) => {
    if (selectedCategory && expense.category !== selectedCategory) {
      return false;
    }
    if (selectedDate && expense.date !== selectedDate) {
      return false;
    }
    return true;
  });

  // Calculate the filtered total by summing the amounts of filtered expenses
  const filteredTotal = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <h2>Filtered Total: {filteredTotal}</h2>
    </div>
  );
};

export default FilteredTotal;
