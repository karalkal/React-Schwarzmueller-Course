import { useRef, useState } from 'react';

import Input from '../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
    const inputAmountRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)

    // as props we only receive an Object like { id: "m3" }
    function handleSubmit(event) {
        event.preventDefault()
        const amountEntry = Number(inputAmountRef.current.value)

        // Validation for blank or not 1-5
        if (![1, 2, 3, 4, 5].includes(amountEntry)) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(amountEntry)
    }
    // here we get onAddToCart function prop from parent, and pass back just the amount
    // another approach could be to pass obj from parent, update it with quantity here and update cart state by passing object to ctx

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Input
                // need to use forwardRef() in custom comp <Input/>
                ref={inputAmountRef}

                // label takes input.id and labelName <label htmlFor={props.input.id}>{props.labelName}</label>
                labelName='Amount'

                // input takes input object and spreads its properties 
                // <input {...props.input} /> 
                // to create <input key1="value1" key2="value2">, 
                // i.e. <input id="amount_m1">
                input={{
                    // create a unique id per <Input />
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Invalid value!</p>}
        </form>
    );
};

export default MealItemForm;
