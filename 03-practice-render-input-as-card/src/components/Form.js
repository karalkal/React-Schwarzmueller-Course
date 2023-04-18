import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            name: "",
            age: "",
        }
    )
    console.log(formData)
    return <form>
        <p>Form</p>
    </form>
}