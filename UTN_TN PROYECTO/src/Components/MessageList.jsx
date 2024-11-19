import React from "react"
import Message from "./Message"
import '../Styles/styles.css'

const MessageList = ({ messages }) => {
    const MessageJSX = messages.map((message, index) => {
        return (
            <Message
                emisor={message.emisor}
                hora={message.hora}
                img={message.img}
                id={message.id}
                texto={message.texto}
                key={message.id}
                prevEmisor={index > 0 ? messages[index - 1].emisor : null}
            />
        )
    })

    return (
        <div className="message-list-box">
            <div className="message-list">
                {MessageJSX}
            </div>
        </div>
        
    )
}

export default MessageList
