import React from 'react';
import initialExpensesData from './data.js'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  localStorage.setItem("expenses", JSON.stringify(initialExpensesData));

  const [expensesInLocalStorage, setExpensesInLocalStorage] =
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
    // console.log(expense.date, newExpense.date, JSON.parse(expensesInLocalStorage)[2].date)

    let prevExpArr = JSON.parse(localStorage.getItem("expenses"));
    let newExpArr = [newExpense, ...prevExpArr]

    console.log(prevExpArr)
    console.log(newExpArr)
    
    localStorage.setItem("expenses", JSON.stringify(newExpArr));

    // setExpensesInLocalStorage(JSON.stringify(newExpArr))

    console.log(expensesInLocalStorage);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={JSON.parse(expensesInLocalStorage)} />
    </div>
  );
}

export default App;
