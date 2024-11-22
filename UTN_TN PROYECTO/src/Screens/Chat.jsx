import React, { useEffect, useState } from "react";
import '../Styles/styles.css'
import { MessageList, NavbarUser, NewMessage, SectionProfile, SearchChat, SelectSearch, AddChat, ChatList, OrderChat, HomeSection } from "../Components";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import contacts from "../Data/contacts";


const Chat = () => {

    const { contact_id } = useParams();
    const [selectedContact, setSelectedContact] = useState(null)
    const [messages, setMessages] = useState ([])


    useEffect(() => {
        const foundContact = contacts.find(
            (contact) => contact.id == contact_id
        )
            setSelectedContact(foundContact)
            setMessages(foundContact?.mensajes || [])
        }, [contact_id])


/*     const navigate = useNavigate()

    useEffect(
        () => {
            if(!selectedContact){
                navigate(`/contacts/${contacts[0].id}`)
            }
        },
        []
    ) */




// manejar el envío de un nuevo mensaje
const handleSendNewMessage = (text) => {
    const newMessage = {
        emisor: 'Tu',
        texto: text,
        hora: new Date().toLocaleTimeString(),
        id: messages.length + 1,
    }
    // actualiza el estado con el nuevo mensaje
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
                    <ChatList/>
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




