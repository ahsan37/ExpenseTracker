import React from 'react';
import { useExpenseDispatch } from '../context/ExpenseContext';

const ExpenseItem = ({ id, name, amount, category, date }) => {
  const dispatch = useExpenseDispatch();

  const deleteExpense = () => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <span style={styles.label}>Date:</span>
        <span style={styles.value}>{date}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Category:</span>
        <span style={styles.value}>{category}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Name:</span>
        <span style={styles.value}>{name}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>Amount: $</span>
        <span style={styles.value}>{amount}</span>
      </div>
      <button onClick={deleteExpense} style={styles.button}>
        Delete
      </button>
    </div>
  );
};

const styles = {
  container: {
    border: '3px solid #007bff',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '15px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
  },
  label: {
    fontWeight: 'bold',
    marginRight: '5px',
    fontFamily: 'Arial, sans-serif', // Add the desired font family
  },
  value: {
    marginLeft: '5px',
  },
  button: {
    backgroundColor: '#D22B2B',
    color: 'white',
    border: 'solid',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    marginTop: '0px',
    marginLeft: '300px',
  },
};

export default ExpenseItem;
