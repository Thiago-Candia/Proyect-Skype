import React from 'react'
import '../Styles/styles.css'
import { PiChatTeardropTextFill } from "react-icons/pi";
import { BsCameraVideo } from "react-icons/bs";
import { RiContactsBook2Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";

const SelectSearch = () => {
    return (
    <div className='select-search'>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><PiChatTeardropTextFill /></i>
                <span className='text'>Chats</span>
            </button>
        </div>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><BsCameraVideo /></i>
                <span className='text'>Llamadas</span>
            </button>
        </div>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><RiContactsBook2Line /></i>
                <span className='text'>Contactos</span>
            </button>
        </div>
        <div className='select-search-box'>
            <button className='btn-config btn-selectSearch'>
                <i><IoNotificationsOutline /></i>
                <span className='text'>Notificaciones</span>
            </button>
        </div>
    </div>
    ) 
}

export default SelectSearch