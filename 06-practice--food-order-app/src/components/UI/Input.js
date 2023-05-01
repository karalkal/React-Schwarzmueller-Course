import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.labelName}</label>
      {/* use of spread operator allows to set all attributes received as props automatically */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
