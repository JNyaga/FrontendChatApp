import React, { useState } from "react";
import checkPageStatus from "../utils/functions";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleTyping = () => {
    socket.emit("typing", `${sessionStorage.getItem("userName")} is typing`);
  };

  const handleStopTyping = () => {
    setTimeout(() => {
      socket.emit("typing", "");
    }, 2000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    // trim() returns string with outer spaces removed
    if (message.trim() && sessionStorage.getItem("userName")) {
      const newMessage = {
        text: message,
        name: sessionStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      };
      socket.emit("message", newMessage);
      // console.log({ userName: sessionStorage.getItem('userName'), message });
      checkPageStatus(message, sessionStorage.getItem("userName"));
      setMessage("");
    }
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="message"
          placeholder="Write message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
          onKeyUp={handleStopTyping}
        />

        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
