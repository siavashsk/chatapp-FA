import React, { useState } from 'react'
import MessageList from '../components/MessageList/MessageList'
import MessageForm from '../components/MessageForm/MessageForm'
import './App.css'

function App() {
  const [message, setMessage] = useState([])

  function onMessageSend(input){
    setMessage(old => [...old, input])
  }
  console.log(message)

  return <div className="App">
    <MessageList messages={message}/>
    <MessageForm onMessageSend={onMessageSend}/>
  </div>
}

export default App
