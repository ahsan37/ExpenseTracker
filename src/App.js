import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import styled from 'styled-components';
import FilteredTotal from './components/FilteredTotal';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const TotalExpenses = styled.div`
  background-color: white;
  padding: 22px;
  border-radius: 100px;
  border-color: #007bff;
  border-style: solid;
  border-width: 3px;
  margin-bottom: 20px;
  width: 50%;
  text-align: center;
  font-size: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

const ListWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
`;

function App() {
  return (
    <ExpenseProvider>
      <AppWrapper>
        <TotalExpenses>
          <ExpenseTotal />
        </TotalExpenses>
        <ContentWrapper>
          <FormWrapper>
            <ExpenseForm />
          </FormWrapper>
          {/* <FilteredTotal /> */}
          <ListWrapper>
            <ExpenseList />
          </ListWrapper>
        </ContentWrapper>
      </AppWrapper>
    </ExpenseProvider>
  );
}

export default App;
