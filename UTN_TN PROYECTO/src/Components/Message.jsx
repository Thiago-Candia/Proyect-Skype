import React from "react"
import '../Styles/styles.css'


const Message = ({ emisor, hora, status, texto, img, id, prevEmisor }) => {
    const showEmisorInfo = emisor !== prevEmisor;

    return (
        <div className={`chat-message ${emisor === 'Tu' ? 'right' : 'left'}`}>
            {showEmisorInfo && (
                <div className="message-info">
                    <span className="emisor-name text">{emisor}</span>,
                    <span className="time text"> {hora}</span>
                </div>
                
            )}
            {/* Solo muestra la imagen si el mensaje es de otro usuario */}
            {emisor !== 'Tu' && (
                <div className="box-img">
                    <img src={img} alt="Profile" />
                </div>
            )}
            <div className={`emisor ${emisor === 'Tu' ? 'from-me' : 'from-user'}`}>
                <p className="text-msg text">{texto}</p>
            </div>
        </div>
    )
}

export default Message

