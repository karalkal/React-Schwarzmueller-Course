import React from "react"
import './Form.css'


export default function Form(props) {
    const [formData, setFormData] = React.useState(
        {
            username: "",
            age: "",
        }
    )

    function handleChange(event) {
        // ERRORS not triggered modal while typing (e.g. start typing age with string), can do this

        // set values of form fields
        /* Simplified version
            console.log(event.target.name)
            if (event.target.name = "username") {
                setFormData(prevFormData => ({ ...prevFormData, username: event.target.value }))    // brackets instead of {return ......}
            } else if (event.target.name = "age") {
                setFormData(prevFormData => ({ ...prevFormData, age: event.target.value }))
            }
            */

        // Universal version for updating object form form
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
                // spread object before changing state
                // then whatever we get as name from event target will become our key to be updated
                // [name] / [event.target.name] with square brackets is computed prop!
                // if the type / event.target.type is checkbox, object value is set to "checked" (see checkbox section for more info)
                // else it updates the value for the corresponding key with value from form
                // if the form does not have checkboxes, we can just use [event.target.name]: event.target.value to update state object - NOT GOOD PRACTICE
                // or if destructured beforehand, i.e. const {name, value} return {...prevFormData, [name]: value}
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        // const numericAge = event.target.age.value    // get it from event
        const numericAge = Number(formData.age)         // get it from state

        // ERRORS -> if error, change state of displayErrorModal and return        
        // Number("") === 0
        if (formData.username.trim() === "" || formData.age.trim() === "") {
            props.displayErrorModal(true, "No blank entries allowed!")
            return
        }
        // typeof NaN returns "number"
        else if (Number.isNaN(numericAge)) {
            props.displayErrorModal(true, "Age must be a number")
            return
        }
        else if (numericAge <= 0) {
            props.displayErrorModal(true, "Come back when you are born")
            return
        }
        else if (numericAge % 1 !== 0) {
            props.displayErrorModal(true, "Whole numbers only allowed")
            return
        }

        // IF ALL GOOD -> reset form, add new to entries array
        else {
            const newEntry = ({
                username: event.target.username.value,
                age: numericAge
            })
            setFormData({ username: "", age: "" })      // reset
            props.addNewEntry(newEntry)                 // send object to parent component where it will be added to array
        }
    }


    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>

                {/* Tip: The for attribute of <label> must be equal to the id attribute of the related element to bind them together. 
                A label can also be bound to an element by placing the element inside the <label> element.  */}

                {/* To access the fields in the event handler use the event.target.name and event.target.value syntax. */}

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}
                />

                <label htmlFor="age">Age (Years)</label>
                <input
                    type="text"
                    id="age"
                    onChange={handleChange}
                    name="age"
                    value={formData.age}
                />

                <button className="submit-btn">Add User</button>
            </form>
        </div>
    )
}
