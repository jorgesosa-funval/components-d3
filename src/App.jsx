import React, { useState } from 'react'
import ContactList from './components/ContactList/ContactList'
import Modal from './components/Modal/Modal'

const data = [
  {
    id: 1,
    name: 'Juan Perez',
    email: 'juan@example.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    name: 'María García',
    email: 'maria@example.com',
    phone: '987-654-3210',
  }
]

export default function App() {
  const [openModal, setOpenModal] = useState(false)
  const [contacts, setContacts] = useState(data)
  function showModal() {
    setOpenModal(!openModal)
  }
  return (
    <>
      <ContactList
        showModal={showModal}
        contacts={contacts}
      />

      {openModal &&
        <Modal showModal={showModal} />
      }

    </>
  )
}
