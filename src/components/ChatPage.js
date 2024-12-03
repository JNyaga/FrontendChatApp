import React, { useEffect, useRef, useState } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");
  // Autoscroll feature
  const lastMessageRef = useRef(null);

  /**Fetching messages from api */
  useEffect(() => {
    function fetchMesages() {
      fetch("http://localhost:4000/api")
        .then((response) => response.json())
        .then((data) => setMessages(data.messages));
    }

    fetchMesages();
  }, []);

  useEffect(() => {
    // scroll to the bottom everytime message changes
    lastMessageRef.current?.scrollIntoView({ behavior: "auto" }, [messages]); //<-optinal chaining ?.
  });

  useEffect(() => {
    // Retrieve the userName from session storage
    const userName = sessionStorage.getItem("userName");
    if (userName) {
      // Emit a newUser event to the server with the userName and socketID
      socket.emit("newUser", { userName, socketID: socket.id });
    }

    // listen to typing event
    socket.on("typingResponse", (data) => setTypingStatus(data));

    // listen to message event(when a new message is sent all clients get it immediately)
    socket.on("messageResponse", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the event listener on component unmount
    return () => {
      socket.off("messageResponse");
      socket.off("typingResponse");
    };
  }, [socket]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          lastMessageRef={lastMessageRef}
          socket={socket}
          typingStatus={typingStatus}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
