import React from "react";
import '../Styles/styles.css';
import contacts from "../Data/contacts";

const Message = ({ emisor, hora, texto, id, prevEmisor, usuarioActual }) => {

    const showEmisorInfo = emisor !== prevEmisor;

    return (
        <div className={`chat-message ${emisor === 'Tu' ? 'right' : 'left'}`}>
            {showEmisorInfo && emisor !== 'Tu' && (
                <div className="message-info">
                    {/* Si `userContact` existe, muestra su nombre, sino muestra `emisor` */}
                    <span className="emisor-name text">
                        {usuarioActual.nombre}
                    </span>,
                    <span className="time text"> {hora}</span>
                </div>
            )}
            {/* Mostrar la imagen del usuario solo si el emisor no es 'Tu' y el contacto existe */}
            {emisor !== 'Tu' && (
                <div className="box-img">
                    <img src={usuarioActual.img} alt={`${usuarioActual.nombre} Profile`} />
                </div>
            )}
            <div className={`emisor ${emisor === 'Tu' ? 'from-me' : 'from-user'}`}>
                <p className="text-msg text">{texto}</p>
            </div>
        </div>
    );
}

export default Message;




