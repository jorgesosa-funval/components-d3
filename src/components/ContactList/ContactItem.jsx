import React from 'react'

export default function ContactItem({ name, email, phone }) {
    return (
        <li className="contact">
            <span className="name">{name}</span>
            <span className="details">{email} - 1{[phone]}</span>
        </li>
    )
}
