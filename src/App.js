import React from 'react';
import initialExpensesData from './data.js'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {

  React.useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(initialExpensesData))
  }, [])


  const [expensesFromLocalStorage, setExpenses] = React.useState(JSON.parse(localStorage.getItem("expenses")))


  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesFromLocalStorage} />
    </div>
  );
}

export default App;
