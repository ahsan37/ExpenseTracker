import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ExpenseProvider } from './context/ExpenseContext';

ReactDOM.render(
  <React.StrictMode>
    <ExpenseProvider> {/* Wrap the App component with ExpenseProvider */}
      <App />
    </ExpenseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
