import React, { useState } from 'react'
import '../Styles/styles.css'

const NewMessage = ({onSendMessage}) => {

const [inputValue, setInputValue] = useState('')

const handleChange = (event) => {
    setInputValue(event.target.value)
}


/* 
Primero verifica si el campo de texto no está vacío usando inputValue.replace() (elimina los espacios).
Si hay texto, llama a onSendMessage(inputValue) para enviar el mensaje al componente padre.
Luego, usa setInputValue('') para limpiar el input de texto. */
const handleSend = () => {
    if(inputValue.replace()){
        onSendMessage(inputValue)
        setInputValue('')
    }
}
    return (
        <div>
            <div className='new-message'>
                <div className='input-box'>
                    <button className='btn-emoji-smile'>
                        <i class="bi bi-emoji-smile"></i>
                    </button>
                    <input 
                        id=''
                        type="text" 
                        className='input-message'
                        value={inputValue}
                        placeholder='Escribe un mensaje' 
                        onChange={handleChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button className='btn-pen'>
                        <i class="bi bi-pen"></i>
                    </button>
                </div>
                <div className='btn-section'>
                    <button>
                        <i class="bi bi-file-earmark-plus"></i>
                    </button>
                    <button>
                        <i class="bi bi-mic"></i>
                    </button>
                    <button>
                        <i class="bi bi-person-lines-fill"></i>
                    </button>
                    <button>
                        <i class="bi bi-three-dots"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}



export default  NewMessage