import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const OrderChat = () => {
    return (
    <div className='order-chat'>
        <button className='btn-config'>
            <span className='text'>Chat recientes</span>
            <i><MdOutlineKeyboardArrowDown /></i>
        </button>
    </div>
    )
}

export default OrderChat