import React, { useState } from "react";
import '../Styles/styles.css'
import { MessageList, NavbarUser, NewMessage, SectionProfile, SearchChat, SelectSearch, AddChat, ChatList, OrderChat, HomeSection } from "../Components";


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
                    { selectedContact ? 
                        (<>
                            <NavbarUser selectedContact={selectedContact}/>
                        </>) 
                        : ( <div className="navbar-start"></div>)
                    }
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
                { selectedContact ? (
                    <>
                        <MessageList messages={messages} usuarioActual={selectedContact} />
                        <NewMessage onSendMessage={handleSendNewMessage} />
                    </>
                ) : (
                    <HomeSection/>
                )}
            </div>
        </div>
    </div>
    );

}


export default Chat




