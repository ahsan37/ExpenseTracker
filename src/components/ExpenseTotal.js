import React from 'react';
import { useExpenseState } from '../context/ExpenseContext';

const ExpenseTotal = () => {
  const { expenses } = useExpenseState();

  // Calculate the total using reduce
  const total = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default ExpenseTotal;
