import React, { useState } from 'react'

export default function useInput(validateValue) {
    // validateValue function comes from outside including its arguments depending on the use case of the custom hook,
    // i.e. for name it will check if it's an empty string, for email if in contains "@".
    // Then it gets executed here and returns true or false for property "valueIsValid" to the function/component which has triggered it

    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)       // blurred if input field is not touched

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched             // user has touched input but input is invalid


    function inputChangeHandler(event) {
        setEnteredValue(event.target.value)
    }

    function inputBlurHandler(event) {
        setIsTouched(true)
    }

    function resetInput() {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        valueIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        resetInput,
    }
}
