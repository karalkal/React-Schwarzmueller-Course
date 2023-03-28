import React from 'react';

import './Card.css';

export default function Card(props) {
  // get a className via props and then concatenate with local string, 
  // container Card has className='expenses', expenseItems have className='expense-item'
  const classes = 'card ' + props.className;

  // Essentially, props.children is a special prop, automatically passed to every component, 
  // that can be used to render the content included between the opening and closing tags when invoking a component. 
  // In our case in each card we have nested element like:
  // <div className='expense-date'> [more-nested-elements] </div>
  return <div className={classes}>{props.children}</div>;
};
