import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input
                // label takes input.id and labelName <label htmlFor={props.input.id}>{props.labelName}</label>
                labelName='Amount'

                // input takes input object and spreads its properties 
                // <input {...props.input} /> 
                // to create <input key1="value1" key2="value2">, 
                // i.e. <input id="amount_undefined" type="number" min="1" max="5" step="1" value="1">
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
        </form>
    );
};

export default MealItemForm;
