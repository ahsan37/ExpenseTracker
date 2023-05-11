import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ExpenseStateContext = createContext();
const ExpenseDispatchContext = createContext();

const localStorageKey = 'expenses';

let id = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const newExpense = {
        id: uuidv4(),
        ...action.payload,
        category: action.payload.category,
        date: action.payload.date,
      };
      const updatedState = [...state, newExpense];
      localStorage.setItem(localStorageKey, JSON.stringify(updatedState));
      return updatedState;
    case 'DELETE':
      const filteredState = state.filter((expense) => expense.id !== action.payload);
      localStorage.setItem(localStorageKey, JSON.stringify(filteredState));
      return filteredState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [], () => {
    const localData = localStorage.getItem(localStorageKey);
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');

  const filteredExpenses = state.filter((expense) => {
    if (selectedCategory && expense.category !== selectedCategory) {
      return false;
    }
    if (selectedDate && expense.date !== selectedDate) {
      return false;
    }
    return true;
  });

  return (
    <ExpenseDispatchContext.Provider value={dispatch}>
      <ExpenseStateContext.Provider
        value={{
          expenses: filteredExpenses,
          selectedCategory,
          setSelectedCategory,
          selectedDate,
          setSelectedDate,
        }}
      >
        {children}
      </ExpenseStateContext.Provider>
    </ExpenseDispatchContext.Provider>
  );
};

export const useExpenseState = () => {
  const context = useContext(ExpenseStateContext);
  if (context === undefined) {
    throw new Error('useExpenseState must be used within an ExpenseProvider');
  }
  return context;
};

export const useExpenseDispatch = () => {
  const context = useContext(ExpenseDispatchContext);
  if (context === undefined) {
    throw new Error('useExpenseDispatch must be used within an ExpenseProvider');
  }
  return context;
};