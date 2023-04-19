import React from "react"
import './Cards.css'


export default function Cards(props) {

    const entries = props.entries
    return (
        <div className="cards-container ">
            {entries.map(e =>
                <p key={entries.indexOf(e)}>
                    <strong>{e.username}</strong> - ({e.age} years old)
                </p>
            )}
        </div>
    )
}