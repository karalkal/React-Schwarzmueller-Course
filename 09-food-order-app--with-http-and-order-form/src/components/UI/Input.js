import React from 'react';
import classes from './Input.module.css';


/* cannot use useRef() in parent component MealItemForm
because Input is custom component, therefore we use the  following syntax
insted of simple const Input = (props) => {}
*/
const Input = React.forwardRef(
  (props, ref) => {
    return (
      <div className={classes.input} >
        <label htmlFor={props.input.id}>{props.labelName}</label>
        {/* forwardRef allows to use useRef in next component,
        use of spread operator allows to set all attributes received as props automatically,
        in MealItemForm will be just the id */}
        <input
          ref={ref}
          {...props.input} />
      </div>
    );
  }
);

export default Input;
