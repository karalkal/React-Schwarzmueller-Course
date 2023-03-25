import React from 'react';
import initialExpensesData from './data.js'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {

  localStorage.setItem("expenses", JSON.stringify(initialExpensesData))
  // Lazy initialization (runs only first render) by providing callback function rather variable 
  // WILL NOT WORK HERE
  const [expensesInLocalStorage, setExpensesInLocalStorage] = React.useState(() => JSON.parse(localStorage.getItem("expenses")))

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesInLocalStorage} />
    </div>
  );
}

export default App;
