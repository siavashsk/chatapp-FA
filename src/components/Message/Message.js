import React from 'react';
import './Message.css';

function Message({ me, body }) {
  return <div className={`message ${me ? 'me' : 'other'}`}>{body}</div>;
}

export default Message;
