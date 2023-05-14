import React, { useState } from 'react';
import { useExpenseDispatch } from '../context/ExpenseContext';

const ExpenseForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useExpenseDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD',
      payload: { name, amount: parseFloat(amount), category, date },
    });
    setName('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={submit} style={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Expense Name"
        style={styles.input}
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        placeholder="Amount"
        style={styles.input}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        style={styles.Catinput}
      >
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Drink">Drink</option>
        <option value="Housing">Housing</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        placeholder="Date"
        style={styles.dateInput}
      />
      <button type="submit" style={styles.button}>
        Add Expense
      </button>
      <h2 style={styles.title}>
      Transactions
      <hr style={styles.line} />
    </h2>
    </form>
  );
};

const styles = {
  line: {
    border: '1.5px solid #007bff',
    marginTop: '30px',
  },

  dateInput: {
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '50px',
    border: '1px solid',
    backgroundColor: 'white',
  },

  Catinput: {
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '50px',
    border: '1px solid',
    backgroundColor: 'white',
  },

  title: {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '34px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
    
  },
  input: {
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '50px',
    border: '1px solid',
  },
  button: {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '50px',
    cursor: 'pointer',
    marginTop:'20px;',
    textSize:'200px',
  },
};

export default ExpenseForm;
