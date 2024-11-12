import React, { useState } from "react";
import '../Styles/styles.css'
import { MessageList, NavbarUser, NewMessage } from "../Components";
import SectionProfile from "../Components/SectionProfile";
import SearchChat from "../Components/SearchChat";
import SelectSearch from "../Components/SelectSearch";
import AddChat from "../Components/AddChat";
import ChatList from "../Components/ChatList";

const Chat = () => {
    const [messages, setMessages] = useState ([
        {
            emisor: 'Tu',
            hora: '23:10',
            id: 1,
            texto: 'Hola, como andas?',
        },
        {
            emisor: 'Usuario',
            hora: '23:11',
            img: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-72',
            id: 2,
            texto: 'Depende',
        },
        {
            emisor: 'Tu',
            hora: '23:12',
            id: 3,
            texto: 'Eso que significa?',
        },
        {
            emisor: 'Tu',
            hora: '23:13',
            id: 4,
            texto: 'Hola?',
        },
        {
            emisor: 'Usuario',
            hora: '23:13',
            img: 'https://ca.slack-edge.com/T07EJ2FLZ2R-U07F5J8NGCR-ec3380dac16d-72',
            id: 4,
            texto: 'Estoy cansado😞',
        },
    ])

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
    <div className="navbar">
        <NavbarUser />
        <SectionProfile />
    </div>
    <div className="content-wrapper">
        <div className="search">
            <SearchChat />
            <SelectSearch/>
            <AddChat/>
            <ChatList/>
        </div>
        <div className="chat">
            <MessageList messages={messages} />
            <NewMessage onSendMessage={handleSendNewMessage} />
        </div>
    </div>
</div>

)
}

export default Chat