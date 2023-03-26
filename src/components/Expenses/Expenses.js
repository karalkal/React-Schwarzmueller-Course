import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  // our dates are now strings, hence we aren't using thingie.date.getFullYear().toString() === filteredYear;
  const items = (props.items).filter(thingie => thingie.date.substring(0, 4) === filteredYear)

  // gets selected year from ExpensesFilter.js -->> props.onChangeFilter(event.target.value)
  // state will change, items will be re-assigned with new filtered array
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={items} />

        {items.length === 0
          ? <h2 className='no_expenses'>{`No expenses found for year ${filteredYear}.`}</h2>
          : items.map(i =>
            <ExpenseItem
              key={i.id}
              id={i.id}
              title={i.title}
              amount={i.amount}
              date={i.date}
            />
          )}

      </Card>
    </div>
  );
};

export default Expenses;
