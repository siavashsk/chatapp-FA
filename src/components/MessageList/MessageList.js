import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message'
import './MessageList.css'

function MessageList({ messages }) {
  const messageContainer = useRef(null)

  useEffect(() => {
    messageContainer.current.scrollTop = messageContainer.current.scrollHeight
  }, [messages])

  return (
    <div className="MessageList" ref={messageContainer}>
      {messages &&
        messages.map((message, i) => (
          <Message key={i + messages} {...message} />
        ))}
    </div>
  )
}

export default MessageList
