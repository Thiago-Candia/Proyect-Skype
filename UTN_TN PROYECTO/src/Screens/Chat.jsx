import React, { useState } from "react";
import '../Styles/styles.css'
import { MessageList, NavbarUser, NewMessage } from "../Components";
import SectionProfile from "../Components/SectionProfile";
import SearchChat from "../Components/SearchChat";
import SelectSearch from "../Components/SelectSearch";
import AddChat from "../Components/AddChat";
import ChatList from "../Components/ChatList";
import OrderChat from "../Components/OrderChat";
import contacts from "../Data/contacts";


const Chat = () => {

    const [selectedContact, setSelectedContact] = useState(null);

    const [messages, setMessages] = useState ([])


    const handleSelect = (contact) => {
        setSelectedContact(contact)
        setMessages(contact.mensajes)
    }

// Función para manejar el envío de un nuevo mensaje
const handleSendNewMessage = (text) => {
    const newMessage = {
        emisor: 'Tu',
        texto: text,
        hora: new Date().toLocaleTimeString(),
        id: messages.length + 1,
    }
    // Actualiza el estado con el nuevo mensaje
    setMessages([...messages, newMessage])

}

return (
    <div className="container">
        <section>
            <nav>
                <div className="navbar">
                    <NavbarUser selectedContact={selectedContact}/>
                    <SectionProfile />
                </div>
            </nav>
        </section>
        <div className="content-wrapper">
            <div className="search">
                <SearchChat />
                <SelectSearch />
                <AddChat />
                <OrderChat/>
                <div className="hola">
                    <ChatList onSelectContact={handleSelect}/>
                </div>
            </div>
            <div className="chat">
                <MessageList messages={messages} />
                <NewMessage onSendMessage={handleSendNewMessage} />
            </div>
        </div>
    </div>
    );

}


export default Chat




