import React from 'react'
import FormInput from './FormInput'

export default function Modal({showModal}) {
    return (
        <div id="modal" className="modal">
            <div className="modal-content">
                <span onClick={showModal} className="close">&times;</span>
                <h2>Agregar Contacto</h2>
                <form id="contactForm">
                    <FormInput id="name" type="text" label="Nombre:" />
                    <FormInput id="email" type="email" label="Correo:" />
                    <FormInput id="phone" type="text" label="Teléfono:" />
                    
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </div>
    )
}
