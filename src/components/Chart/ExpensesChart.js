import React from 'react';

import Chart from './Chart';

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];


  for (const expense of props.expenses) {
    /*will receive as props an array of expense objects for the selected year, like
  [
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28), },
    { id: 'e4', title: 'Desk', amount: 450, date: new Date(2022, 5, 3), },
  ];
  */

    // first ISO string to Date object, then get month
    const expenseMonth = (new Date(expense.date)).getMonth(); // starting at 0, January == 0

    // Increment value of object in array at index === month, 
    // e.g. chartDataPoints[0] is January (expenseMonth === 0), increment its value
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
