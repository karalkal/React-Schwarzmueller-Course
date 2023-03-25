import React from 'react';
import expensesData from './data'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
}

export default App;
