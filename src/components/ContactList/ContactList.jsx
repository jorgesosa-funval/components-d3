import React from 'react'
import ContactItem from './ContactItem'

export default function ContactList({ contacts, showModal }) {
    return (
        <div className="container">
            <h1>Lista de Contactos</h1>
            <ul className="contact-list">
                {
                    contacts.map(contact =>
                        <ContactItem
                            key={contact.id}
                            name={contact.name}
                            email={contact.email}
                            phone={contact.phone}
                        />
                    )


                }

            </ul>
            <button onClick={showModal} id="addContactBtn">+</button>
        </div>
    )
}

