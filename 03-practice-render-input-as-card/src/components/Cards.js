import React from "react"
import './Cards.css'


export default function Cards(props) {

    const entries = props.entries
    return (
        <div className="cards-container ">
            {entries.map(item =>
                <p key={entries.indexOf(item)}>
                    <strong>{item.username}</strong> - ({item.age} years old)
                </p>
            )}
        </div>
    )
}