import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const items = props.items

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {items.map(i =>
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
