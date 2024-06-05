import React from 'react'
import FormInput from './FormInput'

export default function Modal({ showModal, setContacts, contacts }) {

    function handleSubmit(e) {
        
        e.preventDefault();
        const elements = e.target.elements;
        let newContact = {
            id: contacts[contacts.length - 1]?.id + 1 || 1,
            name: elements.name.value,
            email: elements.email.value,
            phone: elements.phone.value,
        }
 
        setContacts([...contacts, newContact])
        showModal()
    }

    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <span onClick={showModal} className="close">&times;</span>
                <h2>Agregar Contacto</h2>
                <form id="contactForm" onSubmit={handleSubmit}>

                    <FormInput id="name" type="text" label="Nombre:" />
                    <FormInput id="email" type="email" label="Correo:" />
                    <FormInput id="phone" type="text" label="Teléfono:" />

                    <button type="submit">Agregar</button>
                </form>
            </div>
        </div>
    )
}
