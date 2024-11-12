import React from 'react'
import '../Styles/Styles.css'
import { IoIosSearch } from "react-icons/io";
import { PiNumpad } from "react-icons/pi";

const SearchChat = () => {
return (
    <div className='search-chat-box'>
        <div className='inputBox-search-chat'>
            <form action="">
                <input 
                    type="text" 
                    className='input-search-chat'
                    placeholder='Contactos, grupos, mensajes'
                    />
                <i><IoIosSearch /></i>
            </form>
        </div>
        <div>
            <button className='btn-config btn-numpad'>
                <i><PiNumpad /></i>
            </button>
        </div>
    </div>
)
}

export default SearchChat