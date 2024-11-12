import React from 'react'
import '../Styles/styles.css'
import contacts from '../Data/contacts'

const ChatList = () => {
return (
    <div className='chat-list'>
        {contacts.map((contact) => (
            <div key={contact.id} className='chat'>
                <button>
                <h3>{contact.nombre}</h3>
                </button>
            </div>
        ) 
        )}
    </div>
)}

export default ChatList