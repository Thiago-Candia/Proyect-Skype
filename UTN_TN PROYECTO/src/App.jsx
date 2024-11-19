import React from 'react'
import { Route, Routes} from 'react-router-dom'
import {Message, NewMessage, MessageList} from './Components'
import Chat from './Screens/Chat'
import Login from './Screens/Login'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/chat' element={<Chat/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
