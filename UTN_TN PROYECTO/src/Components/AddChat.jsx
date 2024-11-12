import React from 'react'
import '../Styles/styles.css'
import { MdVideoCameraFront } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AddChat = () => {
    return (
    <div className='add-chat'>
        <div className='add-chat-box'>
            <button className='btn-config btn-addChat'>
                <i><MdVideoCameraFront /></i>
                    <span className='text'>Reunirte ...</span>
                <i><MdOutlineKeyboardArrowDown /></i>
            </button>
            <button className='btn-config btn-addChat'>
                <i><BsPencilSquare /></i>
                    <span className='text'>Nuevo chat</span>
                <i><MdOutlineKeyboardArrowDown /></i>
            </button>
        </div>
    </div>
    )
}

export default AddChat