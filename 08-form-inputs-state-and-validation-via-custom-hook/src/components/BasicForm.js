import useInput from "../hooks/use-input";

const BasicForm = (props) => {

    // execute useInput depending on which input is triggering it, hence use alias
    const {
        value: fNameEntry,
        valueIsValid: fNameIsValid,
        hasError: fNameInputHasError,
        inputChangeHandler: fNameChangeHandler,
        inputBlurHandler: fNameBlurHandler,
        resetInput: resetFNameInput,
    }
        = useInput(value => value.trim() !== '')
    //call useInput, pass argument to validating function

    const {
        value: lNameEntry,
        valueIsValid: lNameIsValid,
        hasError: lNameInputHasError,
        inputChangeHandler: lNameChangeHandler,
        inputBlurHandler: lNameBlurHandler,
        resetInput: resetLNameInput,
    }
        = useInput(value => value.trim() !== '')

    const {
        value: emailEntry,
        valueIsValid: emailIsValid,
        hasError: emailInputHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetInput: resetEmailInput,
    }
        = useInput(value => value.includes("@"))
    const formIsValid = fNameIsValid && lNameIsValid && emailIsValid

    function formSubmissionHandler(e) {
        e.preventDefault();
        if (!formIsValid) {
            return
        }

        console.log(`done\n${fNameEntry}, ${lNameEntry}, ${emailEntry}`);
        resetFNameInput();
        resetLNameInput();
        resetEmailInput();
    }

    // conditional css classes
    const fNameInputClasses = fNameInputHasError ? 'form-control invalid' : 'form-control'
    const lNameInputClasses = lNameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={fNameInputClasses}>
                <div className='form-control'>
                    <label htmlFor='first-name'>First Name</label>
                    <input
                        type='text'
                        id='first-name'
                        onChange={fNameChangeHandler}
                        onBlur={fNameBlurHandler}
                        value={fNameEntry}
                    />
                    {fNameInputHasError && (
                        <p className='error-text'>Enter first name.</p>
                    )}
                </div>
            </div>

            <div className={lNameInputClasses}>
                <label htmlFor='last-name'>Last Name</label>
                <input
                    type='text'
                    id='last-name'
                    onChange={lNameChangeHandler}
                    onBlur={lNameBlurHandler}
                    value={lNameEntry}
                />
                {lNameInputHasError && (
                    <p className='error-text'>Enter last name.</p>
                )}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailEntry}
                />
                {emailInputHasError && (
                    <p className='error-text'>Enter email.</p>
                )}
            </div>

            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
                {/* if form is invalid -> disable button */}
            </div>
        </form>
    );
};

export default BasicForm;
