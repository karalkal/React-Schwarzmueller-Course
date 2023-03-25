import React from 'react';

import './Card.css';

export default function Card(props) {
  // Max wanted to illustrate how we can get a className via props and then concatenate with local string, 
  // otherwise it makes more sence to have this class in Card.css
  const classes = 'card ' + props.className;

  // Essentially, props.children is a special prop, automatically passed to every component, 
  // that can be used to render the content included between the opening and closing tags when invoking a component. 
  // In our case in each card we have nested element like:
  // <div className='expense-date'> [more-nested-elements] </div>
  return <div className={classes}>{props.children}</div>;
};
