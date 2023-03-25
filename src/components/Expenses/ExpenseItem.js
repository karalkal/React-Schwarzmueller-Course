import React from 'react';

import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  /*
  In this version we are storing the original data in localStorage as json 
  (to enable addition of new expenses as we cannot write in the original data file from the browser)
  Then we use this json to render all components.
  Since our date is now just a simple string we need to split it, 
  create Date object from it and then from this object we derive 
  a new one with day, month, year props (of course both objects could be merged but this is easier to grasp)
  */


  const dateAsArr = props.date.split("-")
  const dateObj = new Date(dateAsArr[0], dateAsArr[1], dateAsArr[2].slice(0, 2))  //(year, month, day)
  const expenseDateObj = {
    day: dateObj.toLocaleString('en-US', { day: '2-digit' }),
    month: dateObj.toLocaleString('en-US', { month: 'long' }),
    year: dateObj.getFullYear()
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
