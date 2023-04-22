import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /** validateEmailHandler and validatePasswordHandler functions:
      onblur Event - call these when a user leaves an input field.
      sets emailIsValid and passwordIsValid to true/false depending on input, 
      as a result the css class applied to the element will change too.
      This is unrelated to setFormIsValid
  */

  // effect runs at each enteredEmail or enteredPassword change
  // if both conditions are true, change state of formIsValid

  // DEBOUNCING - avoid running the effect (validation) at each keystroke 
  // but only after setTimeout.
  // In the body of useEffect callback function we return a cleanup function
  // It will run before useEffect runs this function again and when component is unmounted from DOM

  useEffect(() => {
    console.log("Running validator")

    const validator = setTimeout(() => {
      console.log("800ms passed")
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    },
      1700);

    return () => {
      clearTimeout(validator)
      console.log("Timer reset / component unmounted")
    }

  },
    [enteredEmail, enteredPassword])


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);;
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    console.log("onBlur email")
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    console.log("onBlur password")
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
