import React from 'react';
import initialExpensesData from './data.js'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// OF COURSE you have to set localStorage here, idiot!
// otherwise it will re-assign itself with the initial array at each App re-render
localStorage.setItem("expenses", JSON.stringify(initialExpensesData));

const App = () => {

  const [expensesFromLocalStorage, setExpensesFromLocalStorage] =
    React.useState(localStorage.getItem("expenses"));

  // In initialExpensesData date is Date
  // But is stored in localStorage as date:"2020-08-13T23:00:00.000Z"
  // After parsing expensesInLocalStorage date remains string
  // Hence we need to cast date of new entry to string before adding it to array
  // console.log(initialExpensesData[1].date)
  // console.log((JSON.parse(expensesInLocalStorage))[1].date)

  const addExpenseHandler = expense => {
    const newExpense = {
      ...expense,
      date: (expense.date).toISOString()
    }

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
