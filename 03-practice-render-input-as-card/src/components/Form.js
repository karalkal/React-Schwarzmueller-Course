import React from "react"
import './Form.css'


export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            name: "",
            age: "",
        }
    )


    function handleChange(event) {
        console.log("handleChange function", event.target.name)
    }

    function handleSubmit() {
        console.log("handleSubmit function")
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
                    value={formData.name}
                />

                <label htmlFor="age">Age (Years)</label>
                <input
                    type="text"
                    id="age"
                    onChange={handleChange}
                    name="age"
                    value={formData.age}
                />

                <button className="submit-btn" >Add User</button>
            </form>
        </div>
    )


}