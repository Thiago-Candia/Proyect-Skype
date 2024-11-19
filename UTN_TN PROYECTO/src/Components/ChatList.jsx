import React from 'react'
import '../Styles/styles.css'
import contacts from '../Data/contacts'


const ChatList = ({onSelectContact}) => {

return (
    <div className='chat-list'>
        {contacts.map((contact) => (
            <div key={contact.id} className='chat-list-user' >
                    <button className='btn-config btn-contact'
                    onClick={() => onSelectContact (contact)}>
                        <div className='contact-box-img'>
                            <img src={contact.img} alt="" className='contact-img'/>
                        </div>
                        <h3 className='text'>{contact.nombre}</h3>
                    </button>
            </div>
        ) 
        )}
    </div>
)}

export default ChatList