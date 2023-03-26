import React from 'react';
import initialExpensesData from './data.js'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// OF COURSE you have to set localStorage here, idiot!
// otherwise it will re-assign itself with the initial array at each App re-run
localStorage.setItem("expenses", JSON.stringify(initialExpensesData));

const App = () => {

  const [expensesFromLocalStorage, setExpensesFromLocalStorage] =
    React.useState(localStorage.getItem("expenses"));  

  const addExpenseHandler = newExpense => {    

    let prevExpArr = JSON.parse(localStorage.getItem("expenses"));
    let newExpArr = [newExpense, ...prevExpArr]

    // set localStorage with updated array
    localStorage.setItem("expenses", JSON.stringify(newExpArr));
    
    // trigger re-render with the newly assigned state
    setExpensesFromLocalStorage(localStorage.getItem("expenses"))
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={JSON.parse(expensesFromLocalStorage)} />
    </div>
  );
}

export default App;
