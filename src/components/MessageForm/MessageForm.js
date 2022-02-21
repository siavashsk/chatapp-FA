import React, { useEffect, useRef, useState } from "react";
import "./MessageForm.css";

function MessageForm({ onMessageSend }) {
  const inputRef = useRef();
  const [input, setInput] = useState([]);

  async function getMessage() {
    try {
      const res = await fetch(`http://localhost:3001/message/${input}`);
      const data = await res.json();
      const msg = data.message;
      onMessageSend({me:false,body:msg})
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  function handleFormSubmit(event) {
    event.preventDefault();
    if(inputRef.current.value.trim().length !== 0) {
      onMessageSend({me:true, body:input})
      getMessage()
      setInput("");
    }
  }
  function handleChange(e) {
    const val = e.target.value
    setInput(val);
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="MessageForm"
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          ref={inputRef}
          value={input}
          data-testid="input-message"
          type="text"
          onChange={handleChange}
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
