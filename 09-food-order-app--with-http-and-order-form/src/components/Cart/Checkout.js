import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const Checkout = (props) => {
    // empty at the beginning, hence not invalid
    const [formInputsAreValid, setFormInputsAreValid] = useState(
        { name: true, street: true, postCode: true, city: true, }
    );

    //define refs
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postCodeInputRef = useRef();
    const cityInputRef = useRef();

    // apply css classes depending on validity of entries
    const nameControlClasses = `${classes.control} ${formInputsAreValid.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsAreValid.street ? '' : classes.invalid}`;
    const postCodeControlClasses = `${classes.control} ${formInputsAreValid.postCode ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsAreValid.city ? '' : classes.invalid}`;

    const submitHandler = (event) => {
        event.preventDefault();

        //set entries to entered value or false
        const nameEntry = nameInputRef.current.value.trim() !== ""
            ? nameInputRef.current.value.trim()
            : false;
        const streetEntry = streetInputRef.current.value.trim() !== ""
            ? streetInputRef.current.value.trim()
            : false;
        const postCodeEntry = postCodeInputRef.current.value.trim().length === 6
            ? postCodeInputRef.current.value.trim()
            : false;
        const cityEntry = cityInputRef.current.value.trim() !== ""
            ? cityInputRef.current.value.trim()
            : false;


        setFormInputsAreValid({
            name: nameEntry, street: streetEntry,
            postCode: postCodeEntry, city: cityEntry
        });
        // and component re-renders, values are set to true again, hence the first line below prints [ true, true, true, true ] and validator fails
        console.log(Object.values(formInputsAreValid));
        console.log([nameEntry, streetEntry, postCodeEntry, cityEntry]);

        if ([nameEntry, streetEntry, postCodeEntry, cityEntry].some(val => val === false)) {
            console.log("Ain't happening =", [nameEntry, streetEntry, postCodeEntry, cityEntry])
            return
        };

        // if valid -> submit
        props.onSubmitOrder({
            name: nameEntry,
            street: streetEntry,
            postCode: postCodeEntry,
            city: cityEntry,
        })
    };


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {/* always add class .control next one add conditionally*/}
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputsAreValid.name && <p>Name input cannot be empty</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetInputRef} />
                {!formInputsAreValid.street && <p>Street input cannot be empty</p>}

            </div>
            <div className={postCodeControlClasses}>
                <label htmlFor='postal'>Post Code</label>
                <input type='text' id='postal' ref={postCodeInputRef} />
                {!formInputsAreValid.postCode && <p>Post Code input must be 6 characters</p>}

            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
                {!formInputsAreValid.city && <p>City input cannot be empty</p>}

            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;