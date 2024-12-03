import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = ({ messages, lastMessageRef, socket, typingStatus }) => {
  const navigate = useNavigate();
  // console.log(messages)
  const handleLeaveChat = () => {
    // Emit a disconnect event to the server
    socket.disconnect();
    sessionStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with friends</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>
      {/* this shows messages sent from you */}
      <div className="message__container">
        {messages.map((message) =>
          message.name === sessionStorage.getItem("userName") ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            // {/* This shows messages recved by you */ }
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        {/* This is triggeredd when a user is typing */}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>

        <div ref={lastMessageRef}></div>
      </div>
    </>
  );
};

export default ChatBody;
