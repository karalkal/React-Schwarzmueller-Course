import React from 'react';

import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const expenseDateObj = {
    month: props.date.toLocaleString('en-US', { month: 'long' }),
    day: props.date.toLocaleString('en-US', { day: '2-digit' }),
    year: props.date.getFullYear()
  };


  return (
    <Card className='expense-item'>
      <div className='expense-date'>
        <div className='expense-date__month'>{expenseDateObj.month}</div>
        <div className='expense-date__year'>{expenseDateObj.year}</div>
        <div className='expense-date__day'>{expenseDateObj.day}</div>
      </div>

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
