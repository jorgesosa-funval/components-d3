import React from 'react'

export default function FormInput({ id, type, label }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} required />
        </>

    )
}
