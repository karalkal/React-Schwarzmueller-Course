import useInput from '../hooks/use-input';

const SimpleInput = props => {
    // use alias 
    const {
        value: enteredName,
        valueIsValid: enteredNameIsValid,
        hasError: nameInputHasError,
        inputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        resetInput: resetNameInput,
    }
        = useInput(value => value.trim() !== '')
    // pass function as argument to useInput, will return true or false

    const {
        value: enteredEmail,
        valueIsValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmailInput,
    }
        = useInput(value => value.includes("@"))
    // pass as argument true or false to useInput 


    let formIsValid = false

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmissionHandler = event => {
        event.preventDefault()

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return
        }

        console.log(enteredName)

        resetNameInput();
        resetEmailInput();
    }

    // define css classes depending on validity of value
    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={enteredName}
                />
                {nameInputHasError && (
                    <p className='error-text'>Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input
                    type='email'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className='error-text'>Please enter a valid email.</p>
                )}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput
