import { useRef } from "react"
import './Form.css'


export default function Form(props) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        // ERRORS:        
        // Number("") === 0
        if (enteredName.trim() === "" || enteredAge.trim() === "") {
            props.onError("No blank entries allowed.")
            return
        }
        // typeof NaN returns "number"
        else if (Number.isNaN(Number(enteredAge))) {
            props.onError("Age must be a number.")
            return
        }
        else if (Number(enteredAge) <= 0) {
            props.onError("Come back when you are born.")
            return
        }
        else if (Number(enteredAge) % 1 !== 0) {
            props.onError("Whole numbers only allowed.")
            return
        }

        // IF ALL GOOD: 
        else {
            // create entry
            const newEntry = ({
                username: enteredName,
                age: enteredAge
            })
            // reset form fields
            enteredName.value = ""
            enteredName.age = ""
            // send object to parent component where it will be added to array
            props.addNewEntry(newEntry)
        }
    }


    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    ref={nameInputRef} />

                <label htmlFor="age">Age (Years)</label>
                <input
                    type="text"
                    id="age"
                    ref={ageInputRef} />

                <button className="submit-btn">Add User</button>
            </form>
        </div>
    )
}
